import React from 'react';
import { MessageSquare, Rocket, Sparkles, RefreshCw } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Conversa Rápida de 15 Minutos',
      desc: 'Você conta pro Danillo como funciona sua empresa, quem são seus clientes e o que você mais precisa vender.'
    },
    {
      num: '02',
      icon: Rocket,
      title: 'Construção & Lançamento em 7 Dias',
      desc: 'Montamos seu site, configuramos seu Google Meu Negócio e ativamos o robô no seu WhatsApp. Você não precisa se preocupar com código.'
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'Clientes Chegam Direto no WhatsApp',
      desc: 'Quem pesquisa seu serviço no Google te encontra na hora. O robô responde imediatamente, tira dúvidas e fecha com o cliente.'
    },
    {
      num: '04',
      icon: RefreshCw,
      title: 'Cuidado Contínuo Todo Mês',
      desc: 'Mudou preço? Tem fotos novas? O cardápio atualizou? Nossa equipe faz as alterações para você todo mês na mensalidade.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 mb-3">
            <span>PASSO A PASSO DESCOMPLICADO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Como funciona na prática?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Você não precisa entender nada de tecnologia. Nós fazemos todo o trabalho pesado enquanto você foca no balcão e no atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-cyan-400 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-cyan-500 transition-colors">
                    {st.num}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base mb-2">
                  {st.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
