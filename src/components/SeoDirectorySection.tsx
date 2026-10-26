import React, { useState, useMemo } from 'react';
import { Sparkles, Bot, MapPin, BookOpen, ArrowRight, Compass, ShieldCheck, Search, X } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');

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

  const normalizedQuery = searchQuery.trim().toLowerCase();

  // Filtragem em tempo real
  const filteredNiches = useMemo(() => {
    if (!normalizedQuery) return NICHES_LIST;
    return NICHES_LIST.filter(
      (n) =>
        n.title.toLowerCase().includes(normalizedQuery) ||
        n.shortTitle.toLowerCase().includes(normalizedQuery) ||
        n.headline.toLowerCase().includes(normalizedQuery) ||
        n.description.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const filteredAutomation = useMemo(() => {
    if (!normalizedQuery) return AUTOMATION_LIST;
    return AUTOMATION_LIST.filter(
      (a) =>
        a.title.toLowerCase().includes(normalizedQuery) ||
        a.shortTitle.toLowerCase().includes(normalizedQuery) ||
        a.headline.toLowerCase().includes(normalizedQuery) ||
        a.description.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const filteredCities = useMemo(() => {
    if (!normalizedQuery) return CITIES_LIST;
    return CITIES_LIST.filter(
      (c) =>
        c.name.toLowerCase().includes(normalizedQuery) ||
        c.headline.toLowerCase().includes(normalizedQuery) ||
        c.commercialFocus.toLowerCase().includes(normalizedQuery) ||
        c.localKeywords.some((kw) => kw.toLowerCase().includes(normalizedQuery))
    );
  }, [normalizedQuery]);

  const filteredGuides = useMemo(() => {
    if (!normalizedQuery) return GUIDES_LIST;
    return GUIDES_LIST.filter(
      (g) =>
        g.title.toLowerCase().includes(normalizedQuery) ||
        g.headline.toLowerCase().includes(normalizedQuery) ||
        g.excerpt.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const totalFilteredCount =
    filteredNiches.length + filteredAutomation.length + filteredCities.length + filteredGuides.length;

  const quickSearchTags = [
    'Pousadas',
    'Restaurantes',
    'Clínicas',
    'Cabo Frio',
    'Búzios',
    'Arraial do Cabo',
    'Robô WhatsApp',
    'Google Meu Negócio',
  ];

  return (
    <section id="diretorio-seo" className="py-24 bg-slate-900 text-slate-100 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Ecossistema de Soluções Sentinel Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Diretório de Soluções, Automações & Cidades
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Navegue pelas 37 páginas especializadas da Sentinel: desde plataformas sob medida por nicho comercial e robôs de WhatsApp 24h até nossa cobertura local na Região dos Lagos e guias práticos de vendas.
          </p>
        </div>

        {/* 🔍 BARRA DE BUSCA EM TEMPO REAL (MELHORIA DE UI/UX) */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Busque por nicho, cidade ou tema... (Ex: Pousada, Búzios, Restaurante, Preço)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 focus:border-cyan-400 focus:bg-slate-800 focus:outline-none text-white text-sm placeholder:text-slate-400 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Chips de busca rápida */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
            <span className="text-slate-400 font-medium">Sugestões rápidas:</span>
            {quickSearchTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  soundFx.playUiClick();
                  setSearchQuery(tag);
                }}
                className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  searchQuery.toLowerCase() === tag.toLowerCase()
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Filtros por Categoria com Contadores */}
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
            Todas as Soluções ({normalizedQuery ? totalFilteredCount : 37})
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
            Nichos Comerciais ({filteredNiches.length})
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
            Robôs WhatsApp ({filteredAutomation.length})
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
            Cidades ({filteredCities.length})
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
            Guias Práticos ({filteredGuides.length})
          </button>
        </div>

        {/* Empty State */}
        {totalFilteredCount === 0 && (
          <div className="text-center py-16 bg-slate-800/40 rounded-3xl border border-slate-700/60 max-w-xl mx-auto my-8 p-8">
            <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Nenhum resultado encontrado</h3>
            <p className="text-slate-400 text-sm mb-6">
              Não encontramos nenhuma página com o termo "{searchQuery}". Tente outro termo ou limpe a busca.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Ver Todas as 37 Soluções
            </button>
          </div>
        )}

        {/* Grade de Conteúdo */}
        <div className="space-y-16">

          {/* 1. NICHOS COMERCIAIS */}
          {(activeTab === 'all' || activeTab === 'niches') && filteredNiches.length > 0 && (
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
                {filteredNiches.map((niche) => (
                  <a
                    key={niche.slug}
                    href={`/solucoes/${niche.slug}`}
                    onClick={(e) => handleLinkClick(e, `/solucoes/${niche.slug}`)}
                    className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-400/60 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/30"
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
          {(activeTab === 'all' || activeTab === 'automation') && filteredAutomation.length > 0 && (
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
                {filteredAutomation.map((auto) => (
                  <a
                    key={auto.slug}
                    href={`/automacao/${auto.slug}`}
                    onClick={(e) => handleLinkClick(e, `/automacao/${auto.slug}`)}
                    className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-emerald-400/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-950/30"
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
          {(activeTab === 'all' || activeTab === 'cities') && filteredCities.length > 0 && (
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
                {filteredCities.map((city) => (
                  <a
                    key={city.slug}
                    href={`/cidades/${city.slug}`}
                    onClick={(e) => handleLinkClick(e, `/cidades/${city.slug}`)}
                    className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-sky-400/60 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-950/30"
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
          {(activeTab === 'all' || activeTab === 'guides') && filteredGuides.length > 0 && (
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
                {filteredGuides.map((guide) => (
                  <a
                    key={guide.slug}
                    href={`/guias/${guide.slug}`}
                    onClick={(e) => handleLinkClick(e, `/guias/${guide.slug}`)}
                    className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-400/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-950/30"
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
