/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node test runner. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const routes = [
  { route: '/', file: '.next/server/app/index.html' },
  { route: '/halsa/tapo-c520ws', file: '.next/server/app/halsa/tapo-c520ws.html' },
  {
    route: '/skonhet/varmeborste-eller-varmluftsborste',
    file: '.next/server/app/skonhet/varmeborste-eller-varmluftsborste.html',
  },
];

for (const { route, file } of routes) {
  const absolute = path.resolve(file);
  assert.ok(
    fs.existsSync(absolute),
    `Missing built server HTML for ${route}. Run NEXT_PUBLIC_GA_ID=G-TEST000000 npm run build first.`,
  );
  const html = fs.readFileSync(absolute, 'utf8');
  assert.doesNotMatch(
    html,
    /<script[^>]+src=["'][^"']*googletagmanager\.com/i,
    `${route} server HTML must not load Google Tag Manager before consent`,
  );
}

console.log(`PASS: ${routes.length} server-rendered routes contain no googletagmanager.com script src.`);
