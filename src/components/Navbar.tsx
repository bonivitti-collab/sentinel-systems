import React, { useState, useEffect } from 'react';
import { SentinelLogo } from './SentinelLogo';
import { Menu, X, MessageCircle, Volume2, VolumeX } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface NavbarProps {
  onOpenContact: () => void;
  isHome?: boolean;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
  onDismissIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  isHome = true,
  onNavigateHome,
  onNavigate,
  onDismissIntro,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => soundFx.getMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Criação de Sites', href: '/sites' },
    { label: 'Automação WhatsApp', href: '/automacao', badge: 'Robô 24h' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    soundFx.playUiClick();
    if (onDismissIntro) onDismissIntro();
    if (onNavigate) {
      onNavigate('/');
    } else if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFx.playUiClick();
    if (onDismissIntro) onDismissIntro();
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const targetId = href.replace(/^#/, '');
      if (!isHome) {
        if (onNavigate) {
          onNavigate('/');
        } else if (onNavigateHome) {
          onNavigateHome();
        }
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const toggleSound = () => {
    const nextMuted = !isMuted;
    soundFx.setMuted(nextMuted);
    setIsMuted(nextMuted);
    if (!nextMuted) {
      soundFx.playUiClick();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center group cursor-pointer focus:outline-none"
            aria-label="Sentinel Systems - Início"
          >
            <SentinelLogo size="md" variant="light" />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Sound Toggle & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio Feedback Toggle */}
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all cursor-pointer"
              title={isMuted ? 'Ativar efeitos sonoros da interface' : 'Silenciar efeitos sonoros'}
              aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-700" />}
            </button>

            {/* Direct WhatsApp Call */}
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact();
              }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir Orçamento</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600"
              aria-label="Som"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-700" />}
            </button>

            <button
              onClick={() => {
                soundFx.playUiClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-4 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="px-4 py-3 rounded-2xl text-sm font-semibold text-slate-800 hover:bg-cyan-50 hover:text-cyan-700 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp Agora</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
