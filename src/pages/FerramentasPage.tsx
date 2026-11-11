import { FerramentasSection } from '../components/FerramentasSection';

export function FerramentasPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Trilha de navegação" className="text-xs text-slate-500 mb-4">
          <a href="/" className="font-semibold text-cyan-800 hover:text-cyan-950">
            Início
          </a>
          <span aria-hidden="true"> / </span>
          <span className="text-slate-700">Ferramentas</span>
        </nav>
      </div>
      <FerramentasSection />
    </div>
  );
}
