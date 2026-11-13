import type { MouseEvent } from 'react';
import { FERRAMENTAS } from '../data/ferramentas';
import { PUBLISHED_GUIDES } from '../data/publishedGuides';
import { NEUTRAL_WHATSAPP_TEXT, SITE, whatsappHref } from '../data/companySite';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const SECTIONS = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#exemplos', label: 'Exemplos' },
  { href: '/#precos', label: 'Preços' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#perguntas', label: 'Perguntas' },
  { href: '/#contato', label: 'Contato' },
] as const;

const YEAR = 2026;

export function Footer({ onNavigate }: FooterProps) {
  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) return;
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="border-t border-slate-200 bg-white pb-24 pt-12 text-slate-600">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-base font-extrabold text-slate-950">Sentinel Systems</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Site, Google Meu Negócio, WhatsApp, Instagram e vídeos para o pequeno negócio ser encontrado e receber mais chamados.
          </p>
          <a
            href={whatsappHref(NEUTRAL_WHATSAPP_TEXT)}
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

        <div className="md:col-span-3">
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

        <div className="md:col-span-3">
          <h2 className="text-xs font-extrabold uppercase tracking-wide text-slate-400">Guias</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <a href="/guias" onClick={(event) => go(event, '/guias')} className="inline-flex min-h-10 items-center text-sm font-semibold text-slate-800">
                Todos os guias
              </a>
            </li>
            {PUBLISHED_GUIDES.map((guide) => (
              <li key={guide.slug}>
                <a href={guide.slug} onClick={(event) => go(event, guide.slug)} className="inline-flex min-h-10 items-center text-sm text-slate-700">
                  {guide.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xs font-extrabold uppercase tracking-wide text-slate-400">Ferramentas</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <a href="/ferramentas" onClick={(event) => go(event, '/ferramentas')} className="inline-flex min-h-10 items-center text-sm font-semibold text-slate-800">
                Planilhas
              </a>
            </li>
            {FERRAMENTAS.map((item) => (
              <li key={item.id}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center text-sm text-slate-700">
                  {item.name} · {item.priceLabel}
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
