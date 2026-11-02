import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  RefreshCw, 
  Search, 
  BarChart3, 
  Target, 
  Utensils, 
  Waves, 
  Stethoscope, 
  Briefcase, 
  ShoppingBag,
  SlidersHorizontal,
  X,
  ShieldCheck,
  Check,
  Zap
} from 'lucide-react';
import { soundFx } from './SoundEffects';

interface DiagnosticReport {
  segmentId: string;
  segmentTitle: string;
  segmentSubtitle: string;
  kpis: { label: string; value: string; hint: string }[];
  marketBottleneck: {
    title: string;
    description: string;
  };
  recommendedBlueprint: {
    title: string;
    items: { heading: string; detail: string }[];
  };
  recommendedPlan: {
    name: string;
    price: string;
    setup: string;
    roiDetail: string;
  };
  actionMessage: string;
}

const NICHE_REPORTS: Record<string, DiagnosticReport> = {
  restaurante: {
    segmentId: 'restaurante',
    segmentTitle: 'Restaurante & Gastronomia',
    segmentSubtitle: 'Cardápio próprio sem taxas abusivas e pedidos rápidos 24h',
    kpis: [
      { label: 'Economia Mensal', value: 'R$ 1.800 a R$ 3.500', hint: 'Zerando comissões de 27% de apps' },
      { label: 'Tempo de Resposta', value: '2 segundos', hint: 'Envio imediato no WhatsApp à noite' },
      { label: 'Taxa de Recompra', value: '+45%', hint: 'Base própria de clientes e fidelidade' }
    ],
    marketBottleneck: {
      title: 'Dependência de Apps e Atendimento Lento no Balcão',
      description: 'Plataformas de terceiros cobram até 27% sobre cada prato vendido e confiscam o contato do seu cliente. Além disso, responder pedidos manualmente no WhatsApp no horário de pico gera filas, demoras e perda de clientes famintos.'
    },
    recommendedBlueprint: {
      title: 'Ecossistema Recomendado Sentinel',
      items: [
        { heading: 'Cardápio Digital PWA Ultra-Rápido (0.4s)', detail: 'Fotos de alta resolução dos pratos, categorias e promoções sem necessidade do cliente instalar nada no celular.' },
        { heading: 'Robô de Pedidos 24h no WhatsApp', detail: 'Ao receber "boa noite", envia o cardápio em 2 segundos e formata a comanda pronta para a cozinha com endereço, taxa e itens.' },
        { heading: 'Google Meu Negócio & SEO Local', detail: 'Posiciona seu restaurante no topo das pesquisas "onde comer perto de mim" ou "melhor pizza da cidade".' }
      ]
    },
    recommendedPlan: {
      name: 'Combo Site + Robô 24h',
      price: 'R$ 327/mês',
      setup: 'Setup R$ 759 ou 12x R$ 76',
      roiDetail: 'Paga o investimento nos primeiros 15 pedidos diretos que deixam de pagar comissão de apps.'
    },
    actionMessage: 'Olá! Analisei o diagnóstico da Sentinel AI para meu Restaurante/Delivery e quero implantar o ecossistema com cardápio próprio e robô de pedidos!'
  },
  pousada: {
    segmentId: 'pousada',
    segmentTitle: 'Pousadas, Hotéis & Turismo',
    segmentSubtitle: 'Reservas diretas sem comissões de plataformas intermediárias',
    kpis: [
      { label: 'Comissão Paga a Terceiros', value: '0%', hint: 'Economia de 18% a 25% por reserva' },
      { label: 'Atendimento Noturno', value: '100% Coberto', hint: 'Turistas que cotam de madrugada' },
      { label: 'Sinal de Reserva (PIX)', value: 'Imediato', hint: 'Garante 50% antecipado no fechamento' }
    ],
    marketBottleneck: {
      title: 'Comissões de 18% a 25% em OTAs e Perda de Hóspedes Noturnos',
      description: 'Turistas costumam planejar viagens e cotar diárias tarde da noite. Sem um sistema que passe fotos das acomodações e valores na hora, eles reservam em sites terceiros que abocanham uma fatia gigantesca do seu lucro.'
    },
    recommendedBlueprint: {
      title: 'Ecossistema Recomendado Sentinel',
      items: [
        { heading: 'Portal Visual Imersivo das Suítes', detail: 'Galeria fotográfica de alta performance, apresentação da pousada, localização privilegiada e avaliações 5 estrelas.' },
        { heading: 'Motor de Cotação Automática no WhatsApp', detail: 'Responde na hora com opções de quartos disponíveis, tabela de diárias por temporada e link seguro para sinal via PIX.' },
        { heading: 'Vantagem Exclusiva de Reserva Direta', detail: 'Incentivo inteligente: ofereça 10% de desconto pelo site oficial e ainda lucre 15% a mais do que pelas plataformas.' }
      ]
    },
    recommendedPlan: {
      name: 'Presença Profissional + Robô de Reservas',
      price: 'R$ 274/mês',
      setup: 'Setup R$ 649 ou 12x R$ 65',
      roiDetail: 'Apenas 2 diárias diretas no mês já cobrem toda a mensalidade e geram lucro líquido extra.'
    },
    actionMessage: 'Olá! Vi o diagnóstico da Sentinel AI para Pousadas/Hotéis e quero receber reservas diretas pelo WhatsApp sem pagar comissão para plataformas!'
  },
  clinica: {
    segmentId: 'clinica',
    segmentTitle: 'Clínicas, Médicos & Saúde',
    segmentSubtitle: 'Autoridade médica, agendamentos 24/7 e combate ao no-show',
    kpis: [
      { label: 'Redução de Faltas', value: '-50% No-Show', hint: 'Lembretes automatizados no WhatsApp' },
      { label: 'Agendamentos Noturnos', value: '42% do Total', hint: 'Pacientes que procuram fora do horário' },
      { label: 'Ranqueamento Google', value: '1ª Página Maps', hint: 'Destaque para sua especialidade na cidade' }
    ],
    marketBottleneck: {
      title: 'Pacientes Perdidos Fora do Horário Comercial e Cadeiras Vazias',
      description: 'Mais de 40% dos pacientes só têm tempo de procurar um médico ou dentista após o expediente. Se a secretária já encerrou, ele busca a próxima clínica no Google. Além disso, esquecimentos geram horários vagos e prejuízo.'
    },
    recommendedBlueprint: {
      title: 'Ecossistema Recomendado Sentinel',
      items: [
        { heading: 'Site Institucional com Rigor Técnico e LGPD', detail: 'Design elegante, currículo dos especialistas, fotos da estrutura, diferenciais e convênios aceitos.' },
        { heading: 'Triagem e Pré-Agendamento 24h no WhatsApp', detail: 'Pergunta especialidade desejada, tipo de atendimento (convênio ou particular) e direciona para os horários disponíveis.' },
        { heading: 'Confirmação Automática de Presença', detail: 'Disparo de lembrete cordial 24h antes da consulta, permitindo remarcação antecipada e evitando salas vazias.' }
      ]
    },
    recommendedPlan: {
      name: 'Presença Profissional (Saúde & Estética)',
      price: 'R$ 274/mês',
      setup: 'Setup R$ 649 ou 12x R$ 65',
      roiDetail: 'Um único paciente particular novo no mês já supera o custo do ecossistema completo.'
    },
    actionMessage: 'Olá! Analisei o diagnóstico da Sentinel AI para Clínicas/Saúde e quero estruturar meu site com agendamento e confirmação automática no WhatsApp!'
  },
  servicos: {
    segmentId: 'servicos',
    segmentTitle: 'Engenharia, Reformas & B2B',
    segmentSubtitle: 'Atraia contratos corporativos e clientes de alto ticket',
    kpis: [
      { label: 'Valor de Contratos', value: 'R$ 10k a R$ 100k+', hint: 'Clientes corporativos exigem site sério' },
      { label: 'Qualificação de Lead', value: '100% Filtrado', hint: 'Filtra curiosos antes do comercial falar' },
      { label: 'SEO Google Técnico', value: 'Páginas Indexadas', hint: 'Posiciona para termos de engenharia e obras' }
    ],
    marketBottleneck: {
      title: 'Aparência Amadora e Dependência Apenas de Indicação',
      description: 'Quem vai contratar uma reforma comercial ou serviço técnico de R$ 30.000 pesquisa no Google para certificar credibilidade. Empresas que possuem apenas uma rede social perdem o contrato para concorrentes estruturados.'
    },
    recommendedBlueprint: {
      title: 'Ecossistema Recomendado Sentinel',
      items: [
        { heading: 'Portfólio Institucional de Alto Impacto', detail: 'Apresentação de obras e serviços realizados, dados técnicos, garantias, certificações e prova social de clientes.' },
        { heading: 'Filtro Comercial Pré-Orçamento no WhatsApp', detail: 'Coleta metragem, prazo estimado e tomador de decisão, entregando o lead pronto para o engenheiro ou gestor.' },
        { heading: 'Posicionamento em Múltiplas Cidades', detail: 'Estrutura técnica com Schema.org que permite ranquear em diversas cidades e regiões industriais.' }
      ]
    },
    recommendedPlan: {
      name: 'Plano Pro (Expansão & Alto Ticket)',
      price: 'R$ 274/mês',
      setup: 'Setup R$ 649 ou 12x R$ 65',
      roiDetail: 'Um único contrato assinado paga anos da operação digital da sua empresa.'
    },
    actionMessage: 'Olá! A Sentinel AI recomendou a estrutura para captação de clientes de alto padrão para minha empresa de Serviços/Engenharia. Quero uma proposta!'
  },
  varejo: {
    segmentId: 'varejo',
    segmentTitle: 'Comércio, Lojas & Varejo',
    segmentSubtitle: 'Catálogo de produtos ágil e atendimento instantâneo',
    kpis: [
      { label: 'Velocidade de Carga', value: '< 0.5s Mobile', hint: 'Sem abandono por lentidão de telas' },
      { label: 'Conversão no WhatsApp', value: '3.2x Maior', hint: 'Cliente clica no produto e cai no chat' },
      { label: 'Catálogo Sempre Atual', value: 'Atualização Fácil', hint: 'Promoções e novidades em tempo real' }
    ],
    marketBottleneck: {
      title: 'Plataformas Pesadas de E-commerce com Alto Abandono',
      description: 'Lojas virtuais convencionais forçam o cliente a fazer cadastros longos com senhas e endereço antes de comprar. Mais de 80% das compras pelo celular são abandonadas no checkout.'
    },
    recommendedBlueprint: {
      title: 'Ecossistema Recomendado Sentinel',
      items: [
        { heading: 'Showroom Virtual Direto para o WhatsApp', detail: 'O cliente vê o produto, clica em "Comprar no WhatsApp" e já abre o chat com foto e nome do item para fechar no PIX.' },
        { heading: 'Google Meu Negócio & Inventário Local', detail: 'Atraia pessoas que procuram pelo produto na sua cidade com intenção imediata de compra.' },
        { heading: 'Atendimento Rápido e Humano', detail: 'Sem carrinho abandonado: o cliente fala direto com sua equipe de vendas e fecha a compra na hora.' }
      ]
    },
    recommendedPlan: {
      name: 'Landing Comercial & Catálogo Ágil',
      price: 'R$ 164/mês',
      setup: 'Setup R$ 429 ou 12x R$ 43',
      roiDetail: 'Recupere o valor do mês já na primeira semana de clientes vindos do Google.'
    },
    actionMessage: 'Olá! Vi o diagnóstico da Sentinel AI para Lojas/Varejo e quero criar meu catálogo rápido direcionado para o WhatsApp!'
  }
};

