import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { soundFx } from './SoundEffects';

const MODELS = [
  {
    src: '/modelos/salao-aurora-t461.webp',
    href: '/demos/salao-aurora/index.html',
    name: 'Salão Aurora',
    kind: 'Cabeleireiro',
  },
  {
    src: '/modelos/brasa-folha-t461.webp',
    href: '/demos/brasa-folha/index.html',
    name: 'Brasa & Folha',
    kind: 'Restaurante',
  },
  {
    src: '/modelos/casa-linho-t461.webp',
    href: '/demos/casa-linho/index.html',
    name: 'Casa Linho',
    kind: 'Loja',
  },
] as const;

export function SiteModelCarousel() {
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [phase, setPhase] = useState<'idle' | 'from' | 'to'>('idle');
  const lock = useRef(false);
  const drag = useRef<{ x: number } | null>(null);
  const dragged = useRef(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  function go(next: number, direction: 1 | -1, silent = false) {
    const normalized = (next + MODELS.length) % MODELS.length;
    if (normalized === index || lock.current) return;
    if (!silent) soundFx.playUiClick();
    if (reduced) {
      setIndex(normalized);
      return;
    }
    lock.current = true;
    setFrom(index);
    setTo(normalized);
    setDir(direction);
    setPhase('from');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setPhase('to'));
    });
    window.setTimeout(() => {
      setIndex(normalized);
      setPhase('idle');
      lock.current = false;
    }, 520);
  }

  useEffect(() => {
    if (paused || held || reduced) return;
    const id = window.setInterval(() => go(index + 1, 1, true), 6500);
    return () => window.clearInterval(id);
  }, [paused, held, reduced, index]);

  function slideStyle(position: 'current' | 'incoming') {
    const incoming = position === 'incoming';
    const start = `translateX(${dir * -100}%)`;
    const end = `translateX(${dir * 100}%)`;
    const moving = phase === 'to';
    return {
      transform: incoming ? (moving ? 'translateX(0)' : start) : moving ? end : 'translateX(0)',
      transition: moving ? 'transform 500ms ease' : 'none',
    };
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    drag.current = { x: event.clientX };
    dragged.current = false;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const delta = event.clientX - drag.current.x;
    drag.current = null;
    if (delta > 40) {
      dragged.current = true;
      go(index + 1, 1);
    } else if (delta < -40) {
      dragged.current = true;
      go(index - 1, -1);
    }
  }

  const shown = phase === 'to' ? to : index;
  const model = MODELS[shown];
  const showIncoming = phase !== 'idle';

  return (
    <section className="pb-16" aria-labelledby="modelos-titulo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6">
          <h2 id="modelos-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Veja como pode ficar o site do seu negócio
          </h2>
        </div>

        <section
          className="outline-none"
          aria-roledescription="carrossel"
          aria-label="Modelos demonstrativos de sites"
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              go(index + 1, 1);
            } else if (event.key === 'ArrowLeft') {
              event.preventDefault();
              go(index - 1, -1);
            }
          }}
          onFocus={() => setHeld(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHeld(false);
          }}
        >
          <div
            className="relative aspect-video overflow-hidden rounded-3xl bg-slate-100 border border-slate-200/90 touch-pan-y"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              drag.current = null;
            }}
            onMouseEnter={() => setHeld(true)}
            onMouseLeave={() => setHeld(false)}
          >
            <a
              href={model.href}
              aria-label={`Abrir o modelo ${model.name}, ${model.kind}`}
              className="absolute inset-0 cursor-pointer"
              onClick={(event) => {
                if (!dragged.current) return;
                event.preventDefault();
                dragged.current = false;
              }}
            >
              <img
                src={MODELS[showIncoming ? from : index].src}
                alt=""
                width={1280}
                height={720}
                draggable={false}
                className="absolute inset-0 h-full w-full object-contain select-none"
                style={showIncoming ? slideStyle('current') : undefined}
              />
              {showIncoming && (
                <img
                  src={MODELS[to].src}
                  alt=""
                  width={1280}
                  height={720}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-contain select-none"
                  style={slideStyle('incoming')}
                />
              )}
            </a>
            <p className="sr-only" aria-live="polite">
              {model.name}, {model.kind}, modelo {shown + 1} de {MODELS.length}
            </p>
            <button
              type="button"
              aria-pressed={paused || reduced}
              onClick={() => setPaused((value) => !value)}
              className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-10 focus:rounded-full focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
            >
              {paused || reduced ? 'Retomar modelos' : 'Pausar modelos'}
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
