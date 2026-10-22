import React from 'react';
import { Globe, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface WhyNotOnlyInstagramProps {
  onOpenContact: () => void;
}

export const WhyNotOnlyInstagram: React.FC<WhyNotOnlyInstagramProps> = ({ onOpenContact }) => {
  return (
    <section id="instagram-vs-site" className="py-20 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-800 mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>A VERDADE QUE NINGUÉM TE CONTA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Por que depender <span className="text-rose-600">só do Instagram</span> está travando suas vendas?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Quase todo comerciante em Cabo Frio tenta tocar o negócio apenas com um perfil de rede social. Veja a diferença prática entre quem só tem Instagram e quem tem a estrutura Sentinel:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card: Só Instagram */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Só ter o Instagram</h3>
                  <span className="text-xs font-semibold text-rose-600 uppercase">Dependência perigosa</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>O público está lá para se distrair com fotos, não para comprar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>O algoritmo entrega seus posts para menos de 6% dos seus seguidores.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>O cliente manda mensagem no direct, você demora a responder e ele vai embora.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Você não tem controle da plataforma: se a conta for suspensa, sua empresa para.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 text-xs text-rose-600 font-semibold">
              Resultado: Esforço enorme gerando poucas vendas reais no fim do mês.
            </div>
          </div>

          {/* Card: Estrutura Sentinel */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-emerald-400 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white font-bold text-[10px] tracking-wider uppercase px-4 py-1 rounded-bl-xl">
              MÁQUINA DE CLIENTES
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Estrutura Sentinel Systems</h3>
                  <span className="text-xs font-semibold text-emerald-600 uppercase">Site + Google + Robô WhatsApp</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cliente no Google já quer comprar:</strong> Ele pesquisa "onde comprar X em Cabo Frio" e acha você.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Robô no WhatsApp responde em 3 segundos:</strong> Passa endereço, catálogo, preços e tira dúvidas na hora.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Autoridade e confiança:</strong> Ter um site próprio passa a certeza de que sua empresa é séria e confiável.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Acompanhamento mensal:</strong> Cuidamos de tudo para você não perder tempo com tecnologia.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center justify-between">
              <span className="text-xs text-emerald-800 font-bold">
                Mais ligações, mais mensagens e mais faturamento.
              </span>

              <button
                onClick={() => {
                  soundFx.playUiClick();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                <span>Quero essa estrutura</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyNotOnlyInstagram;
