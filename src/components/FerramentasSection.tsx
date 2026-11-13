import { FERRAMENTAS } from '../data/ferramentas';
import { soundFx } from './SoundEffects';

export function FerramentasSection() {
  return (
    <section id="ferramentas" className="pb-16 scroll-mt-24" aria-labelledby="ferramentas-titulo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-4">
          <h1 id="ferramentas-titulo" className="text-xl font-bold text-slate-700 tracking-tight">
            Ferramentas
          </h1>
          <p className="mt-1 text-sm text-slate-500 leading-relaxed">
            Planilhas prontas para saber quanto cobrar e quanto a obra deve custar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl items-start">
          {FERRAMENTAS.map((item) => (
            <article
              key={item.id}
              className="min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/70 flex flex-col"
            >
              <a href={item.landingPath}>
                <img
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="block w-full max-w-full aspect-square object-cover"
                />
              </a>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.kind}</p>
                <h2 className="mt-1 text-base font-bold text-slate-900">
                  <a href={item.landingPath} className="hover:text-cyan-800">
                    {item.name}
                  </a>
                </h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.benefit}</p>
                <p className="mt-3 text-sm font-semibold text-slate-800">{item.priceLabel}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playUiClick()}
                  className="mt-3 inline-flex max-w-full items-center justify-center self-start px-4 py-2 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
                >
                  Comprar
                  <span className="sr-only"> {item.name}</span>
                </a>
              </div>
            </article>
          ))}
          <article className="min-w-0 self-start rounded-2xl border border-dashed border-slate-300 bg-white p-4">
            <h2 className="text-base font-bold text-slate-700">Precisa calcular outra coisa?</h2>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Conta no WhatsApp o que trava na conta do seu negócio. A gente vê junto o que faz sentido.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
