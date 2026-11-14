import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { NEUTRAL_WHATSAPP_TEXT, whatsappHref } from '../data/companySite';

export function FloatingWhatsAppButton() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const hero = document.getElementById('topo');
    const cards = ['servicos', 'exemplos', 'precos', 'como-funciona', 'perguntas', 'contato']
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!hero) return;
    let heroOnScreen = false;
    const cardsOnScreen = new Set<Element>();
    const update = () => setHidden(!heroOnScreen || cardsOnScreen.size > 0);
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroOnScreen = entry.isIntersecting;
        update();
      },
      { threshold: 0.55 },
    );
    const cardObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) cardsOnScreen.add(entry.target);
          else cardsOnScreen.delete(entry.target);
        }
        update();
      },
      { threshold: 0 },
    );
    heroObserver.observe(hero);
    for (const card of cards) cardObserver.observe(card);
    return () => {
      heroObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <a
      href={whatsappHref(NEUTRAL_WHATSAPP_TEXT)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#128C7E] text-white shadow-lg md:hidden"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}

export default FloatingWhatsAppButton;
