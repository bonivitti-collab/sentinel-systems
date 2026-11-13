import { FERRAMENTAS } from '../data/ferramentas';

interface ToolPageProps {
  id: string;
}

export function ToolPage({ id }: ToolPageProps) {
  const item = FERRAMENTAS.find((tool) => tool.id === id);
  if (!item) return null;

  return (
    <section className="bg-[#f7f6f3] pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-2">
        <img
          src={item.image}
          alt={item.alt}
          width={800}
          height={800}
          decoding="async"
          className="w-full rounded-[28px] border border-slate-200 object-cover"
        />
        <div>
          <p className="text-sm font-bold text-[#0e7490]">Planilha · {item.priceLabel}</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-tight text-slate-950">
            {item.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{item.benefit}</p>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-slate-950 px-6 text-base font-bold text-white sm:w-auto"
          >
            Comprar por {item.priceLabel}
          </a>
          <a href="/ferramentas" className="mt-4 block text-sm font-bold text-[#0e7490]">
            Ver as duas planilhas
          </a>
        </div>
      </div>
    </section>
  );
}
