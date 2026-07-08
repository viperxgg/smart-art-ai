type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

// Escape characters that could break out of the <script> element or the JSON
// string context. JSON.stringify alone does NOT escape `<`, `>` or the U+2028/
// U+2029 line separators, so an unescaped `</script>` (or a stray separator) in
// any embedded value could inject markup. This keeps the JSON-LD payload inert
// regardless of what data flows into it.
const lineSeparators = new RegExp("[\\u2028\\u2029]", "g");

function serializeJsonLd(data: JsonLdProps["data"]) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(lineSeparators, (character) =>
      character.charCodeAt(0) === 0x2028 ? "\\u2028" : "\\u2029",
    );
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
