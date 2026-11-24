import type { MouseEvent } from 'react';
import { CONTATO_WHATSAPP_TEXT, SITE, whatsappHref } from '../data/companySite';
import { SentinelLogo } from './SentinelLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const SECTIONS = [
  { href: '/#produtos', label: 'Produtos' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#faq', label: 'Perguntas frequentes' },
  { href: '/#contato', label: 'Contato' },
  { href: '/privacidade', label: 'Privacidade' },
  { href: '/termos', label: 'Termos' },
] as const;

const YEAR = 2026;

export function Footer({ onNavigate }: FooterProps) {
  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto:')) return;
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="border-t border-[#D7E4F4] bg-white pb-16 pt-12 text-[#3A4158]">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-2 gap-x-6 gap-y-8 px-5 sm:px-8 md:grid-cols-12 md:gap-10">
        <div className="col-span-2 md:col-span-7">
          <SentinelLogo size="sm" variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Empresa de soluções digitais e tecnologia: desenvolve e reúne SaaS, planilhas e infoprodutos próprios, com atendimento em todo o Brasil.
          </p>
          <a
            href={whatsappHref(CONTATO_WHATSAPP_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center text-sm font-bold text-[#1652AC]"
          >
            {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm break-all text-[#3A4158]">
            {SITE.email}
          </a>
        </div>

        <div className="md:col-span-5">
          <h2 className="text-xs font-extrabold uppercase tracking-wide text-[#1652AC]">No site</h2>
          <ul className="mt-3 space-y-1">
            {SECTIONS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(event) => go(event, link.href)} className="inline-flex min-h-10 items-center text-sm font-semibold text-[#343444] hover:text-[#1652AC]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5 text-xs text-[#3A4158] sm:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>© {YEAR} Sentinel Systems</span>
          <span>CNPJ 70.280.738/0001-35</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/privacidade" onClick={(event) => go(event, '/privacidade')} className="font-semibold text-[#3A4158] underline-offset-4 hover:text-[#1652AC] hover:underline">
            Privacidade
          </a>
          <a href="/termos" onClick={(event) => go(event, '/termos')} className="font-semibold text-[#3A4158] underline-offset-4 hover:text-[#1652AC] hover:underline">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
