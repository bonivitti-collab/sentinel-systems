import React, { useState, useEffect } from 'react';
import { SentinelLogo } from './SentinelLogo';
import { Menu, X, ArrowUpRight, MessageCircle, Volume2, VolumeX } from 'lucide-react';
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
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Instagram vs Site', href: '#instagram-vs-site' },
    { label: 'Planos & Valores', href: '#planos' },
    { label: 'Soluções & Cidades', href: '#diretorio-seo', badge: '37 Páginas' },
    { label: 'Dúvidas & Garantias', href: '#duvidas-seguranca' },
    { label: 'Raio-X Grátis', href: '#raio-x' },
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

    const targetId = href.replace(/^#/, '');

    if (!isHome) {
      if (onNavigate) {
        onNavigate('/');
      } else if (onNavigateHome) {
        onNavigateHome();
      }
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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

  const getLinkHref = (href: string) => {
    return isHome ? href : `/${href}`;
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
          {/* Official Brand Logo - Clean & Perfectly Aligned */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center group cursor-pointer focus:outline-none"
            aria-label="Sentinel Systems - Início"
          >
            <SentinelLogo size="md" variant="light" />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={getLinkHref(link.href)}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white transition-all flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-cyan-100 text-cyan-800 px-1.5 py-0.2 rounded-full font-bold">
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
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-xs tracking-wide shadow-md shadow-cyan-600/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions (Sound + Hamburger) */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600"
              aria-label="Alternar som"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 border-b border-slate-200 px-6 py-6 backdrop-blur-2xl transition-all shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={getLinkHref(link.href)}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="py-3 text-sm font-semibold text-slate-800 hover:text-cyan-600 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            {/* Quick shortcuts for the 37 solutions */}
            <div className="pt-4 pb-2">
              <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                Atalhos Rápidos de Soluções
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <a
                  href="/solucoes/sites-para-pousadas-e-hoteis"
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playUiClick();
                    setMobileMenuOpen(false);
                    if (onDismissIntro) onDismissIntro();
                    if (onNavigate) onNavigate('/solucoes/sites-para-pousadas-e-hoteis');
                  }}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-cyan-50"
                >
                  Pousadas & Hotéis
                </a>
                <a
                  href="/automacao/robo-whatsapp-para-restaurantes"
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playUiClick();
                    setMobileMenuOpen(false);
                    if (onDismissIntro) onDismissIntro();
                    if (onNavigate) onNavigate('/automacao/robo-whatsapp-para-restaurantes');
                  }}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-emerald-50"
                >
                  Robô Restaurantes
                </a>
                <a
                  href="/cidades/criacao-de-sites-em-cabo-frio"
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playUiClick();
                    setMobileMenuOpen(false);
                    if (onDismissIntro) onDismissIntro();
                    if (onNavigate) onNavigate('/cidades/criacao-de-sites-em-cabo-frio');
                  }}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-sky-50"
                >
                  Cabo Frio (RJ)
                </a>
                <a
                  href="/cidades/criacao-de-sites-em-buzios"
                  onClick={(e) => {
                    e.preventDefault();
                    soundFx.playUiClick();
                    setMobileMenuOpen(false);
                    if (onDismissIntro) onDismissIntro();
                    if (onNavigate) onNavigate('/cidades/criacao-de-sites-em-buzios');
                  }}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-sky-50"
                >
                  Búzios (RJ)
                </a>
              </div>
            </div>

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
