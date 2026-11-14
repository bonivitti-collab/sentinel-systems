import { FERRAMENTAS } from '../data/ferramentas';

const LANDING: Record<string, string> = {
  'valor-hora-real': 'https://valorhora.sentinelsystems.com.br',
  cotacasa: 'https://cotacasa.sentinelsystems.com.br',
};

export function FerramentasSection() {
  return (
    <section className="bg-[#f7f6f3] pb-20 pt-28" aria-labelledby="ferramentas-titulo">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        <p className="text-sm font-bold text-[#0e7490]">Planilhas</p>
        <h1 id="ferramentas-titulo" className="mt-3 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold tracking-tight text-slate-950">
          Ferramentas para a conta do dia a dia
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          Valor Hora Real e CotaCasa, R$ 9,90 cada. Saiba quanto cobrar pela hora e quanto a obra deve custar.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FERRAMENTAS.map((item) => (
            <article key={item.id} id={item.id} className="overflow-hidden rounded-[20px] border border-slate-200 bg-white">
              <a href={LANDING[item.id]}>
                <img
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </a>
              <div className="p-5">
                <h2 className="text-xl font-extrabold text-slate-950">
                  <a href={LANDING[item.id]}>{item.name}</a>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.benefit}</p>
                <p className="mt-4 text-lg font-extrabold text-slate-950">{item.priceLabel}</p>
                <a
                  href={LANDING[item.id]}
                  className="mt-4 inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white"
                >
                  Ver {item.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
