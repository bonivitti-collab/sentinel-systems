import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import { soundFx } from './SoundEffects';

export const ProjectEstimator: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('web');
  const [timeline, setTimeline] = useState<string>('standard');
  const [features, setFeatures] = useState<string[]>([
    'ia-whatsapp',
    'high-performance'
  ]);

  const projectTypes = [
    { id: 'web', name: 'Plataforma Web Sob Medida', base: 4500, time: '3-5 semanas' },
    { id: 'ia', name: 'Agente de IA & Automação 24/7', base: 3800, time: '2-4 semanas' },
    { id: 'mobile', name: 'App Mobile iOS & Android', base: 7500, time: '5-8 semanas' },
    { id: 'full', name: 'Ecossistema Completo (Web + App + IA)', base: 12000, time: '8-12 semanas' },
  ];

  const availableFeatures = [
    { id: 'ia-whatsapp', name: 'Agente de IA integrado ao WhatsApp', cost: 1500 },
    { id: 'high-performance', name: 'Animações Fluídas 3D / Nível Awwwards', cost: 1200 },
    { id: 'payments', name: 'Gateway PIX / Cartão com Split Automático', cost: 900 },
    { id: 'security', name: 'Blindagem de Segurança & Auditoria LGPD', cost: 1100 },
    { id: 'seo-analytics', name: 'SEO Internacional & Telemetria em Tempo Real', cost: 800 },
  ];

  const timelineModifiers: Record<string, { multiplier: number, label: string }> = {
    fast: { multiplier: 1.25, label: 'Sprint Express (Prioridade Máxima)' },
    standard: { multiplier: 1.0, label: 'Cronograma Padrão de Engenharia' },
    relaxed: { multiplier: 0.95, label: 'Cronograma Flexível' },
  };

  const toggleFeature = (id: string) => {
    soundFx.playUiClick();
    if (features.includes(id)) {
      setFeatures(features.filter(f => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  // Calculate estimated investment
  const currentType = projectTypes.find(t => t.id === projectType) || projectTypes[0];
  const featureCost = features.reduce((sum, fId) => {
    const feat = availableFeatures.find(f => f.id === fId);
    return sum + (feat ? feat.cost : 0);
  }, 0);

  const subtotal = currentType.base + featureCost;
  const modifier = timelineModifiers[timeline]?.multiplier || 1.0;
  const total = Math.round(subtotal * modifier);

  const generateWhatsAppMessage = () => {
    const selectedFeatNames = features
      .map(fId => availableFeatures.find(f => f.id === fId)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Olá, time da Sentinel Systems! 🌊\n\nEstive na calculadora do site oficial (sentinelsystems.com.br) e configurei uma proposta preliminar para minha empresa:\n\n*Tipo de Projeto:* ${currentType.name}\n*Cronograma:* ${timelineModifiers[timeline]?.label}\n*Recursos Selecionados:* ${selectedFeatNames || 'Nenhum'}\n*Estimativa da Calculadora:* ~R$ ${total.toLocaleString('pt-BR')}\n\nGostaria de agendar uma reunião de diagnóstico e refinar o escopo com a equipe de engenharia.`;

    // WhatsApp link (Sentinel Systems contact)
    window.open(`https://wa.me/5522999999999?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>// SIMULADOR DE ESCOPO & ESTIMATIVA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Simule seu Projeto em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
              60 Segundos
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Transparência total desde o primeiro momento. Escolha o objetivo do seu software e receba uma prévia imediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="text-sm font-mono text-cyan-400 font-bold mb-4 uppercase">
                1. Selecione o Tipo de Solução
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      soundFx.playUiClick();
                      setProjectType(t.id);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      projectType === t.id
                        ? 'bg-cyan-500/15 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.2)]'
                        : 'bg-slate-900/60 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-1">{t.name}</div>
                    <div className="text-[11px] font-mono text-slate-400">Tempo médio: {t.time}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Features */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="text-sm font-mono text-purple-400 font-bold mb-4 uppercase">
                2. Recursos & Integrações Estratégicas
              </h3>
              <div className="space-y-2.5">
                {availableFeatures.map((f) => {
                  const isChecked = features.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-purple-500/15 border-purple-400'
                          : 'bg-slate-900/60 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-purple-500 border-purple-400 text-white'
                              : 'border-slate-600 bg-slate-950'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium text-slate-200">{f.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400">
                        + R$ {f.cost.toLocaleString('pt-BR')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="text-sm font-mono text-teal-400 font-bold mb-4 uppercase">
                3. Ritmo de Execução
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(timelineModifiers).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => {
                      soundFx.playUiClick();
                      setTimeline(key);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      timeline === key
                        ? 'bg-teal-500/20 border-teal-400 text-white'
                        : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold capitalize mb-1">{key}</div>
                    <div className="text-[10px] font-mono opacity-80">{data.label.split('(')[0]}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Column (Sticky) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-cyan-400 font-bold">ESTIMATIVA SENTINEL</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300">
                  TRANSPARÊNCIA TOTAL
                </span>
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono text-slate-400 uppercase mb-1">Investimento Aproximado</div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-2">
                  <span>R$ {total.toLocaleString('pt-BR')}</span>
                  <span className="text-xs font-normal text-slate-400 font-mono">/ projeto</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Prazo estimado: <strong className="text-slate-200">{currentType.time}</strong></span>
                </div>
              </div>

              {/* Summary of items included */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-2 mb-8 text-xs font-mono">
                <div className="text-slate-300 flex justify-between">
                  <span>Base do Projeto:</span>
                  <span className="text-white">R$ {currentType.base.toLocaleString('pt-BR')}</span>
                </div>
                <div className="text-slate-300 flex justify-between">
                  <span>Recursos Extras ({features.length}):</span>
                  <span className="text-white">R$ {featureCost.toLocaleString('pt-BR')}</span>
                </div>
                <div className="text-slate-300 flex justify-between">
                  <span>Ajuste Cronograma:</span>
                  <span className="text-cyan-400">{timelineModifiers[timeline]?.multiplier}x</span>
                </div>
                <div className="pt-2 border-t border-white/10 text-emerald-400 flex justify-between font-bold">
                  <span>Suporte & Garantia:</span>
                  <span>Incluso 30 dias</span>
                </div>
              </div>

              {/* WhatsApp Action button */}
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  generateWhatsAppMessage();
                }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Enviar Proposta ao WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-4 leading-relaxed">
                Valores preliminares sujeitos a refinamento de arquitetura com nossa engenharia. Sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectEstimator;
