import { useState, useEffect } from 'react';
import { WaterIntro } from './components/WaterIntro';
import { WaterBackgroundCanvas } from './components/WaterBackgroundCanvas';
import { Navbar } from './components/Navbar';
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

  // Regra de Ouro ("Melhor sem do que feio"):
  // O vídeo 16:9 só é exibido na PRIMEIRA visualização pura da Home se o dispositivo realmente comportar o formato:
  // 1. Já assistiu ou dispensou nesta sessão de navegação? NUNCA mais toca!
  // 2. Acessou com hash (#como-funciona, #planos, etc.) ou rota interna? NUNCA toca!
  // 3. Resolução mínima de notebook/desktop (>= 1280px)
  // 4. Proporção de tela widescreen real (largura/altura >= 1.55, sem cortes verticais)
  // 5. Dispositivo não-touch (descarta celulares, iPads e tablets)
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false;

    // Se já foi exibida ou dispensada, NUNCA mais toca novamente
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

    // Se não for a raiz pura sem hash, não exibe
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
  const [selectedPlan, setSelectedPlan] = useState('Comércio & Vendas 24h (R$ 297/mês)');

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

  // Identificação da Rota Atual
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
    if (matchedNiche) {
      document.title = `${matchedNiche.title} | Sentinel Systems`;
    } else if (matchedAutomation) {
      document.title = `${matchedAutomation.title} | Robô WhatsApp Sentinel Systems`;
    } else if (matchedCity) {
      document.title = `Criação de Sites em ${matchedCity.name} (RJ) | Sentinel Systems`;
    } else if (matchedGuide) {
      document.title = `${matchedGuide.title} | Sentinel Systems`;
    } else {
      document.title = 'Sentinel Systems | Criação de Sites Rápidos e Robôs de WhatsApp';
    }
  }, [matchedNiche, matchedAutomation, matchedCity, matchedGuide]);

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 selection:bg-cyan-200 selection:text-slate-950 font-sans">
      {/* 🎬 Official YouTube Intro Video with Audio & Smooth Fade (Home only) */}
      {showIntro && (
        <WaterIntro onComplete={dismissIntro} />
      )}

      {/* Fresh Clean Coastal Caustics Canvas (Reacts to Mouse) */}
      <WaterBackgroundCanvas />

      {/* Main Experience */}
      <div className="relative z-10">
        <Navbar
          onOpenContact={() => setIsContactOpen(true)}
          isHome={isHome}
          onNavigateHome={() => navigate('/')}
          onNavigate={navigate}
          onDismissIntro={dismissIntro}
        />

        <main>
          {matchedNiche ? (
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
            /* Home Landing Page */
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
        </main>

        <Footer
          onOpenContact={() => setIsContactOpen(true)}
          onNavigate={navigate}
        />
      </div>

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
