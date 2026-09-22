# Wave 1 deterministic creatives

Local drafts; publication and each asset require founder review. Original merchant
packshots are embedded without cropping, retouching or generative modification.
Their response-byte SHA-256 values live in the canonical product records. File
extensions match the response format; renaming does not alter the bytes.

Run from the website checkout after a production build:

```text
node tools/creatives/render-wave1.cjs <absolute-path-to-playwright-module> <private-evidence-directory>
```

Requires local Microsoft Edge, Playwright and the installed Sharp dependency.
The builder reads the canonical records, comparison records, `wave1-copy.json`
and `card.html`; `wave1-scenarios.json` contains concise, reviewed extracts from
each record's fit/skip/first-step fields. It writes the standalone HTML and WebP A/B/C
assets. Font binaries are the site's Latin Playfair Display and Inter fonts;
their SIL Open Font Licenses are included in `fonts/`.

The renderer checks headline wrapping, loaded images, source hashes, canvas
overflow and file-size limits. Its image-height metric measures the full
unchanged source image box, including any retailer-supplied white padding. It
does not prove a foreground-object pixel bounding box or substitute for the
390-pixel contact-sheet review.

D illustrations are separately generated, never product depictions; their full
prompts and provenance belong in the private evidence manifest. Existing D
provenance is preserved in the manifest and contact sheet. Use `--review-06`
to regenerate only B/C while verifying and preserving A's bytes, headline and
HTML source. B uses at least 45% of the canvas for its packshot box and spans
at least 85% vertically. C uses three reader scenarios, not specification tiles.
No generated context is used as OG or Product schema imagery. E callouts are
intentionally omitted where there is no necessary, clearly visible detail.
