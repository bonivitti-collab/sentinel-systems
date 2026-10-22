import React, { useState } from 'react';
import { Bot, Code2, Smartphone, ShieldCheck, Anchor, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundFx } from './SoundEffects';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: 'ia',
      icon: Bot,
      color: 'from-cyan-400 to-teal-400',
      badge: 'VANGUARDA 2026',
      title: 'Inteligência Artificial & Agentes Autônomos',
      shortDesc: 'Automatize operações complexas e atendimento com IA generativa sob medida.',
      fullDesc: 'Criamos agentes autônomos integrados aos sistemas da sua empresa e ao WhatsApp, capazes de qualificar clientes, executar fluxos de trabalho e gerar insights preditivos com precisão cirúrgica.',
      highlights: [
        'Agentes de atendimento e vendas multicanal 24/7',
        'Integração com LLMs líderes (OpenAI, Gemini, Claude)',
        'Análise preditiva de vendas e comportamento',
        'Automação de processos operacionais repetitivos'
      ]
    },
    {
      id: 'software',
      icon: Code2,
      color: 'from-purple-400 to-indigo-400',
      badge: 'ENG DE SOFTWARE',
      title: 'Sistemas Web & Plataformas Sob Medida',
      shortDesc: 'Softwares robustos que substituem planilhas caóticas e gargalos.',
      fullDesc: 'Construção de ecossistemas digitais, dashboards analíticos, ERPs próprios e plataformas SaaS com tempo de carregamento inferior a 1 segundo e arquitetura escalável para milhões de acessos.',
      highlights: [
        'Código proprietário sem dependência de templates',
        'Bancos de dados de altíssima concorrência',
        'APIs REST e GraphQL integradas ao seu ecossistema',
        'Design System exclusivo e interfaces memoráveis'
      ]
    },
    {
      id: 'mobile',
      icon: Smartphone,
      color: 'from-cyan-400 to-blue-500',
      badge: 'IOS & ANDROID',
      title: 'Aplicativos Mobile de Alta Performance',
      shortDesc: 'A presença do seu negócio na palma da mão com fidelização extrema.',
      fullDesc: 'Desenvolvimento de apps modernos com animações fluidas a 120 FPS, sincronização offline-first, pagamentos instantâneos (PIX / Cartão) e notificações inteligentes que engajam o usuário.',
      highlights: [
        'Desenvolvimento unificado iOS & Android',
        'Design com foco em usabilidade e retenção',
        'Segurança biométrica e encriptação nativa',
        'Painel administrativo web em tempo real'
      ]
    },
    {
      id: 'security',
      icon: ShieldCheck,
      color: 'from-indigo-400 to-purple-500',
      badge: 'PROTEÇÃO MÁXIMA',
      title: 'Cibersegurança & Monitoramento Inteligente',
      shortDesc: 'Vigilância contínua e proteção de dados para infraestruturas críticas.',
      fullDesc: 'Honrando nosso nome Sentinel, implementamos proteção zero-trust, monitoramento 24/7 contra invasões, backups imutáveis e conformidade rigorosa com a LGPD.',
      highlights: [
        'Auditoria e pentest de vulnerabilidades',
        'Telemetria e alertas em tempo real',
        'Proteção contra ataques DDoS e ransomware',
        'Arquitetura em nuvem com alta redundância'
      ]
    },
    {
      id: 'regional',
      icon: Anchor,
      color: 'from-teal-400 to-cyan-500',
      badge: 'REGIÃO DOS LAGOS',
      title: 'Soluções Náuticas & Imobiliário de Alto Padrão',
      shortDesc: 'Tecnologia especializada para os setores mais fortes de Búzios, Cabo Frio e Arraial.',
      fullDesc: 'Soluções de software, totens interativos, automação de locações de temporada e controle de embarcações que elevam a experiência de clientes de alto padrão na Região dos Lagos.',
      highlights: [
        'Sistemas para imobiliárias e corretores de luxo',
        'Gestão de marinas e locações náuticas',
        'Portais imersivos com tour virtual e 3D',
        'Integração direta com CRMs e portais líderes'
      ]
    }
  ];

  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span>// CAPABILIDADES SENTINEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Engenharia de Ponta para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
              Desafios Ambiciosos
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Não entregamos apenas código: entregamos ativos digitais que geram lucro, automatizam tarefas repetitivas e protegem sua empresa.
          </p>
        </div>

        {/* Tab Selectors (Desktop) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={srv.id}
                onClick={() => {
                  soundFx.playUiClick();
                  setActiveTab(idx);
                }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400 text-white shadow-[0_0_25px_rgba(0,242,254,0.25)]'
                    : 'bg-slate-900/50 hover:bg-slate-800/60 border border-white/5 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{srv.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        {(() => {
          const current = services[activeTab];
          const CurrentIcon = current.icon;
          return (
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              {/* Background gradient orb */}
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Column info */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-semibold mb-4">
                    <span>{current.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                    {current.fullDesc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">{h}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playUiClick();
                      onSelectService(current.title);
                    }}
                    className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(0,242,254,0.3)] flex items-center gap-2 cursor-pointer"
                  >
                    <span>Solicitar Orçamento para {current.title.split('&')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Column: Visual Mockup / Tech Blueprint */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-md p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 shadow-inner relative overflow-hidden">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400">
                        SENTINEL_CORE_V3.8
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                        <div className="flex items-center gap-3">
                          <CurrentIcon className="w-6 h-6 text-cyan-400" />
                          <div>
                            <div className="text-xs font-bold text-white">Status do Sistema</div>
                            <div className="text-[10px] text-emerald-400 font-mono">100% OPERACIONAL</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300">
                          PROPRIETÁRIO
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 text-[11px] font-mono text-slate-400 space-y-1.5">
                        <div className="text-cyan-300">$ sentinel deploy --production</div>
                        <div>✓ Compilação semântica com sucesso</div>
                        <div>✓ Arquitetura isolada & Criptografada</div>
                        <div className="text-emerald-400">✓ 0.04s tempo de resposta (P99)</div>
                        <div className="text-purple-300">✓ Agente autônomo conectado</div>
                      </div>

                      <div className="text-center pt-2">
                        <span className="text-[10px] font-mono text-slate-400">
                          Padrão de excelência internacional auditado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
export default ServicesSection;
