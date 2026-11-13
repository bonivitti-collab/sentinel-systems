import { canonicalUrl, jsonLdFor, pageByPath, SITE, type PageMeta } from '../data/companySite';

const DEFAULT_OG_IMAGE = `${SITE.url}/og-image.jpg`;
const DEFAULT_OG_ALT = 'Sentinel Systems, criação de site e presença no Google para pequenos negócios';

function setMeta(selector: string, attr: string, value: string) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attr, value);
}

export function applySeo(page: PageMeta) {
  const canonical = canonicalUrl(page.path);
  document.title = page.title;
  document.documentElement.lang = 'pt-BR';
  setMeta('meta[name="description"]', 'content', page.description);
  setMeta('meta[name="title"]', 'content', page.title);
  setMeta('link[rel="canonical"]', 'href', canonical);
  setMeta('meta[property="og:title"]', 'content', page.title);
  setMeta('meta[property="og:description"]', 'content', page.description);
  setMeta('meta[property="og:url"]', 'content', canonical);
  setMeta('meta[name="twitter:title"]', 'content', page.title);
  setMeta('meta[name="twitter:description"]', 'content', page.description);
  setMeta('meta[name="twitter:url"]', 'content', canonical);
  setMeta('meta[property="og:type"]', 'content', page.ogType ?? 'website');
  setMeta('meta[property="og:image"]', 'content', page.ogImage ?? DEFAULT_OG_IMAGE);
  setMeta('meta[property="og:image:alt"]', 'content', page.ogImageAlt ?? DEFAULT_OG_ALT);
  setMeta('meta[name="twitter:image"]', 'content', page.ogImage ?? DEFAULT_OG_IMAGE);
  const script = document.getElementById('seo-jsonld');
  if (script) script.textContent = JSON.stringify(jsonLdFor(page.path));
}

export function seoForPath(path: string): PageMeta | undefined {
  return pageByPath(path);
}
