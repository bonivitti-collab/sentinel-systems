import { MessageCircle } from 'lucide-react';
import { FaqList } from '../components/site/FaqList';
import { PageHero } from '../components/site/PageHero';
import { whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

export function FaqPage() {
  return (
    <>
      <PageHero
        path="/faq"
        eyebrow="Perguntas frequentes"
        title={
          <>
            Dúvidas sobre criação de site e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              aparecer no Google.
            </span>
          </>
        }
        description="Serviço, prazo e como começar. Onde não existe um número publicado, a resposta diz isso com clareza, em vez de inventar preço ou prazo. O detalhe de cada frente está em Serviços."
      />

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqList />
          <div className="mt-8 p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <h2 className="font-extrabold text-slate-900 mb-2">Não achou a sua pergunta?</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Manda no WhatsApp. A conversa é com a Sentinel, no número que já está no site. O que entra em{' '}
              <a href="/servicos" className="font-semibold text-cyan-800">site, Google, WhatsApp e redes</a>{' '}
              está na página de serviços.
            </p>
            <a
              href={whatsappHref('Olá! Tenho uma dúvida sobre a Sentinel Systems antes de contratar.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              Perguntar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
