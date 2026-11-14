import { useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { Check, ChevronDown, Globe, MapPin, MessageCircle, Minus, Video } from 'lucide-react';
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
    text: 'Um site do seu negócio, feito para abrir bem no celular, com o que você faz, onde atende e o botão para chamar. Quem te acha entende e liga.',
    price: '12x de R$ 50',
    icon: Globe,
  },
  {
    title: 'Google Meu Negócio',
    text: 'A gente configura o Perfil da Empresa no Google junto com o seu site: nome, mapa, horário e fotos. O perfil no Google é gratuito.',
    price: 'Vem junto com o site',
    icon: MapPin,
  },
  {
    title: 'Atendimento no WhatsApp',
    text: 'O botão de WhatsApp vai no site e no perfil do Google, para o cliente chamar na hora. Se você quiser um atendimento mais completo, a gente combina o valor na conversa.',
    price: 'Vem junto com o site',
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
    price: 'A partir de R$ 397',
    icon: Video,
  },
] as const;

const SITE_EXAMPLES = [
  {
    name: 'Brasa & Folha',
    kind: 'Restaurante',
    href: '/demos/brasa-folha/index.html',
    src: '/modelos/brasa-folha-phone.webp',
    alt: 'Exemplo de site para restaurante, com pratos e reserva',
  },
  {
    name: 'Casa Linho',
    kind: 'Loja',
    href: '/demos/casa-linho/index.html',
    src: '/modelos/casa-linho-phone.webp',
    alt: 'Exemplo de site para loja, com catálogo de peças',
  },
  {
    name: 'Salão Aurora',
    kind: 'Salão',
    href: '/demos/salao-aurora/index.html',
    src: '/modelos/salao-aurora-phone.webp',
    alt: 'Exemplo de site para salão, com serviços e horário',
  },
] as const;

