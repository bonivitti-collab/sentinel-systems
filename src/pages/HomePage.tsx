import { ArrowRight, Camera, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { FaqList } from '../components/site/FaqList';
import { PageHero } from '../components/site/PageHero';
import { HOME_FAQ, SERVICES, SITE, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const CHANNELS = [
  {
    title: 'Instagram',
    text: 'Apresenta o trabalho e ajuda a criar relação com quem já acompanha você. Não concentra, sozinho, serviço, horário, endereço e WhatsApp.',
    icon: Camera,
  },
  {
    title: 'Google e Maps',
    text: 'Ajudam quem busca um serviço na região a ver nome, endereço, horário e caminho. Não são o único jeito de conhecer a empresa.',
    icon: MapPin,
  },
  {
    title: 'Site',
    text: 'Reúne o que você faz, as informações e o contato. A pessoa tira a dúvida e, se quiser, pede o orçamento no WhatsApp.',
    icon: Phone,
  },
] as const;

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
            Quem chega à cidade precisa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              encontrar o seu negócio.
            </span>
          </>
        }
        description="Um site claro e uma presença bem cuidada no Google ajudam quem procura um serviço na região a conhecer a sua empresa, conferir as informações e falar com você pelo WhatsApp."
      >
        <div className="mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 sm:px-5">
          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
            Quando novos moradores e visitantes procuram serviços, surgem novas chances de atendimento. Se o cliente não encontra o seu negócio, pode escolher quem aparece.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Quero uma proposta no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => go('/servicos')}
            className="w-full sm:w-auto px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver os serviços
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </PageHero>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Como isso ajuda</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Quem visita nem sempre conhece o comércio local
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Em cidade de temporada, chega gente que não tem o lugar de sempre. Ela pode procurar na hora. “Salão perto de mim”, “restaurante em [nome da cidade]” e “serviço aberto agora” são exemplos de intenção, não uma pesquisa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <article
                  key={channel.title}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs"
                >
                  <div className="w-11 h-11 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{channel.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{channel.text}</p>
                </article>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-3xl">
            Cuidar do site e do perfil não garante o primeiro lugar no Google, nem um efeito de um dia para o outro.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Para além da temporada</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              O mesmo cuidado para outros negócios locais
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A cidade de temporada deixa a situação clara. O serviço da {SITE.name} não fica preso a ela: site, Perfil da Empresa no Google e segurança dessa presença, para negócios locais no Brasil.
            </p>
          </div>
          <button
            type="button"
            onClick={() => go('/sobre')}
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950 cursor-pointer"
          >
            Conhecer a empresa
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Serviços</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              O que entra no trabalho
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Três frentes que a Sentinel já oferece. Nenhuma é um plano novo.
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Dúvidas antes de fechar</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              O que costuma travar a decisão
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Três respostas diretas. O restante está nas{' '}
              <a href="/faq" onClick={(event) => { event.preventDefault(); go('/faq'); }} className="font-semibold text-cyan-800">perguntas frequentes</a>.
            </p>
          </div>
          <FaqList questions={HOME_FAQ} />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white px-6 py-10 sm:px-10 sm:py-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Se fizer sentido, a gente segue no WhatsApp
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
              Você conta como o negócio atende hoje. A Sentinel entende a necessidade e manda uma proposta por escrito. Preço e prazo ficam nessa proposta.
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
                Quero uma proposta no WhatsApp
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
