import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const FreeDiagnosis: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [optionalId, setOptionalId] = useState(''); // Instagram or CNPJ
  const [phone, setPhone] = useState('');

  const categoryChips = [
    'Pousada / Hotel',
    'Restaurante / Bar',
    'Loja / Varejo',
    'Clínica / Saúde',
    'Oficina / Auto Center',
    'Gráfica / Visual',
    'Advocacia / Escritório',
  ];

  const handlePhoneChange = (val: string) => {
    // Máscara simples para telefone brasileiro: (XX) XXXXX-XXXX
    const raw = val.replace(/\D/g, '').slice(0, 11);
    if (raw.length <= 2) {
      setPhone(raw);
    } else if (raw.length <= 6) {
      setPhone(`(${raw.slice(0, 2)}) ${raw.slice(2)}`);
    } else if (raw.length <= 10) {
      setPhone(`(${raw.slice(0, 2)}) ${raw.slice(2, 6)}-${raw.slice(6)}`);
    } else {
      setPhone(`(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playUiClick();

    const msg = `Olá, equipe da Sentinel Systems! 🌊 Solicito um *Raio-X Grátis de Presença no Google* para minha empresa:\n\n*Nome da Empresa:* ${businessName}\n*Endereço/Cidade/Bairro:* ${address}\n*O que Vendemos / Ramo:* ${category}\n*Instagram ou CNPJ:* ${optionalId || 'Não informado'}\n*WhatsApp para Retorno:* ${phone}\n\nPoderiam analisar como estamos aparecendo nas buscas e se estamos perdendo clientes? Aguardo o retorno da equipe. Obrigado!`;

    window.open(`https://wa.me/5522999726069?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="raio-x" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-12 rounded-3xl bg-white border-2 border-cyan-300 shadow-xl relative overflow-hidden">
          {/* Top highlight pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>ANÁLISE MANUAL PERSONALIZADA &bull; 100% GRÁTIS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Solicite um Raio-X Gratuito da sua Empresa no Google
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Nossa equipe analisa manualmente sua presença nas buscas: se os clientes conseguem te achar no Google Maps, se você está perdendo vendas para a concorrência e o que precisa ser ajustado. Sem promessas falsas de pressa, com foco na precisão.
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
                  placeholder="Ex: Pousada Sol, Restaurante Central..."
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
                  placeholder="Ex: Av. Paulista, 1000 - Bela Vista, São Paulo - SP (ou sua cidade)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                O que você vende / Serviço principal *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Diárias de pousada, Marmitas e almoço, Peças de moto..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all mb-2"
              />

              {/* Quick Select Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                <span className="text-[11px] text-slate-500 font-semibold mr-1">Toque para preencher:</span>
                {categoryChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => {
                      soundFx.playUiClick();
                      setCategory(chip);
                    }}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                      category === chip
                        ? 'bg-cyan-600 text-white border-cyan-600 font-bold'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
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

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Seu WhatsApp para Recebimento da Análise *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(22) 99999-9999"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-cyan-600/25 transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <Search className="w-4 h-4" />
              <span>Solicitar Raio-X da Minha Empresa no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sem custo ou compromisso
            </span>
            <span className="flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Análise personalizada por nossa equipe
            </span>
            <span className="flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Retorno direto no seu WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeDiagnosis;
