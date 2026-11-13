import { soundFx } from './SoundEffects';

const FERRAMENTAS = [
  {
    name: 'Valor Hora Real',
    benefit: 'Saiba quanto cobrar pela sua hora, como freelancer ou MEI.',
    price: 'R$ 9,90',
    href: 'https://pay.kiwify.com.br/2ydXBfN',
    image: '/ferramentas/valor-hora-real.webp',
    alt: 'Capa da planilha Valor Hora Real, para calcular o preço da hora de freelancer e MEI',
  },
  {
    name: 'CotaCasa',
    benefit: 'O controle da sua obra na sua mão: saiba quanto ela deve custar antes de fechar com alguém.',
    price: 'R$ 9,90',
    href: 'https://pay.kiwify.com.br/1Nf3zMM',
    image: '/ferramentas/cotacasa.webp',
    alt: 'Capa do CotaCasa, planilha para estimar e acompanhar o custo da obra',
  },
] as const;

export function FerramentasSection() {
  return (
    <section id="ferramentas" className="pb-16 scroll-mt-24" aria-labelledby="ferramentas-titulo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-4">
          <h1 id="ferramentas-titulo" className="text-xl font-bold text-slate-700 tracking-tight">
            Ferramentas
          </h1>
          <p className="mt-1 text-sm text-slate-500 leading-relaxed">Duas planilhas prontas, por R$ 9,90 cada.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {FERRAMENTAS.map((item) => (
            <article
              key={item.name}
              className="min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/70"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
                className="block w-full max-w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h2 className="text-base font-bold text-slate-900">{item.name}</h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.benefit}</p>
                <p className="mt-3 text-sm font-semibold text-slate-800">{item.price}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playUiClick()}
                  className="mt-3 inline-flex max-w-full items-center justify-center px-4 py-2 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
                >
                  Comprar
                  <span className="sr-only"> {item.name}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
