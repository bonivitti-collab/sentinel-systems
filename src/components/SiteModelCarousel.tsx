import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { soundFx } from './SoundEffects';

const MODELS = [
  {
    src: '/modelos/salao-aurora.webp',
    name: 'Salão Aurora',
    kind: 'Cabeleireiro',
  },
  {
    src: '/modelos/brasa-folha.webp',
    name: 'Brasa & Folha',
    kind: 'Restaurante',
  },
  {
    src: '/modelos/casa-linho.webp',
    name: 'Casa Linho',
    kind: 'Loja',
  },
] as const;

export function SiteModelCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [phase, setPhase] = useState<'idle' | 'from' | 'to'>('idle');
  const lock = useRef(false);
  const drag = useRef<{ x: number } | null>(null);
  const regionRef = useRef<HTMLElement>(null);

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
    if (paused || reduced) return;
    const id = window.setInterval(() => go(index + 1, 1, true), 6500);
    return () => window.clearInterval(id);
  }, [paused, reduced, index]);

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
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const delta = event.clientX - drag.current.x;
    drag.current = null;
    if (delta > 40) go(index + 1, 1);
    else if (delta < -40) go(index - 1, -1);
  }

  const current = MODELS[index];
  const showIncoming = phase !== 'idle';

  return (
    <section className="pb-16" aria-labelledby="modelos-titulo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Modelos</p>
          <h2 id="modelos-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Modelos demonstrativos criados pela Sentinel
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Negócios fictícios, para imaginar a página no computador. Não são clientes nem projetos entregues. Os modelos são o Salão Aurora, o restaurante Brasa &amp; Folha e a loja Casa Linho.
          </p>
        </div>

        <section
          ref={regionRef}
          className="outline-none"
          aria-roledescription="carrossel"
          aria-label="Modelos demonstrativos de sites"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              go(index + 1, 1);
            } else if (event.key === 'ArrowLeft') {
              event.preventDefault();
              go(index - 1, -1);
            }
          }}
        >
          <div
            className="relative aspect-video overflow-hidden rounded-3xl bg-slate-100 border border-slate-200/90 touch-pan-y"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              drag.current = null;
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
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-700" aria-live="polite">
              <span className="font-extrabold text-slate-900">{current.name}</span>
              <span className="text-slate-500"> · {current.kind} · modelo {index + 1} de {MODELS.length}</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1, -1)}
                className="px-3 py-2 rounded-md bg-white border border-slate-200 text-sm font-semibold text-slate-800 cursor-pointer"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => go(index + 1, 1)}
                className="px-3 py-2 rounded-md bg-white border border-slate-200 text-sm font-semibold text-slate-800 cursor-pointer"
              >
                Próximo
              </button>
              <button
                type="button"
                aria-pressed={paused || reduced}
                onClick={() => setPaused((value) => !value)}
                className="px-3 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold cursor-pointer"
              >
                {paused || reduced ? 'Retomar' : 'Pausar'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
