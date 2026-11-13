import { useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { ArrowUpRight, Check, Globe, MapPin, MessageCircle, Minus, Video } from 'lucide-react';
import {
  EXAMPLE_VIDEOS,
  FAQ,
  NEUTRAL_WHATSAPP_TEXT,
  SERVICES_WHATSAPP_TEXT,
  SITE,
  whatsappHref,
} from '../data/companySite';
import { SITE_EXCLUDED, SITE_INCLUDED, VIDEO_EXCLUDED, VIDEO_INCLUDED, VIDEO_PACKAGES } from '../data/offers';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const SHELL = 'mx-auto w-full max-w-[1120px] px-5 sm:px-8';

function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SERVICES = [
  {
    title: 'Site profissional',
    text: 'Uma página no celular com o que você faz, onde atende e o botão para chamar. Quem te acha entende e liga.',
    price: '12x de R$ 50',
    icon: Globe,
  },
  {
    title: 'Google Meu Negócio',
    text: 'Perfil da Empresa no Google: nome, mapa, horário, fotos e telefone para quem pesquisa o serviço na sua região.',
    price: 'Entra no site',
    icon: MapPin,
  },
  {
    title: 'Atendimento no WhatsApp',
    text: 'O número fica à vista no site e no perfil. Quem já decidiu falar chama na hora.',
    price: 'Entra no site',
    icon: MessageCircle,
  },
  {
    title: 'Cuidamos do seu Instagram',
    text: 'O perfil mostra o que você faz e leva até o WhatsApp. Quem acompanha vê o trabalho e chama.',
    price: 'Orçamento pelo WhatsApp',
    icon: InstagramMark,
  },
  {
    title: 'Vídeos com IA',
    text: 'Você manda as fotos pelo WhatsApp e recebe vídeos prontos para o Instagram e o Status, sem filmar e sem editar.',
    price: 'A partir de R$ 397',
    icon: Video,
  },
] as const;

const SITE_EXAMPLES = [
  {
    name: 'Brasa & Folha',
    kind: 'Restaurante',
    href: '/demos/brasa-folha/index.html',
    src: '/modelos/brasa-folha-t461.webp',
    alt: 'Exemplo de site para restaurante, com pratos e reserva',
  },
  {
    name: 'Casa Linho',
    kind: 'Boutique',
    href: '/demos/casa-linho/index.html',
    src: '/modelos/casa-linho-t461.webp',
    alt: 'Exemplo de site para boutique, com catálogo de peças',
  },
  {
    name: 'Salão Aurora',
    kind: 'Salão',
    href: '/demos/salao-aurora/index.html',
    src: '/modelos/salao-aurora-t461.webp',
    alt: 'Exemplo de site para salão, com serviços e horário',
  },
] as const;

const STEPS = [
  {
    title: 'Você conta o seu negócio',
    text: 'O que vende, em que cidade, e se as pessoas ligam, chamam no WhatsApp ou aparecem na porta.',
  },
  {
    title: 'A gente monta o caminho',
    text: 'Site, Perfil da Empresa no Google, WhatsApp, Instagram ou vídeo, do jeito que o seu cliente procura.',
  },
  {
    title: 'O cliente te acha e chama',
    text: 'A página abre no celular, o contato fica visível e a conversa segue no mesmo WhatsApp.',
  },
] as const;

function goTo(event: MouseEvent<HTMLAnchorElement>, href: string, onNavigate: (path: string) => void) {
  if (href.startsWith('http') || href.startsWith('/demos/') || href.endsWith('.mp4')) return;
  event.preventDefault();
  onNavigate(href);
}

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

function ExampleVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const [play, setPlay] = useState(false);
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-2xl bg-slate-950 aspect-[9/16]">
        {play ? (
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
            className="h-full w-full object-cover"
            aria-label={`Vídeo de exemplo para ${label}`}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            className="relative block h-full w-full cursor-pointer"
          >
            <img
              src={poster}
              alt={`Cena ilustrativa de ${label.toLowerCase()}, feita com IA`}
              width={540}
              height={960}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-x-0 bottom-0 flex min-h-14 items-center justify-center bg-slate-950/80 text-sm font-bold text-white">
              Ver o vídeo
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">
        <span className="block font-bold text-slate-950">{label}</span>
        Cena ilustrativa feita com IA
      </figcaption>
    </figure>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  const jump = (event: MouseEvent<HTMLAnchorElement>, href: string) => goTo(event, href, onNavigate);

  return (
    <div className="bg-[#f7f6f3] text-slate-950">
      <section className="border-b border-slate-200/80 bg-white">
        <div className={`${SHELL} grid items-end gap-10 pb-16 pt-28 sm:pb-24 sm:pt-32 lg:grid-cols-12`}>
          <div className="lg:col-span-7">
            <p className="text-sm font-bold text-[#0e7490]">Para o comércio da sua cidade</p>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">
              Seu cliente te procura e não te acha
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Seja encontrado no Google e receba mais ligações e mensagens no WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WaLink href={whatsappHref(SERVICES_WHATSAPP_TEXT)}>Chamar no WhatsApp</WaLink>
              <a
                href="/#precos"
                onClick={(event) => jump(event, '/#precos')}
                className="inline-flex min-h-14 items-center justify-center rounded-2xl px-2 text-base font-bold text-slate-800 underline decoration-slate-300 underline-offset-4"
              >
                Ver preços
              </a>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-500">{SITE.phoneDisplay}</p>
          </div>
          <aside className="rounded-[28px] border border-slate-200 bg-[#f7f6f3] p-6 sm:p-8 lg:col-span-5">
            <p className="text-sm font-bold text-[#0e7490]">O resultado</p>
            <ul className="mt-4 space-y-4">
              {['Seu nome no Google, com mapa e horário', 'Uma página que abre no celular', 'WhatsApp visível na hora de chamar'].map((item) => (
                <li key={item} className="flex gap-3 text-base font-semibold leading-snug text-slate-950">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#128C7E]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">Site em 12x de R$ 50</p>
          </aside>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="servicos-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#0e7490]">O que fazemos</p>
          <h2 id="servicos-titulo" className="mt-3 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Cinco jeitos de o cliente te achar e chamar
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const span = index < 3 ? 'xl:col-span-2' : 'xl:col-span-3';
              const wide = index === 4 ? 'sm:col-span-2 xl:col-span-3' : '';
              return (
                <article
                  key={service.title}
                  className={`flex min-w-0 flex-col rounded-[20px] border border-slate-200 bg-white p-6 ${span} ${wide}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfeff] text-[#0e7490]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.text}</p>
                  <p className="mt-5 text-sm font-bold text-slate-950">{service.price}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="exemplos" className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-24" aria-labelledby="exemplos-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#0e7490]">Exemplos</p>
          <h2 id="exemplos-titulo" className="mt-3 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Veja o site no celular e o vídeo pronto para postar
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Restaurante, boutique, salão e pousada. Abra cada exemplo.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SITE_EXAMPLES.map((example) => (
              <a
                key={example.href}
                href={example.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-w-0 overflow-hidden rounded-[20px] border border-slate-200 bg-[#f7f6f3]"
              >
                <img
                  src={example.src}
                  alt={example.alt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-center"
                />
                <span className="flex min-h-16 items-center justify-between gap-3 px-4 py-3">
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-[#0e7490]">{example.kind}</span>
                    <span className="block text-base font-extrabold text-slate-950">{example.name}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-slate-950" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>

          <h3 className="mt-14 text-xl font-extrabold tracking-tight">Vídeos de exemplo</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Restaurante, boutique e pousada. O som começa desligado.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:max-w-3xl">
            {EXAMPLE_VIDEOS.map((video) => (
              <ExampleVideo key={video.id} src={video.src} poster={video.poster} label={video.label} />
            ))}
          </div>
        </div>
      </section>

      <section id="precos" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="precos-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#0e7490]">Preços</p>
          <h2 id="precos-titulo" className="mt-3 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Quanto custa
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Site, vídeos, Instagram, Google e WhatsApp. O valor está aqui.
          </p>

          <article className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="bg-slate-950 px-6 py-8 text-white sm:px-8 lg:col-span-5">
                <p className="text-sm font-bold text-[#67e8f9]">Site</p>
                <p className="mt-4 text-sm font-semibold text-slate-300">12x de</p>
                <p className="text-6xl font-extrabold tracking-[-0.04em]">R$ 50</p>
                <p className="mt-2 text-lg font-bold">Total de R$ 600</p>
                <p className="mt-3 text-base leading-relaxed text-slate-200">
                  ou R$ 540 à vista, com 10% de desconto nesta primeira contratação.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Renovação opcional de R$ 180 por ano, só domínio e hospedagem.
                </p>
                <div className="mt-8">
                  <WaLink href={whatsappHref()} tone="light">
                    Quero esse site
                  </WaLink>
                </div>
              </div>
              <div className="grid gap-8 px-6 py-8 sm:px-8 lg:col-span-7 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">Entra</h3>
                  <ul className="mt-4 space-y-3">
                    {SITE_INCLUDED.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#128C7E]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">Não entra</h3>
                  <ul className="mt-4 space-y-3">
                    {SITE_EXCLUDED.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="mt-4 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight">Vídeos com IA</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              No máximo metade dos vídeos do mês com pessoas (2 no Básico, 4 no Completo).
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {VIDEO_PACKAGES.map((pack) => (
                <div key={pack.id} className="flex min-w-0 flex-col rounded-[20px] border border-slate-200 bg-[#f7f6f3] p-5">
                  <h4 className="text-lg font-extrabold">{pack.name}</h4>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight">{pack.price}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{pack.detail}</p>
                  <a
                    href={whatsappHref(pack.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-4 text-sm font-bold text-white"
                  >
                    Quero o {pack.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-extrabold text-slate-950">Todo vídeo inclui</h4>
                <ul className="mt-3 space-y-2">
                  {VIDEO_INCLUDED.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#128C7E]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-950">Não inclui</h4>
                <ul className="mt-3 space-y-2">
                  {VIDEO_EXCLUDED.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-700">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <article className="rounded-[20px] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-extrabold">Gestão de Instagram</h3>
              <p className="mt-3 text-2xl font-extrabold tracking-tight">Orçamento pelo WhatsApp</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Conta o que você precisa e a gente monta junto um plano que cabe no seu bolso.
              </p>
              <a
                href={whatsappHref('Olá! Vim pelo site da Sentinel. Quero conversar sobre as redes do meu negócio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#128C7E] px-4 text-sm font-bold text-white"
              >
                Montar o plano
              </a>
            </article>
            <article className="rounded-[20px] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-extrabold">Google Meu Negócio</h3>
              <p className="mt-3 text-2xl font-extrabold tracking-tight">Entra no site</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A configuração básica do Perfil da Empresa entra na criação do site, quando o seu negócio pode ter perfil. O perfil no Google é gratuito.
              </p>
              <a
                href={whatsappHref('Olá! Vim pelo site da Sentinel. Quero conversar sobre o Perfil da Empresa no Google.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-4 text-sm font-bold text-white"
              >
                Conversar sobre o perfil
              </a>
            </article>
            <article className="rounded-[20px] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-extrabold">WhatsApp</h3>
              <p className="mt-3 text-2xl font-extrabold tracking-tight">Entra no site</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                O botão fica no site e no perfil. Para um atendimento feito do seu jeito, o caminho é orçamento pelo WhatsApp.
              </p>
              <a
                href={whatsappHref('Olá! Vim pelo site da Sentinel. Quero conversar sobre o WhatsApp do meu negócio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-4 text-sm font-bold text-white"
              >
                Orçamento pelo WhatsApp
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-24" aria-labelledby="como-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#0e7490]">Como funciona</p>
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

      <section id="perguntas" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="perguntas-titulo">
        <div className={`${SHELL} max-w-3xl`}>
          <p className="text-sm font-bold text-[#0e7490]">Perguntas</p>
          <h2 id="perguntas-titulo" className="mt-3 text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Antes de chamar
          </h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQ.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-xl font-normal text-slate-400 group-open:hidden" aria-hidden="true">
                    +
                  </span>
                  <span className="hidden text-xl font-normal text-slate-400 group-open:inline" aria-hidden="true">
                    –
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 pb-16 sm:pb-24" aria-labelledby="contato-titulo">
        <div className={SHELL}>
          <div className="rounded-[28px] bg-slate-950 px-6 py-12 text-white sm:px-12 sm:py-16">
            <p className="text-sm font-bold text-[#67e8f9]">Contato</p>
            <h2 id="contato-titulo" className="mt-3 max-w-xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
              Chama no WhatsApp e conta como o cliente chega hoje
            </h2>
            <p className="mt-4 text-lg font-semibold">{SITE.phoneDisplay}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
              Atendimento em todo o Brasil. Segunda a sexta, das 8h às 19h. Sábado, das 9h às 14h.
            </p>
            <div className="mt-8">
              <WaLink href={whatsappHref(NEUTRAL_WHATSAPP_TEXT)} tone="light">
                Chamar no WhatsApp
              </WaLink>
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
