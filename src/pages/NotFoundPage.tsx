import type { MouseEvent } from 'react';
import { CONTATO_WHATSAPP_TEXT, whatsappHref } from '../data/companySite';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

const LINKS = [
  { href: '/', label: 'Início' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#como-trabalhamos', label: 'Como trabalhamos' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#contato', label: 'Contato' },
] as const;

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <section className="bg-[#F4F7FB] pb-20 pt-32">
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#343444]">Esse endereço não existe</h1>
        <p className="mt-4 text-lg leading-relaxed text-[#3A4158]">
          Volte ao início ou chame no WhatsApp. A gente conversa sobre o seu projeto.
        </p>
        <a
          href={whatsappHref(CONTATO_WHATSAPP_TEXT)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-2xl btn-brand px-6 text-base font-bold text-white sm:w-auto"
        >
          Entrar em contato
        </a>
        <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => go(event, link.href)}
                className="flex min-h-12 items-center rounded-2xl border border-[#D7E4F4] bg-white px-4 text-sm font-bold text-[#343444]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
