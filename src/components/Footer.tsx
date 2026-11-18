import type { MouseEvent } from 'react';
import { CONTATO_WHATSAPP_TEXT, SITE, whatsappHref } from '../data/companySite';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const SECTIONS = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#como-trabalhamos', label: 'Como trabalhamos' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#contato', label: 'Contato' },
] as const;

const YEAR = 2026;

export function Footer({ onNavigate }: FooterProps) {
  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto:')) return;
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="border-t border-slate-200 bg-white pb-24 pt-12 text-slate-600">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-2 gap-x-6 gap-y-8 px-5 sm:px-8 md:grid-cols-12 md:gap-10">
        <div className="col-span-2 md:col-span-7">
          <p className="text-base font-extrabold text-slate-950">Sentinel Systems</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Empresa de soluções digitais: sites, sistemas web, automações, integrações e inteligência artificial aplicada a negócios.
          </p>
          <a
            href={whatsappHref(CONTATO_WHATSAPP_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center text-sm font-bold text-slate-950"
          >
            {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm break-all">
            {SITE.email}
          </a>
        </div>

        <div className="md:col-span-5">
          <h2 className="text-xs font-extrabold uppercase tracking-wide text-slate-400">No site</h2>
          <ul className="mt-3 space-y-1">
            {SECTIONS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(event) => go(event, link.href)} className="inline-flex min-h-10 items-center text-sm font-semibold text-slate-800">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-[1120px] px-5 text-xs text-slate-400 sm:px-8">
        © {YEAR} Sentinel Systems
      </div>
    </footer>
  );
}

export default Footer;
