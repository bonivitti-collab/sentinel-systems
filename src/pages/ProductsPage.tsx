import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { PRODUCTS } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

export function ProductsPage() {
  return (
    <>
      <PageHero
        path="/produtos"
        eyebrow="Produtos da Sentinel"
        title={
          <>
            MiraLocal, Cota Casa e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              RDO Zap.
            </span>
          </>
        }
        description="Além da criação de site e do Google Meu Negócio para pequenos negócios, a Sentinel Systems mantém produtos próprios. O texto de cada card sai da página pública do produto. O preço também é o que está publicado lá, não uma proposta de serviço."
      />

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col"
            >
              <h2 className="text-2xl font-extrabold text-slate-900">{product.name}</h2>
              <p className="mt-2 text-sm font-bold text-cyan-800">{product.price}</p>
              <p className="text-xs text-slate-500 mb-4">{product.priceNote}</p>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{product.description}</p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                className="mt-6 inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide"
              >
                Abrir {product.name}
                <ArrowUpRight className="w-4 h-4 text-cyan-300" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
