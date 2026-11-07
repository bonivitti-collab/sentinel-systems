import { useState, useEffect, useRef } from 'react';
import { WaterIntro } from './components/WaterIntro';
import { WaterBackgroundCanvas } from './components/WaterBackgroundCanvas';
import { ThreePanelLayout } from './components/ThreePanelLayout';
import { HeroSection } from './components/HeroSection';
import { WhyNotOnlyInstagram } from './components/WhyNotOnlyInstagram';
import { PricingPlans } from './components/PricingPlans';
import { SecurityAndFAQ } from './components/SecurityAndFAQ';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

// Institutional Pages
import { SitesPage } from './pages/SitesPage';
import { AutomationPage } from './pages/AutomationPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { GuiaConstrucaoRegiaoDosLagosPage } from './pages/GuiaConstrucaoRegiaoDosLagosPage';

// Dedicated Sub-Pages
import { DedicatedNichePage } from './components/DedicatedNichePage';
import { DedicatedAutomationPage } from './components/DedicatedAutomationPage';
import { DedicatedCityPage } from './components/DedicatedCityPage';
import { DedicatedGuidePage } from './components/DedicatedGuidePage';

// Data Lists
import { NICHES_LIST } from './data/nichesData';
import { AUTOMATION_LIST } from './data/automationData';
import { CITIES_LIST } from './data/citiesData';
import { GUIDES_LIST } from './data/guidesData';
import {
  GUIA_CONSTRUCAO_DESCRIPTION,
  GUIA_CONSTRUCAO_PATH,
  GUIA_CONSTRUCAO_ROBOTS,
  GUIA_CONSTRUCAO_TITLE,
  GUIA_CONSTRUCAO_URL,
  guiaConstrucaoJsonLd,
} from './data/guiaConstrucaoRegiaoDosLagos';

const SITE_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const SITE_DESCRIPTION = 'Fazemos seu comércio vender mais todo dia. Criação de sites rápidos no Google, automação com Robô de WhatsApp 24h e pacotes mensais com tudo incluso para pequenos e médios negócios.';
const SITE_CANONICAL = 'https://sentinelsystems.com.br/';
const SITE_OG_TITLE = 'Sentinel Systems | Soluções Digitais que Fazem seu Comércio Vender Mais';
const SITE_OG_DESCRIPTION = 'Chega de depender só do Instagram. Criamos seu site profissional no Google, instalamos um robô inteligente no seu WhatsApp e cuidamos de tudo por você.';
const SITE_TWITTER_TITLE = 'Sentinel Systems | Sites, Google & Robô de WhatsApp';
const SITE_TWITTER_DESCRIPTION = 'Fazemos o seu comércio vender mais todo dia na internet. Planos com manutenção e suporte contínuo.';

function setNamedMeta(name: string, content: string) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute('content', content);
}

function setPropertyMeta(property: string, content: string) {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) el.setAttribute('content', content);
}

function setCanonical(href: string) {
  const el = document.querySelector('link[rel="canonical"]');
  if (el) el.setAttribute('href', href);
}

