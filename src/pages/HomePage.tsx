import { ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { OUTCOMES, PRODUCTS, SERVICES, SITE, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const go = (path: string) => {
    soundFx.playUiClick();
    onNavigate(path);
  };

  return (
    <>
      <PageHero
        path="/"
        eyebrow="Negócio local no Brasil"
        title={
          <>
            Criação de site e Google Meu Negócio para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              aparecer no Google e receber mais clientes.
            </span>
          </>
        }
        description="A Sentinel Systems cria produtos digitais e faz criação de site rápido para pequenos negócios no Brasil. O resultado é a pessoa te achar no Google e no Maps, ligar, chamar no WhatsApp ou chegar até a porta. O Perfil da Empresa, as avaliações e a segurança são o caminho."
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Quero ser encontrado no Google
          </a>
          <button
            type="button"
            onClick={() => go('/servicos')}
            className="w-full sm:w-auto px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver o que fazemos
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </PageHero>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {OUTCOMES.map((item) => (
              <article
                key={item.title}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs"
              >
                <h2 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-3xl">
            Veja a <a href="/sobre" onClick={(event) => { event.preventDefault(); go('/sobre'); }} className="font-semibold text-cyan-800">empresa</a>, a{' '}
            <a href="/servicos" onClick={(event) => { event.preventDefault(); go('/servicos'); }} className="font-semibold text-cyan-800">criação de site e o Perfil da Empresa</a>, os{' '}
            <a href="/produtos" onClick={(event) => { event.preventDefault(); go('/produtos'); }} className="font-semibold text-cyan-800">produtos</a> e as{' '}
            <a href="/faq" onClick={(event) => { event.preventDefault(); go('/faq'); }} className="font-semibold text-cyan-800">perguntas frequentes</a>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">A empresa</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Quem é a {SITE.name}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Somos uma empresa que constrói produtos digitais e sites rápidos para pequenos negócios. O site não é o produto que a gente oferece na conversa comercial: o que o negócio precisa é ser achado e escolhido. A página, o Perfil da Empresa no Google e a proteção dessa presença existem para esse fim.
            </p>
          </div>
          <button
            type="button"
            onClick={() => go('/sobre')}
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950 cursor-pointer"
          >
            Missão e como funciona
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Serviços</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Os meios para o cliente te achar
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Três frentes, um resultado: mais caminhos para a pessoa que já está procurando chegar até você.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SERVICES.map((service) => {
              const Icon = service.id === 'google' ? MapPin : service.id === 'seguranca' ? ShieldCheck : Phone;
              return (
                <article
                  key={service.id}
                  className="p-6 rounded-3xl bg-gradient-to-br from-white to-cyan-50/40 border border-slate-200/90 shadow-xs flex flex-col"
                >
                  <div className="w-11 h-11 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{service.summary}</p>
                  <button
                    type="button"
                    onClick={() => go(`/servicos#${service.id}`)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-cyan-800 cursor-pointer"
                  >
                    Por que isso importa
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Produtos</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Produtos da própria Sentinel
              </h2>
            </div>
            <button
              type="button"
              onClick={() => go('/produtos')}
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-800 cursor-pointer"
            >
              Ver os três
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRODUCTS.map((product) => (
              <article key={product.name} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col">
                <h3 className="text-lg font-extrabold text-slate-900">{product.name}</h3>
                <p className="text-xs font-bold text-cyan-800 mt-1 mb-3">{product.price}</p>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white px-6 py-10 sm:px-10 sm:py-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Quer que o cliente te encontre no Google?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
              Conte como o seu negócio atende hoje. A conversa é no WhatsApp da Sentinel, sem login e sem compromisso de preço neste site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => go('/contato')}
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-white text-slate-900 font-semibold text-xs tracking-wide cursor-pointer"
              >
                Ver e-mail e contato
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
