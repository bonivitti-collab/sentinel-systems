import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DIAGNOSTICOS, type Diagnostico } from '../src/data/diagnosticos.ts';
import { SITE } from '../src/data/companySite.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const CSS = `    :root {
      --slate-950: #020617;
      --slate-900: #0f172a;
      --slate-800: #1e293b;
      --slate-700: #334155;
      --slate-600: #475569;
      --slate-500: #64748b;
      --slate-200: #e2e8f0;
      --slate-100: #f1f5f9;
      --slate-50: #f8fafc;
      --cyan-50: #ecfeff;
      --cyan-100: #cffafe;
      --cyan-200: #a5f3fc;
      --cyan-700: #0e7490;
      --cyan-800: #155e75;
      --cyan-900: #164e63;
      --emerald-500: #10b981;
      --emerald-600: #059669;
      --teal-600: #0d9488;
      --white: #ffffff;
      --radius: 1.5rem;
      --shadow: 0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
      background: var(--white);
      color: var(--slate-900);
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; }
    img { max-width: 100%; display: block; }
    .wrap { max-width: 40rem; margin: 0 auto; padding: 0 1.15rem; }
    header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(255,255,255,0.86);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(226, 232, 240, 0.7);
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 4rem;
      gap: 0.75rem;
    }
    .logo { height: 2rem; width: auto; }
    .header-tag {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--cyan-800);
      background: var(--cyan-50);
      border: 1px solid var(--cyan-200);
      padding: 0.28rem 0.65rem;
      border-radius: 999px;
      white-space: nowrap;
    }
    .hero {
      position: relative;
      overflow: hidden;
      padding: 1.75rem 0 1.5rem;
    }
    .hero::before {
      content: "";
      position: absolute;
      inset: 0 auto auto 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 28rem;
      height: 16rem;
      background: linear-gradient(to top right, rgba(34,211,238,0.18), rgba(56,189,248,0.10), rgba(99,102,241,0.12));
      filter: blur(48px);
      border-radius: 999px;
      pointer-events: none;
      z-index: -1;
    }
    .kicker {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      max-width: 100%;
      padding: 0.4rem 0.85rem;
      border-radius: 999px;
      background: rgba(236, 254, 255, 0.9);
      border: 1px solid rgba(165, 243, 252, 0.8);
      color: var(--cyan-900);
      font-size: 0.78rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .dot {
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 99px;
      background: var(--emerald-500);
      flex-shrink: 0;
    }
    h1 {
      font-size: 1.85rem;
      line-height: 1.2;
      letter-spacing: -0.03em;
      font-weight: 800;
      margin: 0 0 0.85rem;
    }
    h1 span {
      color: transparent;
      background: linear-gradient(90deg, #0891b2, #0284c7, #4f46e5);
      -webkit-background-clip: text;
      background-clip: text;
    }
    .lead {
      margin: 0;
      color: var(--slate-600);
      font-size: 1.02rem;
    }
    .note {
      margin: 0.85rem 0 0;
      font-size: 0.82rem;
      color: var(--slate-500);
    }
    section { padding: 0.35rem 0 1.6rem; }
    .section-kicker {
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--cyan-700);
      margin: 0 0 0.35rem;
    }
    h2 {
      font-size: 1.45rem;
      line-height: 1.25;
      letter-spacing: -0.03em;
      font-weight: 800;
      margin: 0 0 0.75rem;
    }
    .band {
      background: var(--slate-50);
      border-top: 1px solid var(--slate-200);
      border-bottom: 1px solid var(--slate-200);
      padding: 1.6rem 0;
      margin: 0.4rem 0 1.1rem;
    }
    .card {
      background: var(--white);
      border: 1px solid rgba(226, 232, 240, 0.95);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 1.15rem 1.15rem 1.2rem;
      margin: 0 0 0.8rem;
    }
    .card h3 {
      margin: 0 0 0.45rem;
      font-size: 1.05rem;
      font-weight: 800;
    }
    .card p, .card li { color: var(--slate-600); font-size: 0.95rem; }
    .card p { margin: 0 0 0.55rem; }
    .card p:last-child, .card ul:last-child { margin-bottom: 0; }
    .icon {
      width: 2.7rem;
      height: 2.7rem;
      border-radius: 1rem;
      background: var(--cyan-100);
      color: var(--cyan-700);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.8rem;
    }
    .icon svg { width: 1.2rem; height: 1.2rem; }
    ul.facts {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul.facts li {
      position: relative;
      padding: 0.35rem 0 0.35rem 1.15rem;
    }
    ul.facts li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.85rem;
      width: 0.42rem;
      height: 0.42rem;
      border-radius: 99px;
      background: var(--cyan-700);
    }
    .opp { display: flex; gap: 0.85rem; align-items: flex-start; }
    .num {
      flex-shrink: 0;
      width: 1.85rem;
      height: 1.85rem;
      border-radius: 999px;
      background: var(--cyan-100);
      color: var(--cyan-800);
      font-weight: 800;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.1rem;
    }
    .opp h3 { margin-top: 0.15rem; }
    .price-block {
      background: var(--slate-900);
      color: var(--white);
      border-radius: 1.6rem;
      padding: 1.4rem 1.25rem 1.35rem;
    }
    .price-block h2 { color: var(--white); margin-bottom: 0.35rem; }
    .price-block .section-kicker { color: #67e8f9; }
    .price {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin: 0.4rem 0 0.15rem;
    }
    .price small {
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0;
    }
    .alt {
      font-weight: 700;
      margin: 0 0 0.85rem;
      color: #e2e8f0;
    }
    .price-block p { margin: 0 0 0.7rem; color: #cbd5e1; font-size: 0.92rem; }
    .price-block p:last-child { margin-bottom: 0; }
    .cta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      width: 100%;
      padding: 0.95rem 1.1rem;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--emerald-600), var(--teal-600));
      color: var(--white);
      font-weight: 800;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      box-shadow: 0 8px 20px rgba(5, 150, 105, 0.25);
      margin-top: 0.4rem;
    }
    .cta svg { width: 1.15rem; height: 1.15rem; }
    .after-cta {
      text-align: center;
      color: var(--slate-500);
      font-size: 0.85rem;
      margin: 0.7rem 0 0;
    }
    footer {
      border-top: 1px solid var(--slate-200);
      padding: 1.4rem 0 2.2rem;
      text-align: center;
      color: var(--slate-500);
      font-size: 0.85rem;
    }
    footer strong { color: var(--slate-800); font-weight: 700; }
    footer p { margin: 0.2rem 0; }
  `;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function rich(value: string): string {
  return escapeHtml(value).replace(/&lt;strong&gt;/g, '<strong>').replace(/&lt;\/strong&gt;/g, '</strong>');
}

function ctaHref(diag: Diagnostico): string {
  const label = diag.ctaDe ?? `da ${diag.nome}`;
  const text = `Oi, Danillo! Vi o diagnóstico ${label} e quero conversar.`;
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;
}

function factList(items: string[]): string {
  return `<ul class="facts">\n${items.map((item) => `          <li>${rich(item)}</li>`).join('\n')}\n        </ul>`;
}

function sectionCard(title: string, icon: string, items: string[]): string {
  return `      <article class="card">
        <div class="icon" aria-hidden="true">
          ${icon}
        </div>
        <h3>${escapeHtml(title)}</h3>
        ${factList(items)}
      </article>`;
}

const ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
const ICON_IG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>';
const ICON_SITE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';

function render(diag: Diagnostico): string {
  const title = `Diagnóstico da ${diag.nome} · Sentinel Systems`;
  const cards: string[] = [];
  if (diag.googleFatos.length > 0) {
    cards.push(sectionCard('No Google', ICON_PIN, diag.googleFatos));
  }
  if (diag.instagramFatos && diag.instagramFatos.length > 0) {
    cards.push(sectionCard('No Instagram', ICON_IG, diag.instagramFatos));
  }
  if (diag.siteFatos && diag.siteFatos.length > 0) {
    cards.push(sectionCard('No site', ICON_SITE, diag.siteFatos));
  }

  const opps = diag.oportunidades
    .map((opp, index) => {
      const paras = opp.paragrafos.map((p) => `              <p>${escapeHtml(p)}</p>`).join('\n');
      return `        <article class="card">
          <div class="opp">
            <span class="num">${index + 1}</span>
            <div>
              <h3>${escapeHtml(opp.titulo)}</h3>
