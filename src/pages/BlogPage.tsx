import React, { useState, useMemo } from 'react';
import { GUIDES_LIST } from '../data/guidesData';
import { BookOpen, Search, Clock, ArrowRight, X, HelpCircle } from 'lucide-react';
import { soundFx } from '../components/SoundEffects';

interface BlogPageProps {
  onOpenContact: (plan?: string) => void;
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenContact, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'google' | 'whatsapp' | 'sites' | 'gestao'>('all');

  const categories = [
    { id: 'all', label: 'Todos os Artigos' },
    { id: 'google', label: 'Vendas no Google & SEO' },
    { id: 'whatsapp', label: 'Robô WhatsApp & Atendimento' },
    { id: 'sites', label: 'Presença Digital & Sites' },
    { id: 'gestao', label: 'Erros & Gestão Comercial' },
  ];

  const getCategoryForGuide = (slug: string): string => {
    if (slug.includes('google') || slug.includes('seo') || slug.includes('avaliacoes')) return 'google';
    if (slug.includes('whatsapp') || slug.includes('horario')) return 'whatsapp';
    if (slug.includes('site') || slug.includes('dominio') || slug.includes('velocidade')) return 'sites';
    return 'gestao';
  };

  const filteredGuides = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return GUIDES_LIST.filter((guide) => {
      const cat = getCategoryForGuide(guide.slug);
      const matchesCategory = selectedCategory === 'all' || cat === selectedCategory;
      const matchesSearch =
        !q ||
        guide.title.toLowerCase().includes(q) ||
        guide.headline.toLowerCase().includes(q) ||
        guide.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleArticleClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    soundFx.playUiClick();
    onNavigate(`/guias/${slug}`);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-300 text-xs font-bold text-indigo-900 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-indigo-700" />
            <span>CENTRAL DE INTELIGÊNCIA & VENDAS DIGITAIS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Blog Sentinel:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
              Respostas Reais para Quem Quer Vender Mais
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Sem enrolação ou termos técnicos complicados. Guias práticos escritos para o empresário e comerciante que busca transformar a internet em faturamento real.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Pesquise por tema... (Ex: Instagram, Preço de site, Google Meu Negócio, WhatsApp)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-slate-300 focus:border-indigo-500 focus:outline-none text-slate-900 text-sm shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => {
              const active = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    soundFx.playUiClick();
                    setSelectedCategory(c.id as any);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredGuides.map((guide) => (
              <a
                key={guide.slug}
                href={`/guias/${guide.slug}`}
                onClick={(e) => handleArticleClick(e, guide.slug)}
                className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-indigo-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                      Guia Estratégico
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 leading-snug">
                    {guide.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 mb-20">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">Nenhum artigo encontrado</h3>
            <p className="text-xs text-slate-500 mb-4">Tente buscar por outro termo ou limpe os filtros.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold cursor-pointer"
            >
              Ver todos os artigos
            </button>
          </div>
        )}

        {/* Diagnosis CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-2">
              DIAGNÓSTICO DIGITAL GRATUITO
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Quer saber por que seus concorrentes aparecem na sua frente no Google?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Nossa equipe faz uma auditoria completa de 10 minutos no Perfil da sua Empresa e no seu site atual, sem cobrar nada. Mostramos exatamente onde você está perdendo dinheiro.
            </p>
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact('Solicitação de Raio-X Gratuito do Google');
              }}
              className="px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Solicitar Meu Raio-X Gratuito</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
