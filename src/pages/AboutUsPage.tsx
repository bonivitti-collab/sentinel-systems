import React from 'react';
import { 
  Zap, 
  Target, 
  Users, 
  Sparkles, 
  ArrowRight, 
  HeartHandshake, 
  Cpu, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../components/SoundEffects';

interface AboutUsPageProps {
  onOpenContact: (plan?: string) => void;
  onNavigate: (path: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenContact, onNavigate }) => {
  const pillars = [
    {
      icon: Zap,
      title: 'Engenharia de Alta Performance',
      desc: 'Não usamos plataformas genéricas ou modelos lentos de WordPress com dezenas de plugins inseguros. Desenvolvemos software moderno sob medida com React, Vite e distribuição global em nuvem Edge.'
    },
    {
      icon: Target,
      title: 'Foco no Caixa, Não em Métricas de Vaidade',
      desc: 'Não prometemos "likes" no Instagram que não pagam contas. Construímos posicionamento no Google e automações no WhatsApp para capturar pessoas que já estão com a carteira na mão querendo comprar.'
    },
    {
      icon: HeartHandshake,
      title: 'Transparência Radical & Sem Pegadinhas',
      desc: 'Sem fidelidades abusivas ou termos com letras miúdas. Se você não estiver satisfeito com o nosso trabalho, não fica preso. Nosso modelo de assinatura só se sustenta porque nossos clientes continuam gerando vendas.'
    },
    {
      icon: Users,
      title: 'Suporte Humano Direto no WhatsApp',
      desc: 'Nada de abrir chamados burocráticos ou esperar dias por um e-mail de suporte. Nossos clientes têm canal direto no WhatsApp com a nossa equipe para solicitar atualizações de fotos, produtos e dados.'
    }
  ];

  const techBadges = [
    'Vercel Global Edge Network',
    'React 19 & TypeScript',
    'Google Cloud & Vertex AI',
    'SSL Bancário Criptografado (TLS 1.3)',
    '100% Conforme com a LGPD',
    'Core Web Vitals Verdes (Lighthouse 100)'
  ];

  return (
    <div className="pt-8 sm:pt-12 pb-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-cyan-100 border border-cyan-300 text-xs font-bold text-cyan-900 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span>MANIFESTO INSTITUCIONAL SENTINEL SYSTEMS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Democratizamos Tecnologia de Padrão Internacional para o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              Comércio e Empresas do Brasil
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Nascemos para acabar com o modelo tradicional de agências que cobram milhares de reais para entregar sites lentos e depois somem. Criamos ecossistemas ultrarrápidos com inteligência comercial para fazer sua empresa vender todo dia.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-xs mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider block mb-2">
                A Nossa Origem & Propósito
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Por que a Sentinel Systems foi criada?
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Durante anos, acompanhamos o mesmo drama em dezenas de comércios e empresas por todo o Brasil: donos de negócios investiam R$ 3.000 a R$ 6.000 na criação de um site com agências locais, apenas para receber um portal pesado, cheio de bugs, que demorava 8 segundos para abrir no celular e nunca trouxe um único cliente pelo Google.
                </p>
                <p>
                  Para piorar, os criadores sumiam, não prestavam suporte ou cobravam fortunas para mudar um simples telefone ou preço.
                </p>
                <p>
                  A <strong>Sentinel Systems</strong> foi fundada com uma visão clara: unir o rigor técnico da engenharia de software contemporânea (a mesma utilizada pelas maiores big techs do mundo) com um modelo de assinatura acessível e transparente para pequenos e médios negócios em qualquer estado do Brasil.
                </p>
                <p className="font-semibold text-slate-900">
                  Aqui, cuidamos de tudo por você: hospedagem em nuvem global, segurança contra invasões, automações com robô no WhatsApp e atualizações mensais sem dores de cabeça.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-cyan-950 p-8 rounded-2xl text-white border border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">Nossa Missão Oficial</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Garantir que nenhuma empresa brasileira perca vendas por não ser encontrada no Google ou por demorar para responder seus clientes no WhatsApp.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Atendimento 100% Digital em todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Infraestrutura em Nuvem Edge de Alta Confiabilidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Compromisso com o Retorno Sobre o Investimento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pilares */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Nossos 4 Pilares Inegociáveis
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Os princípios que guiam cada linha de código que escrevemos e cada cliente que atendemos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-cyan-400 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack / Infrastructure */}
        <div className="mb-24 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>// PADRÃO DE ENGENHARIA</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Infraestrutura de Nível Global
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Seu site e robô são hospedados nos mesmos data centers que atendem as maiores corporações do mundo, garantindo 99.9% de disponibilidade.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {techBadges.map((badge, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-center text-xs font-semibold text-slate-800 shadow-xs">
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
            Vamos construir o futuro digital da sua empresa?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-8">
            Converse diretamente com um dos nossos engenheiros. Tiramos todas as suas dúvidas técnicas e comerciais sem nenhum compromisso.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact('Conversar com a diretoria técnica');
              }}
              className="px-8 py-3.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center gap-2 cursor-pointer px-5 py-2.5"
            >
              <span>Falar com a Equipe Sentinel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                soundFx.playUiClick();
                onNavigate('/sites');
              }}
              className="px-6 py-3.5 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs tracking-wide transition-all cursor-pointer px-4 py-2.5"
            >
              Ver Nossos Sites & Planos
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;
