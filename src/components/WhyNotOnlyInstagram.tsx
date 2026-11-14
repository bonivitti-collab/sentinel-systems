import React, { useState } from 'react';
import { Globe, AlertTriangle, CheckCircle2, ArrowRight, Calculator, Clock, Sparkles } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface WhyNotOnlyInstagramProps {
  onOpenContact: () => void;
}

export const WhyNotOnlyInstagram: React.FC<WhyNotOnlyInstagramProps> = ({ onOpenContact }) => {
  const [weeklyVisitors, setWeeklyVisitors] = useState(30);
  const [averageTicket, setAverageTicket] = useState(100);

  // Estimativa baseada em estudos de e-commerce e comércio local:
  // 35% a 45% das buscas ocorrem à noite, finais de semana ou são perdidas se o atendimento demora mais de 5 minutos
  const estimatedLostMonthly = Math.round(weeklyVisitors * 4 * 0.35 * averageTicket);

  return (
    <section id="instagram-vs-site" className="py-24 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-900 mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>A VERDADE DO COMÉRCIO LOCAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Por que depender <span className="text-rose-600">só do Instagram</span> está travando suas vendas?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Muitos empresários tentam tocar as vendas apenas com um perfil de rede social. Veja a diferença prática entre quem só tem Instagram e quem tem a estrutura Sentinel Systems:
          </p>
        </div>

        {/* Comparativo de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Card: Só Instagram */}
          <div className="p-5 sm:p-9 rounded-3xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">Depender Só do Instagram</h3>
                  <span className="text-xs font-semibold text-rose-600 uppercase">Atenção dividida & Vendas perdidas</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span><strong>Público passivo:</strong> A pessoa entra na rede social para se distrair com vídeos, memes e amigos, não para contratar serviços ou comprar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span><strong>Algoritmo ingrato:</strong> Entrega suas fotos e vídeos para menos de 6% dos seus próprios seguidores se você não pagar anúncios caros.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span><strong>Demora no direct:</strong> Se o cliente manda mensagem às 22h e você responde no dia seguinte, ele já comprou do concorrente.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span><strong>Sem posse real:</strong> O terreno é alugado: se sua conta cair ou for bloqueada por engano, sua empresa fica invisível.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 text-xs text-rose-700 font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Resultado: Horas gastas produzindo conteúdo sem retorno previsível no caixa.</span>
            </div>
          </div>

          {/* Card: Estrutura Sentinel Systems */}
          <div className="p-5 sm:p-9 rounded-3xl bg-white border-2 border-emerald-400 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-bold text-[10px] tracking-wider uppercase px-4 py-1 rounded-bl-xl shadow-xs">
              MÁQUINA DE VENDAS 24H
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">Estrutura Sentinel Systems</h3>
                  <span className="text-xs font-semibold text-emerald-600 uppercase">Site + Google + Robô WhatsApp</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cliente no Google tem pressa:</strong> Quem pesquisa seu produto já está com a intenção clara de compra na mão.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Robô atende na hora:</strong> Não importa se são 3 da manhã de um domingo. O robô passa preços, fotos e fecha reservas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Seu ponto digital próprio:</strong> Um site rápido e seguro que pertence à sua empresa, com domínio próprio registrado.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tranquilidade técnica:</strong> Cuidamos da manutenção, fotos novas e atualizações na mensalidade.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-100 text-xs text-emerald-700 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Resultado: Clientes novos chamando todo dia com intenção de fechar negócio.</span>
            </div>
          </div>
        </div>

        {/* 💡 CALCULADORA INTERATIVA DE PERDA DE VENDAS (NOVO RECURSO DE ALTA CONVERSÃO) */}
        <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4">
              <Calculator className="w-3.5 h-3.5 shrink-0" />
              <span>SIMULADOR DE IMPACTO NO SEU FATURAMENTO</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Quanto dinheiro você pode estar deixando na mesa?
            </h3>
            <p className="text-slate-400 text-xs sm:text-base leading-relaxed mb-8">
              Pesquisas mostram que <strong>mais de 35% das intenções de compra</strong> acontecem à noite ou são perdidas se o cliente não recebe resposta no WhatsApp em até 5 minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-2 border-t border-slate-800">
            {/* Controles de Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-300">Procura semanal por serviço:</span>
                  <span className="text-cyan-400 font-black text-sm sm:text-base">{weeklyVisitors} pessoas</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={weeklyVisitors}
                  onChange={(e) => setWeeklyVisitors(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>10 pessoas</span>
                  <span>150 pessoas</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-300">Ticket Médio por venda:</span>
                  <span className="text-emerald-400 font-black text-sm sm:text-base">R$ {averageTicket}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="600"
                  step="10"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full accent-emerald-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>R$ 30</span>
                  <span>R$ 600</span>
                </div>
              </div>
            </div>

            {/* Resultado do Cálculo */}
            <div className="bg-slate-800/80 p-4 sm:p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between text-center lg:text-left">
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  Estimativa de Vendas Perdidas por Mês
                </span>
                <div className="text-3xl sm:text-5xl font-black text-rose-400 tracking-tight my-2 break-words">
                  ~ R$ {estimatedLostMonthly.toLocaleString('pt-BR')}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sem um robô de WhatsApp 24h e um site rápido no Google, esses clientes procuram outro comércio na sua cidade.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-300 font-medium text-center sm:text-left">
                  Com a Sentinel Systems, o plano completo custa a partir de <strong className="text-emerald-400">R$ 327/mês</strong> e se paga na 1ª venda recuperada.
                </div>
                <button
                  onClick={() => {
                    soundFx.playUiClick();
                    onOpenContact();
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-md bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs tracking-wide shrink-0 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs border border-slate-200"
                >
                  <span>Ver Soluções Recomendadas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyNotOnlyInstagram;
