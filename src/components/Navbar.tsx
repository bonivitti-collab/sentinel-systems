import { useSyncExternalStore, useState, type MouseEvent } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { NEUTRAL_WHATSAPP_TEXT, whatsappHref } from '../data/companySite';
import { SentinelLogo } from './SentinelLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const LINKS = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#exemplos', label: 'Exemplos' },
  { href: '/#precos', label: 'Preços' },
] as const;

function useHash() {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener('hashchange', onStoreChange);
      window.addEventListener('popstate', onStoreChange);
      return () => {
        window.removeEventListener('hashchange', onStoreChange);
        window.removeEventListener('popstate', onStoreChange);
      };
    },
    () => window.location.hash,
    () => '',
  );
}

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const hash = useHash();

  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    onNavigate(href);
  };

  const active = (href: string) => currentPath === '/' && hash === href.slice(1);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between gap-3 px-5 sm:px-8">
        <a href="/" onClick={(event) => go(event, '/')} className="min-w-0 shrink" aria-label="Sentinel Systems, início">
          <SentinelLogo size="sm" variant="light" />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? 'true' : undefined}
              onClick={(event) => go(event, link.href)}
              className={`inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-bold ${
                active(link.href) ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappHref(NEUTRAL_WHATSAPP_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#128C7E] px-4 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={whatsappHref(NEUTRAL_WHATSAPP_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#128C7E] text-white"
            aria-label="Chamar no WhatsApp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-slate-200 bg-white px-5 py-3 md:hidden" aria-label="Menu">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => go(event, link.href)}
              className="flex min-h-14 items-center text-lg font-bold text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
