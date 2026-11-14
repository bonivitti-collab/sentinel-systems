export interface SiteModel {
  id: string;
  category: string;
  categoryLabel: string;
  name: string;
  headline: string;
  description: string;
  palette: {
    primary: string;
    accent: string;
    bg: string;
    card: string;
    text: string;
  };
  features: string[];
  conversionTrigger: string;
  previewHeroTitle: string;
  previewHeroSubtitle: string;
  previewCtaText: string;
  mockBadge: string;
  stats: { label: string; value: string }[];
}

export const SITE_MODELS: SiteModel[] = [
  {
    id: 'restaurante-gourmet',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia & Restaurantes',
    name: 'Bistrô & Parrilla Prime',
    headline: 'Cardápio Digital Interativo, Pedidos no WhatsApp e Mesas Lotadas',
    description: 'Design imersivo que abre o apetite no primeiro segundo. Apresenta fotos de alta resolução dos pratos, mapa com trajeto no Google e botão de pedido direto no WhatsApp.',
    palette: {
      primary: '#f59e0b',
      accent: '#ef4444',
      bg: '#0f172a',
      card: '#1e293b',
      text: '#f8fafc'
    },
    features: [
      'Cardápio digital 100% responsivo para celulares',
      'Botão de pedido direto para o balcão do WhatsApp',
      'Horário de funcionamento em tempo real (Aberto/Fechado)',
      'Integração com Google Maps e avaliações 5 estrelas'
    ],
    conversionTrigger: 'Cliente clica no prato e a mensagem de pedido já chega pronta no seu WhatsApp.',
    previewHeroTitle: 'O Melhor Churrasco e Cortes Nobres da Cidade',
    previewHeroSubtitle: 'Ambiente aconchegante, chopp artesanal trincando e cortes premium assados na brasa de verdade.',
    previewCtaText: 'Ver Cardápio & Pedir no WhatsApp',
    mockBadge: 'Alta Conversão para Delivery & Reservas',
    stats: [
      { label: 'Aumento de Pedidos Diretos', value: '+320%' },
      { label: 'Economia em Taxas de Apps', value: 'R$ 2.400/mês' },
      { label: 'Tempo de Carregamento', value: '0.4s' }
    ]
  },
  {
    id: 'pousada-hotel',
    category: 'hotelaria',
    categoryLabel: 'Pousadas & Hotelaria',
    name: 'Pousada Costa do Sol',
    headline: 'Reservas Diretas Sem Pagar Comissões Abusivas de 20% para Plataformas',
    description: 'Design sofisticado e relaxante para pousadas, hotéis boutique e casas de temporada. Mostra as suítes em detalhes, passeios da região e captação de reservas com pagamento antecipado.',
    palette: {
      primary: '#06b6d4',
      accent: '#0284c7',
      bg: '#082f49',
      card: '#0c4a6e',
      text: '#f0f9ff'
    },
    features: [
      'Galeria de fotos em alta definição com carregamento instantâneo',
      'Calculadora de diárias estimada por hóspede e temporada',
      'Botão de reserva expressa via WhatsApp com confirmação',
      'Guia de atrações locais para encantar o turista'
    ],
    conversionTrigger: 'O hóspede fecha direto com a pousada pelo WhatsApp, sem pagar 18% a 25% de comissão de Booking/Airbnb.',
    previewHeroTitle: 'Seu Refúgio Perfeito com Vista Panorâmica para o Mar',
    previewHeroSubtitle: 'Café da manhã artesanal, piscina de borda infinita e suítes com hidromassagem privativa.',
    previewCtaText: 'Consultar Datas & Reservar com Desconto',
    mockBadge: 'Livre de Comissões de Plataformas',
    stats: [
      { label: 'Lucro Líquido por Reserva', value: '+22%' },
      { label: 'Captação no Google', value: '1ª Página' },
      { label: 'Fechamentos no WhatsApp', value: '24h/dia' }
    ]
  },
  {
    id: 'clinica-saude',
    category: 'saude',
    categoryLabel: 'Clínicas & Especialistas',
    name: 'Clínica Integrada de Saúde & Bem-Estar',
    headline: 'Autoridade Médica, Agendamento Inteligente e Triagem de Pacientes',
    description: 'Transmite limpeza, confiança e rigor científico imediato. Destaca o corpo clínico, especialidades, convênios aceitos e facilita a marcação de consultas particulares.',
    palette: {
      primary: '#10b981',
      accent: '#0d9488',
      bg: '#ffffff',
      card: '#f8fafc',
      text: '#0f172a'
    },
    features: [
      'Páginas individuais para cada especialidade médica',
      'Módulo de agendamento rápido com robô de triagem',
      'Lista de convênios atendidos e orientações de exames',
      'Certificação de segurança médica e privacidade (LGPD)'
    ],
    conversionTrigger: 'Paciente escolhe a especialidade e o WhatsApp qualifica se é convênio ou particular antes de marcar.',
    previewHeroTitle: 'Cuidado Médico Humanizado com Tecnologia de Ponta',
    previewHeroSubtitle: 'Mais de 15 especialidades médicas, exames laboratoriais e diagnósticos rápidos em um só lugar.',
    previewCtaText: 'Agendar Consulta com Especialista',
    mockBadge: 'Agenda Cheia Sem Atendente Sobrecarregada',
    stats: [
      { label: 'Redução de Ausências (No-Show)', value: '-45%' },
      { label: 'Consultas Marcadas Fora do Horário', value: '38%' },
      { label: 'Avaliação Média no Google', value: '4.9 ★' }
    ]
  },
  {
    id: 'engenharia-servicos',
    category: 'servicos',
    categoryLabel: 'Engenharia, Reformas & Construção',
    name: 'Vitti Engenharia & Projetos Estruturais',
    headline: 'Geração Contínua de Orçamentos Qualificados de Alto Ticket',
    description: 'Estrutura técnica com simulador interativo de metragem, portfólio de obras entregues e formulário para captação de clientes corporativos e residenciais exigentes.',
    palette: {
      primary: '#3b82f6',
      accent: '#1d4ed8',
      bg: '#090d16',
      card: '#131b2e',
      text: '#f1f5f9'
    },
    features: [
      'Simulador técnico de metros quadrados e estimativa de obra',
      'Galeria Antes e Depois com fotos de alto padrão',
      'Download de portfólio corporativo em PDF',
      'SEO programático para ranquear em todas as pesquisas da região'
    ],
    conversionTrigger: 'O cliente calcula uma estimativa inicial e o lead já chega qualificado com tamanho da obra no seu WhatsApp.',
    previewHeroTitle: 'Engenharia de Precisão e Reformas de Alto Padrão',
    previewHeroSubtitle: 'Projetos residenciais e comerciais entregues rigorosamente no prazo e com garantia contratual total.',
    previewCtaText: 'Simular Orçamento da Minha Obra',
    mockBadge: 'Captação de Obras de Alto Valor',
    stats: [
      { label: 'Páginas Indexadas no Google', value: '39 Páginas' },
      { label: 'Orçamentos Mensais Recebidos', value: '4x Mais' },
      { label: 'Ticket Médio Fechado', value: 'R$ 85.000' }
    ]
  },
  {
    id: 'varejo-loja',
    category: 'varejo',
    categoryLabel: 'Lojas & Comércio Varejista',
    name: 'Moda Urbana & Acessórios Premium',
    headline: 'Catálogo de Produtos Rápido com Fechamento Imediato no WhatsApp',
    description: 'Ideal para lojas de roupas, sapatos, autopeças e decoração. Elimina a complexidade de plataformas lentas de e-commerce e foca em vender na velocidade do clique.',
    palette: {
      primary: '#8b5cf6',
      accent: '#ec4899',
      bg: '#ffffff',
      card: '#fdf4ff',
      text: '#1e1b4b'
    },
    features: [
      'Vitrine visual com fotos, tamanhos e variações de cores',
      'Botão "Comprar pelo WhatsApp" em cada item do catálogo',
      'Cálculo facilitado de entrega para motoboy ou correios',
      'Integração com feeds e novidades da loja'
    ],
    conversionTrigger: 'O cliente clica na foto da peça desejada e já manda para a vendedora a foto e tamanho escolhido.',
    previewHeroTitle: 'Coleção Exclusiva: Estilo, Conforto e Autenticidade',
    previewHeroSubtitle: 'Peças selecionadas a dedo com tecidos nobres e caimento impecável. Entregamos para todo o Brasil.',
    previewCtaText: 'Explorar Catálogo & Pedir Peça',
    mockBadge: 'Vendas Rápidas Sem Fricção de Checkout',
    stats: [
      { label: 'Conversão de Visitante em Lead', value: '8.4%' },
      { label: 'Velocidade no Celular (Mobile)', value: '0.3s' },
      { label: 'Tempo de Resposta ao Cliente', value: 'Imediato' }
    ]
  }
];
