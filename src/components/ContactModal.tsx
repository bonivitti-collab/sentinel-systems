import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'Comércio & Vendas 24h'
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState(initialPlan);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playUiClick();

    const formattedMessage = `Olá, equipe da Sentinel Systems! 🌊 Vim pelo site (sentinelsystems.com.br):\n\n*Meu Nome:* ${name}\n*Minha Empresa:* ${company || 'Não informada'}\n*WhatsApp:* ${phone}\n*Interesse no Pacote:* ${plan}\n*Mensagem:* ${message || 'Gostaria de tirar umas dúvidas e começar'}\n\nPodemos conversar? Obrigado!`;

    const whatsappUrl = `https://wa.me/5522999726069?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        {/* Top Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playUiClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Conversa Aberta no WhatsApp!</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Nossa equipe já está pronta para tirar suas dúvidas e ajudar sua empresa a vender mais.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-[11px] font-bold text-cyan-800 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>ATENDIMENTO DIRETO NO WHATSAPP</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Fale com a Gente
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Sem enrolação técnica. Vamos entender o que sua empresa precisa e montar o plano ideal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Sua loja, gráfica, café..."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Seu WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(22) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Plano ou Solução Desejada
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all cursor-pointer"
                >
                  <option value="Presença no Google (R$ 149/mês)">Presença no Google (R$ 149/mês)</option>
                  <option value="Comércio & Vendas 24h (R$ 297/mês)">Comércio & Vendas 24h (R$ 297/mês)</option>
                  <option value="Búzios & Alta Escala (R$ 590/mês)">Búzios & Alta Escala (R$ 590/mês)</option>
                  <option value="Quero um Raio-X Grátis do meu Google">Quero um Raio-X Grátis do meu Google</option>
                  <option value="Sistema Sob Medida / Projeto Específico">Sistema Sob Medida / Projeto Específico</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Alguma dúvida específica? (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Escreva aqui se tiver alguma pergunta..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com Danillo no WhatsApp</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default ContactModal;
