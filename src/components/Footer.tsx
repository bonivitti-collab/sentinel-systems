import React from 'react';
import { SentinelLogo } from './SentinelLogo';
import { ArrowUp, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact: _onOpenContact, onNavigate }) => {
  const scrollToTop = () => {
    soundFx.playUiClick();
    const mainEl = document.getElementById('main-content-scroll');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    soundFx.playUiClick();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    const mainEl = document.getElementById('main-content-scroll');
    if (mainEl) {
      mainEl.scrollTop = 0;
    }
  };

  return (
    <footer className="relative bg-white text-slate-600 pt-12 pb-10 overflow-hidden border-t border-slate-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid - Perfect Alignment Across Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          
          {/* Column 1: Brand Info (4 of 12 cols = 33% width for generous text space) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="h-7 flex items-center mb-4">
              <SentinelLogo size="md" variant="light" />
            </div>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Infraestrutura digital, criação de sites ultrarrápidos e robôs inteligentes de atendimento no WhatsApp para empresas de todo o Brasil.
            </p>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                <span>Atendimento Oficial em Todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions / Navegação (2 of 12 cols = 17% width) */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <div className="h-7 flex items-center mb-4">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Navegação
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
              <li>
                <a href="/sites" onClick={(e) => handleLink(e, '/sites')} className="hover:text-cyan-700 transition-colors">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="/automacao" onClick={(e) => handleLink(e, '/automacao')} className="hover:text-emerald-700 transition-colors">
                  Robôs de WhatsApp
                </a>
              </li>
              <li>
                <a href="/quem-somos" onClick={(e) => handleLink(e, '/quem-somos')} className="hover:text-slate-900 transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="/blog" onClick={(e) => handleLink(e, '/blog')} className="hover:text-slate-900 transition-colors">
                  Blog & Estratégias
                </a>
              </li>
              <li>
                <a href="/contato" onClick={(e) => handleLink(e, '/contato')} className="hover:text-slate-900 transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Guarantees (3 of 12 cols = 25% width) */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <div className="h-7 flex items-center mb-4">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Garantias Sentinel
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Domínio 100% no seu nome (CPF)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Hospedagem em Nuvem Edge Global</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sem multas de fidelidade</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Alterações mensais inclusas</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Direct (3 of 12 cols = 25% width) */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <div className="h-7 flex items-center mb-4">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Atendimento Comercial
              </h4>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <a
                href="https://wa.me/5522999726069?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20empresa!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                className="flex items-center gap-2 hover:text-emerald-700 font-semibold transition-colors text-slate-800"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>(22) 99972-6069</span>
              </a>

              <a
                href="mailto:sentinelsystemsai@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-700 font-medium transition-colors text-slate-700 truncate"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>sentinelsystemsai@gmail.com</span>
              </a>

              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 leading-snug">
                Atendimento digital para empresas e comércios em todos os estados do Brasil.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Sentinel Systems. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer shadow-2xs"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-600" />
              <span>Voltar ao topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
