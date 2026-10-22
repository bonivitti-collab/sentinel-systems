import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Search, TrendingUp, ShieldCheck } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface HeroSectionProps {
  onOpenContact: () => void;
  onScrollToDiagnosis: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onScrollToDiagnosis }) => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Soft Ambient Depth Glow (Fully responsive, no cropped borders, 100% seamless) */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <div className="w-[650px] sm:w-[850px] h-[450px] sm:h-[550px] bg-gradient-to-tr from-cyan-400/15 via-sky-400/10 to-purple-400/15 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Friendly National/Local Scale Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-xs sm:text-sm font-semibold text-cyan-800 mb-8 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-cyan-600" />
          <span>Tecnologia Descomplicada para Pequenos e Médios Negócios em Todo o Brasil</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Punchy, Friendly & Result-Oriented Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
          Fazemos o seu comércio{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-purple-600">
            vender mais todo dia.
          </span>
        </h1>

        {/* Clear, approachable value proposition */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
          Chega de ficar refém do algoritmo do Instagram. A <strong className="text-slate-900 font-semibold">Sentinel Systems</strong> cria seu <strong className="text-slate-900 font-semibold">site rápido no Google</strong>, atrai clientes prontos para comprar e instala um <strong className="text-slate-900 font-semibold">robô inteligente no seu WhatsApp</strong> para fechar vendas 24 horas por dia.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => {
              soundFx.playUiClick();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/25 transition-all transform hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com um Especialista no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playUiClick();
              onScrollToDiagnosis();
            }}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4 text-cyan-600" />
            <span>Fazer Raio-X Grátis da Minha Empresa</span>
          </button>
        </div>

        {/* 3 Practical Promises */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-cyan-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-100/70 text-cyan-700 flex items-center justify-center mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Apareça quando procurarem</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Quem pesquisa no Google quer comprar agora. Colocamos sua empresa na primeira página das buscas locais.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-purple-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center mb-3">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Atendimento 24h no WhatsApp</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              O cliente chamou fora do horário comercial? Nosso robô atende, passa preços, fotos e agenda na hora.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Sem Dor de Cabeça Técnica</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Cuidamos de tudo: servidor rápido, manutenção, atualizações de fotos e suporte contínuo todo mês.
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
