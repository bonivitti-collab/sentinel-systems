import React from 'react';
import { SentinelLogo } from './SentinelLogo';
import { 
  Home, 
  Globe, 
  MessageCircle, 
  Users, 
  BookOpen, 
  Send, 
  Volume2, 
  VolumeX, 
  Sparkles,
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
      icon: Home,
      desc: 'Visão Geral & Impacto'
    },
    {
      label: 'Criação de Sites',
      path: '/sites',
      icon: Globe,
      desc: 'Modelos & Planos de Sites',
      badge: 'Modelos 3D'
    },
    {
      label: 'Automação WhatsApp',
      path: '/automacao',
      icon: MessageCircle,
      desc: 'Robô 24h & Simulador',
      badge: 'Robô 24h',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
      label: 'Quem Somos',
      path: '/quem-somos',
      icon: Users,
      desc: 'Manifesto & Engenharia'
    },
    {
      label: 'Blog & Estratégia',
      path: '/blog',
      icon: BookOpen,
      desc: 'Respostas para Vender Mais',
      badge: '12 Artigos'
    },
    {
      label: 'Fale Conosco',
      path: '/contato',
      icon: Send,
      desc: 'Orçamentos & Raio-X'
    }
  ];

  const handleNavClick = (path: string) => {
    soundFx.playUiClick();
    onNavigate(path);
  };

  return (
    <aside className="w-72 bg-slate-950 text-slate-100 h-full flex flex-col justify-between border-r border-slate-800 shrink-0 shadow-xl select-none font-sans">
      
      {/* Top Header & Brand */}
      <div>
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="flex items-center group cursor-pointer focus:outline-none"
            aria-label="Sentinel Systems - Início"
          >
            <SentinelLogo size="md" variant="dark" />
          </a>

          <button
            onClick={onToggleSound}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title={isMuted ? 'Ativar efeitos sonoros' : 'Silenciar som'}
            aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>
        </div>

        {/* System Status Pill */}
        <div className="px-5 py-3 bg-slate-900/40 border-b border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-300">Sentinel Hub 2.5</span>
          </div>
          <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded-full">
            ONLINE
          </span>
        </div>

        {/* Navigation List */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));

            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`w-full p-3 rounded-2xl flex items-center justify-between text-left transition-all duration-200 group cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-950/80 to-slate-900 text-white border border-cyan-500/40 shadow-md shadow-cyan-950/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 font-black shadow-sm'
                        : 'bg-slate-900 group-hover:bg-slate-800 text-slate-400 group-hover:text-cyan-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="font-extrabold text-xs tracking-tight flex items-center gap-1.5">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                            item.badgeColor || 'bg-cyan-950 text-cyan-400 border-cyan-500/30'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal">
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div
                  className={`w-1.5 h-6 rounded-full transition-all ${
                    isActive ? 'bg-cyan-400' : 'bg-transparent group-hover:bg-slate-800'
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Action Area */}
      <div className="p-4 border-t border-slate-800/80 space-y-3 bg-slate-950/80">
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/60 border border-cyan-500/20 text-xs">
          <div className="flex items-center gap-2 text-cyan-300 font-extrabold mb-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Atendimento no Brasil</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-snug">
            Criação ágil em 7 dias & suporte humano contínuo no WhatsApp.
          </p>
        </div>

        <button
          onClick={() => {
            soundFx.playUiClick();
            onOpenContact('Orçamento via Sidebar');
          }}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-emerald-950 flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Falar com Especialista</span>
        </button>

        <div className="text-center text-[10px] text-slate-500 font-mono pt-1">
          &copy; {new Date().getFullYear()} Sentinel Systems
        </div>
      </div>

    </aside>
  );
};

export default AppSidebar;
