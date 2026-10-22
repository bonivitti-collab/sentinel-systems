import React from 'react';
import { Check, MessageCircle, Star, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface PricingPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: 'presenca',
      name: 'Presença no Google',
      badge: 'IDEAL PARA COMÉRCIO LOCAL',
      target: 'Pequenas lojas, oficinas, gráficas, prestadores e serviços de bairro',
      monthlyPrice: '149',
      setupPrice: 'R$ 390',
      description: 'Tenha seu site profissional rápido e apareça na 1ª página quando alguém pesquisar seu serviço.',
      features: [
        'Site moderno ultra-rápido no celular',
        'Cadastro e otimização no Google Meu Negócio',
        'Botão direto para o seu WhatsApp comercial',
        'Hospedagem rápida e certificado SSL de segurança',
        'Manutenção e alterações de dados/fotos mensais',
        'Suporte direto com nossa equipe via WhatsApp'
      ],
      cta: 'Escolher Presença no Google',
      popular: false,
      color: 'border-slate-200'
    },
    {
      id: 'vendas',
      name: 'Comércio & Vendas 24h',
      badge: 'O MAIS CONTRATADO',
      target: 'Pousadas, clínicas, restaurantes, delivery e lojas com fluxo diário',
      monthlyPrice: '297',
      setupPrice: 'R$ 690',
      description: 'O ecossistema completo para transformar o Google e o seu WhatsApp em uma máquina automática de vendas.',
      features: [
        'Tudo do plano anterior incluso',
        '🤖 Robô Inteligente no seu WhatsApp (responde na hora 24h)',
        'Envio automático de cardápio, tabela de preços e fotos',
        'Atualizações mensais de fotos, produtos e banners',
        'Otimização contínua para subir posições no Google',
        'Suporte prioritário no WhatsApp com nossa equipe',
        'Relatório mensal simples de quantas pessoas chamaram'
      ],
      cta: 'Quero o Plano Mais Vendido',
      popular: true,
      color: 'border-cyan-400 ring-2 ring-cyan-400/30'
    },
    {
      id: 'escala',
      name: 'Alta Escala & Anúncios',
      badge: 'EXPANSÃO & TURISMO',
      target: 'Empresas em expansão, cafés gourmet, hotelaria e negócios de médio porte',
      monthlyPrice: '590',
      setupPrice: 'Consulte escopo',
      description: 'Design sofisticado de alto padrão e campanhas de anúncios para atrair clientes em massa na sua cidade e no Brasil.',
      features: [
        'Tudo dos planos anteriores com acabamento premium',
        'Design visual com vídeo e fotos em alta definição',
        'Robô de WhatsApp avançado com qualificação e agendamento',
        'Gestão de Anúncios no Google para trazer clientes em massa',
        'Integração com Instagram e plataformas de reservas',
        'Consultoria mensal direta de crescimento digital',
        'Prioridade máxima no atendimento'
      ],
      cta: 'Conversar sobre o Plano Escala',
      popular: false,
      color: 'border-purple-300'
    }
  ];

  return (
    <section id="planos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>TRANSPARÊNCIA TOTAL: CRIAÇÃO + ACOMPANHAMENTO MENSAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Como funciona o investimento?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sem pegadinhas. Uma <strong>taxa única e facilitada de implantação</strong> para colocar tudo no ar, e uma <strong>mensalidade simples</strong> para cuidar da hospedagem, do robô de WhatsApp e do suporte todo mês.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`p-8 rounded-3xl bg-white border ${p.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-black text-[11px] tracking-wider uppercase shadow-md flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{p.badge}</span>
                </div>
              )}

              <div>
                {!p.popular && (
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 block mb-2">
                    {p.badge}
                  </span>
                )}

                <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-xs text-slate-600 mb-6 font-medium">{p.target}</p>

                {/* Price block */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Mensalidade de Manutenção & Suporte</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-600">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-slate-900">{p.monthlyPrice}</span>
                      <span className="text-xs text-slate-500 font-semibold">/mês</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span>Taxa única de criação:</span>
                    <strong className="text-slate-900">{p.setupPrice}</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">{p.description}</p>

                {/* Checklist */}
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  onSelectPlan(p.name);
                }}
                className={`w-full py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  p.popular
                    ? 'bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white shadow-md shadow-cyan-600/30 transform hover:scale-[1.02]'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>{p.cta}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Reassurance Bar */}
        <div className="p-6 rounded-2xl bg-cyan-50/70 border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Sem Pegadinhas ou Fidelidade Presa</div>
              <div className="text-xs text-slate-600">A taxa de criação cobre o desenvolvimento do site do zero. A mensalidade garante servidor rápido, robô de WhatsApp, backup e suporte.</div>
            </div>
          </div>

          <a
            href="#duvidas-seguranca"
            className="text-xs font-bold text-cyan-800 hover:text-cyan-900 underline flex items-center gap-1 shrink-0"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tirar dúvidas sobre os planos</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default PricingPlans;
