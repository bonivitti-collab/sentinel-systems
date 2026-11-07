import { useId, type MouseEvent } from 'react';
import { SentinelLogo } from '../components/SentinelLogo';
import {
  GUIA_CONSTRUCAO_ANNEXES,
  GUIA_CONSTRUCAO_AUDIENCE,
  GUIA_CONSTRUCAO_CHAPTER_NOTE,
  GUIA_CONSTRUCAO_CHAPTERS,
  GUIA_CONSTRUCAO_COVER_CAPTION,
  GUIA_CONSTRUCAO_EYEBROW,
  GUIA_CONSTRUCAO_FAQ,
  GUIA_CONSTRUCAO_FUTURE_BUTTON_NOTE,
  GUIA_CONSTRUCAO_INCLUDES,
  GUIA_CONSTRUCAO_INTRO,
  GUIA_CONSTRUCAO_JOURNEY_NOTE,
  GUIA_CONSTRUCAO_LEDE,
  GUIA_CONSTRUCAO_LIMITS,
  GUIA_CONSTRUCAO_NAME,
  GUIA_CONSTRUCAO_PENDING_NOTE,
  GUIA_CONSTRUCAO_PRICE_NOTE,
  GUIA_CONSTRUCAO_PURCHASE_NOTE,
  GUIA_CONSTRUCAO_SIGNATURE,
  GUIA_CONSTRUCAO_STEPS,
  GUIA_PAGE_LINKS,
  GUIA_SITE_EMAIL,
  GUIA_SITE_WHATSAPP_HREF,
  GUIA_SITE_WHATSAPP_LABEL,
} from '../data/guiaConstrucaoRegiaoDosLagos';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-800';

