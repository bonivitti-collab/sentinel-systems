import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Navbar } from './components/Navbar';
import { pageByPath } from './data/companySite';
import { applySeo } from './lib/seo';
import { publishedGuideByPath } from './data/publishedGuides';
import { productByPath, productPathForHost } from './data/productLandings';
import { FerramentasPage } from './pages/FerramentasPage';
import { GuideArticlePage } from './pages/GuideArticlePage';
import { GuidesIndexPage } from './pages/GuidesIndexPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductLandingPage } from './pages/ProductLandingPage';

const REDIRECTS: Record<string, string> = {
  '/quem-somos': '/',
  '/sobre': '/',
  '/automacao': '/#servicos',
  '/blog': '/#perguntas',
  '/servicos': '/#servicos',
  '/sites': '/#precos',
  '/videos': '/#precos',
  '/faq': '/#perguntas',
  '/contato': '/#contato',
};

function redirectTarget(pathname: string): string | null {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (REDIRECTS[clean]) return REDIRECTS[clean];
  if (clean.startsWith('/solucoes/')) return '/#servicos';
  if (clean.startsWith('/automacao/')) return '/#servicos';
  if (clean.startsWith('/cidades/')) return '/';
  return null;
}

export function normalizePath(pathname: string): string {
  const target = redirectTarget(pathname);
  if (target) return target.split('#')[0] || '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function resolveLocation(pathname: string, hash: string): { path: string; hash: string; url: string } {
  const moved = redirectTarget(pathname);
  if (moved) {
    const [movedPath, movedHash = ''] = moved.split('#');
    const nextPath = (movedPath || '/').replace(/\/+$/, '') || '/';
    return {
      path: nextPath,
      hash: movedHash,
      url: movedHash ? `${nextPath}#${movedHash}` : nextPath,
    };
  }
  const path = pathname.replace(/\/+$/, '') || '/';
  const cleanHash = hash.replace(/^#/, '');
  if (path === '/' && cleanHash === 'ferramentas') {
    return { path: '/ferramentas', hash: '', url: '/ferramentas' };
  }
  if (path === '/' && cleanHash === 'oferta') {
    return { path: '/', hash: 'precos', url: '/#precos' };
  }
  return {
    path,
    hash: cleanHash,
    url: cleanHash ? `${path}#${cleanHash}` : path,
  };
}

function readLocation(): { path: string; hash: string; url: string } {
  if (typeof window === 'undefined') return { path: '/', hash: '', url: '/' };
  const fromHost = productPathForHost(window.location.hostname, window.location.pathname);
  if (fromHost) {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return { path: fromHost, hash: '', url: `${path}${window.location.hash}` };
  }
  return resolveLocation(window.location.pathname, window.location.hash);
}

function initialPath(url?: string): string {
  if (url) return normalizePath(url);
  if (typeof window === 'undefined') return '/';
  return productPathForHost(window.location.hostname, window.location.pathname) ?? normalizePath(window.location.pathname);
}

export function App({ url }: { url?: string }) {
  const [currentPath, setCurrentPath] = useState(() => initialPath(url));

  useEffect(() => {
    const page = pageByPath(currentPath);
    if (page) applySeo(page);
  }, [currentPath]);

  useEffect(() => {
    const applyAddress = () => {
      const next = readLocation();
      const actual = `${window.location.pathname.replace(/\/+$/, '') || '/'}${window.location.hash}`;
      if (next.url !== actual) window.history.replaceState({}, '', next.url);
      setCurrentPath(next.path);
      if (next.hash) {
        window.setTimeout(() => document.getElementById(next.hash)?.scrollIntoView(), 50);
      }
    };
    applyAddress();
    window.addEventListener('popstate', applyAddress);
    return () => window.removeEventListener('popstate', applyAddress);
  }, []);

  const navigate = (target: string) => {
    const [rawPath, hashPart = ''] = target.split('#');
    const next = resolveLocation(rawPath || window.location.pathname, hashPart);
    window.history.pushState({}, '', next.url);
    setCurrentPath(next.path);
    if (next.hash) {
      window.setTimeout(() => {
        document.getElementById(next.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const product = productByPath(currentPath);
  if (product) return <ProductLandingPage product={product} />;

  const guide = publishedGuideByPath(currentPath);
  let content = <NotFoundPage onNavigate={navigate} />;
  if (currentPath === '/') content = <HomePage onNavigate={navigate} />;
  else if (currentPath === '/ferramentas') content = <FerramentasPage />;
  else if (currentPath === '/guias') content = <GuidesIndexPage onNavigate={navigate} />;
  else if (guide) content = <GuideArticlePage guide={guide} onNavigate={navigate} />;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f6f3] font-sans text-slate-950">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main id="conteudo">{content}</main>
      <Footer onNavigate={navigate} />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
