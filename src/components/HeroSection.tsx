import React from 'react';
import { ArrowRight, MessageCircle, Star, Search, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface HeroSectionProps {
  onOpenContact?: () => void;
  onNavigate?: (path: string) => void;
  onScrollToDiagnosis?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {

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
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.12] mb-6">
          Fazemos o seu comércio{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
            vender mais todo dia.
          </span>
        </h1>

        {/* Clear, approachable value proposition */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-10 px-1 sm:px-0">
          Chega de ficar refém do algoritmo do Instagram. A <strong className="text-slate-900 font-semibold">Sentinel Systems</strong> cria seu <strong className="text-slate-900 font-semibold">site rápido no Google</strong>, atrai clientes prontos para comprar e instala um <strong className="text-slate-900 font-semibold">robô inteligente no seu WhatsApp</strong> para fechar vendas 24 horas por dia.
        </p>

        {/* Action Buttons - Clear, Clickable & Unmistakable */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <a
            href="https://wa.me/5522999726069?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20empresa!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-slate-900/20 transition-all transform hover:scale-102 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </a>

          <button
            onClick={() => {
              soundFx.playUiClick();
              if (onNavigate) onNavigate('/sites');
            }}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-xs hover:border-cyan-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Ver Modelos de Sites</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
          </button>

          <button
            onClick={() => {
              soundFx.playUiClick();
              if (onNavigate) onNavigate('/automacao');
            }}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 font-extrabold text-xs uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Robô WhatsApp 24h</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-xs font-semibold text-slate-600 mb-14">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>No ar em 7 dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
            <span>Sem fidelidade</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
            <span>Suporte mensal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
            <span>Atendimento via WhatsApp</span>
          </div>
        </div>

                {/* 🚀 Os 2 Grandes Portais do Ecossistema - Conectados diretamente com os Menus da Esquerda! */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full mb-12 text-left">
          {/* Portal 1: Estúdio de Sites */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-white to-cyan-50/40 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-extrabold uppercase tracking-wider">
                  Menu: Criação de Sites
                </span>
                <span className="text-xs font-bold text-slate-400">0.4s &bull; Edge CDN</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-cyan-700 transition-colors mb-2">
                Estúdio de Sites de Alta Performance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Explore nossos modelos interativos com pré-visualização em <strong>Desktop e Celular</strong> (Restaurantes, Pousadas, Clínicas, Serviços e Lojas).
              </p>
            </div>
            <button
              onClick={() => {
                soundFx.playUiClick();
                if (onNavigate) onNavigate('/sites');
              }}
              className="w-full py-3.5 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span>Abrir Estúdio de Sites & Planos</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Portal 2: Robô WhatsApp */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-white to-emerald-50/40 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider">
                  Menu: Automação WhatsApp
                </span>
                <span className="text-xs font-bold text-slate-400">2s &bull; Ativo 24/7</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors mb-2">
                Simulador de Atendimento 24h
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Simule um robô conversando ao vivo, respondendo dúvidas de madrugada, enviando cardápios ou diárias e fechando vendas no WhatsApp.
              </p>
            </div>
            <button
              onClick={() => {
                soundFx.playUiClick();
                if (onNavigate) onNavigate('/automacao');
              }}
              className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <span>Abrir Simulador de WhatsApp ao Vivo</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* 3 Pilares Fundamentais Sentinel */}
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
