import React from 'react';
import { ArrowLeft, MessageCircle, ArrowRight, MapPin, Search, ShieldCheck, Compass } from 'lucide-react';
import { CITIES_LIST, type CityItem } from '../data/citiesData';
import { soundFx } from './SoundEffects';

interface DedicatedCityPageProps {
  city: CityItem;
  onBack: () => void;
  onOpenContact: (plan?: string) => void;
  onNavigate?: (url: string) => void;
}

export const DedicatedCityPage: React.FC<DedicatedCityPageProps> = ({ city, onBack, onOpenContact, onNavigate }) => {
  const whatsappUrl = `https://wa.me/5522999726069?text=${encodeURIComponent(city.whatsappMessage)}`;

  const relatedCities = CITIES_LIST.filter((c) => c.slug !== city.slug).slice(0, 3);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    soundFx.playUiClick();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={() => {
              soundFx.playUiClick();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-cyan-700 p-2 rounded-lg hover:bg-slate-200/60 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </button>

          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 font-medium">
            <a href="/" onClick={(e) => handleLink(e, '/')} className="hover:text-cyan-600">Início</a>
            <span className="mx-2">/</span>
            <a href="/#diretorio-seo" onClick={(e) => handleLink(e, '/#diretorio-seo')} className="hover:text-cyan-600">Cidades</a>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-bold">{city.name}</span>
          </nav>
        </div>

        {/* Hero do Município */}
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

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 mb-8 font-medium">
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
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Como Fazemos seu Negócio se Destacar em {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-cyan-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-100/70 text-cyan-700 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Topo do Google Maps</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Otimizamos seu Perfil da Empresa para você ser a primeira opção de moradores e turistas em {city.name}.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-100/70 text-indigo-700 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">WhatsApp 24h Automatizado</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Não perca vendas à noite ou no feriado. Nosso robô atende, passa preços e fecha pedidos no piloto automático.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Suporte Próximo</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Você fala com gente de verdade no WhatsApp. Atualizamos seus dados, fotos e produtos todo mês na mensalidade.
              </p>
            </div>
          </div>
        </div>

        {/* Local Keywords */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs mb-14">
          <h3 className="text-lg font-bold text-slate-900 mb-3">
            Termos mais buscados por clientes em {city.name} no Google:
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Estruturamos seu site com essas palavras-chave para sua empresa ser a resposta imediata de quem quer comprar:
          </p>
          <div className="flex flex-wrap gap-2">
            {city.localKeywords.map((kw, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* 🗺️ CIDADES VIZINHAS / CONTEÚDO RELACIONADO (TEIA DE ENGAJAMENTO) */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Compass className="w-4 h-4 text-cyan-600" />
            <span>Outras Cidades Atendidas na Região dos Lagos:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedCities.map((rc) => (
              <a
                key={rc.slug}
                href={`/cidades/${rc.slug}`}
                onClick={(e) => handleLink(e, `/cidades/${rc.slug}`)}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all group block"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-700 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{rc.name}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-1">
                  {rc.commercialFocus}
                </h4>
                <span className="text-[11px] text-slate-400 group-hover:text-cyan-600 mt-2 inline-flex items-center gap-1 font-semibold">
                  <span>Ver presença digital</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DedicatedCityPage;
