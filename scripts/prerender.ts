import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NICHES_LIST } from '../src/data/nichesData.ts';
import { AUTOMATION_LIST } from '../src/data/automationData.ts';
import { CITIES_LIST } from '../src/data/citiesData.ts';
import { GUIDES_LIST } from '../src/data/guidesData.ts';
import {
  GUIA_CONSTRUCAO_AUDIENCE,
  GUIA_CONSTRUCAO_BYLINE,
  GUIA_CONSTRUCAO_CHAPTER_NOTE,
  GUIA_CONSTRUCAO_CHAPTERS,
  GUIA_CONSTRUCAO_CONTRACT_NOTE,
  GUIA_CONSTRUCAO_COVER_ALT,
  GUIA_CONSTRUCAO_COVER_CAPTION,
  GUIA_CONSTRUCAO_COVER_HEIGHT,
  GUIA_CONSTRUCAO_COVER_SRC,
  GUIA_CONSTRUCAO_COVER_WIDTH,
  GUIA_CONSTRUCAO_EDITION,
  GUIA_CONSTRUCAO_DESCRIPTION,
  GUIA_CONSTRUCAO_EYEBROW,
  GUIA_CONSTRUCAO_FAQ,
  GUIA_CONSTRUCAO_FILES,
  GUIA_CONSTRUCAO_FILES_NOTE,
  GUIA_CONSTRUCAO_FUTURE_BUTTON_NOTE,
  GUIA_CONSTRUCAO_INTRO,
  GUIA_CONSTRUCAO_JOURNEY_NOTE,
  GUIA_CONSTRUCAO_LEDE,
  GUIA_CONSTRUCAO_LIMITS,
  GUIA_CONSTRUCAO_NAME,
  GUIA_CONSTRUCAO_PATH,
  GUIA_CONSTRUCAO_REVIEW_NOTE,
  GUIA_CONSTRUCAO_SPREADSHEET_NOTE,
  GUIA_CONSTRUCAO_PRICE_NOTE,
  GUIA_CONSTRUCAO_PURCHASE_NOTE,
  GUIA_CONSTRUCAO_ROBOTS,
  GUIA_CONSTRUCAO_STEPS,
  GUIA_CONSTRUCAO_TITLE,
  GUIA_CONSTRUCAO_URL,
  GUIA_SITE_EMAIL,
  GUIA_SITE_WHATSAPP_HREF,
  GUIA_SITE_WHATSAPP_LABEL,
  guiaConstrucaoJsonLd,
} from '../src/data/guiaConstrucaoRegiaoDosLagos.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

