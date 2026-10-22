import React from 'react';
import { MapPin, Award, Check, Navigation, Globe2, Compass } from 'lucide-react';

export const RegionalAuthority: React.FC = () => {
  const cities = [
    { name: 'Cabo Frio', role: 'Sede & Engenharia Central', highlight: 'Pólo Tecnológico Regional' },
    { name: 'Armação dos Búzios', role: 'Hospitalidade de Luxo & Náutica', highlight: 'Sistemas Internacionais' },
    { name: 'Arraial do Cabo', role: 'Ecoturismo & Infraestrutura Marítima', highlight: 'Telemetria & Gestão' },
    { name: 'São Pedro da Aldeia', role: 'Logística & Indústria Comercial', highlight: 'ERPs & Integração' },
    { name: 'Rio de Janeiro (Capital)', role: 'Grandes Contas & Corporativo', highlight: 'Escalabilidade Nacional' },
    { name: 'Clientes Globais', role: 'EUA, Europa & América Latina', highlight: 'Projetos Remotos' },
  ];

  return (
    <section id="regiao-dos-lagos" className="py-24 relative overflow-hidden bg-slate-950/60 border-y border-white/5">
      {/* Decorative background grid and caustics */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>// AUTORIDADE REGIONAL & GLOBAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              A Maior Potência Tecnológica da{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
                Região dos Lagos
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Nascemos inspirados na força, pureza e fluidez das águas da Costa do Sol do Rio de Janeiro. Enquanto a maioria das agências locais entrega sites genéricos e lentos, a <strong className="text-white">Sentinel Systems</strong> constrói ecossistemas de software e Inteligência Artificial que competem de igual para igual com empresas do Vale do Silício.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Atendimento Presencial e Exclusivo</h3>
                  <p className="text-xs text-slate-400">Reuniões estratégicas no seu negócio em Cabo Frio, Búzios, Arraial ou videoconferência de alta definição.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Domínio Profundo das Dores Regionais</h3>
                  <p className="text-xs text-slate-400">Sazonalidade de turismo, alta demanda de verão, necessidade de vendas automáticas 24 horas por dia e infraestruturas blindadas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Garantia Absoluta de Padrão Internacional</h3>
                  <p className="text-xs text-slate-400">Seu projeto terá o mesmo nível visual e técnico das maiores empresas de tecnologia do planeta.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-cyan-300 font-semibold">MISSÃO OFICIAL</div>
                <div className="text-sm text-slate-200 font-medium">Tornar a Região dos Lagos uma referência em alta tecnologia e Inteligência Artificial no Brasil.</div>
              </div>
            </div>
          </div>

          {/* Right Interactive Map / Radar of Coverage */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="text-xs font-mono text-slate-300 uppercase">Radar de Cobertura Regional</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                  ONLINE & ATIVO
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold text-white">{city.name}</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 mb-2">{city.role}</div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-white/5">
                      {city.highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom summary pill */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-purple-400" />
                  <span>Escalabilidade sem fronteiras geográficas</span>
                </div>
                <span className="text-cyan-400 font-bold">100% Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegionalAuthority;
