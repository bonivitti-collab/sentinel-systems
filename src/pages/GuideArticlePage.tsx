import type { MouseEvent } from 'react';
import { PdfDownload } from '../components/PdfDownload';
import { soundFx } from '../components/SoundEffects';
import type { PublishedGuide } from '../data/publishedGuides';
import { renderGuideMarkdown } from '../lib/renderGuideMarkdown';

interface GuideArticlePageProps {
  guide: PublishedGuide;
  onNavigate: (path: string) => void;
}

export function GuideArticlePage({ guide, onNavigate }: GuideArticlePageProps) {
  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    soundFx.playUiClick();
    onNavigate(href);
  };

  return (
    <article className="pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Trilha de navegação" className="mb-4 text-xs text-slate-500">
          <a href="/" onClick={(event) => go(event, '/')} className="font-semibold text-cyan-800 hover:text-cyan-950">
            Início
          </a>
          <span aria-hidden="true"> / </span>
          <a href="/guias" onClick={(event) => go(event, '/guias')} className="font-semibold text-cyan-800 hover:text-cyan-950">
            Guias
          </a>
          <span aria-hidden="true"> / </span>
          <span className="text-slate-700">{guide.title}</span>
        </nav>
        <div data-guide-body className="break-words">
          {renderGuideMarkdown(guide.markdown, (href) => {
            soundFx.playUiClick();
            onNavigate(href);
          })}
        </div>
        <PdfDownload />
      </div>
    </article>
  );
}