const STEPS = [
  {
    title: 'Você conta o seu negócio',
    text: 'O que vende, em que cidade, e se as pessoas ligam, chamam no WhatsApp ou aparecem na porta.',
  },
  {
    title: 'A gente monta tudo',
    text: 'Site, Perfil da Empresa no Google, WhatsApp, Instagram ou vídeo, do jeito que o seu cliente procura.',
  },
  {
    title: 'O cliente te acha e chama',
    text: 'Seu cliente abre no celular, vê como falar com você e chama no seu WhatsApp.',
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
      <div className="overflow-hidden rounded-2xl bg-slate-950 aspect-[3/4]">
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
            aria-label={`Vídeo feito com IA para ${label}`}
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
      <section id="topo" className="border-b border-slate-200/80 bg-white">
        <div className={`${SHELL} grid items-end gap-8 pb-8 pt-24 sm:pb-16 sm:pt-32 lg:grid-cols-12`}>
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
            <p className="mt-3 max-w-md text-base font-bold leading-snug text-slate-800">
              Site em 12x de R$ 50, total de R$ 600, ou R$ 540 à vista
            </p>
          </div>
          <aside className="hidden rounded-[28px] border border-slate-200 bg-[#f7f6f3] p-6 sm:p-8 lg:col-span-5 lg:block">
            <p className="text-sm font-bold text-[#0e7490]">O resultado</p>
            <ul className="mt-4 space-y-4">
              {['Seu nome no Google, com mapa e horário', 'Uma página que abre no celular', 'WhatsApp visível na hora de chamar'].map((item) => (
                <li key={item} className="flex gap-3 text-base font-semibold leading-snug text-slate-950">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#128C7E]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base font-bold leading-snug text-slate-800">
              Site em 12x de R$ 50, total de R$ 600, ou R$ 540 à vista
            </p>
          </aside>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-24 py-8 sm:py-20" aria-labelledby="servicos-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#0e7490]">O que fazemos</p>
          <h2 id="servicos-titulo" className="mt-3 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Cinco jeitos de o cliente te encontrar e chamar
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                  <p className="mt-4 text-sm font-bold text-slate-950">{service.price}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="exemplos" className="scroll-mt-24 border-y border-slate-200 bg-white py-6 sm:py-16" aria-labelledby="exemplos-titulo">
        <div className={SHELL}>
          <p className="text-sm font-bold text-[#0e7490]">Exemplos</p>
          <h2 id="exemplos-titulo" className="mt-2 max-w-2xl text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold leading-tight tracking-[-0.035em]">
            Veja o site no celular e o vídeo pronto para postar
          </h2>
          <div className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:justify-center">
            {SITE_EXAMPLES.map((example) => (
              <a
                key={example.href}
                href={example.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-[168px] shrink-0 snap-start flex-col lg:w-[240px]"
              >
                <span className="relative block rounded-[1.7rem] border-[7px] border-slate-950 bg-slate-950">
                  <span className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-700" aria-hidden="true" />
                  <img
                    src={example.src}
                    alt={example.alt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[9/16] w-full rounded-[1.2rem] object-cover object-center"
                  />
                </span>
                <span className="mt-2 text-sm font-extrabold text-slate-950">{example.name}</span>
                <span className="text-xs font-bold text-[#0e7490]">{example.kind}</span>
              </a>
            ))}
          </div>

          <h3 className="mt-6 text-lg font-extrabold tracking-tight">Vídeos que a gente já fez com IA</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">Toque para ver. O vídeo começa sem som.</p>
          <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 lg:justify-center">
            {EXAMPLE_VIDEOS.map((video) => (
                <div key={video.id} className="w-[42%] max-w-[170px] shrink-0 snap-start lg:w-[220px] lg:max-w-none">
                <ExampleVideo src={video.src} poster={video.poster} label={video.label === 'Loja' ? 'Loja' : video.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precos" className="scroll-mt-24 py-10 sm:py-20" aria-labelledby="precos-titulo">
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
                <p className="text-6xl font-extrabold tracking-[-0.04em]">R$ 50</p>
                <p className="mt-2 text-lg font-bold">Total de R$ 600</p>
                <p className="mt-3 text-base leading-relaxed text-slate-200">
                  ou R$ 540 à vista, com 10% de desconto nesta primeira contratação.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Renovação opcional de R$ 180 por ano, só domínio e hospedagem.
                </p>
                <div className="mt-8">
                  <WaLink href={whatsappHref('Olá! Vim pelo site da Sentinel e quero o site em 12x de R$ 50 (total de R$ 600) ou R$ 540 à vista.')} tone="light">
                    Quero esse site
                  </WaLink>
                </div>
              </div>
              <div className="grid gap-8 px-6 py-8 sm:px-8 lg:col-span-7 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">O que você recebe</h3>
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
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">O que não está incluído</h3>
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
                    {pack.id === 'avulso' ? 'Quero 1 vídeo' : `Quero o ${pack.name}`}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600">
              Nos planos mensais, até 2 vídeos (Básico) ou 4 (Completo) podem ter pessoas, criadas com IA.
            </p>
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

          <div className="mt-4 grid grid-cols-1 gap-4">
            <article className="max-w-xl rounded-[20px] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-extrabold">Cuidamos do seu Instagram</h3>
              <p className="mt-3 text-2xl font-extrabold tracking-tight">Orçamento pelo WhatsApp</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Conta o que você precisa e a gente monta junto um plano que cabe no seu bolso.
              </p>
              <a
                href={whatsappHref('Olá! Vim pelo site da Sentinel. Quero conversar sobre o Instagram do meu negócio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#128C7E] px-4 text-sm font-bold text-white"
              >
                Montar o plano
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
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
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
              Chama no WhatsApp e conta do seu negócio
            </h2>
            <p className="mt-4 text-lg font-semibold">{SITE.phoneDisplay}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
              Atendimento em todo o Brasil, pelo WhatsApp.
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
