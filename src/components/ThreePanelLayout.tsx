import React, { useState, useRef, useEffect } from 'react';
import { AppSidebar } from './AppSidebar';
import { SentinelAIAdvisor } from './SentinelAIAdvisor';
import { SentinelLogo } from './SentinelLogo';
import { 
  Sparkles,
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

  const getContextInfo = () => {
    if (currentPath === '/') return { section: 'Início', title: 'Visão Geral & Hub', badge: 'Painel Central' };
    if (currentPath.startsWith('/sites')) return { section: 'Criação de Sites', title: 'Modelos Interativos 3D & Planos', badge: 'Estúdio Web' };
    if (currentPath.startsWith('/automacao')) return { section: 'Automação WhatsApp', title: 'Simulador de Atendimento 24h & Planos', badge: 'Simulador' };
    if (currentPath.startsWith('/quem-somos')) return { section: 'Quem Somos', title: 'Manifesto Institucional & Engenharia', badge: 'Empresa' };
    if (currentPath.startsWith('/blog')) return { section: 'Blog & Estratégia', title: 'Respostas para Vender no Google e WhatsApp', badge: '12 Artigos' };
    if (currentPath.startsWith('/contato')) return { section: 'Fale Conosco', title: 'Canais Oficiais & Orçamentos Expressos', badge: 'Contato' };
    if (currentPath.startsWith('/solucoes/')) return { section: 'Soluções por Nicho', title: 'Arquitetura Comercial Especializada', badge: 'Segmento' };
    return { section: 'Sentinel Systems', title: 'Workspace Studio', badge: 'Ativo' };
  };

  const currentCtx = getContextInfo();
  const [isMuted, setIsMuted] = useState(() => soundFx.getMuted());
  const mainScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);

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
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 font-sans text-slate-900">
      
      {/* ======================================================== */}
      {/* 1. LEFT PANEL: Desktop Sidebar (>= 1024px) - Clean White */}
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
        
        {/* Mobile Top Navbar (< 1024px) - Clean White */}
        <header className="lg:hidden h-16 bg-white text-slate-900 px-4 flex items-center justify-between border-b border-slate-200 shrink-0 z-30 shadow-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playUiClick();
                setIsMobileMenuOpen(true);
              }}
              className="p-2 rounded-xl bg-slate-50 text-slate-700 hover:text-slate-950 border border-slate-200 cursor-pointer"
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
              <SentinelLogo size="sm" variant="light" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl bg-slate-50 text-slate-500 hover:text-slate-900 border border-slate-200"
              aria-label="Som"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-600" />}
            </button>

            {/* Mobile AI Trigger Button */}
            <button
              onClick={() => {
                soundFx.playUiClick();
                setIsMobileAiOpen(true);
              }}
              className="px-3 py-1.5 rounded-full bg-slate-900 text-white font-black text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Studio Copilot</span>
            </button>
          </div>
        </header>

        {/* Desktop Quick Header Bar over Center Panel - Clean White */}
        <div className="hidden lg:flex items-center justify-between px-6 py-2.5 bg-white text-slate-600 border-b border-slate-200/90 shrink-0 text-xs shadow-xs">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-black text-slate-900 tracking-wide">{currentCtx.section}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600 font-medium">{currentCtx.title}</span>
            <span className="text-cyan-700 font-bold text-[10px] bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200 ml-1">
              {currentCtx.badge}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5522999726069?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20empresa!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold transition-colors bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp: (22) 99972-6069</span>
            </a>

            {/* Collapse/Expand AI Toggle */}
            <button
              onClick={handleToggleAi}
              className="p-1.5 px-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 text-[11px] font-bold cursor-pointer"
              title={isAiCollapsed ? 'Abrir painel do Studio Copilot' : 'Recolher Studio Copilot'}
            >
              {isAiCollapsed ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Studio Copilot</span>
                  <PanelRightOpen className="w-3.5 h-3.5 text-slate-500" />
                </>
              ) : (
                <>
                  <span>Recolher Studio</span>
                  <PanelRightClose className="w-3.5 h-3.5 text-slate-500" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Main Content Stream */}
        <div id="main-content-scroll" ref={mainScrollRef} className="flex-1 overflow-y-auto relative selection:bg-cyan-200 selection:text-slate-950 bg-white">
          {children}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. RIGHT PANEL: Sentinel AI Advisor (Desktop >= 1024px) - Clean White */}
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
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85%] h-full bg-white shadow-2xl z-10 flex flex-col">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 bg-slate-100 rounded-xl"
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
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileAiOpen(false)}
          />
          <div className="relative w-full max-w-md h-full bg-white shadow-2xl z-10 flex flex-col">
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
