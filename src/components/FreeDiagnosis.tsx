import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const FreeDiagnosis: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [optionalId, setOptionalId] = useState(''); // Instagram or CNPJ
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playUiClick();

    const msg = `Olá, equipe da Sentinel Systems! 🌊 Solicito um *Raio-X Grátis de Presença no Google* para minha empresa:\n\n*Nome da Empresa:* ${businessName}\n*Endereço/Cidade/Bairro:* ${address}\n*O que Vendemos / Ramo:* ${category}\n*Instagram ou CNPJ:* ${optionalId || 'Não informado'}\n*WhatsApp para Retorno:* ${phone}\n\nPoderiam analisar como estamos aparecendo nas buscas e se estamos perdendo clientes? Aguardo o retorno da equipe. Obrigado!`;

    window.open(`https://wa.me/5522999726069?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="raio-x" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-cyan-300 shadow-xl relative overflow-hidden">
          {/* Top highlight pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>ANÁLISE PERSONALIZADA E SEM COMPROMISSO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Solicite um Raio-X Gratuito da sua Empresa no Google
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Nossa equipe analisa manualmente sua presença nas buscas: se os clientes conseguem te achar no mapa, se você está perdendo vendas para a concorrência e o que precisa ser ajustado. Sem promessas falsas de pressa, com foco na precisão.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Nome da Empresa / Nome Fantasia *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Marmitaria da Esquina, Pousada Sol..."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Cidade, Bairro e Endereço *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Av. Central, 120 - Centro, Cabo Frio"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  O que você vende / Serviço principal *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Marmitex para entrega, Reformas, Roupas..."
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5 flex items-center justify-between">
                  <span>Instagram ou CNPJ</span>
                  <span className="text-[10px] text-slate-500 font-normal">Opcional</span>
                </label>
                <input
                  type="text"
                  placeholder="@suaempresa ou 00.000.000/0001-00"
                  value={optionalId}
                  onChange={(e) => setOptionalId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Seu WhatsApp para Recebimento da Análise *
              </label>
              <input
                type="tel"
                required
                placeholder="(22) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-cyan-600/25 transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer mt-3"
            >
              <Search className="w-4 h-4" />
              <span>Solicitar Raio-X da Minha Empresa no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sem custo ou compromisso
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Análise personalizada por nossa equipe
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Retorno direto no seu WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FreeDiagnosis;
