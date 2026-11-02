import React from 'react';
import { SentinelLogo } from './SentinelLogo';
import { MenuIcon3D } from './MenuIcon3D';
import { 
  Volume2, 
  VolumeX, 
  Phone
} from 'lucide-react';
import { soundFx } from './SoundEffects';

interface AppSidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenContact: (plan?: string) => void;
  isMuted: boolean;
  onToggleSound: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  currentPath,
  onNavigate,
  onOpenContact,
  isMuted,
  onToggleSound,
}) => {
  const navItems = [
    {
      label: 'Início',
      path: '/',
      icon3d: 'home' as const,
      desc: 'Visão Geral & Impacto'
    },
    {
      label: 'Criação de Sites',
      path: '/sites',
      icon3d: 'sites' as const,
      desc: 'Modelos & Planos de Sites',
      badge: 'Modelos 3D',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      label: 'Automação WhatsApp',
      path: '/automacao',
      icon3d: 'whatsapp' as const,
      desc: 'Robô 24h & Simulador',
      badge: 'Robô 24h',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      label: 'Quem Somos',
      path: '/quem-somos',
      icon3d: 'about' as const,
      desc: 'Manifesto & Engenharia'
    },
    {
      label: 'Blog & Estratégia',
      path: '/blog',
      icon3d: 'blog' as const,
      desc: 'Respostas para Vender Mais',
      badge: '12 Artigos',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      label: 'Fale Conosco',
      path: '/contato',
      icon3d: 'contact' as const,
      desc: 'Orçamentos & Raio-X'
    }
  ];

  const handleNavClick = (path: string) => {
    soundFx.playUiClick();
    onNavigate(path);
  };

  return (
    <aside className="w-72 bg-white text-slate-800 h-full flex flex-col border-r border-slate-200/90 shrink-0 shadow-sm select-none font-sans overflow-hidden">
      
      {/* 1. Top Header & Brand */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between shrink-0">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          className="flex items-center group cursor-pointer focus:outline-none"
          aria-label="Sentinel Systems - Início"
        >
          <SentinelLogo size="md" variant="light" />
        </a>

        <button
          onClick={onToggleSound}
          className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          title={isMuted ? 'Ativar efeitos sonoros' : 'Silenciar som'}
          aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-600" />}
        </button>
      </div>

      {/* 2. System Status Pill */}
      <div className="px-4 py-2 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-slate-700">Sentinel Hub 2.5</span>
        </div>
        <span className="font-bold text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1.5 shadow-2xs">
          <img
            src="/pulse-heart.gif"
            alt="Pulso Vital"
            className="w-3.5 h-3.5 object-contain inline-block shrink-0"
          />
          <span>ONLINE</span>
        </span>
      </div>

      {/* 3. Navigation List with 3D Icons - Scrollable without breaking bottom */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1 min-h-0 scrollbar-thin scrollbar-thumb-slate-200">
        {navItems.map((item) => {
          const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));

          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`w-full p-2.5 rounded-xl flex items-center justify-between text-left transition-all duration-200 group cursor-pointer ${
                isActive
                  ? 'bg-slate-50/90 text-slate-950 border border-cyan-400/80 shadow-2xs ring-1 ring-cyan-400/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MenuIcon3D name={item.icon3d} isActive={isActive} />

                <div>
                  <div className="font-extrabold text-xs tracking-tight flex items-center gap-1.5 text-slate-900">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                          item.badgeColor || 'bg-cyan-50 text-cyan-700 border-cyan-200'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>

              <div
                className={`w-1 h-5 rounded-full transition-all ${
                  isActive ? 'bg-cyan-500 shadow-sm shadow-cyan-500/50' : 'bg-transparent'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* 4. Bottom Action Area (Always fully visible with comfortable padding) */}
      <div className="p-3 pb-4 border-t border-slate-100 space-y-2.5 bg-slate-50/80 shrink-0">
        <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs">
          <div className="flex items-center gap-1.5 text-slate-800 font-bold mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-xs">Atendimento Nacional</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Implantação ágil em 7 dias & suporte humano contínuo.
          </p>
        </div>

        <button
          onClick={() => {
            soundFx.playUiClick();
            onOpenContact('Orçamento via Sidebar');
          }}
          className="w-full py-2 px-3 rounded-md bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-200 flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-2xs"
        >
          <Phone className="w-3.5 h-3.5 text-slate-500" />
          <span>Central de Atendimento</span>
        </button>

        <div className="text-center text-[10px] text-slate-400 font-mono">
          &copy; {new Date().getFullYear()} Sentinel Systems
        </div>
      </div>

    </aside>
  );
};

export default AppSidebar;
