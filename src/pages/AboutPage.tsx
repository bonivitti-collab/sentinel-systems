import { ArrowRight, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { HOW_IT_WORKS, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      <PageHero
        path="/sobre"
        eyebrow="Sobre a empresa"
        title={
          <>
            Empresa de criação de site para o negócio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              aparecer no Google.
            </span>
          </>
        }
        description="A Sentinel Systems constrói produtos digitais e faz criação de site para pequenos negócios no Brasil. O Google Meu Negócio e a segurança entram para a pessoa te achar, chamar e chegar."
      />

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <article className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">A empresa</h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Pequenos negócios vivem de quem entra em contato: uma ligação, uma mensagem no WhatsApp, uma pessoa na porta. Hoje essa decisão começa no Google. A pessoa pesquisa o serviço, abre o mapa, olha fotos e avaliações e só então escolhe com quem falar.
              </p>
              <p>
                A Sentinel existe para organizar essa presença. Construímos o site rápido que recebe o clique e os produtos digitais da própria empresa. No serviço para o comércio, o centro é o resultado: ser encontrado e ser chamado.
              </p>
              <p>
                O trabalho é online, para pequenos negócios de todo o Brasil, com base na Região dos Lagos. A conversa segue no WhatsApp e no e-mail que já estão neste site.
              </p>
            </div>
          </article>

          <article className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-cyan-950 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">Missão</p>
            <h2 className="text-2xl font-extrabold mb-4">Nenhuma busca local deveria terminar no concorrente por falta de presença.</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Cuidar para que o negócio apareça no Google e no Maps com informação verdadeira, uma página que abre rápido e contas que continuam no controle de quem é dono da empresa.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Como funciona</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Sem etapa escondida e sem prazo publicado de prateleira. O combinado é feito depois de entender o negócio.
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HOW_IT_WORKS.map((step, index) => (
              <li key={step.title} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
                <span className="text-2xl font-black text-cyan-600">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-extrabold text-slate-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappHref('Olá! Quero entender como a Sentinel pode ajudar meu negócio a ser encontrado no Google.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Quero ser encontrado no Google
          </a>
          <button
            type="button"
            onClick={() => {
              soundFx.playUiClick();
              onNavigate('/servicos');
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-md bg-slate-900 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver os serviços
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </section>
    </>
  );
}
