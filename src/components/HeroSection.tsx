import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Search, TrendingUp, ShieldCheck, Sparkles, Smartphone, Check, Star } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface HeroSectionProps {
  onOpenContact: () => void;
  onScrollToDiagnosis: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onScrollToDiagnosis }) => {
  const [activeSimulatorTab, setActiveSimulatorTab] = useState<'pousada' | 'restaurante' | 'clinica'>('pousada');

  const simulatorScenarios = {
    pousada: {
      tag: 'Pousada ou Hotel',
      clientName: 'Turista (Google)',
      clientMsg: 'Boa noite! Tem suíte com hidromassagem disponível para este sábado?',
      clientTime: '23:42',
      botResponse: 'Olá! Temos sim 🌊! A Suíte Master Luxo está disponível. Diária com café da manhã incluso por R$ 380. Veja fotos reais e reserve direto sem taxas:',
      botLink: 'sentinelsystems.com.br/solucoes/pousada',
      botTime: '23:42 (Instantâneo)',
      closingMsg: 'Turista: "Perfeito! Vou fechar a reserva agora via PIX."'
    },
    restaurante: {
      tag: 'Restaurante ou Delivery',
      clientName: 'Cliente com Fome',
      clientMsg: 'Olá! Qual o tempo de entrega para o Centro e qual o cardápio de hoje?',
      clientTime: '20:15',
      botResponse: 'Boa noite! 🍕 Tempo médio de entrega para seu endereço: 28 min. Nosso cardápio digital atualizado está pronto para pedidos:',
      botLink: 'sentinelsystems.com.br/cardapio',
      botTime: '20:15 (Instantâneo)',
      closingMsg: 'Cliente: "Fiz o pedido #184 pelo link, obrigado!"'
    },
    clinica: {
      tag: 'Clínica ou Consultório',
      clientName: 'Paciente (Google Maps)',
      clientMsg: 'Oi, vocês atendem consulta particular ou convênio amanhã cedo?',
      clientTime: '07:30',
      botResponse: 'Bom dia! 🩺 Atendemos particular e os principais convênios. Temos 2 vagas amanhã: 09h30 ou 11h. Qual fica melhor para você?',
      botLink: 'sentinelsystems.com.br/agendamento',
      botTime: '07:30 (Instantâneo)',
      closingMsg: 'Paciente: "Pode reservar para às 09h30, obrigado!"'
    }
  };

  const activeScenario = simulatorScenarios[activeSimulatorTab];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Soft Ambient Depth Glow (Fully responsive, no cropped borders) */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <div className="w-[650px] sm:w-[950px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-cyan-400/20 via-sky-400/10 to-indigo-400/15 rounded-full blur-3xl opacity-75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Friendly National/Local Scale Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50/90 border border-cyan-200/80 text-xs sm:text-sm font-semibold text-cyan-900 mb-8 shadow-xs backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4 text-cyan-600" />
          <span>Infraestrutura Digital Completa para Pequenas e Médias Empresas</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Punchy, Friendly & Result-Oriented Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
          Fazemos o seu comércio{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
            vender mais todo dia.
          </span>
        </h1>

        {/* Clear, approachable value proposition */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
          Chega de ficar refém do algoritmo do Instagram. A <strong className="text-slate-900 font-semibold">Sentinel Systems</strong> cria seu <strong className="text-slate-900 font-semibold">site rápido no Google</strong>, atrai clientes prontos para comprar e instala um <strong className="text-slate-900 font-semibold">robô inteligente no seu WhatsApp</strong> para fechar vendas 24 horas por dia.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => {
              soundFx.playUiClick();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-emerald-600/25 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar com um Especialista no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playUiClick();
              onScrollToDiagnosis();
            }}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm shadow-xs hover:border-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4 text-cyan-600" />
            <span>Fazer Raio-X Grátis da Minha Empresa</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-600 mb-14">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>No ar em até 7 dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Sem fidelidade obrigatória</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>Suporte contínuo todo mês</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Atendimento humano via WhatsApp</span>
          </div>
        </div>

        {/* 📱 INTERACTIVE LIVE SIMULATOR WIDGET (UI/UX HIGHLIGHT) */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 mb-16 text-left relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800 mb-1.5">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>SIMULAÇÃO AO VIVO: VEJA COMO SEU CLIENTE É ATENDIDO</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                O que acontece quando um cliente chama sua empresa?
              </h3>
            </div>

            {/* Simulator Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  setActiveSimulatorTab('pousada');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeSimulatorTab === 'pousada'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pousada
              </button>
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  setActiveSimulatorTab('restaurante');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeSimulatorTab === 'restaurante'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Restaurante
              </button>
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  setActiveSimulatorTab('clinica');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeSimulatorTab === 'clinica'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Clínica / Serviço
              </button>
            </div>
          </div>

          {/* Simulated WhatsApp Chat Interface */}
          <div className="pt-6 space-y-4">
            {/* Mensagem do Cliente */}
            <div className="flex items-end gap-2 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                C
              </div>
              <div className="bg-slate-100 rounded-2xl rounded-bl-xs p-3.5 text-xs sm:text-sm text-slate-800 shadow-xs">
                <span className="text-[10px] font-bold text-slate-500 block mb-0.5">{activeScenario.clientName}</span>
                <p>{activeScenario.clientMsg}</p>
                <span className="text-[10px] text-slate-400 block text-right mt-1">{activeScenario.clientTime}</span>
              </div>
            </div>

            {/* Resposta Instantânea do Robô Sentinel */}
            <div className="flex items-end gap-2 max-w-[90%] ml-auto justify-end">
              <div className="bg-emerald-600 text-white rounded-2xl rounded-br-xs p-4 text-xs sm:text-sm shadow-md">
                <div className="flex items-center gap-1.5 mb-1 text-[11px] text-emerald-100 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Robô Sentinel da sua Empresa</span>
                </div>
                <p className="leading-relaxed">{activeScenario.botResponse}</p>
                <div className="mt-2.5 pt-2 border-t border-emerald-500/50 flex items-center justify-between text-[11px] text-emerald-100 font-medium">
                  <span className="underline">{activeScenario.botLink}</span>
                  <span className="text-[10px] opacity-80">{activeScenario.botTime}</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                SS
              </div>
            </div>

            {/* Fechamento da Venda */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-900 font-semibold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{activeScenario.closingMsg}</span>
              </div>
              <span className="text-[10px] bg-emerald-200/60 px-2 py-0.5 rounded-full font-bold uppercase text-emerald-900">
                Venda Concluída
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>💡 O robô funciona 24 horas por dia, 7 dias por semana, mesmo quando sua loja está fechada.</span>
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact();
              }}
              className="text-cyan-700 hover:text-cyan-800 font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Quero esse robô na minha empresa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Practical Promises Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-cyan-300 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-cyan-100/70 text-cyan-700 flex items-center justify-center mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Apareça quando procurarem</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Quem pesquisa no Google quer comprar agora. Colocamos sua empresa na primeira página das buscas locais e do mapa.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-indigo-100/70 text-indigo-700 flex items-center justify-center mb-4">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Atendimento 24h no WhatsApp</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              O cliente chamou fora do horário comercial? Nosso robô atende, passa preços, fotos, tira dúvidas e agenda na hora.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Sem Dor de Cabeça Técnica</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Cuidamos de tudo: servidor veloz, manutenção, atualizações de fotos, dados do cardápio e suporte contínuo todo mês.
            </p>
          </div>
        </div>

        {/* Universal Commercial Profiles */}
        <div className="mt-14 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
          <span className="flex items-center gap-1.5 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Gráficas, Lojas & Comércio
          </span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Cafés, Restaurantes & Gastronomia
          </span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pousadas, Hotéis & Locações
          </span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Clínicas, Escritórios & Autônomos
          </span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
