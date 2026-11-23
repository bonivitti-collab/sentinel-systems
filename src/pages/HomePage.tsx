import {
  ArrowRight,
  Building2,
  ChevronDown,
  Church,
  FileSpreadsheet,
  MessageCircle,
  Scale,
  Wallet,
} from 'lucide-react';
import { SentinelLogo } from '../components/SentinelLogo';
import {
  CONTATO_WHATSAPP_TEXT,
  HOME_FAQS,
  HOME_PRODUCTS,
  SITE,
  whatsappHref,
  type HomeProduct,
} from '../data/companySite';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const SHELL = 'mx-auto w-full max-w-[1120px] px-5 sm:px-8';

const PRODUCT_ICON: Record<HomeProduct['id'], typeof Building2> = {
  'cotacasa-app': Building2,
  jurissigilo: Scale,
  'igreja-em-caminhada': Church,
  'financa-facil': Wallet,
  valorhora: FileSpreadsheet,
  'cotacasa-planilha': FileSpreadsheet,
};

const PRODUCT_TINT: Record<HomeProduct['id'], string> = {
  'cotacasa-app': 'bg-[#E7F9FB] text-[#1652AC]',
  jurissigilo: 'bg-[#E8EEF8] text-[#192B99]',
  'igreja-em-caminhada': 'bg-[#E8F2EE] text-[#2F6F5E]',
  'financa-facil': 'bg-[#E8F5EE] text-[#1F7A4D]',
  valorhora: 'bg-[#E7F9FB] text-[#1652AC]',
  'cotacasa-planilha': 'bg-[#EEEAF8] text-[#4A33B1]',
};

