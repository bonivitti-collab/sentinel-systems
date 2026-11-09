import type { MouseEvent } from 'react';
import { PdfDownload } from '../components/PdfDownload';
import { soundFx } from '../components/SoundEffects';
import { GUIDES_INDEX, PUBLISHED_GUIDES } from '../data/publishedGuides';

interface GuidesIndexPageProps {
  onNavigate: (path: string) => void;
}

export function GuidesIndexPage({ onNavigate }: GuidesIndexPageProps) {
  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    soundFx.playUiClick();
    onNavigate(href);
  };

  return (
    <section className="pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Trilha de navegação" className="mb-4 text-xs text-slate-500">
          <a href="/" onClick={(event) => go(event, '/')} className="font-semibold text-cyan-800 hover:text-cyan-950">
            Início
          </a>
          <span aria-hidden="true"> / </span>
          <span className="text-slate-700">Guias</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {GUIDES_INDEX.label}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Cinco guias para quem tem um pequeno negócio ou trabalha por conta própria.
        </p>
        <ul className="mt-8 space-y-4">
          {PUBLISHED_GUIDES.map((guide) => (
            <li key={guide.slug}>
              <a
                href={guide.slug}
                onClick={(event) => go(event, guide.slug)}
                className="block rounded-3xl border border-slate-200 bg-white p-5 hover:border-cyan-200"
              >
                <h2 className="text-lg font-extrabold text-slate-900">{guide.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{guide.description}</p>
              </a>
            </li>
          ))}
        </ul>
        <PdfDownload />
      </div>
    </section>
  );
}
