import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { NEUTRAL_WHATSAPP_TEXT, SERVICES_WHATSAPP_TEXT, SITE, VIDEOS_WHATSAPP_TEXT, whatsappHref } from '../data/companySite';
import { soundFx } from './SoundEffects';

interface FloatingWhatsAppButtonProps {
  currentPath?: string;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ currentPath = '/' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAttentionBadge, setShowAttentionBadge] = useState(false);

  // Exibe o balãozinho de atenção após 5 segundos de navegação
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAttentionBadge(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const getCustomMessage = () => {
    if (currentPath === '/sites') return SITE.whatsappText;
    if (currentPath === '/videos') return VIDEOS_WHATSAPP_TEXT;
    if (currentPath === '/' || currentPath === '/servicos') return SERVICES_WHATSAPP_TEXT;
    if (currentPath.includes('/guias/')) {
      return 'Olá! Li um dos guias da Sentinel Systems e gostaria de conversar.';
    }
    return NEUTRAL_WHATSAPP_TEXT;
  };

  const handleOpenWhatsApp = () => {
    soundFx.playUiClick();
    window.open(whatsappHref(getCustomMessage()), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end pointer-events-auto max-w-[calc(100vw-2rem)]">
      {/* Mini Card Expandido (Chat Preview) */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header do Card */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 relative">
            <button
              onClick={() => {
                soundFx.playUiClick();
                setIsOpen(false);
              }}
              className="absolute top-3 right-3 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-white/20 border border-white/40 flex items-center justify-center font-black text-white text-base">
                  SS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white leading-tight">Sentinel Systems</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-100 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>WhatsApp da Sentinel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corpo da mensagem */}
          <div className="p-4 bg-slate-50 text-slate-800 text-xs sm:text-sm space-y-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-slate-200 shadow-xs leading-relaxed text-slate-700">
              <p className="font-semibold text-slate-900 mb-1">Olá! Seja bem-vindo à Sentinel 👋</p>
              <p>
                Se quiser continuar, a conversa é no WhatsApp. Dá para pedir a proposta com calma.
              </p>
              <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1 justify-end">
                <Clock className="w-3 h-3" />
                <span>Sem compromisso</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium px-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Conversa sem compromisso</span>
            </div>
          </div>

          {/* Botão de Ação */}
          <div className="p-3 bg-white border-t border-slate-100">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Iniciar Conversa no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Balão de Atenção (quando o card não está aberto) */}
      {!isOpen && showAttentionBadge && (
        <div
          onClick={() => {
            soundFx.playUiClick();
            setIsOpen(true);
            setShowAttentionBadge(false);
          }}
          className="mb-2 bg-white text-slate-800 text-xs font-semibold py-1.5 px-3.5 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 cursor-pointer hover:border-emerald-400 hover:shadow-xl transition-all group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Falar no WhatsApp?</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowAttentionBadge(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dispensar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Botão Principal Flutuante (FAB) */}
      <button
        onClick={() => {
          soundFx.playUiClick();
          setIsOpen(!isOpen);
        }}
        className="group relative flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs tracking-wide shadow-xl shadow-emerald-950/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-emerald-400/40"
        aria-label="Abrir atendimento no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline-block font-bold">Falar no WhatsApp</span>
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;
