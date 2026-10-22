import React, { useState } from 'react';
import { ExternalLink, Sparkles, TrendingUp, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface PortfolioShowcaseProps {
  onOpenContact: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ia' | 'web' | 'mobile' | 'luxury'>('all');

  const projects = [
    {
      id: 'sentinel-ai-engine',
      category: 'ia',
      title: 'Sentinel AI Nexus - Orquestrador de Agentes Autônomos',
      subtitle: 'Plataforma empresarial de inteligência artificial com automação de atendimento e análise preditiva.',
      metric: 'Economia de 340h/mês em operações',
      tags: ['Gemini 2.5/Flash', 'Python', 'FastAPI', 'WebSocket', 'Next.js'],
      color: 'from-cyan-500/20 via-teal-500/10 to-transparent',
      borderColor: 'border-cyan-500/40',
      tagColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30',
      icon: Cpu,
      preview: {
        badge: 'IA EM TEMPO REAL',
        metricValue: '99.8%',
        metricLabel: 'Precisão de Resposta',
        status: 'Online & Ativo'
      }
    },
    {
      id: 'buzios-nautical-cloud',
      category: 'luxury',
      title: 'Marina Reserve - Ecossistema Náutico & Aluguel de Luxo',
      subtitle: 'Plataforma de alta sofisticação para agendamento, telemetria de iates e conciergerie em Búzios e Angra.',
      metric: '+410% em reservas diretas de iates',
      tags: ['React 19', 'Tailwind CSS', 'Mapbox 3D', 'Stripe Global', 'Node.js'],
      color: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      borderColor: 'border-purple-500/40',
      tagColor: 'text-purple-400 bg-purple-950/60 border-purple-500/30',
      icon: Layers,
      preview: {
        badge: 'EXPERIÊNCIA ULTRA-LUXO',
        metricValue: '< 0.6s',
        metricLabel: 'Carregamento Global',
        status: 'Búzios / Arraial'
      }
    },
    {
      id: 'cabo-frio-real-estate',
      category: 'web',
      title: 'Prime Estate - Portal Imobiliário Imersivo 3D',
      subtitle: 'Portal de alto padrão para venda de mansões e coberturas na Região dos Lagos com tours 360° fluidos.',
      metric: 'R$ 48M transacionados no ecossistema',
      tags: ['Next.js 15', 'Three.js / WebGL', 'PostgreSQL', 'Cloudflare Edge'],
      color: 'from-teal-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-teal-500/40',
      tagColor: 'text-teal-400 bg-teal-950/60 border-teal-500/30',
      icon: TrendingUp,
      preview: {
        badge: 'PORTAL 3D IMERSIVO',
        metricValue: '4K HDR',
        metricLabel: 'Tour Interativo',
        status: 'Alta Conversão'
      }
    },
    {
      id: 'sentinel-defense-core',
      category: 'mobile',
      title: 'Sentinel SentinelApp - Monitoramento & Telemetria Crítica',
      subtitle: 'App mobile com criptografia de ponta a ponta e telemetria de sensores para frotas e infraestruturas.',
      metric: 'Zero incidentes de segurança registrados',
      tags: ['React Native / Flutter', 'Rust Core', 'Biometria', 'Zero-Trust'],
      color: 'from-indigo-500/20 via-purple-500/10 to-transparent',
      borderColor: 'border-indigo-500/40',
      tagColor: 'text-indigo-400 bg-indigo-950/60 border-indigo-500/30',
      icon: ShieldCheck,
      preview: {
        badge: 'GRAU MILITAR',
        metricValue: '256-bit',
        metricLabel: 'Criptografia Quântica',
        status: 'Telemetria Ativa'
      }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// PORTFÓLIO & CASOS DE SUCESSO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              O Padrão Sentinel em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
                Ação Prática
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos os Projetos' },
              { id: 'ia', label: 'IA & Automação' },
              { id: 'web', label: 'Plataformas Web' },
              { id: 'luxury', label: 'Náutico & Luxo' },
              { id: 'mobile', label: 'Apps & Segurança' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playUiClick();
                  setActiveCategory(cat.id as unknown as typeof activeCategory);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`glass-panel rounded-3xl border ${p.borderColor} p-7 sm:p-9 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,242,254,0.12)] transition-all duration-500 flex flex-col justify-between`}
              >
                {/* Background glow gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none`} />

                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-slate-300">
                        {p.preview.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{p.preview.status}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors relative z-10">
                    {p.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                    {p.subtitle}
                  </p>

                  {/* Highlight Metric Pill */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 mb-6 relative z-10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Impacto Mensurado</div>
                      <div className="text-sm sm:text-base font-bold text-white">{p.metric}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg sm:text-xl font-extrabold text-cyan-400">{p.preview.metricValue}</div>
                      <div className="text-[10px] font-mono text-slate-400">{p.preview.metricLabel}</div>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                    {p.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${p.tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-slate-400">
                    Arquitetura Sentinel Systems
                  </span>

                  <button
                    onClick={() => {
                      soundFx.playUiClick();
                      onOpenContact();
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/link"
                  >
                    <span>Quero algo semelhante</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Challenge Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-slate-950/60 border border-cyan-500/30 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Você tem um projeto com alto grau de exigência técnica?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6">
              Nossa equipe de engenharia analisa sua ideia, projeta a arquitetura ideal e apresenta um protótipo funcional em tempo recorde.
            </p>
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact();
              }}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Agendar Diagnóstico Gratuito com a Engenharia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioShowcase;
