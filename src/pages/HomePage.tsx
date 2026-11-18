import type { ReactNode } from 'react';
import { Check, Globe, Link2, MessageCircle, Sparkles, SquareTerminal } from 'lucide-react';
import {
  CONTATO_WHATSAPP_TEXT,
  ORCAMENTO_WHATSAPP_TEXT,
  SITE,
  whatsappHref,
} from '../data/companySite';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const SHELL = 'mx-auto w-full max-w-[1120px] px-5 sm:px-8';

const SERVICES = [
  {
    title: 'Sites',
    text: 'Sites institucionais e páginas do negócio, feitos para abrir bem no celular e apresentar o que a empresa faz com clareza.',
    icon: Globe,
  },
  {
    title: 'Sistemas web',
    text: 'Sistemas no navegador para organizar processos, dados e o trabalho do time, no ritmo da operação.',
    icon: SquareTerminal,
  },
  {
    title: 'Automações e integrações',
    text: 'Ligamos ferramentas e tarefas repetitivas para o trabalho fluir com menos retrabalho manual.',
    icon: Link2,
  },
  {
    title: 'IA aplicada a negócios',
    text: 'Usamos inteligência artificial de forma prática, no que realmente ajuda a rotina e a decisão do negócio.',
    icon: Sparkles,
  },
] as const;

const STEPS = [
  {
    title: 'Você conta o que precisa',
    text: 'O objetivo, o contexto e o prazo, do jeito que já estiver claro.',
  },
  {
    title: 'A gente propõe o caminho',
    text: 'Analisamos o pedido e devolvemos um escopo objetivo para orçar o projeto.',
  },
  {
    title: 'Desenvolvemos e entregamos',
    text: 'Seguimos o combinado, com acompanhamento até a entrega.',
  },
] as const;

const HIGHLIGHTS = [
  'Sites e sistemas web sob medida',
  'Automações e integrações entre ferramentas',
  'Inteligência artificial aplicada ao negócio',
] as const;

function WaLink({
  href,
  children,
  tone = 'green',
}: {
  href: string;
  children: ReactNode;
  tone?: 'green' | 'light';
}) {
  const toneClass =
    tone === 'light'
      ? 'bg-white text-slate-950 hover:bg-slate-100'
      : 'bg-[#128C7E] text-white hover:bg-[#0e7a68]';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl px-6 text-base font-bold shadow-sm sm:w-auto ${toneClass}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
}

export function HomePage(_props: HomePageProps) {
  return (
    <div className="bg-[#f7f6f3] text-slate-950">
      <section className="border-b border-slate-200/80 bg-white">
        <div className={`${SHELL} grid items-end gap-8 pb-8 pt-24 sm:pb-16 sm:pt-32 lg:grid-cols-12`}>
          <div className="lg:col-span-7">
            <p className="text-sm font-bold text-[#0e7490]">Empresa de soluções digitais</p>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">
              Soluções digitais para o seu negócio
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              A Sentinel Systems desenvolve sites, sistemas web, automações, integrações e inteligência artificial aplicada a negócios.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WaLink href={whatsappHref(ORCAMENTO_WHATSAPP_TEXT)}>Orçar projeto</WaLink>
              <a
                href={whatsappHref(CONTATO_WHATSAPP_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl px-2 text-base font-bold text-slate-800 underline decoration-slate-300 underline-offset-4"
              >
                Entrar em contato
              </a>
            </div>
          </div>
          <aside className="hidden rounded-[28px] border border-slate-200 bg-[#f7f6f3] p-6 sm:p-8 lg:col-span-5 lg:block">
            <p className="text-sm font-bold text-[#0e7490]">O que fazemos</p>
            <ul className="mt-4 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex gap-3 text-base font-semibold leading-snug text-slate-950">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#128C7E]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-24 py-8 sm:py-20" aria-labelledby="servicos-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#0e7490]">O que fazemos</p>
          <h2 id="servicos-titulo" className="mt-3 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Quatro frentes para resolver o que o seu negócio precisa
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="flex min-w-0 flex-col rounded-[20px] border border-slate-200 bg-white p-4 sm:p-5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfeff] text-[#0e7490]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold tracking-tight">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-trabalhamos" className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-24" aria-labelledby="como-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#0e7490]">Como trabalhamos</p>
          <h2 id="como-titulo" className="mt-3 text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Três passos
          </h2>
          <ol className="mt-10 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="min-w-0 rounded-[20px] border border-slate-200 bg-[#f7f6f3] p-6">
                <p className="text-sm font-extrabold text-[#0e7490]">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="sobre-titulo">
        <div className={`${SHELL} max-w-3xl`}>
          <p className="text-sm font-bold text-[#0e7490]">Sobre</p>
          <h2 id="sobre-titulo" className="mt-3 text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Uma empresa de soluções digitais
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            A Sentinel Systems desenvolve sites, sistemas web, automações, integrações e projetos de inteligência artificial aplicada a negócios. Cada projeto começa pelo que você precisa resolver, com um orçamento combinado antes do trabalho começar.
          </p>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 pb-16 sm:pb-24" aria-labelledby="contato-titulo">
        <div className={SHELL}>
          <div className="rounded-[28px] bg-slate-950 px-6 py-12 text-white sm:px-12 sm:py-16">
            <p className="text-sm font-bold text-[#67e8f9]">Contato</p>
            <h2 id="contato-titulo" className="mt-3 max-w-xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
              Vamos conversar sobre o seu projeto
            </h2>
            <p className="mt-4 text-lg font-semibold">{SITE.phoneDisplay}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
              Chame no WhatsApp para orçar um projeto ou tirar uma dúvida.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WaLink href={whatsappHref(ORCAMENTO_WHATSAPP_TEXT)} tone="light">
                Orçar projeto
              </WaLink>
              <a
                href={whatsappHref(CONTATO_WHATSAPP_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl px-2 text-base font-bold text-white underline decoration-slate-500 underline-offset-4"
              >
                Entrar em contato
              </a>
            </div>
            <a href={`mailto:${SITE.email}`} className="mt-5 inline-flex text-sm font-semibold text-slate-300 underline underline-offset-4">
              {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
