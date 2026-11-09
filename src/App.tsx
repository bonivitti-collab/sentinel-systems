import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Navbar } from './components/Navbar';
import { NAV_LINKS, pageByPath } from './data/companySite';
import { applySeo } from './lib/seo';
import { publishedGuideByPath } from './data/publishedGuides';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { GuideArticlePage } from './pages/GuideArticlePage';
import { GuidesIndexPage } from './pages/GuidesIndexPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServicesPage } from './pages/ServicesPage';

const LEGACY: Record<string, string> = {
  '/quem-somos': '/sobre',
  '/sites': '/servicos',
  '/automacao': '/servicos',
  '/blog': '/faq',
};

export function normalizePath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (LEGACY[clean]) return LEGACY[clean];
  if (clean.startsWith('/solucoes/')) return '/servicos';
  if (clean.startsWith('/automacao/')) return '/servicos';
  if (clean.startsWith('/cidades/')) return '/';
  return clean;
}

function readLocation(): { path: string; hash: string } {
  if (typeof window === 'undefined') return { path: '/', hash: '' };
  return {
    path: normalizePath(window.location.pathname),
    hash: window.location.hash.replace(/^#/, ''),
  };
}

export function App({ url }: { url?: string }) {
  const [currentPath, setCurrentPath] = useState(() => (url ? normalizePath(url) : readLocation().path));

  useEffect(() => {
    const page = pageByPath(currentPath);
    if (page) applySeo(page);
  }, [currentPath]);

  useEffect(() => {
    const onPop = () => {
      const next = readLocation();
      setCurrentPath(next.path);
      if (next.hash) {
        window.setTimeout(() => document.getElementById(next.hash)?.scrollIntoView(), 0);
      }
    };
    window.addEventListener('popstate', onPop);
    const initial = readLocation();
    if (initial.hash) {
      window.setTimeout(() => document.getElementById(initial.hash)?.scrollIntoView(), 50);
    }
    if (normalizePath(window.location.pathname) !== window.location.pathname.replace(/\/+$/, '')) {
      const next = normalizePath(window.location.pathname);
      window.history.replaceState({}, '', next);
    }
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (target: string) => {
    const [rawPath, hashPart] = target.split('#');
    const path = normalizePath(rawPath || '/');
    const nextUrl = hashPart ? `${path}#${hashPart}` : path;
    window.history.pushState({}, '', nextUrl);
    setCurrentPath(path);
    if (hashPart) {
      window.setTimeout(() => {
        document.getElementById(hashPart)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const guide = publishedGuideByPath(currentPath);
  let content = <NotFoundPage onNavigate={navigate} />;
  if (currentPath === '/') content = <HomePage onNavigate={navigate} />;
  else if (currentPath === '/sobre') content = <AboutPage onNavigate={navigate} />;
  else if (currentPath === '/servicos') content = <ServicesPage />;
  else if (currentPath === '/faq') content = <FaqPage />;
  else if (currentPath === '/contato') content = <ContactPage />;
  else if (currentPath === '/guias') content = <GuidesIndexPage onNavigate={navigate} />;
  else if (guide) content = <GuideArticlePage guide={guide} onNavigate={navigate} />;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main id="conteudo">{content}</main>
      <nav aria-label="Outras páginas" className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-sm font-extrabold text-slate-900 mb-3">Mapa do site</h2>
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
            {NAV_LINKS.filter((link) => link.href !== currentPath).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(link.href);
                  }}
                  className="inline-flex px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:text-cyan-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Footer onNavigate={navigate} />
      <FloatingWhatsAppButton currentPath={currentPath} />
    </div>
  );
}

export default App;
