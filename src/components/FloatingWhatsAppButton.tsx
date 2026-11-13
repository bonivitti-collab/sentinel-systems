import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { NEUTRAL_WHATSAPP_TEXT, whatsappHref } from '../data/companySite';

export function FloatingWhatsAppButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const nodes = ['precos', 'contato']
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setHidden(visible.size > 0);
      },
      { threshold: 0.12 },
    );
    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
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
