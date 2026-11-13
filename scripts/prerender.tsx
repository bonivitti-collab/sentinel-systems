import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React, { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../src/App.tsx';
import { canonicalUrl, indexablePages, jsonLdFor, SITE, type PageMeta } from '../src/data/companySite.ts';
import { PUBLISHED_GUIDES } from '../src/data/publishedGuides.ts';
import { ferramentaOf, productByPath, productCanonical, productOgImageUrl } from '../src/data/productLandings.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function applyTemplate(template: string, page: PageMeta, body: string, robots: string): string {
  const canonical = page.path === '/404' ? `${SITE.url}/` : canonicalUrl(page.path);
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(page.title)}</title>`);
  html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeAttr(page.description)}$2`);
  html = html.replace(/(<meta\s+name="title"\s+content=")[^"]*(")/, `$1${escapeAttr(page.title)}$2`);
  html = html.replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/, `$1${escapeAttr(robots)}$2`);
  html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${canonical}$2`);
  html = html.replace(/(<link\s+rel="alternate"\s+hreflang="pt-BR"\s+href=")[^"]*(")/, `$1${canonical}$2`);
  html = html.replace(/(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/, `$1${canonical}$2`);
  html = html.replace(/(<meta\s+property="og:type"\s+content=")[^"]*(")/, `$1${page.ogType ?? 'website'}$2`);
  html = html.replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${canonical}$2`);
  html = html.replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${escapeAttr(page.title)}$2`);
  html = html.replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${escapeAttr(page.description)}$2`);
  html = html.replace(/(<meta\s+name="twitter:url"\s+content=")[^"]*(")/, `$1${canonical}$2`);
  html = html.replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${escapeAttr(page.title)}$2`);
  html = html.replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${escapeAttr(page.description)}$2`);
  if (page.ogImage) {
    html = html.replace(/(<meta\s+property="og:image"\s+content=")[^"]*(")/, `$1${escapeAttr(page.ogImage)}$2`);
    html = html.replace(/(<meta\s+name="twitter:image"\s+content=")[^"]*(")/, `$1${escapeAttr(page.ogImage)}$2`);
  }
  if (page.ogImageAlt) {
    html = html.replace(/(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/, `$1${escapeAttr(page.ogImageAlt)}$2`);
  }
  const json = JSON.stringify(jsonLdFor(page.path));
  html = html.replace(
    /<script type="application\/ld\+json" id="seo-jsonld">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="seo-jsonld">${json}</script>`,
  );
  html = html.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
  return html;
}

function assertGuideSources(): void {
  for (const guide of PUBLISHED_GUIDES) {
    const raw = fs.readFileSync(path.join(rootDir, 'content/guides', guide.file), 'utf8');
    const body = raw.replace(/^---\n[\s\S]*?\n---\n\n?/, '');
    if (body !== guide.markdown) {
      throw new Error(`Texto do guia divergiu de content/guides/${guide.file}`);
    }
  }
}

function writeSitemap(): void {
  const pages = indexablePages();
  if (pages.length !== 16) {
    throw new Error(`sitemap deveria listar 16 URLs e listou ${pages.length}`);
  }
  const urls = pages.map((page) => ({
    loc: canonicalUrl(page.path),
    lastmod: productByPath(page.path) ? '2026-11-13' : '2026-11-11',
    priority: page.path === '/' ? '1.0' : '0.8',
  }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  console.log(`[SEO] sitemap.xml com ${urls.length} URLs.`);
}

function prerenderPages(): void {
  const templatePath = path.join(distDir, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');
  if (template.includes('<div id="root">') === false) {
    throw new Error('dist/index.html sem <div id="root">');
  }
  const freshTemplate = template.replace(/<div id="root">[\s\S]*?<\/div>\s*<script type="module"/, '<div id="root"></div>\n    <script type="module"');

  for (const page of indexablePages()) {
    const body = renderToString(
      <StrictMode>
        <App url={page.path} />
      </StrictMode>,
    );
    if (!body.includes('<h1')) {
      throw new Error(`Prerender sem H1 em ${page.path}`);
    }
    const html = applyTemplate(freshTemplate, page, body, 'index, follow, max-image-preview:large');
    if (page.path === '/') {
      fs.writeFileSync(templatePath, html, 'utf8');
    } else {
      const dir = path.join(distDir, page.path.replace(/^\//, ''));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    }
    const product = productByPath(page.path);
    if (product) {
      assertProductPage(html, product);
    } else if (/"Product"|itemtype=["'][^"']*Product/.test(html)) {
      throw new Error(`Product em ${page.path}`);
    }
    const hasOffer = /"Offer"/.test(html);
    const offerPages = page.path === '/videos' || page.path === '/ferramentas' || page.path === '/sites' || Boolean(product);
    if (offerPages && !hasOffer) {
      throw new Error(`Offer ausente em ${page.path}`);
    }
    if (!offerPages && hasOffer) {
      throw new Error(`Offer em ${page.path}`);
    }
    if (page.path.startsWith('/guias')) {
      if (!html.includes(`<title>${page.title}</title>`)) throw new Error(`title em ${page.path}`);
      if (!html.includes(`rel="canonical" href="${canonicalUrl(page.path)}"`)) {
        throw new Error(`canonical em ${page.path}`);
      }
      if (html.includes('noindex')) throw new Error(`noindex em ${page.path}`);
      if (!html.includes('Baixe o guia em PDF')) throw new Error(`PDF em ${page.path}`);
      if (page.ogType === 'article' && (!html.includes('"Article"') || !html.includes('"FAQPage"') || !html.includes('"BreadcrumbList"'))) {
        throw new Error(`JSON-LD incompleto em ${page.path}`);
      }
    }
    console.log(`[SEO] HTML prerenderizado: ${page.path}`);
  }

  const notFound: PageMeta = {
    key: 'home',
    path: '/404',
    label: 'Página não encontrada',
    title: 'Página não encontrada | Sentinel Systems',
    description: 'Não encontramos essa página. Veja como a Sentinel ajuda o seu negócio a ser encontrado no Google.',
  };
  const notFoundBody = renderToString(
    <StrictMode>
      <App url="/404" />
    </StrictMode>,
  );
  fs.writeFileSync(
    path.join(distDir, '404.html'),
    applyTemplate(freshTemplate, notFound, notFoundBody, 'noindex, follow'),
    'utf8',
  );
  console.log('[SEO] 404.html prerenderizado com noindex.');
}

function assertProductPage(html: string, product: NonNullable<ReturnType<typeof productByPath>>): void {
  const item = ferramentaOf(product);
  const canonical = productCanonical(product);
  const image = productOgImageUrl(product);
  const required = [
    `<title>${escapeAttr(product.metaTitle)}</title>`,
    `rel="canonical" href="${canonical}"`,
    'property="og:type" content="website"',
    `property="og:url" content="${canonical}"`,
    `property="og:title" content="${escapeAttr(product.metaTitle)}"`,
    `property="og:description" content="${escapeAttr(product.metaDescription)}"`,
    `property="og:image" content="${image}"`,
    'property="og:image:width" content="1200"',
    'property="og:image:height" content="630"',
    `property="og:image:alt" content="${escapeAttr(product.ogAlt)}"`,
    'property="og:locale" content="pt_BR"',
    'name="twitter:card" content="summary_large_image"',
    `name="twitter:title" content="${escapeAttr(product.metaTitle)}"`,
    `name="twitter:description" content="${escapeAttr(product.metaDescription)}"`,
    `name="twitter:image" content="${image}"`,
    '"@type":"Product"',
    '"@type":"Offer"',
    `"price":"${item.priceAmount}"`,
    '"priceCurrency":"BRL"',
    `"url":"${item.href}"`,
    `Comprar por ${item.priceLabel}`,
    item.name,
  ];
  for (const snippet of required) {
    if (!html.includes(snippet)) throw new Error(`${product.path} sem ${snippet}`);
  }
  if (/engenheir/i.test(html)) throw new Error(`${product.path} cita engenheiro`);
  if (/vagas limitadas|últimas unidades|contador/i.test(html)) throw new Error(`${product.path} usa escassez`);
}

assertGuideSources();
writeSitemap();
prerenderPages();