const BASE_URL = 'https://sentinelsystems.com.br';
const PHONE_NUMBER = '5522999726069';
const PHONE_DISPLAY = '(22) 99972-6069';
const CONTACT_EMAIL = 'sentinelsystemsai@gmail.com';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDateISO(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

function whatsappUrl(message: string): string {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Rodapé de SEO compartilhado com teia de links internos
function buildSharedFooterHtml(): string {
  return `
    <footer style="background:#090d16;color:#94a3b8;padding:2.5rem 1.5rem;border-top:1px solid rgba(255,255,255,0.08);font-size:0.8125rem;text-align:center;font-family:system-ui,-apple-system,sans-serif;">
      <p style="margin:0 0 1rem 0;color:#cbd5e1;font-weight:600;">
        Sentinel Systems &bull; Soluções Digitais, Sites Rápidos &amp; Robôs de WhatsApp
      </p>
      <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.05);display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:0.75rem;font-size:0.75rem;">
        <span style="color:#38bdf8;font-weight:600;">Capitais & Polos Atendidos no Brasil:</span>
        ${CITIES_LIST.map((c) => `<a href="/cidades/${c.slug}" style="color:#06b6d4;text-decoration:none;font-weight:500;">${escapeHtml(c.name)}</a>`).join('<span style="color:rgba(255,255,255,0.2);">&bull;</span>')}
      </div>
      <p style="margin-top:1.25rem;color:#64748b;font-size:0.75rem;">
        WhatsApp: ${PHONE_DISPLAY} &bull; E-mail: ${CONTACT_EMAIL} &bull; &copy; ${new Date().getFullYear()} Sentinel Systems. Todos os direitos reservados.
      </p>
    </footer>
  `;
}

// 1. Gera o sitemap.xml com Home (1) + 10 Nichos + 6 Automações + 8 Cidades + 12 Guias = 37 URLs
function generateSitemap(): void {
  const today = formatDateISO();
  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
    {
      loc: `${BASE_URL}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      loc: `${BASE_URL}/sites`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.95',
    },
    {
      loc: `${BASE_URL}/automacao`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.95',
    },
    {
      loc: `${BASE_URL}/quem-somos`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.85',
    },
    {
      loc: `${BASE_URL}/blog`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      loc: `${BASE_URL}/contato`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.85',
    },
    ...NICHES_LIST.map((niche) => ({
      loc: `${BASE_URL}/solucoes/${niche.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    ...AUTOMATION_LIST.map((auto) => ({
      loc: `${BASE_URL}/automacao/${auto.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    ...CITIES_LIST.map((city) => ({
      loc: `${BASE_URL}/cidades/${city.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    ...GUIDES_LIST.map((guide) => ({
      loc: `${BASE_URL}/guias/${guide.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');

  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  }
  console.log(`[SEO] sitemap.xml gerado com sucesso (${urls.length} URLs registradas).`);
}

// 2. Pré-renderização das páginas estáticas
function prerenderPages(): void {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`[ERRO] dist/index.html não encontrado! Execute 'vite build' antes de pré-renderizar.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');
  const today = formatDateISO();
  let generatedCount = 0;

  // Helper para substituir tags de cabeçalho
  function customizeHtml(
    original: string,
    meta: {
      title: string;
      description: string;
      canonical: string;
      jsonLd: object;
      bodyHtml: string;
      robots?: string;
    }
  ): string {
    let html = original;

    // Title
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
    html = html.replace(
      /<meta\s+name="title"\s+content=".*?"\s*\/?>/i,
      `<meta name="title" content="${escapeHtml(meta.title)}" />`
    );

    // Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`
    );

    // Canonical Link
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${meta.canonical}" />`
    );

    if (meta.robots) {
      html = html.replace(
        /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
        `<meta name="robots" content="${escapeHtml(meta.robots)}" />`
      );
    }

    // OpenGraph
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${meta.canonical}" />`
    );

    // Twitter Card
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:url" content="${meta.canonical}" />`
    );

    // JSON-LD Structured Data
    html = html.replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">\n${JSON.stringify(meta.jsonLd, null, 2)}\n    </script>`
    );

    // Injeção do corpo semântico estático dentro da div#root para leitura imediata do Googlebot
    html = html.replace(
      /<div id="root"><\/div>/i,
      `<div id="root">${meta.bodyHtml}</div>`
    );

    return html;
  }

  // --- A. 10 PÁGINAS DE NICHOS COMERCIAIS (/solucoes/:slug) ---
  for (const niche of NICHES_LIST) {
    const pageUrl = `${BASE_URL}/solucoes/${niche.slug}`;
    const pageTitle = `${niche.title} | Sentinel Systems`;
    const pageDesc = `${niche.headline} ${niche.description}`.slice(0, 160);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: niche.title,
          description: niche.description,
          provider: {
            '@type': 'ProfessionalService',
            name: 'Sentinel Systems',
            url: BASE_URL,
            telephone: `+${PHONE_NUMBER}`,
            email: CONTACT_EMAIL,
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Brasil',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Soluções', item: `${BASE_URL}/#diretorio-seo` },
            { '@type': 'ListItem', position: 3, name: niche.shortTitle, item: pageUrl },
          ],
        },
      ],
    };

    const bodyHtml = `
      <div style="background:#0b0f19;color:#f8fafc;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#090d16;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;">
          <a href="/" style="color:#38bdf8;text-decoration:none;font-weight:700;font-size:0.9375rem;">&larr; Voltar para Sentinel Systems</a>
          <a href="${whatsappUrl(niche.whatsappMessage)}" style="background:#10b981;color:#ffffff;padding:0.5rem 1rem;border-radius:9999px;font-weight:700;text-decoration:none;font-size:0.875rem;">Pedir Orçamento no WhatsApp</a>
        </header>

        <main style="max-width:900px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;">
          <nav aria-label="Breadcrumb" style="margin-bottom:2rem;font-size:0.75rem;color:#94a3b8;">
            <a href="/" style="color:#94a3b8;text-decoration:none;">Início</a> /
            <a href="/#diretorio-seo" style="color:#94a3b8;text-decoration:none;">Soluções</a> /
            <span style="color:#38bdf8;">${escapeHtml(niche.shortTitle)}</span>
          </nav>

          <article>
            <span style="color:#06b6d4;font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Solução Especializada por Nicho</span>
            <h1 style="font-size:2.5rem;font-weight:800;color:#ffffff;margin:0.75rem 0 1.25rem 0;line-height:1.2;">${escapeHtml(niche.title)}</h1>
            <p style="font-size:1.25rem;color:#cbd5e1;margin-bottom:1.5rem;font-weight:500;">${escapeHtml(niche.headline)}</p>
            <p style="font-size:1rem;color:#94a3b8;margin-bottom:2.5rem;">${escapeHtml(niche.description)}</p>

            <h2 style="font-size:1.5rem;font-weight:700;color:#38bdf8;margin:2rem 0 1rem 0;">Por que seu negócio precisa dessa solução:</h2>
            <ul style="padding-left:1.5rem;color:#cbd5e1;margin-bottom:2.5rem;">
              ${niche.benefits.map((b) => `<li style="margin-bottom:0.75rem;">${escapeHtml(b)}</li>`).join('')}
            </ul>

            <h2 style="font-size:1.5rem;font-weight:700;color:#38bdf8;margin:2rem 0 1rem 0;">Recursos e Estrutura Inclusos:</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-bottom:3rem;">
              ${niche.features.map((f) => `
                <div style="background:#131b2e;padding:1.25rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.06);">
                  <h3 style="color:#ffffff;font-size:1rem;font-weight:700;margin:0 0 0.5rem 0;">${escapeHtml(f.title)}</h3>
                  <p style="color:#94a3b8;font-size:0.875rem;margin:0;">${escapeHtml(f.desc)}</p>
                </div>
              `).join('')}
            </div>

            <div style="background:linear-gradient(135deg,#0c4a6e,#082f49);padding:2rem;border-radius:1rem;text-align:center;border:1px solid #0284c7;">
              <h3 style="color:#ffffff;font-size:1.5rem;margin:0 0 0.75rem 0;font-weight:800;">Pronto para transformar o digital da sua empresa?</h3>
              <p style="color:#bae6fd;margin:0 0 1.5rem 0;">Fale agora com a Sentinel Systems e receba um orçamento sem compromisso.</p>
              <a href="${whatsappUrl(niche.whatsappMessage)}" style="background:#10b981;color:#ffffff;padding:0.875rem 2rem;border-radius:9999px;font-weight:700;text-decoration:none;display:inline-block;font-size:1rem;">Conversar no WhatsApp Oficial &rarr;</a>
            </div>
          </article>
        </main>

        ${buildSharedFooterHtml()}
      </div>
    `;

    const outHtml = customizeHtml(baseHtml, {
      title: pageTitle,
      description: pageDesc,
      canonical: pageUrl,
      jsonLd,
      bodyHtml,
    });

    const targetDir = path.join(distDir, 'solucoes', niche.slug);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), outHtml, 'utf8');
    generatedCount++;
  }

  // --- B. 6 PÁGINAS DE AUTOMAÇÃO E ROBÔS DE WHATSAPP (/automacao/:slug) ---
  for (const auto of AUTOMATION_LIST) {
    const pageUrl = `${BASE_URL}/automacao/${auto.slug}`;
    const pageTitle = `${auto.title} | Sentinel Systems`;
    const pageDesc = `${auto.headline} ${auto.description}`.slice(0, 160);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${pageUrl}#automation`,
          name: auto.title,
          description: auto.description,
          provider: {
            '@type': 'ProfessionalService',
            name: 'Sentinel Systems',
            url: BASE_URL,
            telephone: `+${PHONE_NUMBER}`,
            email: CONTACT_EMAIL,
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Automação', item: `${BASE_URL}/#diretorio-seo` },
            { '@type': 'ListItem', position: 3, name: auto.shortTitle, item: pageUrl },
          ],
        },
      ],
    };

    const bodyHtml = `
      <div style="background:#0b0f19;color:#f8fafc;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#090d16;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;">
          <a href="/" style="color:#38bdf8;text-decoration:none;font-weight:700;font-size:0.9375rem;">&larr; Voltar para Sentinel Systems</a>
          <a href="${whatsappUrl(auto.whatsappMessage)}" style="background:#10b981;color:#ffffff;padding:0.5rem 1rem;border-radius:9999px;font-weight:700;text-decoration:none;font-size:0.875rem;">Ver Demonstração do Robô</a>
        </header>

        <main style="max-width:900px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;">
          <nav aria-label="Breadcrumb" style="margin-bottom:2rem;font-size:0.75rem;color:#94a3b8;">
            <a href="/" style="color:#94a3b8;text-decoration:none;">Início</a> /
            <a href="/#diretorio-seo" style="color:#94a3b8;text-decoration:none;">Automação</a> /
            <span style="color:#10b981;">${escapeHtml(auto.shortTitle)}</span>
          </nav>

          <article>
            <span style="color:#10b981;font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Robô de Atendimento &amp; WhatsApp 24h</span>
            <h1 style="font-size:2.5rem;font-weight:800;color:#ffffff;margin:0.75rem 0 1.25rem 0;line-height:1.2;">${escapeHtml(auto.title)}</h1>
            <p style="font-size:1.25rem;color:#cbd5e1;margin-bottom:1.5rem;font-weight:500;">${escapeHtml(auto.headline)}</p>
            <p style="font-size:1rem;color:#94a3b8;margin-bottom:2.5rem;">${escapeHtml(auto.description)}</p>

            <h2 style="font-size:1.5rem;font-weight:700;color:#10b981;margin:2rem 0 1rem 0;">Vantagens para seu negócio:</h2>
            <ul style="padding-left:1.5rem;color:#cbd5e1;margin-bottom:2.5rem;">
              ${auto.benefits.map((b) => `<li style="margin-bottom:0.75rem;">${escapeHtml(b)}</li>`).join('')}
            </ul>

            <h2 style="font-size:1.5rem;font-weight:700;color:#10b981;margin:2rem 0 1rem 0;">Como funciona o fluxo do robô:</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-bottom:3rem;">
              ${auto.features.map((f) => `
                <div style="background:#131b2e;padding:1.25rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#10b981;font-size:0.75rem;font-weight:800;text-transform:uppercase;">Passo ${escapeHtml(f.step)}</span>
                  <h3 style="color:#ffffff;font-size:1rem;font-weight:700;margin:0.25rem 0 0.5rem 0;">${escapeHtml(f.title)}</h3>
                  <p style="color:#94a3b8;font-size:0.875rem;margin:0;">${escapeHtml(f.desc)}</p>
                </div>
              `).join('')}
            </div>

            <div style="background:linear-gradient(135deg,#064e3b,#022c22);padding:2rem;border-radius:1rem;text-align:center;border:1px solid #059669;">
              <h3 style="color:#ffffff;font-size:1.5rem;margin:0 0 0.75rem 0;font-weight:800;">Quer testar esse robô na prática?</h3>
              <p style="color:#a7f3d0;margin:0 0 1.5rem 0;">Veja uma simulação de atendimento funcionando agora no seu WhatsApp.</p>
              <a href="${whatsappUrl(auto.whatsappMessage)}" style="background:#10b981;color:#ffffff;padding:0.875rem 2rem;border-radius:9999px;font-weight:700;text-decoration:none;display:inline-block;font-size:1rem;">Testar Robô no WhatsApp &rarr;</a>
            </div>
          </article>
        </main>

        ${buildSharedFooterHtml()}
      </div>
    `;

    const outHtml = customizeHtml(baseHtml, {
      title: pageTitle,
      description: pageDesc,
      canonical: pageUrl,
      jsonLd,
      bodyHtml,
    });

    const targetDir = path.join(distDir, 'automacao', auto.slug);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), outHtml, 'utf8');
    generatedCount++;
  }

  // --- C. 8 PÁGINAS DE CAPITAIS E POLOS DO BRASIL (/cidades/:slug) ---
  for (const city of CITIES_LIST) {
    const pageUrl = `${BASE_URL}/cidades/${city.slug}`;
    const pageTitle = `Criação de Sites em ${city.name} (${city.region.split(' - ')[1] || 'Brasil'}) | Sentinel Systems`;
    const pageDesc = `${city.headline} Atendimento para empresas em ${city.name} e todo o Brasil. Sites rápidos, Google Meu Negócio e robôs de WhatsApp.`.slice(0, 160);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${pageUrl}#business`,
          name: `Sentinel Systems - Criação de Sites em ${city.name}`,
          description: city.description,
          url: pageUrl,
          telephone: `+${PHONE_NUMBER}`,
          email: CONTACT_EMAIL,
          areaServed: {
            '@type': 'City',
            name: city.name,
            containedInPlace: {
              '@type': 'AdministrativeArea',
              name: city.region.split(' - ')[0] || 'Brasil',
            },
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Cidades', item: `${BASE_URL}/#diretorio-seo` },
            { '@type': 'ListItem', position: 3, name: city.name, item: pageUrl },
          ],
        },
      ],
    };

    const bodyHtml = `
      <div style="background:#0b0f19;color:#f8fafc;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#090d16;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;">
          <a href="/" style="color:#38bdf8;text-decoration:none;font-weight:700;font-size:0.9375rem;">&larr; Voltar para Sentinel Systems</a>
          <a href="${whatsappUrl(city.whatsappMessage)}" style="background:#10b981;color:#ffffff;padding:0.5rem 1rem;border-radius:9999px;font-weight:700;text-decoration:none;font-size:0.875rem;">Falar com Especialista em ${escapeHtml(city.name)}</a>
        </header>

        <main style="max-width:900px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7;">
          <nav aria-label="Breadcrumb" style="margin-bottom:2rem;font-size:0.75rem;color:#94a3b8;">
            <a href="/" style="color:#94a3b8;text-decoration:none;">Início</a> /
            <a href="/#diretorio-seo" style="color:#94a3b8;text-decoration:none;">Cidades</a> /
            <span style="color:#38bdf8;">${escapeHtml(city.name)}</span>
          </nav>

          <article>
            <span style="color:#38bdf8;font-size:0.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Presença Digital &bull; ${escapeHtml(city.region)}</span>
            <h1 style="font-size:2.5rem;font-weight:800;color:#ffffff;margin:0.75rem 0 1.25rem 0;line-height:1.2;">Criação de Sites e Automação em ${escapeHtml(city.name)}</h1>
            <p style="font-size:1.25rem;color:#cbd5e1;margin-bottom:1.5rem;font-weight:500;">${escapeHtml(city.headline)}</p>
            <p style="font-size:1rem;color:#94a3b8;margin-bottom:2rem;">${escapeHtml(city.description)}</p>

            <h2 style="font-size:1.5rem;font-weight:700;color:#38bdf8;margin:2rem 0 1rem 0;">Foco Comercial em ${escapeHtml(city.name)}:</h2>
            <p style="color:#cbd5e1;background:#131b2e;padding:1.25rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.06);margin-bottom:2rem;">
              <strong>Demanda Regional:</strong> ${escapeHtml(city.commercialFocus)}
            </p>

            <h2 style="font-size:1.5rem;font-weight:700;color:#38bdf8;margin:2rem 0 1rem 0;">Termos mais buscados pelos seus clientes no Google:</h2>
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:2.5rem;">
              ${city.localKeywords.map((kw) => `
                <span style="background:rgba(56,189,248,0.1);color:#38bdf8;border:1px solid rgba(56,189,248,0.25);padding:0.4rem 0.8rem;border-radius:9999px;font-size:0.8125rem;font-weight:600;">
                  ${escapeHtml(kw)}
                </span>
              `).join('')}
            </div>

            <div style="background:linear-gradient(135deg,#0c4a6e,#082f49);padding:2rem;border-radius:1rem;text-align:center;border:1px solid #0284c7;">
              <h3 style="color:#ffffff;font-size:1.5rem;margin:0 0 0.75rem 0;font-weight:800;">Sua empresa já aparece nas buscas em ${escapeHtml(city.name)}?</h3>
              <p style="color:#bae6fd;margin:0 0 1.5rem 0;">Solicite agora um Raio-X gratuito da sua presença digital na cidade.</p>
              <a href="${whatsappUrl(city.whatsappMessage)}" style="background:#10b981;color:#ffffff;padding:0.875rem 2rem;border-radius:9999px;font-weight:700;text-decoration:none;display:inline-block;font-size:1rem;">Pedir Diagnóstico no WhatsApp &rarr;</a>
            </div>
          </article>
        </main>

        ${buildSharedFooterHtml()}
      </div>
    `;

    const outHtml = customizeHtml(baseHtml, {
      title: pageTitle,
      description: pageDesc,
      canonical: pageUrl,
      jsonLd,
      bodyHtml,
    });

    const targetDir = path.join(distDir, 'cidades', city.slug);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), outHtml, 'utf8');
    generatedCount++;
  }

  // --- D. 12 PÁGINAS DE GUIAS E ARTIGOS (/guias/:slug) ---
  for (const guide of GUIDES_LIST) {
    const pageUrl = `${BASE_URL}/guias/${guide.slug}`;
    const pageTitle = `${guide.title} | Sentinel Systems`;
    const pageDesc = `${guide.headline} ${guide.excerpt}`.slice(0, 160);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${pageUrl}#article`,
          headline: guide.title,
          description: guide.excerpt,
          datePublished: guide.publishedDate,
          dateModified: today,
          author: {
            '@type': 'Organization',
            name: 'Sentinel Systems',
            url: BASE_URL,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Sentinel Systems',
            url: BASE_URL,
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Guias', item: `${BASE_URL}/#diretorio-seo` },
            { '@type': 'ListItem', position: 3, name: guide.title, item: pageUrl },
          ],
        },
      ],
    };

    const bodyHtml = `
      <div style="background:#0b0f19;color:#f8fafc;min-height:100vh;font-family:system-ui,-apple-system,sans-serif;">
        <header style="background:#090d16;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;">
          <a href="/" style="color:#38bdf8;text-decoration:none;font-weight:700;font-size:0.9375rem;">&larr; Voltar para Sentinel Systems</a>
          <a href="${whatsappUrl(`Olá! Li o guia "${guide.title}" no site da Sentinel e gostaria de tirar uma dúvida.`)}" style="background:#10b981;color:#ffffff;padding:0.5rem 1rem;border-radius:9999px;font-weight:700;text-decoration:none;font-size:0.875rem;">Tirar Dúvida no WhatsApp</a>
        </header>

        <main style="max-width:820px;margin:0 auto;padding:3rem 1.5rem;line-height:1.75;">
          <nav aria-label="Breadcrumb" style="margin-bottom:2rem;font-size:0.75rem;color:#94a3b8;">
            <a href="/" style="color:#94a3b8;text-decoration:none;">Início</a> /
            <a href="/#diretorio-seo" style="color:#94a3b8;text-decoration:none;">Guias</a> /
            <span style="color:#a78bfa;">Guia Prático</span>
          </nav>

          <article>
            <div style="display:flex;align-items:center;gap:1rem;color:#94a3b8;font-size:0.8125rem;margin-bottom:1rem;">
              <span>Publicado em: ${guide.publishedDate}</span> &bull; <span>${guide.readTime}</span>
            </div>
            <h1 style="font-size:2.25rem;font-weight:800;color:#ffffff;margin:0 0 1.25rem 0;line-height:1.25;">${escapeHtml(guide.title)}</h1>
            <p style="font-size:1.1875rem;color:#cbd5e1;margin-bottom:2rem;font-weight:500;">${escapeHtml(guide.headline)}</p>

            <div style="font-size:1.0625rem;color:#94a3b8;">
              ${guide.content.map((p) => `<p style="margin-bottom:1.5rem;line-height:1.8;">${escapeHtml(p)}</p>`).join('')}
            </div>

            <div style="background:linear-gradient(135deg,#312e81,#1e1b4b);padding:2rem;border-radius:1rem;text-align:center;border:1px solid #4f46e5;margin-top:3rem;">
              <h3 style="color:#ffffff;font-size:1.5rem;margin:0 0 0.75rem 0;font-weight:800;">Gostou deste conteúdo?</h3>
              <p style="color:#c7d2fe;margin:0 0 1.5rem 0;">Coloque a sua empresa na 1ª página do Google com a infraestrutura da Sentinel Systems.</p>
              <a href="${whatsappUrl(`Olá! Li o guia "${guide.title}" e quero aplicar no meu negócio com a Sentinel.`)}" style="background:#10b981;color:#ffffff;padding:0.875rem 2rem;border-radius:9999px;font-weight:700;text-decoration:none;display:inline-block;font-size:1rem;">Falar com a Sentinel no WhatsApp &rarr;</a>
            </div>
          </article>
        </main>

        ${buildSharedFooterHtml()}
      </div>
    `;

    const outHtml = customizeHtml(baseHtml, {
      title: pageTitle,
      description: pageDesc,
      canonical: pageUrl,
      jsonLd,
      bodyHtml,
    });

    const targetDir = path.join(distDir, 'guias', guide.slug);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), outHtml, 'utf8');
    generatedCount++;
  }

  // --- E. GUIA EDUCATIVO EM PREPARAÇÃO (fora do sitemap e da home) ---
  const guiaBodyHtml = `
    <main style="max-width:760px;margin:0 auto;padding:2rem 1.25rem 3rem;font-family:system-ui,-apple-system,sans-serif;color:#0f172a;line-height:1.6;">
      <p style="background:#fffbeb;border:1px solid #fcd34d;border-radius:1rem;padding:0.875rem 1rem;color:#451a03;">Página em preparação. A edição 2026 está descrita aqui, mas a compra segue desativada. O checkout ainda não foi cadastrado e a entrega ainda não foi verificada.</p>
      <p style="margin-top:1.5rem;color:#155e75;font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">${escapeHtml(GUIA_CONSTRUCAO_EYEBROW)}</p>
      <h1 style="font-size:2rem;line-height:1.2;margin:0.5rem 0;">${escapeHtml(GUIA_CONSTRUCAO_NAME)} <span style="display:block;font-size:1.125rem;color:#475569;">${escapeHtml(GUIA_CONSTRUCAO_EDITION)}</span></h1>
      <p>${escapeHtml(GUIA_CONSTRUCAO_LEDE)}</p>
      <p><strong>${escapeHtml(GUIA_CONSTRUCAO_BYLINE)}</strong></p>
      <p>Material educativo. Não substitui projeto, análise do terreno, exigências locais nem acompanhamento de profissional habilitado.</p>
      <p><button type="button" disabled>Em preparação</button></p>
      <p>${escapeHtml(GUIA_CONSTRUCAO_PURCHASE_NOTE)}</p>
      <p>${escapeHtml(GUIA_CONSTRUCAO_PRICE_NOTE)}</p>
      <figure style="max-width:280px;margin:1.5rem 0;">
        <img src="${GUIA_CONSTRUCAO_COVER_SRC}" alt="${escapeHtml(GUIA_CONSTRUCAO_COVER_ALT)}" width="${GUIA_CONSTRUCAO_COVER_WIDTH}" height="${GUIA_CONSTRUCAO_COVER_HEIGHT}" style="width:100%;height:auto;border-radius:1rem;border:1px solid #e2e8f0;" />
        <figcaption style="font-size:0.8rem;color:#475569;">${escapeHtml(GUIA_CONSTRUCAO_COVER_CAPTION)}</figcaption>
      </figure>
      <h2>Apresentação</h2>
      <p>${escapeHtml(GUIA_CONSTRUCAO_INTRO)}</p>
      <h2>Para quem é</h2>
      <ul>${GUIA_CONSTRUCAO_AUDIENCE.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      <h2>O que você recebe</h2>
      <ol>${GUIA_CONSTRUCAO_FILES.map((item) => `<li><strong>${escapeHtml(item.name)}</strong> — ${escapeHtml(item.detail)}</li>`).join('')}</ol>
      <p>${escapeHtml(GUIA_CONSTRUCAO_FILES_NOTE)}</p>
      <p>${escapeHtml(GUIA_CONSTRUCAO_SPREADSHEET_NOTE)}</p>
      <p>${escapeHtml(GUIA_CONSTRUCAO_CONTRACT_NOTE)}</p>
      <p>${escapeHtml(GUIA_CONSTRUCAO_REVIEW_NOTE)}</p>
      <h3>Capítulos do guia</h3>
      <ol>${GUIA_CONSTRUCAO_CHAPTERS.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol>
      <p>${escapeHtml(GUIA_CONSTRUCAO_CHAPTER_NOTE)}</p>
      <h2>Como acessar</h2>
      <p>${escapeHtml(GUIA_CONSTRUCAO_JOURNEY_NOTE)}</p>
      <ol>${GUIA_CONSTRUCAO_STEPS.map((step) => `<li><strong>${escapeHtml(step.title)}.</strong> ${escapeHtml(step.text)}</li>`).join('')}</ol>
      <h2>Importante</h2>
      <ul>${GUIA_CONSTRUCAO_LIMITS.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      <h2>Perguntas frequentes</h2>
      ${GUIA_CONSTRUCAO_FAQ.map((item) => `<h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p>`).join('')}
      <h2>Compra</h2>
      <p>${escapeHtml(GUIA_CONSTRUCAO_PRICE_NOTE)} Nenhum checkout está ligado a esta versão.</p>
      <p><button type="button" disabled>Em preparação</button></p>
      <p>${escapeHtml(GUIA_CONSTRUCAO_FUTURE_BUTTON_NOTE)}</p>
      <h2>Identificação</h2>
      <p>${escapeHtml(GUIA_CONSTRUCAO_BYLINE)} Este guia é distinto dos serviços de site e de automação deste mesmo site.</p>
      <p>O suporte deste material usa os canais já publicados da Sentinel Systems. O reembolso segue a configuração do produto na Kiwify, sem prazo publicado nesta página.</p>
      <p><a href="${GUIA_SITE_WHATSAPP_HREF}">WhatsApp ${escapeHtml(GUIA_SITE_WHATSAPP_LABEL)}</a></p>
      <p><a href="mailto:${GUIA_SITE_EMAIL}">${escapeHtml(GUIA_SITE_EMAIL)}</a></p>
      <p><a href="/">Voltar ao início do site</a></p>
    </main>
  `;

  const guiaHtml = customizeHtml(baseHtml, {
    title: GUIA_CONSTRUCAO_TITLE,
    description: GUIA_CONSTRUCAO_DESCRIPTION,
    canonical: GUIA_CONSTRUCAO_URL,
    jsonLd: guiaConstrucaoJsonLd,
    bodyHtml: guiaBodyHtml,
    robots: GUIA_CONSTRUCAO_ROBOTS,
  });

  const guiaDir = path.join(distDir, 'produtos', 'guia-construcao-regiao-dos-lagos');
  fs.mkdirSync(guiaDir, { recursive: true });
  fs.writeFileSync(path.join(guiaDir, 'index.html'), guiaHtml, 'utf8');
  generatedCount++;

  console.log(`[SEO] Pré-renderização concluída! ${generatedCount} páginas estáticas geradas com sucesso.`);

  // --- E. PRÉ-RENDERIZAÇÃO DA HOME (dist/index.html) COM TEIA COMPLETA ---
  const homeSemanticHtml = `
    <header style="background:#ffffff;padding:1.25rem 1.5rem;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;font-family:system-ui,-apple-system,sans-serif;">
      <a href="/" style="font-weight:900;color:#0f172a;text-decoration:none;font-size:1.25rem;letter-spacing:-0.5px;">SENTINEL SYSTEMS</a>
      <a href="${whatsappUrl('Olá! Vim pelo site da Sentinel Systems e gostaria de mais informações.')}" style="background:#10b981;color:#ffffff;padding:0.5rem 1.25rem;border-radius:9999px;font-weight:700;text-decoration:none;font-size:0.875rem;">WhatsApp ${PHONE_DISPLAY}</a>
    </header>

    <main style="font-family:system-ui,-apple-system,sans-serif;color:#0f172a;">
      <section style="max-width:960px;margin:0 auto;padding:4rem 1.5rem 3rem 1.5rem;text-align:center;">
        <span style="color:#0284c7;font-weight:700;font-size:0.875rem;text-transform:uppercase;letter-spacing:1px;">Criação de Sites Profissionais &bull; Robôs de WhatsApp &bull; Google Meu Negócio</span>
        <h1 style="font-size:2.75rem;font-weight:900;line-height:1.2;margin:1rem 0;color:#0f172a;">
          Fazemos o seu comércio vender mais todo dia na internet
        </h1>
        <p style="font-size:1.25rem;color:#475569;line-height:1.6;margin-bottom:2rem;max-width:800px;margin-left:auto;margin-right:auto;">
          Sites rápidos de alta performance, atendimento automático 24 horas no WhatsApp e presença garantida no Google para pequenas e médias empresas.
        </p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a href="${whatsappUrl('Olá! Gostaria de um orçamento para criar meu site profissional.')}" style="background:#0284c7;color:#ffffff;padding:0.875rem 1.75rem;border-radius:9999px;font-weight:700;text-decoration:none;">Falar com Especialista</a>
          <a href="#diretorio-seo" style="background:#f1f5f9;color:#334155;padding:0.875rem 1.75rem;border-radius:9999px;font-weight:700;text-decoration:none;">Ver Todas as 36 Soluções</a>
        </div>
      </section>

      <!-- Case Real Verificado -->
      <section style="max-width:960px;margin:0 auto 3rem auto;padding:2rem;background:#0f172a;color:#ffffff;border-radius:1rem;border:1px solid rgba(56,189,248,0.3);text-align:left;">
        <span style="color:#38bdf8;font-size:0.75rem;font-weight:700;text-transform:uppercase;">Case Real Desenvolvido pela Sentinel</span>
        <h3 style="font-size:1.375rem;font-weight:800;margin:0.5rem 0;color:#ffffff;">Grupo Vitti &bull; Engenharia &amp; Construção Costeira</h3>
        <p style="color:#94a3b8;font-size:0.875rem;line-height:1.6;margin-bottom:1rem;">
          Portal de alta autoridade com 39 páginas indexadas no Google, simulador de orçamentos e captação contínua de clientes no Google:
          <a href="https://vitticonstrucoes.com.br" target="_blank" rel="noopener noreferrer" style="color:#38bdf8;font-weight:700;text-decoration:underline;">vitticonstrucoes.com.br &rarr;</a>
        </p>
      </section>

      <!-- Seção do Diretório de SEO para os crawlers -->
      <section id="diretorio-seo" style="background:#090d16;color:#f8fafc;padding:4rem 1.5rem;border-top:1px solid #1e293b;">
        <div style="max-width:1200px;margin:0 auto;">
          <h2 style="font-size:2rem;font-weight:800;color:#ffffff;text-align:center;margin-bottom:0.5rem;">
            Ecossistema de Soluções &bull; Sentinel Systems
          </h2>
          <p style="color:#94a3b8;text-align:center;margin-bottom:3rem;max-width:700px;margin-left:auto;margin-right:auto;">
            Páginas dedicadas por nicho de atuação, robôs especializados de WhatsApp, cidades com atendimento prioritário e guias estratégicos de presença digital.
          </p>

          <h3 style="color:#38bdf8;font-size:1.25rem;margin:2rem 0 1rem 0;">1. Sites por Nicho Comercial</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-bottom:2.5rem;">
            ${NICHES_LIST.map((n) => `
              <div style="background:#131b2e;padding:1.25rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.06);">
                <a href="/solucoes/${n.slug}" style="color:#ffffff;text-decoration:none;font-weight:700;font-size:1rem;display:block;margin-bottom:0.5rem;">${escapeHtml(n.title)} &rarr;</a>
                <p style="color:#94a3b8;font-size:0.8125rem;margin:0;">${escapeHtml(n.headline)}</p>
              </div>
            `).join('')}
          </div>

          <h3 style="color:#10b981;font-size:1.25rem;margin:2rem 0 1rem 0;">2. Robôs de WhatsApp 24h</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-bottom:2.5rem;">
            ${AUTOMATION_LIST.map((a) => `
              <div style="background:#131b2e;padding:1.25rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.06);">
                <a href="/automacao/${a.slug}" style="color:#ffffff;text-decoration:none;font-weight:700;font-size:1rem;display:block;margin-bottom:0.5rem;">${escapeHtml(a.title)} &rarr;</a>
                <p style="color:#94a3b8;font-size:0.8125rem;margin:0;">${escapeHtml(a.headline)}</p>
              </div>
            `).join('')}
          </div>

          <h3 style="color:#38bdf8;font-size:1.25rem;margin:2rem 0 1rem 0;">3. Principais Capitais & Polos Atendidos (Cobertura Nacional)</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;margin-bottom:2.5rem;">
            ${CITIES_LIST.map((c) => `
              <div style="background:#131b2e;padding:1rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.06);">
                <a href="/cidades/${c.slug}" style="color:#38bdf8;text-decoration:none;font-weight:700;font-size:0.9375rem;display:block;margin-bottom:0.25rem;">Criação de Sites em ${escapeHtml(c.name)} &rarr;</a>
                <p style="color:#94a3b8;font-size:0.75rem;margin:0;">${escapeHtml(c.commercialFocus)}</p>
              </div>
            `).join('')}
          </div>

          <h3 style="color:#a78bfa;font-size:1.25rem;margin:2rem 0 1rem 0;">4. Guias Práticos & Conhecimento Estratégico</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;">
            ${GUIDES_LIST.map((g) => `
              <div style="background:#131b2e;padding:1.25rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.06);">
                <a href="/guias/${g.slug}" style="color:#ffffff;text-decoration:none;font-weight:700;font-size:0.9375rem;display:block;margin-bottom:0.5rem;">${escapeHtml(g.title)} &rarr;</a>
                <p style="color:#94a3b8;font-size:0.8125rem;margin:0;">${escapeHtml(g.excerpt)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>

    ${buildSharedFooterHtml()}
  `;

  const homePrerenderedHtml = baseHtml.replace(
    /<div id="root"><\/div>/i,
    `<div id="root">${homeSemanticHtml}</div>`
  );
  fs.writeFileSync(templatePath, homePrerenderedHtml, 'utf8');
  console.log('[SEO] dist/index.html (Home) pré-renderizado com snapshot semântico e teia de links completa!');
}

function assertGuiaPreparation(): void {
  const pagePath = path.join(distDir, 'produtos', 'guia-construcao-regiao-dos-lagos', 'index.html');
  const html = fs.readFileSync(pagePath, 'utf8');
  const sitemap = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8');
  const home = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const publicSitemap = fs.readFileSync(path.join(publicDir, 'sitemap.xml'), 'utf8');

  if (!html.includes('name="robots" content="noindex, nofollow"')) {
    throw new Error('A página do guia precisa responder noindex, nofollow.');
  }
  if (!html.includes(GUIA_CONSTRUCAO_NAME) || !html.includes('Em preparação')) {
    throw new Error('A página do guia não contém o nome ou o estado de preparação.');
  }
  if (html.includes(GUIA_CONSTRUCAO_PATH) && sitemap.includes(GUIA_CONSTRUCAO_PATH)) {
    throw new Error('O sitemap não pode publicar a rota em preparação.');
  }
  if (sitemap.includes('guia-construcao-regiao-dos-lagos') || publicSitemap.includes('guia-construcao-regiao-dos-lagos')) {
    throw new Error('O sitemap não pode publicar a rota em preparação.');
  }
  if (home.includes('guia-construcao-regiao-dos-lagos')) {
    throw new Error('A home pré-renderizada não pode apontar para o guia em preparação.');
  }

  const banned: RegExp[] = [
    /R\$/,
    /"@type": "Offer"/,
    /priceCurrency/,
    /vitticonstrucoes/i,
    /grupo vitti/i,
    /vitti constru/i,
    /vitti engenh/i,
    /certificado/i,
    /aprovado/i,
    /depoimento/i,
    /bônus/i,
    /bonus/i,
    /href="[^"]*\.pdf/i,
    /href="[^"]*\.docx/i,
    /href="[^"]*\.xlsx/i,
    /href="[^"]*kiwify/i,
    /href="[^"]*checkout/i,
  ];
  if (!html.includes('Danillo Boni Vitti')) {
    throw new Error('A página do guia precisa identificar a autoria.');
  }
  if (!html.includes(GUIA_CONSTRUCAO_COVER_SRC)) {
    throw new Error('A página do guia precisa usar a capa autorizada.');
  }
  const coverOnDisk = path.join(distDir, 'produtos', 'guia-construcao-regiao-dos-lagos', 'capa.png');
  if (!fs.existsSync(coverOnDisk)) {
    throw new Error('A capa autorizada não foi publicada no build.');
  }
  const productFiles = fs.readdirSync(path.dirname(coverOnDisk));
  if (productFiles.some((name) => /\.(pdf|docx|xlsx)$/i.test(name))) {
    throw new Error('Arquivo pago não pode entrar na pasta pública do guia.');
  }
  for (const pattern of banned) {
    if (pattern.test(html)) {
      throw new Error(`A página do guia contém conteúdo fora da preparação: ${pattern}`);
    }
  }
}

// Execução principal
try {
  generateSitemap();
  prerenderPages();
  assertGuiaPreparation();
} catch (error) {
  console.error('[SEO] Erro ao executar scripts de pré-renderização:', error);
  process.exit(1);
}
