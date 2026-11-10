import { type MouseEvent } from 'react';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { MENU_LINKS, SERVICES, SITE, whatsappHref } from '../data/companySite';
import { soundFx } from './SoundEffects';
import { SentinelLogo } from './SentinelLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    soundFx.playUiClick();
    onNavigate(href);
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 pt-12 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          <div className="lg:col-span-4">
            <a href="/" onClick={(event) => go(event, '/')} aria-label="Sentinel Systems — início">
              <SentinelLogo size="sm" variant="light" />
            </a>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-sm">
              Criação de site e cuidado com o Google Meu Negócio para negócios locais no Brasil.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">Páginas</h2>
            <ul className="space-y-2.5 text-sm">
              {MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(event) => go(event, link.href)} className="hover:text-cyan-700">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">Serviços</h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/servicos#${service.id}`}
                    onClick={(event) => go(event, `/servicos#${service.id}`)}
                    className="hover:text-cyan-700"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">Contato</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-emerald-700"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-cyan-700 break-all">
                  <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="text-xs text-slate-500 leading-relaxed">
                Atendimento digital para negócios no Brasil.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Sentinel Systems. Todos os direitos reservados.</p>
          <button
            type="button"
            onClick={() => {
              soundFx.playUiClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-600 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-600" />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
