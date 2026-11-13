import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { soundFx } from '../components/SoundEffects';
import { SentinelLogo } from '../components/SentinelLogo';
import { ferramentaOf, type ProductLanding } from '../data/productLandings';

const FERRAMENTAS_URL = 'https://sentinelsystems.com.br/ferramentas';
const HOME_URL = 'https://sentinelsystems.com.br/';

function buyClass(extra = ''): string {
  return `inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 ${extra}`;
}

export function ProductLandingPage({ product }: { product: ProductLanding }) {
  const item = ferramentaOf(product);
  const buyLabel = `Comprar por ${item.priceLabel}`;
  const [showBuyBar, setShowBuyBar] = useState(false);

  useEffect(() => {
    const target = document.getElementById('comprar');
    if (!target || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBuyBar(!entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href={HOME_URL} className="min-w-0">
            <SentinelLogo size="sm" />
          </a>
          <a href={FERRAMENTAS_URL} className="shrink-0 text-sm font-bold text-cyan-800 hover:text-cyan-950">
            Ferramentas
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="relative overflow-hidden" aria-labelledby="produto-titulo">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[420px] w-full max-w-3xl -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-400/20 via-sky-400/10 to-indigo-400/15 blur-3xl" />
          </div>
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-14 lg:gap-y-8 lg:py-16">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-cyan-50/90 px-3 py-1.5 text-xs font-semibold text-cyan-900">
                <span className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden="true" />
                {item.kind}
              </p>
              <h1 id="produto-titulo" className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                {item.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{item.benefit}</p>
              <p className="mt-2 text-sm font-semibold text-slate-800">{product.coverLine}</p>
            </div>
            <figure className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <img
                src={item.image}
                alt={item.alt}
                width={600}
                height={600}
                decoding="async"
                className="aspect-[5/4] w-full rounded-3xl border border-slate-200 object-cover object-[center_68%] shadow-sm sm:aspect-square sm:object-center"
              />
            </figure>
            <div className="lg:col-start-1 lg:row-start-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Planilha pronta</p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900">{item.priceLabel}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                id="comprar"
                className={buyClass('mt-5 w-full sm:w-auto')}
              >
                {buyLabel}
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50" aria-labelledby="o-que-vem">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 id="o-que-vem" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              O que vem na planilha
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.includes.map((fact) => (
                <li key={fact.title} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-extrabold text-slate-900">{fact.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{fact.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200" aria-labelledby="como-recebe">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 id="como-recebe" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Como você recebe
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{product.receive}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className={buyClass('mt-6 w-full sm:w-auto')}
            >
              {buyLabel}
            </a>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50" aria-labelledby="faq-produto">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 id="faq-produto" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Perguntas frequentes
            </h2>
            <div className="mt-6 max-w-3xl space-y-3">
              {product.faq.map((entry, index) => (
                <details
                  key={entry.q}
                  open={index === 0}
                  className="group rounded-2xl border border-slate-200 bg-white shadow-xs open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none px-4 py-4 text-sm font-bold leading-snug text-slate-900 sm:px-5 sm:text-base [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      <span>{entry.q}</span>
                      <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700 transition-transform group-open:rotate-180" />
                    </span>
                  </summary>
                  <p className="px-4 pb-4 text-sm leading-relaxed text-slate-600 sm:px-5">{entry.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white pb-28 lg:pb-12">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <a href={HOME_URL}>
            <SentinelLogo size="sm" />
          </a>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
            Planilhas prontas, à parte do serviço.
          </p>
          <a href={FERRAMENTAS_URL} className="mt-4 inline-flex text-sm font-bold text-cyan-800 hover:text-cyan-950">
            Ferramentas
          </a>
        </div>
      </footer>

      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur transition-transform lg:hidden ${showBuyBar ? 'translate-y-0' : 'pointer-events-none translate-y-full'}`}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <p className="text-lg font-extrabold text-slate-900">{item.priceLabel}</p>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className={buyClass('min-w-0 flex-1 px-3 text-center')}
          >
            {buyLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
