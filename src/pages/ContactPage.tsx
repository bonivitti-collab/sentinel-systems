import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Send, 
  Sparkles
} from 'lucide-react';
import { soundFx } from '../components/SoundEffects';

interface ContactPageProps {
  onOpenContact: (plan?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenContact: _onOpenContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState('Site Comercial + Robô de WhatsApp');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playUiClick();

    const text = `Olá, equipe da Sentinel Systems! 🚀\n\nMeu nome é *${name}* e tenho a empresa *${company}* em *${city}*.\n\n*Serviço de Interesse:* ${service}\n*WhatsApp de Contato:* ${phone}\n*Detalhes:* ${details || 'Gostaria de uma proposta e de tirar dúvidas com um especialista.'}`;
    const url = `https://wa.me/5522999726069?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-xs font-bold text-cyan-900 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span>CANAL DIRETO DE ATENDIMENTO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Vamos Conversar sobre o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              Crescimento da sua Empresa
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Tire dúvidas diretamente com quem constrói a sua solução. Sem robôs chatos de espera ou atendentes que não entendem de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Contact Channels & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-6">
                Canais Oficiais de Atendimento
              </h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      WhatsApp Comercial (Resposta Rápida)
                    </span>
                    <a
                      href="https://wa.me/5522999726069?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20empresa!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-black text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      (22) 99972-6069
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Tempo médio de resposta: ~2 minutos</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      E-mail Institucional
                    </span>
                    <a
                      href="mailto:sentinelsystemsai@gmail.com"
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                    >
                      sentinelsystemsai@gmail.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Para propostas corporativas e parcerias</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Horário de Funcionamento
                    </span>
                    <div className="text-xs text-slate-700 font-semibold space-y-0.5">
                      <p>Segunda a Sexta: 08h às 19h</p>
                      <p>Sábado: 09h às 14h</p>
                      <p className="text-emerald-700 font-bold">Robô no WhatsApp: 24h por dia</p>
                    </div>
                  </div>
                </div>

                {/* Scope */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Área de Atendimento
                    </span>
                    <p className="text-xs text-slate-700 font-semibold">
                      Atendimento 100% Digital e Remoto em todo o Brasil (26 Estados + DF)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Pill */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-950">
              <div className="flex items-center gap-2.5 font-black text-sm mb-1 text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Privacidade & Segurança de Dados</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Seus dados nunca serão compartilhados ou vendidos. Utilizamos suas informações exclusivamente para elaborar sua análise e proposta preliminar.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Diagnosis Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 block mb-1">
                FORMULÁRIO DE PROPOSTA EXPRESSA
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Envie seus dados para receber uma proposta no WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Preencha os campos abaixo. Em instantes nosso especialista entrará em contato com a melhor solução:
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Oliveira"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (11) 98765-4321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nome da Empresa / Comércio *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Restaurante Sabor Mineiro"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Sua Cidade e Estado (UF) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Belo Horizonte - MG"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  O que você gostaria de contratar? *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all cursor-pointer font-medium"
                >
                  <option value="Criação de Site Profissional (Apenas Site)">Criação de Site Profissional (Apenas Site)</option>
                  <option value="Robô Inteligente de WhatsApp (Apenas Automação)">Robô Inteligente de WhatsApp (Apenas Automação)</option>
                  <option value="Site Comercial + Robô de WhatsApp (Combo Completo)">Site Comercial + Robô de WhatsApp (Combo Completo)</option>
                  <option value="Quero um Raio-X Grátis do meu Google Meu Negócio">Quero um Raio-X Grátis do meu Google Meu Negócio</option>
                  <option value="Projeto Sob Medida / Outro">Projeto Sob Medida / Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Conte um pouco sobre o que você vende (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Temos uma pousada com 12 quartos e queremos fechar reservas direto pelo WhatsApp sem pagar comissão de plataformas..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer pt-4"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Proposta Direto para o WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
