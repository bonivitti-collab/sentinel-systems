import { useState } from 'react';
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
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  // Regra de Ouro ("Melhor sem do que feio"):
  // O vídeo 16:9 só é exibido se o dispositivo realmente comportar o formato com folga e perfeição:
  // 1. Resolução mínima de notebook/desktop (>= 1280px)
  // 2. Proporção de tela widescreen real (largura/altura >= 1.55, sem cortes verticais)
  // 3. Dispositivo não-touch (descarta celulares, iPads e tablets)
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isWideResolution = window.innerWidth >= 1280;
    const isWidescreenRatio = window.innerWidth / window.innerHeight >= 1.55;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 1;
    return isWideResolution && isWidescreenRatio && !isTouchDevice;
  });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Comércio & Vendas 24h (R$ 297/mês)');

  const scrollToDiagnosis = () => {
    const el = document.getElementById('raio-x');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-cyan-200 selection:text-slate-950 font-sans">
      {/* 🎬 Official YouTube Intro Video with Audio & Smooth Fade */}
      {showIntro && (
        <WaterIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Fresh Clean Coastal Caustics Canvas (Reacts to Mouse) */}
      <WaterBackgroundCanvas />

      {/* Main Experience */}
      <div className="relative z-10">
        <Navbar
          onOpenContact={() => setIsContactOpen(true)}
        />

        <main>
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
        </main>

        <Footer
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>

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
