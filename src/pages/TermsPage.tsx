import type { MouseEvent } from 'react';
import { CONTATO_WHATSAPP_TEXT, SITE, whatsappHref } from '../data/companySite';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate('/');
  };

  return (
    <section className="bg-[#F4F7FB] pb-20 pt-28 sm:pt-32">
      <div className="mx-auto w-full max-w-[820px] px-5 sm:px-8">
        <a
          href="/"
          onClick={goHome}
          className="inline-flex text-sm font-bold text-[#1652AC] underline decoration-[#04D4E4] underline-offset-4"
        >
          ← Voltar ao início
        </a>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#343444] sm:text-4xl">
          Termos de Uso
        </h1>
        <p className="mt-3 text-sm text-[#3A4158]">
          Atualizados em novembro de 2026 · Sentinel Systems
        </p>

        <div className="mt-8 space-y-6 rounded-[24px] border border-[#D7E4F4] bg-white p-6 text-base leading-relaxed text-[#3A4158] sm:p-8">
          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">1. Objeto</h2>
            <p className="mt-2">
              Estes Termos de Uso regulam o acesso ao site institucional da Sentinel Systems ({SITE.url}) e às páginas das planilhas Valor Hora Real e CotaCasa.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">2. Projetos e orçamentos sob medida</h2>
            <p className="mt-2">
              Sites, sistemas web, cardápios digitais, automações e projetos de IA são desenvolvidos sob medida. Valores, prazos e entregas são definidos em proposta enviada após conversa pelo WhatsApp ou e-mail, sem compromisso até a aprovação formal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">3. Planilhas prontas</h2>
            <p className="mt-2">
              As planilhas Valor Hora Real e CotaCasa são produtos digitais entregues para uso pessoal ou do negócio do comprador, no Google Planilhas e no Excel. É vedada a revenda ou redistribuição comercial dos arquivos sem autorização.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">4. Propriedade intelectual</h2>
            <p className="mt-2">
              A marca, o logotipo, os textos e os códigos deste site pertencem à Sentinel Systems. Conteúdos e sistemas desenvolvidos sob encomenda seguem o que for estabelecido na proposta de cada projeto.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">5. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre estes termos podem ser esclarecidas diretamente com a equipe da Sentinel Systems:
            </p>
            <ul className="mt-3 space-y-1 text-sm font-semibold text-[#343444]">
              <li>
                WhatsApp:{' '}
                <a
                  href={whatsappHref(CONTATO_WHATSAPP_TEXT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1652AC] underline underline-offset-4"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                E-mail:{' '}
                <a href={`mailto:${SITE.email}`} className="text-[#1652AC] underline underline-offset-4">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsPage;