export function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    return window.location.pathname.replace(/\/+$/, '') || '/';
  });

  
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false;

    try {
      if (
        sessionStorage.getItem('sentinel_intro_seen') === 'true' ||
        localStorage.getItem('sentinel_intro_seen') === 'true'
      ) {
        return false;
      }
    } catch {
      // ignore
    }

    if (window.location.pathname !== '/' && window.location.pathname !== '') return false;
    if (window.location.hash) return false;

    const isWideResolution = window.innerWidth >= 1280;
    const isWidescreenRatio = window.innerWidth / window.innerHeight >= 1.55;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 1;
    const shouldShow = isWideResolution && isWidescreenRatio && !isTouchDevice;

    if (shouldShow) {
      try {
        sessionStorage.setItem('sentinel_intro_seen', 'true');
        localStorage.setItem('sentinel_intro_seen', 'true');
      } catch {
        // ignore
      }
    }

    return shouldShow;
  });

  const dismissIntro = () => {
    try {
      sessionStorage.setItem('sentinel_intro_seen', 'true');
      localStorage.setItem('sentinel_intro_seen', 'true');
    } catch {
      // ignore
    }
    setShowIntro(false);
  };

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Comércio & Vendas 24h (R$ 327/mês)');

  // Roteamento leve via History API
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '') || '/';
      setCurrentPath(path);
      const mainEl = document.getElementById('main-content-scroll');
      if (window.location.hash) {
        const id = window.location.hash.replace(/^#/, '');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        if (mainEl) mainEl.scrollTop = 0;
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    dismissIntro();
    window.history.pushState({}, '', path);
    const [rawPath, hashPart] = path.split('#');
    const cleanPath = (rawPath || '/').replace(/\/+$/, '') || '/';
    setCurrentPath(cleanPath);

    const mainEl = document.getElementById('main-content-scroll');
    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      if (mainEl) mainEl.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  
  const handleSelectPlan = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setIsContactOpen(true);
  };

  // Identificação das Novas Rotas Institucionais
  const isSites = currentPath === '/sites';
  const isAutomationHub = currentPath === '/automacao';
  const isAbout = currentPath === '/quem-somos';
  const isBlog = currentPath === '/blog';
  const isContact = currentPath === '/contato';

  // Sub-Rotas Especializadas (SEO)
  const nicheMatch = currentPath.match(/^\/solucoes\/([^/]+)$/);
  const matchedNiche = nicheMatch ? NICHES_LIST.find((n) => n.slug === nicheMatch[1]) : null;

  const autoMatch = currentPath.match(/^\/automacao\/([^/]+)$/);
  const matchedAutomation = autoMatch ? AUTOMATION_LIST.find((a) => a.slug === autoMatch[1]) : null;

  const cityMatch = currentPath.match(/^\/cidades\/([^/]+)$/);
  const matchedCity = cityMatch ? CITIES_LIST.find((c) => c.slug === cityMatch[1]) : null;

  const guideMatch = currentPath.match(/^\/guias\/([^/]+)$/);
  const matchedGuide = guideMatch ? GUIDES_LIST.find((g) => g.slug === guideMatch[1]) : null;

  const isGuiaProduto = currentPath === GUIA_CONSTRUCAO_PATH;
  const productHeadActive = useRef(false);
  const previousJsonLd = useRef<string | null>(null);

  // Atualização dinâmica de Título e Metatags no cliente
  useEffect(() => {
    if (isSites) {
      document.title = 'Criação de Sites de Alta Performance & Google | Sentinel Systems';
    } else if (isAutomationHub) {
      document.title = 'Robô de Atendimento WhatsApp 24h para Empresas | Sentinel Systems';
    } else if (isAbout) {
      document.title = 'Quem Somos & Padrão de Engenharia de Software | Sentinel Systems';
    } else if (isBlog) {
      document.title = 'Blog Sentinel: Estratégias Reais de Vendas no Google e WhatsApp';
    } else if (isContact) {
      document.title = 'Fale Conosco & Orçamentos Expressos | Sentinel Systems';
    } else if (matchedNiche) {
      document.title = `${matchedNiche.title} | Sentinel Systems`;
    } else if (matchedAutomation) {
      document.title = `${matchedAutomation.title} | Robô WhatsApp Sentinel Systems`;
    } else if (matchedCity) {
      document.title = `Criação de Sites em ${matchedCity.name} (${matchedCity.region.split(' - ')[1] || 'Brasil'}) | Sentinel Systems`;
    } else if (matchedGuide) {
      document.title = `${matchedGuide.title} | Sentinel Systems`;
    } else if (isGuiaProduto) {
      document.title = GUIA_CONSTRUCAO_TITLE;
    } else {
      document.title = 'Sentinel Systems | Criação de Sites Rápidos e Robôs de WhatsApp';
    }

    const jsonLdScript = document.querySelector('script[type="application/ld+json"]');

    if (isGuiaProduto) {
      if (
        jsonLdScript &&
        previousJsonLd.current === null &&
        !jsonLdScript.textContent?.includes(GUIA_CONSTRUCAO_PATH)
      ) {
        previousJsonLd.current = jsonLdScript.textContent;
      }
      setNamedMeta('title', GUIA_CONSTRUCAO_TITLE);
      setNamedMeta('description', GUIA_CONSTRUCAO_DESCRIPTION);
      setNamedMeta('robots', GUIA_CONSTRUCAO_ROBOTS);
      setCanonical(GUIA_CONSTRUCAO_URL);
      setPropertyMeta('og:title', GUIA_CONSTRUCAO_TITLE);
      setPropertyMeta('og:description', GUIA_CONSTRUCAO_DESCRIPTION);
      setPropertyMeta('og:url', GUIA_CONSTRUCAO_URL);
      setNamedMeta('twitter:title', GUIA_CONSTRUCAO_TITLE);
      setNamedMeta('twitter:description', GUIA_CONSTRUCAO_DESCRIPTION);
      setNamedMeta('twitter:url', GUIA_CONSTRUCAO_URL);
      if (jsonLdScript) jsonLdScript.textContent = JSON.stringify(guiaConstrucaoJsonLd);
      productHeadActive.current = true;
      return;
    }

    if (!productHeadActive.current) return;

    setNamedMeta('title', document.title);
    setNamedMeta('description', SITE_DESCRIPTION);
    setNamedMeta('robots', SITE_ROBOTS);
    setCanonical(SITE_CANONICAL);
    setPropertyMeta('og:title', SITE_OG_TITLE);
    setPropertyMeta('og:description', SITE_OG_DESCRIPTION);
    setPropertyMeta('og:url', SITE_CANONICAL);
    setNamedMeta('twitter:title', SITE_TWITTER_TITLE);
    setNamedMeta('twitter:description', SITE_TWITTER_DESCRIPTION);
    setNamedMeta('twitter:url', SITE_CANONICAL);
    if (jsonLdScript) {
      jsonLdScript.textContent = previousJsonLd.current ?? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Sentinel Systems',
        url: SITE_CANONICAL,
      });
    }
    previousJsonLd.current = null;
    productHeadActive.current = false;
  }, [
    isSites,
    isAutomationHub,
    isAbout,
    isBlog,
    isContact,
    matchedNiche,
    matchedAutomation,
    matchedCity,
    matchedGuide,
    isGuiaProduto
  ]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950 text-slate-900 selection:bg-cyan-200 selection:text-slate-950 font-sans">
      {/* 🎬 Official YouTube Intro Video with Audio & Smooth Fade (Home only) */}
      {showIntro && (
        <WaterIntro onComplete={dismissIntro} />
      )}

      {/* Fresh Clean Coastal Caustics Canvas (Reacts to Mouse) */}
      <WaterBackgroundCanvas />

      {/* 🚀 3-PANEL STUDIO LAYOUT (Left: Menus | Center: Content | Right: Sales AI Specialist) */}
      <ThreePanelLayout
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenContact={handleSelectPlan}
      >
        {isSites ? (
          <SitesPage
            onOpenContact={handleSelectPlan}
            onNavigate={navigate}
          />
        ) : isAutomationHub ? (
          <AutomationPage
            onOpenContact={handleSelectPlan}
            onNavigate={navigate}
          />
        ) : isAbout ? (
          <AboutUsPage
            onOpenContact={handleSelectPlan}
            onNavigate={navigate}
          />
        ) : isBlog ? (
          <BlogPage
            onOpenContact={handleSelectPlan}
            onNavigate={navigate}
          />
        ) : isContact ? (
          <ContactPage
            onOpenContact={handleSelectPlan}
          />
        ) : matchedNiche ? (
          <DedicatedNichePage
            niche={matchedNiche}
            onBack={() => navigate('/')}
            onOpenContact={handleSelectPlan}
            onNavigate={navigate}
          />
        ) : matchedAutomation ? (
          <DedicatedAutomationPage
            automation={matchedAutomation}
            onBack={() => navigate('/')}
            onOpenContact={handleSelectPlan}
            onNavigate={navigate}
          />
        ) : matchedCity ? (
          <DedicatedCityPage
            city={matchedCity}
            onBack={() => navigate('/')}
            onOpenContact={handleSelectPlan}
            onNavigate={navigate}
          />
        ) : matchedGuide ? (
          <DedicatedGuidePage
            guide={matchedGuide}
            onBack={() => navigate('/')}
            onOpenContact={handleSelectPlan}
            onNavigate={navigate}
          />
        ) : isGuiaProduto ? (
          <GuiaConstrucaoRegiaoDosLagosPage />
        ) : (
          /* Home Landing Page inside Center Panel - Clean, Minimalist & Focused */
          <>
            <HeroSection
              onOpenContact={() => setIsContactOpen(true)}
              onNavigate={navigate}
            />

            <WhyNotOnlyInstagram
              onOpenContact={() => setIsContactOpen(true)}
            />

            <PricingPlans
              onSelectPlan={handleSelectPlan}
            />

            <SecurityAndFAQ />
          </>
        )}

        <Footer
          onOpenContact={() => setIsContactOpen(true)}
          onNavigate={navigate}
          variant={isGuiaProduto ? 'educativo' : 'site'}
        />
      </ThreePanelLayout>

      

      {/* Contact & WhatsApp Lead Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialPlan={selectedPlan}
      />
    </div>
  );
}

export default App;
