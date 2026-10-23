import React from 'react';
import { ArrowLeft, MessageCircle, ArrowRight, MapPin, Search, ShieldCheck } from 'lucide-react';
import type { CityItem } from '../data/citiesData';
import { soundFx } from './SoundEffects';

interface DedicatedCityPageProps {
  city: CityItem;
  onBack: () => void;
  onOpenContact: (plan?: string) => void;
}

export const DedicatedCityPage: React.FC<DedicatedCityPageProps> = ({ city, onBack, onOpenContact }) => {
  const whatsappUrl = `https://wa.me/5522999726069?text=${encodeURIComponent(city.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => {
            soundFx.playUiClick();
            onBack();
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-cyan-700 mb-8 p-2 rounded-lg hover:bg-slate-200/60 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Página Inicial</span>
        </button>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-xs mb-10 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 mb-6">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            <span>Presença Digital Oficial em {city.name} ({city.region})</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            {city.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-3xl">
            {city.description}
          </p>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 mb-8 font-medium">
            <strong>Foco Comercial da Região:</strong> {city.commercialFocus}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playUiClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com a Equipe Sentinel em {city.name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact(`Atendimento em ${city.name}`);
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all cursor-pointer"
            >
              Solicitar Raio-X da Minha Empresa
            </button>
          </div>
        </div>

        {/* Local Advantages */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Como Fazemos seu Negócio se Destacar em {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-cyan-100/70 text-cyan-700 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Topo do Google Maps</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Otimizamos seu Perfil da Empresa para você ser a primeira opção de moradores e turistas em {city.name}.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">WhatsApp 24h Automatizado</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Não perca vendas à noite ou no feriado. Nosso robô atende, passa preços e fecha pedidos no piloto automático.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Suporte Local Contínuo</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sem estresse técnico: cuidamos de fotos, textos, hospedagem rápida e segurança todo mês.
              </p>
            </div>
          </div>
        </div>

        {/* Local Keywords Cloud */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">Termos de Busca Monitorados em {city.name}</h4>
          <div className="flex flex-wrap gap-2">
            {city.localKeywords.map((kw, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
