/**
 * Safely serializes data to a JSON-LD string, escaping `<` characters
 * to prevent premature script tag closing or XSS vulnerabilities.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
