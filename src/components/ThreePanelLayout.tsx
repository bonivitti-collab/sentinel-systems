import React, { useState } from 'react';
import { AppSidebar } from './AppSidebar';
import { SentinelAIAdvisor } from './SentinelAIAdvisor';
import { SentinelLogo } from './SentinelLogo';
import { 
  Bot, 
  Menu, 
  X, 
  PanelRightClose, 
  PanelRightOpen, 
  Volume2, 
  VolumeX, 
  MessageCircle
} from 'lucide-react';
import { soundFx } from './SoundEffects';

interface ThreePanelLayoutProps {
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenContact: (plan?: string) => void;
}

export const ThreePanelLayout: React.FC<ThreePanelLayoutProps> = ({
  children,
  currentPath,
  onNavigate,
  onOpenContact,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAiOpen, setIsMobileAiOpen] = useState(false);
  const [isAiCollapsed, setIsAiCollapsed] = useState(false);
  const [isMuted, setIsMuted] = useState(() => soundFx.getMuted());

  const toggleSound = () => {
    const next = !isMuted;
    soundFx.setMuted(next);
    setIsMuted(next);
    if (!next) soundFx.playUiClick();
  };

  const handleToggleAi = () => {
    soundFx.playUiClick();
    setIsAiCollapsed(!isAiCollapsed);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 font-sans text-slate-100">
      
      {/* ======================================================== */}
      {/* 1. LEFT PANEL: Desktop Sidebar (>= 1024px) */}
      {/* ======================================================== */}
      <div className="hidden lg:block shrink-0 h-full">
        <AppSidebar
          currentPath={currentPath}
          onNavigate={onNavigate}
          onOpenContact={onOpenContact}
          isMuted={isMuted}
          onToggleSound={toggleSound}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. CENTER PANEL: Main Interactive Content Canvas */}
      {/* ======================================================== */}
      <div className="flex-1 flex flex-col h-full min-w-0 bg-white text-slate-900 relative overflow-hidden">
        
        {/* Mobile Top Navbar (< 1024px) */}
        <header className="lg:hidden h-16 bg-slate-950 text-white px-4 flex items-center justify-between border-b border-slate-800 shrink-0 z-30">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playUiClick();
                setIsMobileMenuOpen(true);
              }}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 cursor-pointer"
              aria-label="Abrir Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                soundFx.playUiClick();
                onNavigate('/');
              }}
              className="flex items-center cursor-pointer"
            >
              <SentinelLogo size="sm" variant="dark" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              aria-label="Som"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Mobile AI Trigger Button */}
            <button
              onClick={() => {
                soundFx.playUiClick();
                setIsMobileAiOpen(true);
              }}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/30 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-slate-950" />
              <span>IA de Vendas</span>
            </button>
          </div>
        </header>

        {/* Desktop Quick Header Bar over Center Panel */}
        <div className="hidden lg:flex items-center justify-between px-6 py-2.5 bg-slate-900 text-slate-300 border-b border-slate-800 shrink-0 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-wide">SENTINEL SYSTEMS</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">Atendimento em Todo o Brasil</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-cyan-400 font-mono text-[11px]">3-Panel Studio Layout</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5522999726069?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20empresa!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: (22) 99972-6069</span>
            </a>

            {/* Collapse/Expand AI Toggle */}
            <button
              onClick={handleToggleAi}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-bold cursor-pointer"
              title={isAiCollapsed ? 'Abrir painel da IA de Vendas' : 'Recolher painel da IA'}
            >
              {isAiCollapsed ? (
                <>
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Abrir IA</span>
                  <PanelRightOpen className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>Recolher IA</span>
                  <PanelRightClose className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Main Content Stream */}
        <div className="flex-1 overflow-y-auto relative scroll-smooth selection:bg-cyan-200 selection:text-slate-950">
          {children}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. RIGHT PANEL: Sentinel AI Advisor (Desktop >= 1024px) */}
      {/* ======================================================== */}
      {!isAiCollapsed && (
        <div className="hidden lg:block w-[380px] xl:w-[420px] shrink-0 h-full transition-all duration-300">
          <SentinelAIAdvisor onOpenContact={onOpenContact} />
        </div>
      )}

      {/* ======================================================== */}
      {/* MOBILE DRAWER: Left Navigation Sidebar */}
      {/* ======================================================== */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85%] h-full bg-slate-950 shadow-2xl z-10 flex flex-col">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl"
              aria-label="Fechar Menu"
            >
              <X className="w-5 h-5" />
            </button>
            <AppSidebar
              currentPath={currentPath}
              onNavigate={(path) => {
                setIsMobileMenuOpen(false);
                onNavigate(path);
              }}
              onOpenContact={(plan) => {
                setIsMobileMenuOpen(false);
                onOpenContact(plan);
              }}
              isMuted={isMuted}
              onToggleSound={toggleSound}
            />
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MOBILE DRAWER: Right Sentinel AI Advisor */}
      {/* ======================================================== */}
      {isMobileAiOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileAiOpen(false)}
          />
          <div className="relative w-full max-w-md h-full bg-slate-950 shadow-2xl z-10 flex flex-col">
            <SentinelAIAdvisor
              onOpenContact={(plan) => {
                setIsMobileAiOpen(false);
                onOpenContact(plan);
              }}
              onCloseMobile={() => setIsMobileAiOpen(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default ThreePanelLayout;
