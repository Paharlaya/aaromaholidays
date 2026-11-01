/**
 * Prefixes a site path with the deploy base, so links work both on a custom
 * domain ("/itineraries/") and on a GitHub Pages project URL
 * ("/aaromaholidays/itineraries/").
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string) {
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}
