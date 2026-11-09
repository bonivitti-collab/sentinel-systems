import { useEffect, useState, type MouseEvent } from 'react';
import { Menu, MessageCircle, Volume2, VolumeX, X } from 'lucide-react';
import { GUIAS_LINK, NAV_LINKS, whatsappHref } from '../data/companySite';
import { soundFx } from './SoundEffects';
import { SentinelLogo } from './SentinelLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const links = [...NAV_LINKS, GUIAS_LINK];
  const isActive = (href: string) =>
    href === '/guias' ? currentPath === '/guias' || currentPath.startsWith('/guias/') : href === currentPath;

  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    soundFx.playUiClick();
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  const toggleSound = () => {
    const nextMuted = !isMuted;
    soundFx.setMuted(nextMuted);
    setIsMuted(nextMuted);
    if (!nextMuted) soundFx.playUiClick();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs'
          : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 min-h-16 py-2">
          <a
            href="/"
            onClick={(event) => go(event, '/')}
            className="flex items-center min-w-0 shrink"
            aria-label="Sentinel Systems — início"
          >
            <SentinelLogo size="sm" variant="light" />
          </a>

          <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90" aria-label="Principal">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={(event) => go(event, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active ? 'bg-white text-cyan-800 shadow-xs' : 'text-slate-700 hover:text-cyan-700 hover:bg-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleSound}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 cursor-pointer"
              aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-700" />}
            </button>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wide"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir proposta</span>
            </a>

            <button
              type="button"
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="menu-mobile"
              onClick={() => {
                soundFx.playUiClick();
                setMobileMenuOpen((open) => !open);
              }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">{mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="menu-mobile"
          className="lg:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-white border-b border-slate-200 px-4 pt-2 pb-4 shadow-xl"
          aria-label="Menu móvel"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={(event) => go(event, link.href)}
                  className={`px-4 py-3 rounded-2xl text-sm font-semibold ${
                    active ? 'bg-cyan-50 text-cyan-800' : 'text-slate-800 hover:bg-cyan-50 hover:text-cyan-700'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider text-center"
            >
              Quero uma proposta
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
