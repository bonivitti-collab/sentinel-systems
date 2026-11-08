import type { ReactNode } from 'react';

interface PageHeroProps {
  path: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export function PageHero({ path, eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-3xl h-[420px] bg-gradient-to-tr from-cyan-400/20 via-sky-400/10 to-indigo-400/15 rounded-full blur-3xl opacity-80" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {path !== '/' && (
          <nav aria-label="Trilha de navegação" className="text-xs text-slate-500 mb-4">
            <a href="/" className="font-semibold text-cyan-800 hover:text-cyan-950">Início</a>
            <span aria-hidden="true"> / </span>
            <span className="text-slate-700">{path === '/sobre' ? 'Sobre' : path === '/servicos' ? 'Serviços' : path === '/faq' ? 'FAQ' : path === '/contato' ? 'Contato' : 'Página'}</span>
          </nav>
        )}
        <div className="inline-flex items-center gap-2 max-w-full px-4 py-2 rounded-full bg-cyan-50/90 border border-cyan-200/80 text-xs sm:text-sm font-semibold text-cyan-900 mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="min-w-0">{eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5 max-w-4xl">
          {title}
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">{description}</p>
        {children}
      </div>
    </section>
  );
}