export function HomePage(_props: HomePageProps) {
  return (
    <div className="bg-[#F4F7FB] text-[#343444]">
      <section className="relative overflow-hidden border-b border-[#D7E4F4] bg-white">
        <div className="brand-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className={`${SHELL} relative grid items-center gap-10 pb-14 pt-28 sm:pb-20 sm:pt-36 lg:grid-cols-12 lg:gap-12`}>
          <div className="animate-fade-slide-up lg:col-span-7">
            <p className="inline-flex items-center rounded-full border border-[#D7E4F4] bg-[#F4F7FB] px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#1652AC] sm:text-sm">
              Soluções digitais e tecnologia · Atendimento em todo o Brasil
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,5.8vw,4.1rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#343444]">
              SaaS, planilhas e infoprodutos feitos para resolver problemas reais.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3A4158] sm:text-xl">
              A Sentinel Systems pesquisa, desenvolve e reúne produtos digitais próprios, para quem quer resolver o trabalho do dia a dia com tecnologia simples. Atendemos todo o Brasil.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#produtos"
                className="btn-brand inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl px-6 text-base font-bold shadow-sm sm:w-auto"
              >
                Ver produtos
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={whatsappHref(CONTATO_WHATSAPP_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-[#D7E4F4] bg-white px-6 text-base font-bold text-[#1652AC] transition-colors hover:bg-[#F4F7FB] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                Falar com a equipe
              </a>
            </div>
          </div>

          <aside className="animate-fade-slide-up flex items-center justify-center lg:col-span-5">
            <SentinelLogo mark size="hero" />
          </aside>
        </div>
      </section>

      <section id="produtos" className="scroll-mt-24 py-14 sm:py-20" aria-labelledby="produtos-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#1652AC]">Produtos</p>
          <h2 id="produtos-titulo" className="mt-3 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#343444]">
            Nossos produtos no ar
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#3A4158]">
            Softwares e planilhas desenvolvidos pela Sentinel Systems para uso direto, com acesso pelo endereço oficial de cada produto.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {HOME_PRODUCTS.map((product) => {
              const Icon = PRODUCT_ICON[product.id];
              return (
                <article
                  key={product.id}
                  className="flex h-full flex-col justify-between rounded-[24px] border border-[#D7E4F4] bg-white p-6 shadow-sm"
                >
                  <div>
                    <div
                      className={
                        product.id === 'igreja-em-caminhada'
                          ? 'flex flex-col items-start gap-3'
                          : 'flex items-start justify-between gap-4'
                      }
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.imageAlt ?? product.name}
                            width={56}
                            height={56}
                            loading="lazy"
                            decoding="async"
                            className={
                              product.id === 'jurissigilo'
                                ? 'h-14 w-14 shrink-0 rounded-2xl border border-[#D7E4F4] bg-white object-contain p-1'
                                : 'h-14 w-14 shrink-0 rounded-2xl border border-[#D7E4F4] object-cover'
                            }
                          />
                        ) : (
                          <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${PRODUCT_TINT[product.id]}`}>
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </span>
                        )}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-[#1652AC]">
                            {product.kindLabel}
                          </p>
                          <h3 className="mt-0.5 text-xl font-extrabold tracking-tight text-[#343444]">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      {product.priceLabel ? (
                        <div
                          className={
                            product.id === 'igreja-em-caminhada'
                              ? 'text-left'
                              : 'shrink-0 text-right'
                          }
                        >
                          <span className="inline-flex rounded-full bg-[#E8EEF8] px-3 py-1 text-sm font-extrabold text-[#192B99]">
                            {product.priceLabel}
                          </span>
                          {product.priceSuffix ? (
                            <p className="mt-1 text-xs font-semibold text-[#3A4158]">{product.priceSuffix}</p>
                          ) : null}
                        </div>
                      ) : null}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#3A4158] sm:text-base">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-2">
                    <a
                      href={product.href}
                      className="btn-brand inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold sm:w-auto"
                    >
                      {product.ctaLabel}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 border-y border-[#D7E4F4] bg-white py-16 sm:py-20" aria-labelledby="sobre-titulo">
        <div className={`${SHELL} max-w-3xl`}>
          <p className="text-sm font-bold text-[#1652AC]">Sobre</p>
          <h2 id="sobre-titulo" className="mt-3 text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#343444]">
            Empresa de soluções digitais e tecnologia
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#3A4158] sm:text-lg">
            A Sentinel Systems desenvolve produtos digitais próprios — entre aplicativos SaaS, planilhas e infoprodutos — pensados para simplificar rotinas reais com tecnologia direta. Atendemos todo o Brasil de forma remota.
          </p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-16 sm:py-20" aria-labelledby="faq-titulo">
        <div className={`${SHELL} max-w-3xl`}>
          <p className="text-sm font-bold text-[#1652AC]">Perguntas frequentes</p>
          <h2 id="faq-titulo" className="mt-3 text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#343444]">
            Dúvidas sobre a Sentinel e os produtos
          </h2>
          <div className="mt-8 divide-y divide-[#D7E4F4] rounded-[24px] border border-[#D7E4F4] bg-white px-6">
            {HOME_FAQS.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-bold text-[#343444] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#1652AC] transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-[#3A4158]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 pb-16 sm:pb-24" aria-labelledby="contato-titulo">
        <div className={SHELL}>
          <div className="rounded-[28px] border border-[#D7E4F4] bg-white px-6 py-10 shadow-sm sm:px-12 sm:py-14">
            <p className="text-sm font-bold text-[#1652AC]">Contato · Atendimento em todo o Brasil</p>
            <h2 id="contato-titulo" className="mt-3 max-w-xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#343444]">
              Fale com a equipe Sentinel Systems
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#3A4158]">
              Tem alguma dúvida sobre o CotaCasa, o JurisSigilo, o Igreja em Caminhada, o Finança Fácil ou uma de nossas planilhas? Chame no WhatsApp ou envie um e-mail.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappHref(CONTATO_WHATSAPP_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl px-6 text-base font-bold shadow-sm sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                Falar no WhatsApp · {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#D7E4F4] bg-[#F4F7FB] px-6 text-base font-bold text-[#1652AC] hover:bg-[#E7F9FB]"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
