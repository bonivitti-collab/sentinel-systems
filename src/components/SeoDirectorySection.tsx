import React, { useState } from 'react';
import { Sparkles, Bot, MapPin, BookOpen, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { NICHES_LIST } from '../data/nichesData';
import { AUTOMATION_LIST } from '../data/automationData';
import { CITIES_LIST } from '../data/citiesData';
import { GUIDES_LIST } from '../data/guidesData';
import { soundFx } from './SoundEffects';

interface SeoDirectorySectionProps {
  onNavigate?: (url: string) => void;
}

export const SeoDirectorySection: React.FC<SeoDirectorySectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'niches' | 'automation' | 'cities' | 'guides'>('all');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Permite que Ctrl+Clique ou clique com botão do meio abra normalmente em nova aba
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
    <section id="diretorio-seo" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Ecossistema de Soluções Sentinel Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Diretório de Soluções, Automações & Cidades Atendidas
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Navegue pelas páginas especializadas da Sentinel: desde plataformas sob medida por nicho comercial e robôs de WhatsApp 24h até nossa cobertura local na Região dos Lagos e guias práticos de vendas.
          </p>
        </div>

        {/* Filtros por Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => {
              soundFx.playUiClick();
              setActiveTab('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Todas as Soluções (37 Páginas)
          </button>
          <button
            onClick={() => {
              soundFx.playUiClick();
              setActiveTab('niches');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'niches'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Nichos Comerciais (10)
          </button>
          <button
            onClick={() => {
              soundFx.playUiClick();
              setActiveTab('automation');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'automation'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Robôs de WhatsApp (6)
          </button>
          <button
            onClick={() => {
              soundFx.playUiClick();
              setActiveTab('cities');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'cities'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Cidades Atendidas (8)
          </button>
          <button
            onClick={() => {
              soundFx.playUiClick();
              setActiveTab('guides');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'guides'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Guias & Artigos (12)
          </button>
        </div>

        {/* Grade de Conteúdo */}
        <div className="space-y-16">

          {/* 1. NICHOS COMERCIAIS */}
          {(activeTab === 'all' || activeTab === 'niches') && (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sites e Sistemas por Nicho Comercial</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Desenvolvimento com arquitetura sob medida para cada tipo de empresa</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {NICHES_LIST.map((niche) => (
                  <a
                    key={niche.slug}
                    href={`/solucoes/${niche.slug}`}
                    onClick={(e) => handleLinkClick(e, `/solucoes/${niche.slug}`)}
                    className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400">Nicho Especializado</span>
                      <h4 className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors mt-1 mb-2 line-clamp-2">
                        {niche.shortTitle}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {niche.headline}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-400 font-semibold">
                      <span>Ver solução</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 2. ROBÔS DE WHATSAPP & AUTOMAÇÃO */}
          {(activeTab === 'all' || activeTab === 'automation') && (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Robôs de Atendimento e Automação no WhatsApp</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Atendimento 24 horas por dia sem deixar nenhum cliente sem resposta</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {AUTOMATION_LIST.map((auto) => (
                  <a
                    key={auto.slug}
                    href={`/automacao/${auto.slug}`}
                    onClick={(e) => handleLinkClick(e, `/automacao/${auto.slug}`)}
                    className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-emerald-500/50 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Automação 24h</span>
                        <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full font-bold">Oficial</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-200 group-hover:text-emerald-300 transition-colors mb-2">
                        {auto.shortTitle}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                        {auto.headline}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400 group-hover:text-emerald-400 font-semibold">
                      <span>Ver fluxo de automação</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 3. CIDADES ATENDIDAS */}
          {(activeTab === 'all' || activeTab === 'cities') && (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cobertura Territorial: Região dos Lagos & RJ</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Atendimento presencial e suporte prioritário para comércios locais</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CITIES_LIST.map((city) => (
                  <a
                    key={city.slug}
                    href={`/cidades/${city.slug}`}
                    onClick={(e) => handleLinkClick(e, `/cidades/${city.slug}`)}
                    className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-sky-500/50 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{city.name}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-200 group-hover:text-sky-300 transition-colors mb-2">
                        {city.commercialFocus}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {city.headline}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400 group-hover:text-sky-400 font-semibold">
                      <span>Página da cidade</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 4. GUIAS & EDUCAÇÃO */}
          {(activeTab === 'all' || activeTab === 'guides') && (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Central de Guias & Conhecimento Estratégico</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Artigos práticos sobre vendas no Google, automação e presença digital</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GUIDES_LIST.map((guide) => (
                  <a
                    key={guide.slug}
                    href={`/guias/${guide.slug}`}
                    onClick={(e) => handleLinkClick(e, `/guias/${guide.slug}`)}
                    className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-semibold">
                        <span className="text-indigo-400">Guia Prático</span>
                        <span>{guide.readTime}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors mb-2 line-clamp-2">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {guide.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400 group-hover:text-indigo-400 font-semibold">
                      <span>Ler guia completo</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Rodapé Interno com Selo de Garantia */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sentinel Systems &bull; Infraestrutura de Alta Performance e SEO Programático</span>
          </div>
          <div className="text-slate-500">
            Região dos Lagos &bull; Rio de Janeiro &bull; Atendimento em Todo o Brasil
          </div>
        </div>

      </div>
    </section>
  );
};
