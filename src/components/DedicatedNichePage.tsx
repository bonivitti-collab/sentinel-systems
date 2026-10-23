import React from 'react';
import { ArrowLeft, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Star, Sparkles } from 'lucide-react';
import type { NicheItem } from '../data/nichesData';
import { soundFx } from './SoundEffects';

interface DedicatedNichePageProps {
  niche: NicheItem;
  onBack: () => void;
  onOpenContact: (plan?: string) => void;
}

export const DedicatedNichePage: React.FC<DedicatedNichePageProps> = ({ niche, onBack, onOpenContact }) => {
  const whatsappUrl = `https://wa.me/5522999726069?text=${encodeURIComponent(niche.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        <button
          onClick={() => {
            soundFx.playUiClick();
            onBack();
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-cyan-700 mb-8 p-2 rounded-lg hover:bg-slate-200/60 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Página Inicial</span>
        </button>

        {/* Hero Section of the Niche */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-xs mb-10 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Solução Especializada para {niche.shortTitle}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            {niche.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl">
            {niche.headline}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl">
            {niche.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Pedir Orçamento para {niche.shortTitle} no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact(`Especializado para ${niche.shortTitle}`);
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all cursor-pointer"
            >
              Fazer Raio-X Gratuito da Empresa
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Vantagens Exclusivas para o seu Negócio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {niche.benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features / Structure */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
            O que está incluso no seu Site e Robô de WhatsApp
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {niche.features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-cyan-100/70 text-cyan-700 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-cyan-400 shrink-0" />
            <div>
              <h4 className="text-lg font-bold">Domínio no seu nome e suporte mensal contínuo</h4>
              <p className="text-xs text-slate-300">Sem fidelidade forçada. Cuidamos do seu site para você cuidar das suas vendas.</p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="px-6 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </div>
  );
};
