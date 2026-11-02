import React from 'react';
import { SiteModelViewer } from '../components/SiteModelViewer';
import { Check, Star, ShieldCheck, Zap, Globe, Search, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundFx } from './../components/SoundEffects';

interface SitesPageProps {
  onOpenContact: (plan?: string) => void;
  onNavigate: (path: string) => void;
}

export const SitesPage: React.FC<SitesPageProps> = ({ onOpenContact, onNavigate }) => {
  const sitePlans = [
    {
      id: 'site-essencial',
      name: 'Site Presença Essencial',
      badge: 'IDEAL PARA PEQUENOS COMÉRCIOS',
      daily: 'R$ 5,40/dia',
      monthlyPrice: '164',
      setupInfo: 'Setup facilitado em até 12x de R$ 43 (ou R$ 429 à vista)',
      target: 'Prestadores de serviços, autônomos, pequenos comércios e negócios locais',
      description: 'Tenha um site moderno, bonito e rápido para aparecer quando alguém pesquisar pelo seu serviço na sua cidade.',
      features: [
        'Site Institucional One-Page de alta conversão',
        'Cadastro e otimização no Google Meu Negócio / Maps',
        'Botão direto e chamativo para o seu WhatsApp',
        'Hospedagem em nuvem global ultra-rápida (Edge CDN)',
        'Certificado de Segurança SSL bancário (HTTPS)',
        'Manutenção mensal: atualizamos dados, fotos e produtos'
      ],
      cta: 'Quero o Site Essencial',
      popular: false
    },
    {
      id: 'site-pro',
      name: 'Site Comercial Pro & Google',
      badge: 'O MAIS ESCOLHIDO',
      daily: 'R$ 9,10/dia',
      monthlyPrice: '274',
      setupInfo: 'Setup facilitado em até 12x de R$ 65 (ou R$ 649 à vista)',
      target: 'Clínicas, pousadas, restaurantes, imobiliárias e empresas de médio porte',
      description: 'Estrutura completa com múltiplas páginas, catálogo ou cardápio interativo e otimização avançada de SEO para dominar o Google.',
      features: [
        'Estrutura multipáginas (Início, Serviços, Quem Somos, Contato)',
        'Catálogo de produtos ou Cardápio digital interativo',
        'SEO Técnico Avançado para indexação máxima no Google',
        'Simulador ou formulário de captação de leads qualificados',
        'Carregamento instantâneo em celulares (Mobile First)',
        'Relatório mensal simples de visitas e cliques no WhatsApp',
        'Suporte prioritário via WhatsApp com nossa equipe'
      ],
      cta: 'Quero o Site Comercial Pro',
      popular: true
    },
    {
      id: 'site-corporativo',
      name: 'Portal Sob Medida & Escala',
      badge: 'EMPRESAS EM EXPANSÃO',
      daily: 'Consulte escopo',
      monthlyPrice: '539',
      setupInfo: 'Projeto personalizado sob medida para sua operação',
      target: 'Franquias, distribuidoras, construtoras e operações com alta demanda',
      description: 'Sistemas web de altíssima complexidade visual e funcionalidade sob medida, com design de nível internacional.',
      features: [
        'Design exclusivo 100% sob medida com animações fluidas',
        'SEO Programático para dezenas de páginas automáticas',
        'Integrações com CRMs, ERPs e gateways de pagamento PIX/Cartão',
        'Vídeos institucionais em alta definição integrados',
        'Consultoria mensal direta de engenharia e crescimento',
        'SLA de suporte prioritário em menos de 2 horas'
      ],
      cta: 'Conversar sobre Projeto Sob Medida',
      popular: false
    }
  ];

  const technicalBenefits = [
    {
      icon: Zap,
      title: 'Velocidade Extrema (< 0.8s)',
      desc: 'Usamos arquitetura moderna (React & Vite em Edge CDN). Seu site abre no celular do cliente em fração de segundo sem travar.'
    },
    {
      icon: Search,
      title: 'SEO Técnico & Google Maps',
      desc: 'Construído rigorosamente de acordo com as diretrizes do Google para que você apareça na frente dos concorrentes da sua área.'
    },
    {
      icon: ShieldCheck,
      title: 'Segurança Total & Sem Vírus',
      desc: 'Hospedagem blindada sem bancos de dados vulneráveis e sem os plugins pesados do WordPress que vivem quebrando.'
    },
    {
      icon: Globe,
      title: 'Domínio Próprio & Presença Oficial',
      desc: 'Sua marca com endereço próprio (suaempresa.com.br), transmitindo 100x mais credibilidade do que depender apenas de um perfil no Instagram.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-xs font-bold text-cyan-900 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span>ENGENHARIA WEB DE ALTA PERFORMANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Criação de Sites Rápidos que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              Colocam Dinheiro no seu Caixa
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Esqueça sites lentos e abandonados que ninguém visita. Desenvolvemos ecossistemas comerciais de carregamento instantâneo, otimizados para a 1ª página do Google e com botão de WhatsApp pronto para fechar negócios.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact('Orçamento para Criação de Site');
              }}
              className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Pedir Proposta no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#modelos"
              onClick={(e) => {
                e.preventDefault();
                soundFx.playUiClick();
                document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all border border-slate-300 cursor-pointer"
            >
              Ver Modelos no Ar
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {technicalBenefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">{b.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Section: Showcase de Modelos Interativos */}
        <div id="modelos" className="mb-24 pt-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-xs font-bold text-slate-800 mb-3">
              <span>EXPLORE NOSSOS PADRÕES VISUAIS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Modelos de Sites Desenvolvidos para Cada Segmento
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Alterne entre os segmentos abaixo e veja como a experiência funciona tanto no computador quanto na tela do celular:
            </p>
          </div>

          <SiteModelViewer onOpenContact={onOpenContact} />
        </div>

        {/* Section: Planos & Preços Específicos para Sites */}
        <div id="planos-sites" className="mb-24 pt-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 mb-4">
              <Star className="w-3.5 h-3.5 text-cyan-600" />
              <span>INVESTIMENTO ACESSÍVEL & TRANSPARENTE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Quanto Custa Criar e Manter seu Site?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Sem surpresas. Taxa de criação com pagamento parcelado em até 12x no cartão e mensalidade para cobrir servidor, domínio, segurança e alterações todo mês.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            {sitePlans.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 sm:p-8 rounded-3xl bg-white border flex flex-col justify-between relative shadow-sm transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-400 ring-2 ring-cyan-400/30 shadow-xl'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-black text-[11px] tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {!plan.popular && (
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 block mb-2">
                      {plan.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-black text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-6 font-medium">{plan.target}</p>

                  {/* Price Box */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-baseline justify-between mb-1">
                      <div>
                        <span className="text-sm font-bold text-slate-600">R$</span>
                        <span className="text-4xl font-black text-slate-900">{plan.monthlyPrice}</span>
                        <span className="text-xs text-slate-500 font-semibold">/mês</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {plan.daily}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 font-medium">
                      {plan.setupInfo}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    soundFx.playUiClick();
                    onOpenContact(plan.name);
                  }}
                  className={`w-full py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.cta}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Guarantee Pill */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm">Garantia Incondicional de 15 Dias</div>
                <div className="text-xs text-slate-600">
                  Colocamos seu site no ar. Se você não aprovar a velocidade e o visual nos primeiros 15 dias, devolvemos 100% do seu investimento.
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact('Tirar dúvidas sobre criação de sites');
              }}
              className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all shrink-0 cursor-pointer"
            >
              Tirar Dúvidas com Especialista
            </button>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-400/40 text-[11px] font-bold text-cyan-400 mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>COBERTURA EM TODO O BRASIL</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Pronto para colocar sua empresa na 1ª página do Google?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
              Converse diretamente com nosso especialista pelo WhatsApp. Analisamos seus concorrentes na sua cidade gratuitamente e te enviamos uma proposta preliminar em 15 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  onOpenContact('Solicitação de Análise de Concorrentes no Google');
                }}
                className="px-8 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Análise Gratuita no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  onNavigate('/automacao');
                }}
                className="px-6 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700 cursor-pointer"
              >
                Ver Automações de WhatsApp &rarr;
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SitesPage;
