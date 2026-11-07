import { MessageCircle } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { SERVICES, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

export function ServicesPage() {
  return (
    <>
      <PageHero
        path="/servicos"
        eyebrow="Serviços no Brasil"
        title={
          <>
            Criação de site, Perfil da Empresa no Google e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              segurança para aparecer no Google.
            </span>
          </>
        }
        description="O fim é o cliente te achar no Google e no Maps, ligar, chamar no WhatsApp ou chegar até a porta. Criação de site, Google Meu Negócio e blindagem digital são os meios. Abaixo, cada um em linguagem direta e por que importa."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <nav aria-label="Nesta página" className="flex flex-col sm:flex-row flex-wrap gap-2">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-700 hover:text-cyan-800 hover:bg-white"
            >
              {service.title}
            </a>
          ))}
        </nav>
      </div>

      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-14 scroll-mt-28 ${index % 2 === 1 ? 'bg-slate-50 border-y border-slate-200' : ''}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">{service.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {service.title}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed max-w-3xl mb-4">{service.summary}</p>
            <div className="p-5 sm:p-6 rounded-3xl bg-cyan-50 border border-cyan-100 mb-6 max-w-3xl">
              <h3 className="text-sm font-extrabold text-cyan-950 mb-2">Por que isso importa</h3>
              <p className="text-sm text-cyan-950/90 leading-relaxed">{service.why}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.points.map((point) => (
                <article key={point.title} className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
                  <h3 className="font-extrabold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Quer esse resultado no seu negócio?</h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mb-5">
              Conte o que você vende e como o cliente chega hoje. O valor não está tabelado aqui: ele sai da conversa, por escrito.
            </p>
            <a
              href={whatsappHref('Olá! Quero conversar sobre presença no Google, site e segurança do meu negócio.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              Quero ser encontrado no Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
