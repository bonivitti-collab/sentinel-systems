import type { MouseEvent } from 'react';
import { CONTATO_WHATSAPP_TEXT, SITE, whatsappHref } from '../data/companySite';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
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
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-[#3A4158]">
          Atualizada em novembro de 2026 · Sentinel Systems
        </p>

        <div className="mt-8 space-y-6 rounded-[24px] border border-[#D7E4F4] bg-white p-6 text-base leading-relaxed text-[#3A4158] sm:p-8">
          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">1. Quem somos</h2>
            <p className="mt-2">
              A Sentinel Systems é uma empresa de soluções digitais e tecnologia que desenvolve e reúne SaaS, planilhas e infoprodutos próprios, com atendimento em todo o Brasil.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">2. Dados que tratamos</h2>
            <p className="mt-2">
              Este site institucional não possui formulário de cadastro nem exige criação de conta para navegação. Quando você entra em contato voluntariamente pelo WhatsApp ou por e-mail, tratamos apenas as informações que você envia (como nome, telefone, e-mail e sua dúvida) para responder à sua solicitação sobre nossos produtos digitais.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">3. Aplicativos SaaS e planilhas</h2>
            <p className="mt-2">
              Os aplicativos SaaS (como o CotaCasa, o JurisSigilo, o Igreja em Caminhada e o Finança Fácil) possuem ambientes próprios de acesso e uso. A aquisição das planilhas Valor Hora Real e CotaCasa ocorre em ambiente externo da plataforma Kiwify, que possui sua própria política de privacidade e processa os dados de pagamento com segurança.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">4. Compartilhamento e retenção</h2>
            <p className="mt-2">
              Não vendemos nem compartilhamos seus dados de contato com terceiros para fins publicitários. As mensagens trocadas são mantidas apenas pelo tempo necessário para o atendimento e suporte aos produtos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#343444]">5. Seus direitos (LGPD)</h2>
            <p className="mt-2">
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar confirmação de tratamento, acesso, correção ou exclusão dos seus dados de contato a qualquer momento pelos canais abaixo:
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

export default PrivacyPage;
