import React, { useState } from 'react';
import { SITE_MODELS } from '../data/siteModelsData';
import { Smartphone, Monitor, Check, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface SiteModelViewerProps {
  onSelectModel?: (modelName: string) => void;
  onOpenContact: (plan?: string) => void;
}

export const SiteModelViewer: React.FC<SiteModelViewerProps> = ({ onSelectModel, onOpenContact }) => {
  const [selectedId, setSelectedId] = useState<string>(SITE_MODELS[0].id);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const currentModel = SITE_MODELS.find((m) => m.id === selectedId) || SITE_MODELS[0];

  const handleSelect = (id: string) => {
    soundFx.playUiClick();
    setSelectedId(id);
    if (onSelectModel) onSelectModel(id);
  };

  const handleViewMode = (mode: 'desktop' | 'mobile') => {
    soundFx.playUiClick();
    setViewMode(mode);
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {SITE_MODELS.map((model) => {
          const isSelected = model.id === currentModel.id;
          return (
            <button
              key={model.id}
              onClick={() => handleSelect(model.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-md scale-105 ring-2 ring-cyan-400'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{model.categoryLabel}</span>
              {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
            </button>
          );
        })}
      </div>

      {/* Main Showcase Panel */}
      <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-xl text-slate-900">
        {/* Header with info and Viewport Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[11px] font-bold text-cyan-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentModel.mockBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentModel.name}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mt-1">
              {currentModel.headline}
            </p>
          </div>

          {/* Device Toggle */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start lg:self-auto">
            <button
              onClick={() => handleViewMode('desktop')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'desktop'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => handleViewMode('mobile')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'mobile'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Celular (Mobile)</span>
            </button>
          </div>
        </div>

        {/* Device Frame Preview */}
        <div className="flex justify-center mb-8">
          {viewMode === 'desktop' ? (
            /* Desktop Mockup Frame */
            <div className="w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden transition-all duration-300">
              {/* Browser Top Bar */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="px-4 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <span className="text-emerald-400">https://</span>
                  <span>{currentModel.id}.sentinelsystems.com.br</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                  SSL SEGURO
                </div>
              </div>

              {/* Website Interior Canvas */}
              <div
                className="p-6 sm:p-10 relative overflow-hidden transition-all"
                style={{ backgroundColor: currentModel.palette.bg, color: currentModel.palette.text }}
              >
                {/* Micro Navbar */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-2 font-black text-sm tracking-tight">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentModel.palette.primary }} />
                    <span>{currentModel.name}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs opacity-75 font-medium">
                    <span>Início</span>
                    <span>Serviços / Cardápio</span>
                    <span>Depoimentos</span>
                    <span>Localização</span>
                  </div>
                  <button
                    onClick={() => {
                      soundFx.playUiClick();
                      onOpenContact(`Interesse no modelo: ${currentModel.name}`);
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-950 shadow-sm hover:opacity-90 transition-all cursor-pointer"
                    style={{ backgroundColor: currentModel.palette.primary }}
                  >
                    Contato Direto
                  </button>
                </div>

                {/* Hero Inside Mockup */}
                <div className="max-w-2xl py-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 border"
                    style={{
                      borderColor: `${currentModel.palette.primary}40`,
                      backgroundColor: `${currentModel.palette.primary}15`,
                      color: currentModel.palette.primary
                    }}
                  >
                    Site Rápido & Indexado no Google
                  </span>
                  <h4 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
                    {currentModel.previewHeroTitle}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-6 max-w-xl">
                    {currentModel.previewHeroSubtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        soundFx.playUiClick();
                        onOpenContact(`Quero um modelo similar a: ${currentModel.name}`);
                      }}
                      className="px-5 py-3 rounded-full text-xs font-extrabold text-slate-950 shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                      style={{ backgroundColor: currentModel.palette.primary }}
                    >
                      <span>{currentModel.previewCtaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] opacity-70 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      Carrega em {currentModel.stats[2]?.value || '0.4s'}
                    </span>
                  </div>
                </div>

                {/* Features Mini Bar inside Mockup */}
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {currentModel.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 opacity-85 text-[11px]">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Mobile Mockup Frame */
            <div className="w-[320px] sm:w-[360px] bg-slate-900 rounded-[38px] p-3 border-4 border-slate-700 shadow-2xl relative transition-all duration-300">
              {/* Speaker / Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              </div>

              {/* Mobile Screen Interior */}
              <div
                className="w-full rounded-[28px] overflow-hidden pt-8 pb-6 px-4 relative min-h-[460px] flex flex-col justify-between"
                style={{ backgroundColor: currentModel.palette.bg, color: currentModel.palette.text }}
              >
                <div>
                  {/* Mobile Top App Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="font-extrabold text-xs tracking-tight">{currentModel.name}</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Online
                    </span>
                  </div>

                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block mb-2"
                    style={{ color: currentModel.palette.primary }}
                  >
                    1º Lugar nas Buscas
                  </span>

                  <h5 className="text-lg font-black tracking-tight leading-snug mb-2">
                    {currentModel.previewHeroTitle}
                  </h5>

                  <p className="text-[11px] opacity-80 leading-relaxed mb-4">
                    {currentModel.previewHeroSubtitle}
                  </p>
                </div>

                <div>
                  {/* Mobile Action Buttons */}
                  <button
                    onClick={() => {
                      soundFx.playUiClick();
                      onOpenContact(`Interesse em modelo celular: ${currentModel.name}`);
                    }}
                    className="w-full py-3 rounded-2xl text-xs font-black text-slate-950 shadow-lg flex items-center justify-center gap-2 mb-3 cursor-pointer"
                    style={{ backgroundColor: currentModel.palette.primary }}
                  >
                    <span>{currentModel.previewCtaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="p-2.5 rounded-xl bg-black/30 border border-white/10 text-[10px] opacity-85 text-center">
                    Gatilho inteligente: {currentModel.conversionTrigger}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Row & CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 items-center">
          {currentModel.stats.map((st, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-xl sm:text-2xl font-black text-cyan-600">{st.value}</div>
              <div className="text-xs text-slate-600 mt-0.5 font-medium">{st.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
          <div className="text-xs text-slate-700 text-center sm:text-left">
            Gostou dessa estrutura? Criamos um site com a sua logo, suas fotos e seu WhatsApp em até <strong>7 dias</strong>.
          </div>
          <button
            onClick={() => {
              soundFx.playUiClick();
              onOpenContact(`Quero um site similar ao modelo: ${currentModel.name}`);
            }}
            className="px-6 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Quero este modelo para minha empresa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SiteModelViewer;
