import React, { useState, useEffect } from 'react';
import { SentinelLogo } from './SentinelLogo';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface NavbarProps {
  onOpenContact: () => void;
  isHome?: boolean;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, isHome = true, onNavigateHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: 'Soluções & Cidades', href: '#diretorio-seo' },
    { label: 'Dúvidas & Garantias', href: '#duvidas-seguranca' },
    { label: 'Raio-X Grátis', href: '#raio-x' },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    soundFx.playUiClick();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          >
            <SentinelLogo size="md" variant="light" />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={getLinkHref(link.href)}
                onClick={() => soundFx.playUiClick()}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-cyan-700 hover:bg-white transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct WhatsApp Call */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact();
              }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-xs tracking-wide shadow-md shadow-cyan-600/20 transition-all transform hover:scale-105 flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-6 py-6 backdrop-blur-2xl transition-all shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={getLinkHref(link.href)}
                onClick={() => {
                  soundFx.playUiClick();
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 text-sm font-semibold text-slate-800 hover:text-cyan-600 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs tracking-wide shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
