import { MessageCircle } from 'lucide-react';
import { NEUTRAL_WHATSAPP_TEXT, whatsappHref } from '../data/companySite';

export function FloatingWhatsAppButton() {
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