${paras}
            </div>
          </div>
        </article>`;
    })
    .join('\n\n');

  const resolveParas = diag.paginaResolve.map((p) => `        <p>${escapeHtml(p)}</p>`).join('\n');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="googlebot" content="noindex, nofollow" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(diag.descricao)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
  <style>
${CSS}
  </style>
</head>
<body>
  <header>
    <div class="wrap header-inner">
      <img class="logo" src="/logo-light.webp" alt="Sentinel Systems" width="160" height="32" />
      <span class="header-tag">Diagnóstico</span>
    </div>
  </header>

  <div class="hero">
    <div class="wrap">
      <p class="kicker"><span class="dot" aria-hidden="true"></span> Diagnóstico personalizado · sem custo</p>
      <h1>Diagnóstico da <span>${escapeHtml(diag.nome)}</span></h1>
      <p class="lead">${escapeHtml(diag.lead)}</p>
      <p class="note">${escapeHtml(diag.notaConsulta)}</p>
    </div>
  </div>

  <section>
    <div class="wrap">
      <p class="section-kicker">O que eu conferi</p>
      <h2>Do jeito que o cliente vê</h2>

${cards.join('\n\n')}
    </div>
  </section>

  <div class="band">
    <section>
      <div class="wrap">
        <p class="section-kicker">Três oportunidades</p>
        <h2>${escapeHtml(diag.oportunidadesTitulo)}</h2>

${opps}
      </div>
    </section>
  </div>

  <section>
    <div class="wrap">
      <p class="section-kicker">${escapeHtml(diag.paginaResolveKicker)}</p>
      <h2>${escapeHtml(diag.paginaResolveTitulo)}</h2>
      <article class="card">
${resolveParas}
      </article>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="price-block">
        <p class="section-kicker">Investimento</p>
        <h2>Quanto custa</h2>
        <p class="price">12x de R$&nbsp;50</p>
        <p class="alt">ou R$&nbsp;540 à vista, com 10% de desconto nesta primeira contratação.</p>
        <p>É o parcelamento da criação, não uma mensalidade para sempre. No parcelado, o primeiro pagamento é na contratação e os outros 11 são mensais. À vista, os R$&nbsp;540 são pagos por inteiro na contratação.</p>
        <p>Inclui um domínio .com.br, se o nome estiver disponível, e a hospedagem por 12 meses a partir da publicação. O domínio fica no nome de vocês.</p>
        <p>Depois de 12 meses, renovar é opcional: R$&nbsp;180 por ano, só domínio e hospedagem. Esse valor não tem o desconto de 10%. Não inclui manutenção e não renova sozinha.</p>
      </div>
      <a class="cta" href="${escapeHtml(ctaHref(diag))}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/></svg>
        Conversar no WhatsApp
      </a>
      <p class="after-cta">Se quiser, é só chamar. Sem compromisso.</p>
    </div>
  </section>

  <footer>
    <div class="wrap">
      <p><strong>Danillo Boni Vitti</strong> · Sentinel Systems</p>
      <p>sentinelsystems.com.br</p>
    </div>
  </footer>
</body>
</html>
`;
}

