import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { soundFx } from '../components/SoundEffects';
import { ferramentaOf, type ProductLanding } from '../data/productLandings';

function buyClass(extra = ''): string {
  return `inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 ${extra}`;
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
    <div className="bg-[#f7f6f3] pb-28 text-slate-950">
      <main id="conteudo-produto">
        <section className="bg-white" aria-labelledby="produto-titulo">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-5 py-8 sm:px-8 sm:py-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-sm font-bold text-[#0e7490]">{item.kind}</p>
              <h1 id="produto-titulo" className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {item.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{item.benefit}</p>
              {product.coverLine ? <p className="mt-2 text-sm font-semibold text-slate-800">{product.coverLine}</p> : null}
              <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-500">Planilha pronta</p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight">{item.priceLabel}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                id="comprar"
                className={buyClass('mt-5 min-h-14 w-full sm:w-auto')}
              >
                {buyLabel}
              </a>
            </div>
            <img
              src={item.image}
              alt={item.alt}
              width={600}
              height={600}
              decoding="async"
              className="aspect-square w-full rounded-[28px] border border-slate-200 object-cover"
            />
          </div>
        </section>

        <section className="border-t border-slate-200" aria-labelledby="o-que-vem">
          <div className="mx-auto max-w-[1120px] px-5 py-10 sm:px-8 sm:py-14">
            <h2 id="o-que-vem" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              O que vem na planilha
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.includes.map((fact) => (
                <li key={fact.title} className="rounded-[20px] border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-extrabold">{fact.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{fact.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white" aria-labelledby="como-recebe">
          <div className="mx-auto max-w-[1120px] px-5 py-10 sm:px-8 sm:py-14">
            <h2 id="como-recebe" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Como você recebe
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{product.receive}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className={buyClass('mt-6 min-h-14 w-full sm:w-auto')}
            >
              {buyLabel}
            </a>
          </div>
        </section>

        <section className="border-t border-slate-200" aria-labelledby="faq-produto">
          <div className="mx-auto max-w-[1120px] px-5 py-10 sm:px-8 sm:py-14">
            <h2 id="faq-produto" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Perguntas frequentes
            </h2>
            <div className="mt-6 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
              {product.faq.map((entry) => (
                <details key={entry.q} className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-bold [&::-webkit-details-marker]:hidden">
                    {entry.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-4 text-sm leading-relaxed text-slate-600">{entry.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-[1120px] px-5 py-8 sm:px-8">
          <p className="text-sm font-semibold text-slate-700">Duas planilhas prontas, R$ 9,90 cada.</p>
        </div>
      </footer>

      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden ${showBuyBar ? 'translate-y-0' : 'pointer-events-none translate-y-full'}`}
      >
        <div className="mx-auto flex max-w-[1120px] items-center gap-3">
          <p className="text-lg font-extrabold">{item.priceLabel}</p>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className={buyClass('min-h-12 min-w-0 flex-1 px-3 text-center')}
          >
            {buyLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
