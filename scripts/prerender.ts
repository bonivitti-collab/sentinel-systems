import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NICHES_LIST } from '../src/data/nichesData.ts';
import { AUTOMATION_LIST } from '../src/data/automationData.ts';
import { CITIES_LIST } from '../src/data/citiesData.ts';
import { GUIDES_LIST } from '../src/data/guidesData.ts';

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
        <span style="color:#38bdf8;font-weight:600;">Cidades Atendidas na Região dos Lagos:</span>
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
            name: 'Região dos Lagos e Brasil',
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

  // --- C. 8 PÁGINAS DE CIDADES DA REGIÃO DOS LAGOS (/cidades/:slug) ---
  for (const city of CITIES_LIST) {
    const pageUrl = `${BASE_URL}/cidades/${city.slug}`;
    const pageTitle = `Criação de Sites em ${city.name} (RJ) | Sentinel Systems`;
    const pageDesc = `${city.headline} Atendimento local em ${city.name} e Região dos Lagos. Sites rápidos, Google Meu Negócio e robôs de WhatsApp.`.slice(0, 160);

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
              name: 'Rio de Janeiro',
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

  console.log(`[SEO] Pré-renderização concluída! ${generatedCount} páginas estáticas geradas com sucesso.`);
}

// Execução principal
try {
  generateSitemap();
  prerenderPages();
} catch (error) {
  console.error('[SEO] Erro ao executar scripts de pré-renderização:', error);
  process.exit(1);
}
