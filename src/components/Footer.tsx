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
    <footer className="relative bg-white text-slate-600 pt-14 pb-10 overflow-hidden border-t border-slate-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-100">
          
          {/* Brand info */}
          <div className="space-y-4">
            <SentinelLogo size="md" variant="light" />

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm pt-1">
              Infraestrutura digital, criação de sites ultrarrápidos e robôs inteligentes de atendimento no WhatsApp para empresas de todo o Brasil.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Atendimento Oficial via WhatsApp & E-mail</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">
              Navegação Institucional
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
              <li>
                <a href="/sites" onClick={(e) => handleLink(e, '/sites')} className="hover:text-cyan-700 transition-colors">
                  Criação de Sites Profissionais
                </a>
              </li>
              <li>
                <a href="/automacao" onClick={(e) => handleLink(e, '/automacao')} className="hover:text-emerald-700 transition-colors">
                  Robôs de Atendimento no WhatsApp
                </a>
              </li>
              <li>
                <a href="/quem-somos" onClick={(e) => handleLink(e, '/quem-somos')} className="hover:text-slate-900 transition-colors">
                  Quem Somos & Engenharia
                </a>
              </li>
              <li>
                <a href="/blog" onClick={(e) => handleLink(e, '/blog')} className="hover:text-slate-900 transition-colors">
                  Blog & Estratégias de Vendas
                </a>
              </li>
              <li>
                <a href="/contato" onClick={(e) => handleLink(e, '/contato')} className="hover:text-slate-900 transition-colors">
                  Fale Conosco & Orçamentos
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Guarantees */}
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">
              Garantias Sentinel
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Domínio 100% no seu nome (CPF)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hospedagem em Nuvem Edge Global</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sem multas de fidelidade</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Alterações mensais inclusas</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">
              Atendimento Comercial
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <a
                href="https://wa.me/5522999726069?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20empresa!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                className="flex items-center gap-2 hover:text-emerald-700 font-semibold transition-colors text-slate-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>(22) 99972-6069 (WhatsApp)</span>
              </a>

              <a
                href="mailto:sentinelsystemsai@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-700 font-medium transition-colors text-slate-700"
              >
                <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>sentinelsystemsai@gmail.com</span>
              </a>

              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
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
              className="px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
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