interface InsightCard {
  id: string;
  query: string;
  title: string;
  badge: string;
  summary: string;
  actionItems: string[];
  roiNotice: string;
  suggestedAction: {
    label: string;
    waText: string;
  };
}

interface SentinelAIAdvisorProps {
  onOpenContact: (plan?: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const SentinelAIAdvisor: React.FC<SentinelAIAdvisorProps> = ({ 
  onCloseMobile 
}) => {
  const [activeTab, setActiveTab] = useState<'niche' | 'insights'>('niche');
  const [selectedNiche, setSelectedNiche] = useState<string>('restaurante');
  const [searchQuery, setSearchQuery] = useState('');
  const [insightResults, setInsightResults] = useState<InsightCard[]>([
    {
      id: 'default-insight',
      query: 'Por que não depender apenas do Instagram?',
      title: 'O Tripé de Vendas no Brasil: Google + Site 0.4s + WhatsApp',
      badge: 'Estratégia Fundamental',
      summary: 'No Instagram as pessoas entram para se entreter e o algoritmo entrega seus posts para menos de 5% da sua audiência. No Google, quem pesquisa já está com intenção de compra imediata. Ter o site próprio e o robô de WhatsApp é o que transforma essa busca em dinheiro no caixa.',
      actionItems: [
        'Google traz quem quer comprar hoje; Instagram constrói marca.',
        'Site próprio elimina comissões de plataformas intermediárias.',
        'Atendimento no WhatsApp em menos de 5 minutos fecha até 4x mais pedidos.'
      ],
      roiNotice: 'Empresas presentes na 1ª página do Google recebem tráfego qualificado 24 horas por dia sem precisar pagar anúncios contínuos.',
      suggestedAction: {
        label: 'Quero aplicar essa estratégia no meu negócio',
        waText: 'Olá! A Sentinel AI me explicou a importância de unir Google + Site + WhatsApp. Gostaria de uma proposta!'
      }
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentReport = NICHE_REPORTS[selectedNiche] || NICHE_REPORTS.restaurante;

  const handleSelectNiche = (id: string) => {
    soundFx.playUiClick();
    setSelectedNiche(id);
  };

  const handleRunQuery = (queryText: string) => {
    if (!queryText.trim()) return;
    soundFx.playUiClick();
    setIsProcessing(true);
    setActiveTab('insights');

    setTimeout(() => {
      const q = queryText.toLowerCase();
      let newInsight: InsightCard;

      if (q.includes('preço') || q.includes('valor') || q.includes('plano') || q.includes('quanto custa')) {
        newInsight = {
          id: Date.now().toString(),
          query: queryText,
          title: 'Arquitetura Transparente de Preços & Prazos',
          badge: 'Investimento & ROI',
          summary: 'Nossos planos foram desenhados para que o custo mensal se pague com apenas 1 a 3 vendas a mais no mês. Toda a infraestrutura inclui hospedagem de alta velocidade, certificado SSL, suporte contínuo e atualizações.',
          actionItems: [
            'Landing de Alta Conversão: R$ 164/mês (Setup R$ 429 ou 12x R$ 43)',
            'Presença Profissional (Institucional): R$ 274/mês (Setup R$ 649 ou 12x R$ 65)',
            'Automação & Robô de WhatsApp 24h: R$ 327/mês (Setup R$ 759 ou 12x R$ 76)',
            'Entrega ágil: Colocamos seu ecossistema no ar em até 7 dias úteis.'
          ],
          roiNotice: 'Sem fidelidade abusiva. Você conta com suporte humano contínuo e tecnologia moderna de ponta.',
          suggestedAction: {
            label: 'Solicitar Proposta Comercial Detalhada',
            waText: `Olá! Consultei os valores na Sentinel AI e quero contratar um plano para minha empresa!`
          }
        };
      } else if (q.includes('google') || q.includes('seo') || q.includes('ranquear') || q.includes('topo')) {
        newInsight = {
          id: Date.now().toString(),
          query: queryText,
          title: 'Como Dominar a 1ª Página do Google e Google Maps',
          badge: 'SEO de Alta Performance',
          summary: 'O Google valoriza três pilares técnicos: velocidade extrema no mobile (< 1s), marcação de dados Schema.org e relevância local com avaliações reais.',
          actionItems: [
            'Otimizamos termos com intenção de compra (ex: "[Seu Serviço] + [Sua Cidade]").',
            'Tempo de carregamento abaixo de 0.8s atinge nota máxima no Google PageSpeed.',
            'Integração direta com Google Meu Negócio para receber chamadas diretas no mapa.'
          ],
          roiNotice: 'Estar no topo do Google elimina a necessidade de depender exclusivamente de tráfego pago constante.',
          suggestedAction: {
            label: 'Quero um Raio-X gratuito do meu Google',
            waText: 'Olá! A Sentinel AI sugeriu uma auditoria gratuita no meu posicionamento no Google. Como podemos fazer?'
          }
        };
      } else if (q.includes('whatsapp') || q.includes('robô') || q.includes('robo') || q.includes('automação') || q.includes('automacao')) {
        newInsight = {
          id: Date.now().toString(),
          query: queryText,
          title: 'Automação Comercial 24 Horas no WhatsApp',
          badge: 'Conversão 24/7',
          summary: 'O cliente moderno não espera mais de 5 minutos por uma resposta. Nosso assistente virtual atende imediatamente, tira dúvidas frequentes, envia cardápio/catálogo e direciona para o fechamento.',
          actionItems: [
            'Atendimento instantâneo em 2 segundos a qualquer hora do dia ou da noite.',
            'Disparo de cardápios, PDFs, tabelas de preço e agendamento de visitas.',
            'Triagem inteligente para sua equipe comercial gastar tempo só com quem vai comprar.'
          ],
          roiNotice: 'Empresas com atendimento instantâneo recuperam até 65% das vendas perdidas fora do expediente.',
          suggestedAction: {
            label: 'Quero ver o Robô de WhatsApp funcionando',
            waText: 'Olá! Gostaria de uma demonstração do robô de automação para o WhatsApp da minha empresa!'
          }
        };
      } else {
        newInsight = {
          id: Date.now().toString(),
          query: queryText,
          title: 'Análise Estratégica de Crescimento Digital',
          badge: 'Auditoria Estratégica',
          summary: `Para se destacar e vender com previsibilidade, sua empresa precisa de uma base sólida: velocidade para abrir no celular sem travar, SEO estruturado para o Google e um funil direto para o WhatsApp.`,
          actionItems: [
            'Estrutura com carregamento em até 0.6s no celular.',
            'Posicionamento focado nas dores dos seus clientes.',
            'Botão flutuante de WhatsApp com rastreamento de conversões.'
          ],
          roiNotice: 'Com a Sentinel Systems, cuidamos de toda a engenharia técnica para você focar no que faz de melhor: gerir seu negócio.',
          suggestedAction: {
            label: 'Falar com Consultor Humano no WhatsApp',
            waText: `Olá! Consultei a Sentinel AI sobre "${queryText}" e gostaria de uma orientação personalizada!`
          }
        };
      }

      setInsightResults((prev) => [newInsight, ...prev.slice(0, 3)]);
      setIsProcessing(false);
      setSearchQuery('');
    }, 600);
  };

  const nicheButtons = [
    { id: 'restaurante', label: 'Restaurante', icon: Utensils },
    { id: 'pousada', label: 'Pousadas', icon: Waves },
    { id: 'clinica', label: 'Clínicas', icon: Stethoscope },
    { id: 'servicos', label: 'Serviços & B2B', icon: Briefcase },
    { id: 'varejo', label: 'Varejo & Loja', icon: ShoppingBag }
  ];

  return (
    <div className="flex flex-col h-full bg-white text-slate-800 border-l border-slate-200/90 shadow-sm relative overflow-hidden font-sans">
      
      {/* 1. STUDIO HEADER (Modern Minimalist Linear Style) */}
      <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-cyan-500/20">
            <Sparkles className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xs text-slate-900 tracking-tight">Sentinel Studio</span>
              <span className="px-1.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-[9px] font-extrabold text-cyan-800 uppercase tracking-wider">
                Copilot v3.0
              </span>
            </div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Inteligência de Vendas em Tempo Real</span>
            </div>
          </div>
        </div>

        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer lg:hidden"
            aria-label="Fechar painel"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 2. MODE SELECTOR (Segmented Studio Tabs) */}
      <div className="px-4 pt-3 pb-2 bg-slate-50/70 border-b border-slate-100 shrink-0">
        <div className="grid grid-cols-2 p-1 bg-slate-200/60 rounded-xl text-xs font-bold text-slate-600">
          <button
            onClick={() => {
              soundFx.playUiClick();
              setActiveTab('niche');
            }}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'niche'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'hover:text-slate-900'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-cyan-600" />
            <span>Diagnóstico por Nicho</span>
          </button>

          <button
            onClick={() => {
              soundFx.playUiClick();
              setActiveTab('insights');
            }}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'insights'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Consultoria & Prompts</span>
          </button>
        </div>
      </div>

      {/* 3. MAIN WORKSPACE CANVAS */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-200">
        
        {activeTab === 'niche' ? (
          /* TAB 1: EXECUTIVE NICHE DIAGNOSTIC DOSSIER */
          <div className="space-y-4">
            
            {/* Segment Selector Tiles */}
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3 h-3 text-cyan-600" />
                <span>Selecione o seu Modelo de Negócio:</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {nicheButtons.map((btn) => {
                  const Icon = btn.icon;
                  const isSelected = selectedNiche === btn.id;
                  return (
                    <button
                      key={btn.id}
                      onClick={() => handleSelectNiche(btn.id)}
                      className={`p-2 rounded-xl text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs scale-102 ring-2 ring-cyan-400/30'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <span className="text-[10px] font-bold truncate max-w-full">{btn.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dossier Header Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50/40 border border-slate-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3 h-3 text-cyan-600" />
                <span>Dossiê de Oportunidades</span>
              </div>
              <h3 className="text-base font-black text-slate-900 tracking-tight">
                {currentReport.segmentTitle}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {currentReport.segmentSubtitle}
              </p>
            </div>

            {/* KPI Metrics Dashboard Grid */}
            <div className="grid grid-cols-3 gap-2">
              {currentReport.kpis.map((kpi, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                  <div className="text-[10px] text-slate-400 font-bold uppercase truncate">{kpi.label}</div>
                  <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5 tracking-tight">{kpi.value}</div>
                  <div className="text-[9px] text-slate-500 mt-1 leading-tight">{kpi.hint}</div>
                </div>
              ))}
            </div>

            {/* Critical Bottleneck Card */}
            <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200/80 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-black text-rose-700 mb-1">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                <span>Gargalo Crítico do Mercado</span>
              </div>
              <div className="text-xs font-bold text-slate-900 mb-1">
                {currentReport.marketBottleneck.title}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {currentReport.marketBottleneck.description}
              </p>
            </div>

            {/* Recommended Blueprint Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{currentReport.recommendedBlueprint.title}</span>
              </div>

              <div className="space-y-2.5">
                {currentReport.recommendedBlueprint.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">{item.heading}</div>
                      <div className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Plan & Direct Action Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                  Plano Sentinel Ideal
                </span>
                <span className="text-xs font-black text-white">{currentReport.recommendedPlan.price}</span>
              </div>

              <div className="font-extrabold text-sm text-white">
                {currentReport.recommendedPlan.name}
              </div>

              <div className="text-[11px] text-slate-300 leading-relaxed">
                {currentReport.recommendedPlan.roiDetail}
              </div>

              <div className="text-[10px] text-slate-400 font-mono">
                {currentReport.recommendedPlan.setup}
              </div>

              <a
                href={`https://wa.me/5522999726069?text=${encodeURIComponent(currentReport.actionMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-md shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ativar Estrutura no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ) : (
          /* TAB 2: MODERN COMMAND BAR & STRATEGIC INSIGHT STREAM */
          <div className="space-y-4">
            
            {/* Quick Prompt Pills */}
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-amber-500" />
                <span>Perguntas Frequentes & Cenários:</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  'Quanto custa um site e qual o prazo?',
                  'Por que não ficar só no Instagram?',
                  'Como ranquear na 1ª página do Google?',
                  'Como funciona o robô de WhatsApp 24h?'
                ].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleRunQuery(prompt)}
                    className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-[10px] font-semibold transition-all cursor-pointer text-left shadow-xs flex items-center gap-1.5"
                  >
                    <span>{prompt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Loading Indicator */}
            {isProcessing && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-2.5 text-xs text-slate-600">
                <RefreshCw className="w-4 h-4 text-cyan-600 animate-spin" />
                <span>Sentinel AI estruturando diagnóstico estratégico...</span>
              </div>
            )}

            {/* Generated Executive Insight Cards (No speech bubbles!) */}
            <div className="space-y-4">
              {insightResults.map((insight) => (
                <div
                  key={insight.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 transition-all"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                      {insight.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Consulta Estratégica</span>
                  </div>

                  <h4 className="text-sm font-black text-slate-900 tracking-tight leading-snug">
                    {insight.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {insight.summary}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {insight.actionItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] text-slate-500 font-medium leading-relaxed">
                    💡 <strong>Impacto no Negócio:</strong> {insight.roiNotice}
                  </div>

                  <a
                    href={`https://wa.me/5522999726069?text=${encodeURIComponent(insight.suggestedAction.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playUiClick()}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <span>{insight.suggestedAction.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* 4. MODERN COMMAND BAR (Estilo Raycast / Perplexity) */}
      <div className="p-3 bg-white border-t border-slate-100 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRunQuery(searchQuery);
          }}
          className="relative flex items-center"
        >
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Pergunte à IA: 'Como atrair clientes no Google?'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-20 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all shadow-2xs"
          />
          <button
            type="submit"
            disabled={!searchQuery.trim()}
            className="absolute right-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-slate-900 text-white font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer"
          >
            <span>Analisar</span>
          </button>
        </form>

        <div className="flex items-center justify-between mt-2 text-[9px] text-slate-400 px-1 font-medium">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Consultoria Estratégica Gratuita</span>
          </span>
          <span>Sentinel Systems Brasil</span>
        </div>
      </div>

    </div>
  );
};

export default SentinelAIAdvisor;