function assertPage(diag: Diagnostico, html: string): void {
  if (!html.includes('<meta name="robots" content="noindex, nofollow" />')) {
    throw new Error(`noindex ausente em ${diag.slug}`);
  }
  if (html.includes('Exemplo para aprovação') || html.includes('ainda não publicado')) {
    throw new Error(`kicker de exemplo ainda em ${diag.slug}`);
  }
  if (!html.includes(`Diagnóstico da <span>${escapeHtml(diag.nome)}</span>`)) {
    throw new Error(`título ausente em ${diag.slug}`);
  }
  if (!html.includes(`wa.me/${SITE.phoneWa}`)) {
    throw new Error(`WhatsApp da Sentinel ausente em ${diag.slug}`);
  }
  if (html.includes('99972-6069') || html.includes('5522999726069')) {
    throw new Error(`número antigo do WhatsApp em ${diag.slug}`);
  }
}

function buildDiagnosticos(): void {
  if (!fs.existsSync(distDir)) {
    throw new Error('dist/ não existe; rode o vite build antes deste script.');
  }
  if (DIAGNOSTICOS.length === 0) {
    throw new Error('Nenhum diagnóstico no arquivo de dados.');
  }
  const slugs = new Set<string>();
  for (const diag of DIAGNOSTICOS) {
    if (slugs.has(diag.slug)) {
      throw new Error(`slug repetido: ${diag.slug}`);
    }
    slugs.add(diag.slug);
    const html = render(diag);
    assertPage(diag, html);
    const dir = path.join(distDir, 'd', diag.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    console.log(`[diagnostico] /d/${diag.slug}`);
  }
  console.log(`[diagnostico] ${DIAGNOSTICOS.length} páginas geradas em dist/d/.`);
}

buildDiagnosticos();
