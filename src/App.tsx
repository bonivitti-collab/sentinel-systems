import { useState, useEffect } from 'react';
import { WaterIntro } from './components/WaterIntro';
import { WaterBackgroundCanvas } from './components/WaterBackgroundCanvas';
import { ThreePanelLayout } from './components/ThreePanelLayout';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyNotOnlyInstagram } from './components/WhyNotOnlyInstagram';
import { PricingPlans } from './components/PricingPlans';
import { SecurityAndFAQ } from './components/SecurityAndFAQ';
import { FreeDiagnosis } from './components/FreeDiagnosis';
import { LocalClients } from './components/LocalClients';
import { SeoDirectorySection } from './components/SeoDirectorySection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

// Institutional Pages
import { SitesPage } from './pages/SitesPage';
import { AutomationPage } from './pages/AutomationPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

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

export function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    return window.location.pathname.replace(/\/+$/, '') || '/';
  });

  const isHome = currentPath === '/';

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
      if (window.location.hash) {
        const id = window.location.hash.replace(/^#/, '');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
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

    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToDiagnosis = () => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('raio-x');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('raio-x');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
    } else {
      document.title = 'Sentinel Systems | Criação de Sites Rápidos e Robôs de WhatsApp';
    }
  }, [
    isSites,
    isAutomationHub,
    isAbout,
    isBlog,
    isContact,
    matchedNiche,
    matchedAutomation,
    matchedCity,
    matchedGuide
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
        ) : (
          /* Home Landing Page inside Center Panel */
          <>
            <HeroSection
              onOpenContact={() => setIsContactOpen(true)}
              onScrollToDiagnosis={scrollToDiagnosis}
            />

            <HowItWorks />

            <WhyNotOnlyInstagram
              onOpenContact={() => setIsContactOpen(true)}
            />

            <PricingPlans
              onSelectPlan={handleSelectPlan}
            />

            <SecurityAndFAQ />

            <FreeDiagnosis />

            <LocalClients
              onOpenContact={() => setIsContactOpen(true)}
            />
          </>
        )}

        {/* Diretório de SEO & Soluções (Teia de links em todas as visualizações) */}
        <SeoDirectorySection onNavigate={navigate} />

        <Footer
          onOpenContact={() => setIsContactOpen(true)}
          onNavigate={navigate}
        />
      </ThreePanelLayout>

      {/* 💬 Floating WhatsApp Quick Action Button (Present everywhere) */}
      <FloatingWhatsAppButton currentPath={currentPath} />

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
