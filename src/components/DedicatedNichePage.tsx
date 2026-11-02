import React from 'react';
import { ArrowLeft, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { NICHES_LIST, type NicheItem } from '../data/nichesData';
import { soundFx } from './SoundEffects';

interface DedicatedNichePageProps {
  niche: NicheItem;
  onBack: () => void;
  onOpenContact: (plan?: string) => void;
  onNavigate?: (url: string) => void;
}

export const DedicatedNichePage: React.FC<DedicatedNichePageProps> = ({ niche, onBack, onOpenContact, onNavigate }) => {
  const whatsappUrl = `https://wa.me/5522999726069?text=${encodeURIComponent(niche.whatsappMessage)}`;

  const relatedNiches = NICHES_LIST.filter((n) => n.slug !== niche.slug).slice(0, 3);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    soundFx.playUiClick();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    const mainEl = document.getElementById('main-content-scroll');
    if (mainEl) {
      mainEl.scrollTop = 0;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-8 sm:pt-12 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={() => {
              soundFx.playUiClick();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-cyan-700 p-2 rounded-lg hover:bg-slate-200/60 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </button>

          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 font-medium">
            <a href="/" onClick={(e) => handleLink(e, '/')} className="hover:text-cyan-600">Início</a>
            <span className="mx-2">/</span>
            <a href="/#diretorio-seo" onClick={(e) => handleLink(e, '/#diretorio-seo')} className="hover:text-cyan-600">Soluções</a>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-bold">{niche.shortTitle}</span>
          </nav>
        </div>

        {/* Hero Section of the Niche */}
        <div className="bg-white rounded-3xl p-5 sm:p-12 border border-slate-200/80 shadow-xs mb-10 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
            <span className="leading-tight">Solução Especializada para {niche.shortTitle}</span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-[1.15] mb-6">
            {niche.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl">
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
                onOpenContact(`Solução para ${niche.shortTitle}`);
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all cursor-pointer"
            >
              Consultar Planos Mensais
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Vantagens Exclusivas para seu Estabelecimento
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {niche.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features / Modules */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
            O que está incluso na plataforma
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {niche.features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-cyan-300 transition-all">
                <h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl mb-14">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-lg font-bold">Sem Contrato de Fidelidade Forçada</h4>
              <p className="text-xs text-slate-300">Você continua porque o site gera lucro e se paga sozinho no fim do mês.</p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
          >
            Falar com Especialista
          </a>
        </div>

        {/* 🔗 NICHOS RELACIONADOS (TEIA DE NAVEGAÇÃO) */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Compass className="w-4 h-4 text-cyan-600" />
            <span>Outras Soluções Comerciais Especializadas:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedNiches.map((rn) => (
              <a
                key={rn.slug}
                href={`/solucoes/${rn.slug}`}
                onClick={(e) => handleLink(e, `/solucoes/${rn.slug}`)}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all group block"
              >
                <span className="text-[10px] font-bold uppercase text-cyan-600 block mb-1">Especialidade</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-1 mb-1">
                  {rn.shortTitle}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {rn.headline}
                </p>
                <span className="text-[11px] text-cyan-700 group-hover:text-cyan-800 mt-2 inline-flex items-center gap-1 font-semibold">
                  <span>Conhecer detalhes</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DedicatedNichePage;
