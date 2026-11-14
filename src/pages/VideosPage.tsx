import { useEffect, useRef, useState } from 'react';
import { Check, MessageCircle, Minus } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { EXAMPLE_VIDEOS, VIDEOS_WHATSAPP_TEXT, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

const STEPS = [
  {
    title: 'Você manda as fotos pelo WhatsApp.',
    text: 'Manda as fotos do seu espaço, do jeito que ele é. Sem câmera na mão e sem parar o atendimento.',
  },
  {
    title: 'A gente cria os vídeos.',
    text: 'Os vídeos saem das suas fotos, com cenas ilustrativas para mostrar o lugar de verdade.',
  },
  {
    title: 'Você aprova e posta.',
    text: 'Você vê, aprova e publica no Instagram e no Status do WhatsApp.',
  },
] as const;

const BENEFITS = [
  {
    title: 'Sem gravar',
    text: 'Você não precisa parar o movimento para filmar o salão, a loja ou o atendimento.',
  },
  {
    title: 'Sem editar',
    text: 'O vídeo chega pronto para o Instagram e para o Status. Você não mexe em programa de edição.',
  },
  {
    title: 'Sem perder tempo',
    text: 'Manda as fotos pelo WhatsApp e segue no trabalho. O tempo fica com o cliente, não com a filmagem.',
  },
  {
    title: 'Perfil sempre ativo',
    text: 'Tem o que postar para o perfil não ficar parado entre um atendimento e outro.',
  },
] as const;

const INCLUDED_ITEMS = [
  'criação a partir das fotos enviadas pelo WhatsApp',
  'edição com música e texto',
  'pessoas feitas com IA',
  'o vídeo leva um aviso de que foi feito com IA',
  'arquivo pronto para postar',
] as const;

const EXCLUDED_ITEMS = [
  'filmagem no local',
  'locução',
  'anúncios pagos',
  'a gente não publica no seu Instagram',
  'revisões ilimitadas',
  'não prometemos que o vídeo vai trazer vendas',
] as const;

function ExampleVideoPlayer({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    const video = videoRef.current;
    if (!box || !video) return;
    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          const play = () => {
            video.play().catch(() => {});
          };
          if (video.readyState >= 2) play();
          else video.addEventListener('loadeddata', play, { once: true });
        } else {
          video.pause();
        }
      },
      { rootMargin: '120px 0px', threshold: 0.2 },
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="min-w-0">
      <div ref={boxRef} className="aspect-[9/16] w-full">
        <video
          ref={videoRef}
          src={ready ? src : undefined}
          poster={poster}
          muted
          playsInline
          loop
          controls
          preload={ready ? 'metadata' : 'none'}
          width={540}
          height={960}
          className="block h-full w-full rounded-3xl bg-slate-900 object-cover"
          aria-label={label}
        />
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">
        <span className="block font-extrabold text-slate-900">{label}</span>
        Cena ilustrativa feita com IA
      </figcaption>
    </figure>
  );
}

const VIDEO_PACKAGES = [
  {
    id: 'avulso',
    name: 'Avulso',
    price: 'R$ 397',
    detail: '1 vídeo com 1 revisão, entrega em 5 dias úteis depois das fotos e do que você contar sobre o negócio.',
    message: 'Olá! Vim pelo site da Sentinel e quero o pacote Avulso de vídeos.',
    highlight: false,
  },
  {
    id: 'mensal-basico',
    name: 'Mensal Básico',
    price: 'R$ 997/mês',
    detail: '4 vídeos com 1 revisão cada.',
    message: 'Olá! Vim pelo site da Sentinel e quero o pacote Mensal Básico de vídeos.',
    highlight: true,
  },
  {
    id: 'mensal-completo',
    name: 'Mensal Completo',
    price: 'R$ 1.797/mês',
    detail: '8 vídeos com 1 revisão cada.',
    message: 'Olá! Vim pelo site da Sentinel e quero o pacote Mensal Completo de vídeos.',
    highlight: false,
  },
] as const;

