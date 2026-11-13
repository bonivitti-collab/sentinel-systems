import type { MouseEvent } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { FERRAMENTAS } from '../data/ferramentas';
import { SERVICES, SERVICES_WHATSAPP_TEXT, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    soundFx.playUiClick();
    onNavigate(href);
  };

  return (
    <>
      <PageHero
        path="/"
        eyebrow="Para o pequeno negócio"
        title={
          <>
            Ser encontrado, receber ligação e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              mensagem no WhatsApp.
            </span>
          </>
        }
        description="A Sentinel faz o marketing do pequeno negócio. Site, Perfil da Empresa no Google, WhatsApp e redes são o meio. O fim é o cliente te achar e chamar."
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
          <a
            href="/servicos"
            onClick={(event) => go(event, '/servicos')}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            Ver os Serviços Sentinel
            <ArrowRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
          </a>
          <a
            href={whatsappHref(SERVICES_WHATSAPP_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Conversar no WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="pb-16" aria-labelledby="servicos-titulo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-w-0 rounded-[2rem] border border-cyan-100 bg-gradient-to-b from-cyan-50/90 to-white p-5 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Serviços Sentinel</p>
            <h2 id="servicos-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              O marketing do pequeno negócio
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600 leading-relaxed">
              Quatro meios para o mesmo fim: ser encontrado no Google, receber ligação, receber mensagem e atender quem chega. O preço aparece só onde já está publicado.
            </p>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <article key={service.id} className="min-w-0 rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
                  <h3 className="text-lg font-extrabold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-800 leading-relaxed">{service.result}</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.card}</p>
                  <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                    <a
                      href={`/servicos#${service.id}`}
                      onClick={(event) => go(event, `/servicos#${service.id}`)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950"
                    >
                      Ver este serviço
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    {service.price && (
                      <a
                        href={service.price.href}
                        onClick={(event) => go(event, service.price!.href)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950"
                      >
                        {service.price.label}
                      </a>
                    )}
                    {service.related && (
                      <a
                        href={service.related.href}
                        onClick={(event) => go(event, service.related!.href)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950"
                      >
                        {service.related.label}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16" aria-labelledby="ferramentas-home-titulo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Ferramentas</p>
            <h2 id="ferramentas-home-titulo" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Planilhas prontas, à parte do serviço
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Não fazem o marketing do negócio. Servem para a conta do dia a dia. O preço está em cada planilha.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {FERRAMENTAS.map((item) => (
              <li key={item.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.kind}</p>
                <h3 className="mt-1 text-lg font-extrabold text-slate-900">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.benefit}</p>
                <p className="mt-3 text-sm font-semibold text-slate-800">{item.priceLabel}</p>
              </li>
            ))}
          </ul>
          <a
            href="/ferramentas"
            onClick={(event) => go(event, '/ferramentas')}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950"
          >
            Ver ferramentas
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
