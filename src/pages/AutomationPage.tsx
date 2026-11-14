import React from 'react';
import { WhatsAppSimulator } from '../components/WhatsAppSimulator';
import { 
  MessageCircle, 
  Check, 
  DollarSign, 
  Calendar, 
  UtensilsCrossed, 
  Building2, 
  Sparkles,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '../components/SoundEffects';

interface AutomationPageProps {
  onOpenContact: (plan?: string) => void;
  onNavigate: (path: string) => void;
}

export const AutomationPage: React.FC<AutomationPageProps> = ({ onOpenContact, onNavigate: _onNavigate }) => {
  const automationPlans = [
    {
      id: 'auto-essencial',
      name: 'Robô Atendimento & Triagem 24/7',
      badge: 'ENTRADA RÁPIDA',
      daily: 'R$ 5,40/dia',
      monthlyPrice: '164',
      setupInfo: 'Taxa única de implantação: 12x de R$ 32 (ou R$ 319 à vista)',
      target: 'Prestadores de serviços, escritórios, consultórios e comércio geral',
      description: 'Nunca mais deixe um cliente esperando. O robô dá boas-vindas, informa horários, tira dúvidas frequentes e direciona para a pessoa certa.',
      features: [
        'Respostas automáticas instantâneas (menos de 2 segundos)',
        'Menu de opções interativo (1, 2, 3...)',
        'Tira dúvidas de localização, preços base e horários',
        'Transferência inteligente para atendentes humanos',
        'Funciona 24 horas por dia, 7 dias por semana na nuvem',
        'Suporte técnico e ajustes mensais de mensagens inclusos'
      ],
      cta: 'Quero o Robô Atendimento 24/7',
      popular: false
    },
    {
      id: 'auto-vendas',
      name: 'Robô Comercial & Vendas Pro',
      badge: 'O MAIS CONTRATADO',
      daily: 'R$ 9,10/dia',
      monthlyPrice: '274',
      setupInfo: 'Taxa única de implantação: 12x de R$ 54 (ou R$ 539 à vista)',
      target: 'Restaurantes, pousadas, clínicas médicas, delivery e lojas',
      description: 'O robô fecha vendas pelo WhatsApp. Envia cardápios, faz cotação de diárias, agenda consultas ou monta orçamentos completos sem você mexer um dedo.',
      features: [
        'Tudo do plano de Atendimento incluso',
        'Módulo de Cardápio Digital ou Catálogo de Produtos',
        'Fluxo de Cotação de Diárias para Hotéis e Pousadas',
        'Sistema de Agendamento com confirmação de horários',
        'Calculadora de orçamentos preliminares com coleta de dados',
        'Relatório mensal de leads qualificados gerados',
        'Integração com seu número comercial oficial existente'
      ],
      cta: 'Quero o Robô Comercial Pro',
      popular: true
    },
    {
      id: 'auto-ia',
      name: 'Robô com IA Generativa & CRM',
      badge: 'MÁXIMA PERSONALIZAÇÃO',
      daily: 'Consulte escopo',
      monthlyPrice: '539',
      setupInfo: 'Projeto personalizado sob medida para sua operação',
      target: 'Grandes clínicas, operações de teleatendimento e franquias',
      description: 'Inteligência Artificial que conversa em linguagem natural, tira dúvidas complexas sobre produtos e se integra ao seu software de gestão/CRM.',
      features: [
        'IA Generativa treinada exclusivamente nos dados do seu negócio',
        'Compreensão de áudios e mensagens informais de clientes',
        'Integração direta com ERPs, CRMs (HubSpot, RD) e calendários',
        'Disparos automáticos de lembretes anti-falta (No-Show)',
        'Treinamento contínuo da IA com seus melhores vendedores',
        'Atendimento prioritário VIP e suporte contínuo'
      ],
      cta: 'Conversar sobre IA Avançada',
      popular: false
    }
  ];

  const useCases = [
    {
      icon: UtensilsCrossed,
      title: 'Restaurantes, Delivery & Bares',
      pain: 'O cliente com fome não espera 10 minutos para ver o cardápio no WhatsApp e pede no concorrente.',
      solution: 'O robô envia o link do cardápio digital com fotos em 2 segundos e a comanda já chega pronta no balcão.'
    },
    {
      icon: Building2,
      title: 'Pousadas, Hotéis & Temporada',
      pain: 'Turistas procurando diárias tarde da noite ou feriados e fechando em plataformas que cobram 20% de taxa.',
      solution: 'O robô informa fotos das suítes, valores exatos com desconto para reserva direta e fecha a data na hora.'
    },
    {
      icon: Calendar,
      title: 'Clínicas Médicas, Dentistas & Estética',
      pain: 'Secretária sobrecarregada no telefone enquanto dezenas de pacientes esperam retorno pelo WhatsApp.',
      solution: 'O robô filtra o convênio, apresenta os dias vagos e faz o agendamento prévio automaticamente.'
    },
    {
      icon: DollarSign,
      title: 'Orçamentos & Serviços Técnicos',
      pain: 'Perder tempo atendendo pessoas sem orçamento ou sem perfil para o seu serviço.',
      solution: 'O robô faz 3 perguntas de triagem e já entrega o lead com metragem, prazo e interesse na mesa do vendedor.'
    }
  ];

  const comparison = [
    {
      metric: 'Tempo Médio de Resposta',
      without: '15 a 45 minutos (ou só no dia seguinte)',
      withSentinel: 'Menos de 2 segundos (Instantâneo)'
    },
    {
      metric: 'Atendimento Noturno e Fins de Semana',
      without: 'Zero. Cliente vai para o concorrente',
      withSentinel: '100% ativo, fecha pedidos e reservas 24h'
    },
    {
      metric: 'Envio de Cardápio / Preços',
      without: 'Funcionário precisa digitar e enviar PDFs pesados',
      withSentinel: 'Link interativo leve e imediato'
    },
    {
      metric: 'Custo Mensal',
      without: 'R$ 1.600 a R$ 2.500 (salário + encargos de atendente)',
      withSentinel: 'A partir de R$ 164/mês (menos de R$ 5,50/dia)'
    }
  ];

  const faqs = [
    {
      q: 'Preciso trocar o meu número de WhatsApp atual?',
      a: 'Não! Conectamos o robô diretamente no seu número de WhatsApp existente (pode ser WhatsApp Business ou normal). Você continua usando seu aplicativo no celular normalmente enquanto o robô cuida do atendimento automático.'
    },
    {
      q: 'Preciso deixar meu computador ou celular ligado o dia todo?',
      a: 'Não. Toda a infraestrutura do robô roda 24 horas por dia em servidores em nuvem seguros. Mesmo se seu celular estiver desligado ou sem bateria, o robô continua atendendo seus clientes.'
    },
    {
      q: 'Um atendente humano pode assumir a conversa a qualquer momento?',
      a: 'Sim, a qualquer instante! Se você ou sua equipe mandarem uma mensagem ou o cliente pedir para falar com um humano, o robô pausa o fluxo e você assume o bate-papo sem nenhuma complicação.'
    },
    {
      q: 'Existe risco de meu número ser bloqueado?',
      a: 'Não, porque o robô não faz disparos em massa nem envia spam. Ele apenas responde com extrema rapidez quem voluntariamente manda mensagem para a sua empresa.'
    }
  ];

  return (
    <div className="pt-8 sm:pt-12 pb-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-900 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>MÁQUINA AUTOMÁTICA DE ATENDIMENTO 24 HORAS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Robô de WhatsApp que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Vende, Atende e Agenda
            </span>{' '}
            no Piloto Automático
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Mais de <strong>67% dos clientes desistem da compra</strong> se demorarem mais de 5 minutos para receber uma resposta. Nosso robô inteligente responde em 2 segundos de madrugada, aos domingos e feriados.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#simulador"
              onClick={(e) => {
                e.preventDefault();
                soundFx.playUiClick();
                document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Testar Simulador Interativo</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact('Instalação de Robô de WhatsApp');
              }}
              className="px-4 py-2.5 rounded-md bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs tracking-wide transition-colors cursor-pointer"
            >
              Consultar Planos de Automação
            </button>
          </div>
        </div>

        {/* Comparison: Sem vs Com Robô */}
        <div className="mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              A Diferença Entre Perder Vendas e Atender na Hora
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comparison.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    {item.metric}
                  </span>
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs mb-3 font-medium">
                    <span className="font-bold block mb-0.5">Sem Automação:</span>
                    {item.without}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
                  <span className="block mb-0.5 text-emerald-700">Com Robô Sentinel:</span>
                  {item.withSentinel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Simulador Interativo de WhatsApp */}
        <div id="simulador" className="mb-24 pt-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200 text-xs font-bold text-slate-800 mb-3">
              <span>EXPERIMENTE NA PRÁTICA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Simulador Interativo do Robô de WhatsApp
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Selecione um segmento abaixo e clique nas opções do balão para ver como o robô conduz a conversa:
            </p>
          </div>

          <WhatsAppSimulator />
        </div>

        {/* Section: 4 Casos de Uso */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Soluções Especializadas para o Seu Modelo de Negócio
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Não é uma resposta pronta genérica. O robô é configurado com a inteligência do seu dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div key={i} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900">{uc.title}</h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
                      <strong className="text-slate-800 block mb-1">Problema Comum:</strong>
                      {uc.pain}
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                      <strong className="text-emerald-800 block mb-1">Como a Sentinel Resolve:</strong>
                      {uc.solution}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Planos de Automação */}
        <div id="planos-automacao" className="mb-24 pt-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>INVESTIMENTO PARA O SEU ROBÔ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Planos Exclusivos de Automação de WhatsApp
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Já tem um site ou só quer a automação no seu WhatsApp? Escolha o plano ideal para sua demanda:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            {automationPlans.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 sm:p-8 rounded-3xl bg-white border flex flex-col justify-between relative shadow-sm transition-all duration-300 ${
                  plan.popular
                    ? 'border-emerald-500 ring-2 ring-emerald-400/30 shadow-xl'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-[11px] tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-current" />
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
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.cta}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Perguntas Frequentes sobre a Automação
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Tudo o que você precisa saber antes de colocar o robô para rodar na sua empresa.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-900 shadow-xs relative overflow-hidden">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Atendimento ágil e qualificado 24 horas por dia.
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Integração completa de fluxos de triagem e agendamento com as regras operacionais do seu negócio.
            </p>
            <button
              onClick={() => {
                soundFx.playUiClick();
                onOpenContact('Ativação do Robô de WhatsApp');
              }}
              className="px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Solicitar Demonstração</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AutomationPage;