function WhatsAppCta({ label }: { label: string }) {
  return (
    <a
      href={whatsappHref(VIDEOS_WHATSAPP_TEXT)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => soundFx.playUiClick()}
      className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm inline-flex items-center justify-center gap-2"
    >
      <MessageCircle className="w-4 h-4" aria-hidden="true" />
      {label}
    </a>
  );
}

export function VideosPage() {
  return (
    <>
      <PageHero
        path="/videos"
        eyebrow="Vídeos para divulgação"
        title={
          <>
            Vídeos prontos para o Instagram e o Status,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              sem você filmar.
            </span>
          </>
        }
        description="Você manda as fotos do seu negócio pelo WhatsApp e recebe os vídeos prontos para postar. Serve para restaurante, pousada ou loja. Sem gravar, sem editar e sem perder o tempo do atendimento."
      >
        <div className="mt-6">
          <WhatsAppCta label="Quero esses vídeos no WhatsApp" />
        </div>
      </PageHero>

      <section className="pb-16" aria-labelledby="como-funciona-titulo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">O caminho</p>
            <h2 id="como-funciona-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Como funciona
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0">
            {STEPS.map((step, index) => (
              <li key={step.title} className="min-w-0 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Passo {index + 1}</p>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200" aria-labelledby="beneficios-titulo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Para quem atende no dia a dia</p>
            <h2 id="beneficios-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Feito para quem não tem tempo de virar produtor de vídeo
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              As cenas são ilustrativas e partem das fotos do seu espaço, para mostrar o lugar de verdade sem você precisar aparecer filmando.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((item) => (
              <article key={item.title} className="min-w-0 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="incluso-titulo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 id="incluso-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              O que está incluso / o que não está
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="min-w-0 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">O que está incluso</h3>
              <ul className="space-y-3">
                {INCLUDED_ITEMS.map((item, index) => (
                  <li key={`incluso-${index}`} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="min-w-0 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">O que não está</h3>
              <ul className="space-y-3">
                {EXCLUDED_ITEMS.map((item, index) => (
                  <li key={`fora-${index}`} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200" aria-labelledby="exemplos-titulo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Para ver o formato</p>
            <h2 id="exemplos-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Exemplos de vídeos
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Toque para ver. O vídeo começa sem som.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {EXAMPLE_VIDEOS.map((video) => (
              <ExampleVideoPlayer key={video.id} src={video.src} poster={video.poster} label={video.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="pacotes-titulo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 id="pacotes-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Pacotes
            </h2>
            <p className="text-slate-800 font-semibold leading-relaxed">
              No máximo metade dos vídeos do mês com pessoas (2 no Básico, 4 no Completo).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VIDEO_PACKAGES.map((pack) => (
              <article
                key={pack.id}
                className={`min-w-0 p-6 rounded-3xl bg-white border flex flex-col ${
                  pack.highlight ? 'border-cyan-400 ring-2 ring-cyan-400/30 shadow-md' : 'border-slate-200/90 shadow-xs'
                }`}
              >
                {pack.highlight && (
                  <p className="self-start max-w-full text-xs font-bold text-cyan-900 bg-cyan-50 border border-cyan-200 rounded-full px-3 py-1 leading-snug">
                    Mensalidade a partir de R$ 997
                  </p>
                )}
                <h3 className={`text-lg font-extrabold text-slate-900 ${pack.highlight ? 'mt-4' : ''}`}>{pack.name}</h3>
                <p className="mt-2 text-2xl font-extrabold text-slate-900 tracking-tight break-words">{pack.price}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{pack.detail}</p>
                <a
                  href={whatsappHref(pack.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playUiClick()}
                  className="mt-auto pt-5 w-full max-w-full px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wide text-center inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Quero o {pack.name}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <WhatsAppCta label="Falar no WhatsApp" />
          </div>
        </div>
      </section>
    </>
  );
}