function scrollToHash(event: MouseEvent<HTMLAnchorElement>, hash: string) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
    return;
  }
  const id = hash.replace(/^#/, '');
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scroller = document.getElementById('main-content-scroll');
  if (scroller) {
    const top =
      target.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top +
      scroller.scrollTop -
      12;
    scroller.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  } else {
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
  if (target instanceof HTMLElement) {
    target.focus({ preventScroll: true });
  }
  const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
  window.history.replaceState({}, '', nextUrl);
}

function PurchaseControl({ describedBy }: { describedBy: string }) {
  return (
    <div className="flex flex-col items-stretch gap-3 sm:items-start">
      <button
        type="button"
        aria-disabled="true"
        aria-describedby={describedBy}
        data-purchase-state="disabled"
        onClick={(event) => {
          event.preventDefault();
        }}
        className={`inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-md border border-slate-300 bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 sm:w-auto ${focusRing}`}
      >
        Em preparação
      </button>
      <p id={describedBy} className="max-w-xl text-sm leading-relaxed text-slate-700">
        {GUIA_CONSTRUCAO_PURCHASE_NOTE}
      </p>
    </div>
  );
}

export function GuiaConstrucaoRegiaoDosLagosPage() {
  const heroNoteId = useId();
  const closingNoteId = useId();

  return (
    <div className="relative overflow-x-clip bg-slate-50 text-slate-900">
      <a
        href="#conteudo-do-guia"
        onClick={(event) => scrollToHash(event, '#conteudo-do-guia')}
        className="skip-link"
      >
        Ir para o conteúdo do guia
      </a>

      <main id="conteudo-do-guia" tabIndex={-1} className="mx-auto max-w-5xl scroll-mt-6 px-4 py-8 outline-none sm:px-6 sm:py-12 lg:px-8">
        <p
          role="status"
          className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950"
        >
          Página em preparação. A compra está desativada, mesmo com o conteúdo do guia já descrito.
        </p>

        <header className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-xs sm:p-8 lg:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_17.5rem]">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-800">
                {GUIA_CONSTRUCAO_EYEBROW}
              </p>
              <h1 className="mt-3 text-[1.75rem] font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                {GUIA_CONSTRUCAO_NAME}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                {GUIA_CONSTRUCAO_LEDE}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900 sm:text-base">
                {GUIA_CONSTRUCAO_SIGNATURE}
              </p>
            </div>

            <figure className="mx-auto w-full max-w-[17.5rem] min-w-0 lg:row-span-2">
              <div
                aria-hidden="true"
                className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white shadow-lg"
              >
                <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-cyan-800 via-cyan-950 to-transparent" />
                <div className="absolute inset-x-6 bottom-[34%] h-px bg-cyan-200/80" />
                <div className="absolute inset-x-10 bottom-[30%] h-px bg-cyan-100/40" />
                <div className="relative flex h-full flex-col justify-between p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
                    Composição ilustrativa
                  </p>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                      Guia digital
                    </p>
                    <p className="mt-3 text-[1.65rem] font-extrabold leading-[1.15] tracking-tight">
                      Guia para Construir na Região dos Lagos
                    </p>
                  </div>
                  <p className="text-[11px] font-medium leading-relaxed text-cyan-50">
                    Sentinel Systems
                    <span className="mt-1 block text-cyan-100/90">Produto educativo</span>
                  </p>
                </div>
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-600">
                {GUIA_CONSTRUCAO_COVER_CAPTION}
              </figcaption>
            </figure>

            <div className="min-w-0">
              <p className="max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
                Material educativo. Não substitui projeto, análise do terreno, aprovações locais nem acompanhamento de profissional habilitado.
              </p>
              <div className="mt-6">
                <PurchaseControl describedBy={heroNoteId} />
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                {GUIA_CONSTRUCAO_PRICE_NOTE}
              </p>
            </div>
          </div>
        </header>

        <nav aria-label="Nesta página" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {GUIA_PAGE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => scrollToHash(event, link.href)}
                  className={`inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-cyan-900 underline-offset-2 hover:bg-slate-100 ${focusRing}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 space-y-6">
          <section aria-labelledby="apresentacao" className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <h2 id="apresentacao" tabIndex={-1} className="scroll-mt-6 text-xl font-extrabold tracking-tight text-slate-950 outline-none sm:text-2xl">
              Apresentação
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700">
              {GUIA_CONSTRUCAO_INTRO}
            </p>
          </section>

          <section aria-labelledby="para-quem-e" className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <h2 id="para-quem-e" tabIndex={-1} className="scroll-mt-6 text-xl font-extrabold tracking-tight text-slate-950 outline-none sm:text-2xl">
              Para quem é
            </h2>
            <ul className="mt-4 space-y-3">
              {GUIA_CONSTRUCAO_AUDIENCE.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-800 sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="o-que-voce-recebe" className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <h2 id="o-que-voce-recebe" tabIndex={-1} className="scroll-mt-6 text-xl font-extrabold tracking-tight text-slate-950 outline-none sm:text-2xl">
              O que você recebe
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-800 sm:text-base">
              {GUIA_CONSTRUCAO_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-8 text-base font-bold text-slate-950">Capítulos</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-800 sm:text-base">
              {GUIA_CONSTRUCAO_CHAPTERS.map((chapter) => (
                <li key={chapter} className="pl-1">{chapter}</li>
              ))}
            </ol>
            <h3 className="mt-8 text-base font-bold text-slate-950">Anexos</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-800 sm:text-base">
              {GUIA_CONSTRUCAO_ANNEXES.map((annex) => (
                <li key={annex} className="pl-1">{annex}</li>
              ))}
            </ol>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">{GUIA_CONSTRUCAO_CHAPTER_NOTE}</p>
            <p className="mt-3 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
              {GUIA_CONSTRUCAO_PENDING_NOTE}
            </p>
          </section>

          <section aria-labelledby="como-acessar" className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <h2 id="como-acessar" tabIndex={-1} className="scroll-mt-6 text-xl font-extrabold tracking-tight text-slate-950 outline-none sm:text-2xl">
              Como acessar
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {GUIA_CONSTRUCAO_JOURNEY_NOTE}
            </p>
            <ol className="mt-5 space-y-4">
              {GUIA_CONSTRUCAO_STEPS.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="text-base font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="limites" className="rounded-3xl border border-slate-300 bg-slate-900 p-5 text-white sm:p-8">
            <h2 id="limites" tabIndex={-1} className="scroll-mt-6 text-xl font-extrabold tracking-tight outline-none sm:text-2xl">
              Importante
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-100 sm:text-base">
              {GUIA_CONSTRUCAO_LIMITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="perguntas" className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <h2 id="perguntas" tabIndex={-1} className="scroll-mt-6 text-xl font-extrabold tracking-tight text-slate-950 outline-none sm:text-2xl">
              Perguntas frequentes
            </h2>
            <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
              {GUIA_CONSTRUCAO_FAQ.map((item) => (
                <details key={item.question} className="group">
                  <summary className={`cursor-pointer list-none py-4 text-base font-semibold text-slate-950 marker:content-none [&::-webkit-details-marker]:hidden ${focusRing}`}>
                    <span className="flex items-start justify-between gap-4">
                      <span className="min-w-0">{item.question}</span>
                      <span aria-hidden="true" className="mt-0.5 text-sm font-bold text-cyan-800 group-open:hidden">
                        Abrir
                      </span>
                      <span aria-hidden="true" className="mt-0.5 hidden text-sm font-bold text-cyan-800 group-open:inline">
                        Fechar
                      </span>
                    </span>
                  </summary>
                  <p className="pb-4 text-sm leading-relaxed text-slate-700 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="compra" aria-labelledby="compra-titulo" tabIndex={-1} className="scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-5 outline-none sm:p-8">
            <h2 id="compra-titulo" className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
              Compra
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {GUIA_CONSTRUCAO_PRICE_NOTE} Nenhum checkout está ligado a esta versão.
            </p>
            <div className="mt-5">
              <PurchaseControl describedBy={closingNoteId} />
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
              {GUIA_CONSTRUCAO_FUTURE_BUTTON_NOTE}
            </p>
          </section>

          <section aria-labelledby="identificacao" className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <div className="mb-4">
              <SentinelLogo size="sm" variant="light" />
            </div>
            <h2 id="identificacao" tabIndex={-1} className="scroll-mt-6 text-xl font-extrabold tracking-tight text-slate-950 outline-none sm:text-2xl">
              Identificação
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {GUIA_CONSTRUCAO_SIGNATURE} O guia é um produto educativo da Sentinel Systems, distinto dos serviços de site e de automação deste mesmo site.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              O suporte deste material usa os canais já publicados da Sentinel Systems. O reembolso segue a configuração do produto na Kiwify, sem prazo publicado nesta página.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={GUIA_SITE_WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold text-cyan-900 underline underline-offset-2 ${focusRing}`}
                >
                  WhatsApp {GUIA_SITE_WHATSAPP_LABEL}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${GUIA_SITE_EMAIL}`}
                  className={`font-semibold text-cyan-900 underline underline-offset-2 ${focusRing}`}
                >
                  {GUIA_SITE_EMAIL}
                </a>
              </li>
              <li>
                <a href="/" className={`font-semibold text-cyan-900 underline underline-offset-2 ${focusRing}`}>
                  Voltar ao início do site
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default GuiaConstrucaoRegiaoDosLagosPage;
