#!/usr/bin/env node
// Structured-data guard for the quality floor.
//
// Crawls every route in the sitemap of a running build and validates the
// JSON-LD it emits. The rule that matters most: Google rejects a Product
// node that carries none of `offers`, `review` or `aggregateRating`. We
// never emit offers (no prices on the site), so every Product must carry
// Elin's editorial review or an aggregate of approved on-site reviews.
//
// Usage:  npm run build && PORT=3111 npm run start &
//         node scripts/check-structured-data.mjs [baseUrl]
// Exits non-zero when any problem is found.

const base = process.argv[2] ?? "http://localhost:3111";
const CONCURRENCY = 10;

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [
  ...new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
      match[1].replace(/^https?:\/\/[^/]+/, ""),
    ),
  ),
];

if (urls.length === 0) {
  console.error("No sitemap URLs found — is the server running?");
  process.exit(1);
}

const problems = [];
const stats = { product: 0, itemList: 0, faq: 0, breadcrumb: 0, pages: 0 };
const pagesWithProduct = new Set();

function walk(node, url) {
  if (Array.isArray(node)) {
    node.forEach((child) => walk(child, url));
    return;
  }
  if (!node || typeof node !== "object") return;

  switch (node["@type"]) {
    case "Product": {
      stats.product += 1;
      pagesWithProduct.add(url);
      if (!node.review && !node.aggregateRating && !node.offers) {
        problems.push(
          `${url} :: Product "${node.name}" has none of review/aggregateRating/offers`,
        );
      }
      if (!node.name) problems.push(`${url} :: Product missing name`);
      if (!node.image) problems.push(`${url} :: Product "${node.name}" missing image`);
      const review = Array.isArray(node.review) ? node.review[0] : node.review;
      if (review) {
        if (!review.author) problems.push(`${url} :: Review missing author`);
        if (!review.reviewRating?.ratingValue)
          problems.push(`${url} :: Review missing ratingValue`);
        if (
          review.reviewRating?.bestRating != null &&
          Number(review.reviewRating.ratingValue) >
            Number(review.reviewRating.bestRating)
        )
          problems.push(`${url} :: Review ratingValue above bestRating`);
      }
      break;
    }
    case "ItemList": {
      stats.itemList += 1;
      if (!Array.isArray(node.itemListElement) || node.itemListElement.length === 0)
        problems.push(`${url} :: ItemList with no items`);
      break;
    }
    case "FAQPage": {
      stats.faq += 1;
      if (!node.mainEntity?.length)
        problems.push(`${url} :: FAQPage with no questions`);
      break;
    }
    case "BreadcrumbList": {
      stats.breadcrumb += 1;
      break;
    }
    default:
      break;
  }

  for (const value of Object.values(node)) walk(value, url);
}

const queue = [...urls];

async function worker() {
  while (queue.length > 0) {
    const url = queue.shift();
    let html;
    try {
      const response = await fetch(base + url, {
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) {
        problems.push(`${url} :: HTTP ${response.status}`);
        continue;
      }
      html = await response.text();
    } catch (error) {
      problems.push(`${url} :: fetch failed – ${error.message}`);
      continue;
    }
    stats.pages += 1;
    for (const match of html.matchAll(
      /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    )) {
      // JsonLd escapes <, > and & before embedding — undo that to parse.
      const raw = match[1]
        .replace(/\\u003c/g, "<")
        .replace(/\\u003e/g, ">")
        .replace(/\\u0026/g, "&");
      try {
        walk(JSON.parse(raw), url);
      } catch (error) {
        problems.push(`${url} :: JSON-LD parse error – ${error.message}`);
      }
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

console.log(`Pages checked: ${stats.pages}/${urls.length}`);
console.log(
  `Product ${stats.product} (on ${pagesWithProduct.size} pages) · ItemList ${stats.itemList} · FAQPage ${stats.faq} · BreadcrumbList ${stats.breadcrumb}`,
);

if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach((problem) => console.error(`  ✗ ${problem}`));
  process.exit(1);
}

console.log("No structured-data problems found.");
