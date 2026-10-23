export interface NicheItem {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  whatsappMessage: string;
}

export const NICHES_LIST: NicheItem[] = [
  {
    slug: 'sites-para-pousadas-e-hoteis',
    title: 'Criação de Sites para Pousadas e Hotéis',
    shortTitle: 'Pousadas & Hotéis',
    headline: 'Receba Reservas Diretas sem Pagar 20% de Comissão para Plataformas',
    description: 'Criamos sites ultra rápidos com fotos em alta resolução dos quartos, integração de calendário, mapa de localização e robô no WhatsApp que passa fotos, preços de diárias e dados de pagamento 24 horas por dia.',
    benefits: [
      'Economize fortunas em comissões do Booking e Airbnb com reservas diretas no seu WhatsApp',
      'Galeria de fotos otimizada que abre em menos de 1 segundo mesmo no 4G de turistas',
      'Robô inteligente no WhatsApp que passa tarifário, regras de check-in e tira dúvidas à noite',
      'Apareça em destaque no Google quando viajantes pesquisarem "pousada em [sua cidade]"'
    ],
    features: [
      { title: 'Catálogo de Acomodações', desc: 'Apresentação detalhada de suítes com comodidades, capacidade e fotos profissionais.' },
      { title: 'Orçamento Automático', desc: 'O cliente escolhe as datas e o robô calcula o valor do pacote e envia a chave PIX.' },
      { title: 'Localização & Pontos Turísticos', desc: 'Mapa integrado mostrando proximidade das melhores praias e restaurantes.' }
    ],
    whatsappMessage: 'Olá! Tenho uma Pousada/Hotel e quero um site com robô de WhatsApp para receber reservas diretas.'
  },
  {
    slug: 'sites-para-restaurantes-e-gastronomia',
    title: 'Criação de Sites para Restaurantes e Gastronomia',
    shortTitle: 'Restaurantes & Gastronomia',
    headline: 'Cardápio Digital Rápido e Pedidos Direto no WhatsApp sem Taxas por Pedido',
    description: 'Chega de pagar 27% em apps de entrega. Tenha um site com cardápio interativo, fotos apetitosas, link direto para a mesa ou delivery e atendimento automático 24 horas.',
    benefits: [
      'Cardápio digital que abre no celular em 1 toque, sem precisar baixar aplicativo pesado',
      'Pedidos chegam formatados e organizados direto no WhatsApp da sua cozinha',
      'Apareça no topo do Google quando procurarem "restaurante perto de mim"',
      'Sem cobrança de porcentagem sobre as suas vendas'
    ],
    features: [
      { title: 'Cardápio Interativo com Fotos', desc: 'Categorias bem divididas: entradas, pratos principais, bebidas e sobremesas.' },
      { title: 'Horários e Localização Waze/Maps', desc: 'Botão de como chegar e indicação de estacionamento e acessibilidade.' },
      { title: 'Robô de Delivery 24h', desc: 'Recebe pedidos, calcula frete e envia o resumo para confirmação imediata.' }
    ],
    whatsappMessage: 'Olá! Tenho um Restaurante/Comércio de Alimentos e quero um cardápio digital próprio e robô no WhatsApp.'
  },
  {
    slug: 'sites-para-graficas-e-comunicacao-visual',
    title: 'Criação de Sites para Gráficas e Comunicação Visual',
    shortTitle: 'Gráficas & Estamparia',
    headline: 'Seu Catálogo de Impressos e Fachadas com Orçamentos Rápidos no WhatsApp',
    description: 'Transforme curiosos em pedidos fechados. Apresente seus serviços de banners, adesivos, cartões, brindes e fachadas com envio facilitado de arquivos e orçamentos pelo WhatsApp.',
    benefits: [
      'Apresente portfólio de materiais já impressos com acabamento profissional',
      'Triagem automática de arquivos e gabaritos pelo WhatsApp para sua equipe não perder tempo',
      'Destaque no Google Meu Negócio para empresas locais que compram em grande volume',
      'Formulário simples de orçamento com dimensões, material e quantidade'
    ],
    features: [
      { title: 'Catálogo de Produtos Gráficos', desc: 'Separação clara entre papelaria corporativa, brindes, adesivos e fachadas.' },
      { title: 'Envio Fácil de Briefing', desc: 'Cliente envia o que precisa e o robô já solicita as medidas e o arquivo.' },
      { title: 'Depoimentos de Empresas Atendidas', desc: 'Prova social que transmite confiança para pedidos corporativos de alto valor.' }
    ],
    whatsappMessage: 'Olá! Sou de uma Gráfica/Comunicação Visual e quero um site com portfólio e atendimento no WhatsApp.'
  },
  {
    slug: 'sites-para-clinicas-e-consultorios',
    title: 'Criação de Sites para Clínicas e Consultórios',
    shortTitle: 'Clínicas & Consultórios',
    headline: 'Transmita Autoridade Médica e Facilite Agendamentos de Consultas 24 Horas',
    description: 'Sites elegantes dentro das normas do CRM/CRO. Apresente seus especialistas, tratamentos e convênios, com botão de agendamento que atende pacientes mesmo nos fins de semana.',
    benefits: [
      'Layout limpo e confiável que valoriza seu currículo e estrutura da clínica',
      'Agendamento pelo WhatsApp mesmo quando a secretária estiver fora do expediente',
      'Página otimizada no Google para pacientes que pesquisam sintomas ou especialistas na região',
      'Informações claras sobre planos de saúde aceitos e formas de pagamento'
    ],
    features: [
      { title: 'Corpo Clínico e Especialidades', desc: 'Perfil dos médicos e dentistas com títulos, especialidades e registro profissional.' },
      { title: 'Dúvidas sobre Procedimentos', desc: 'Explicações simples para diminuir a ansiedade do paciente antes da consulta.' },
      { title: 'Localização com Estacionamento', desc: 'Orientações de acesso, ponto de referência e fotos da recepção.' }
    ],
    whatsappMessage: 'Olá! Sou de uma Clínica/Consultório e quero um site profissional com agendamento no WhatsApp.'
  },
  {
    slug: 'sites-para-imobiliarias-e-corretores',
    title: 'Criação de Sites para Imobiliárias e Corretores',
    shortTitle: 'Imobiliárias & Corretores',
    headline: 'Capture Compradores no Google e Encaminhe Visitas com Robô Inteligente',
    description: 'Seu catálogo de lançamentos, casas e terrenos com visual de cinema. Atendimento inteligente no WhatsApp que filtra faixa de preço, bairro desejado e já agenda a visita com o corretor.',
    benefits: [
      'Fotos em tamanho grande e tour em vídeo que encantam quem quer comprar ou alugar',
      'Robô no WhatsApp que faz a triagem do cliente (qual bairro, quantos quartos, valor máximo)',
      'Apareça nas buscas do Google para quem pesquisa imóveis para temporada ou moradia',
      'Sem lentidão: carregamento instantâneo no celular'
    ],
    features: [
      { title: 'Vitrine de Imóveis em Destaque', desc: 'Filtros rápidos por tipo (casa, apto, terreno, comercial) e cidade/bairro.' },
      { title: 'Ficha Técnica Completa', desc: 'Metragem, quartos, vagas, IPTU, condomínio e fotos de alta resolução.' },
      { title: 'Botão de Visita Expressa', desc: 'Contato com o corretor responsável com o código do imóvel já preenchido.' }
    ],
    whatsappMessage: 'Olá! Sou Corretor/Imobiliária e quero um site moderno com catálogo e robô no WhatsApp.'
  },
  {
    slug: 'sites-para-escritorios-e-advogados',
    title: 'Criação de Sites para Escritórios e Advogados',
    shortTitle: 'Escritórios & Advocacia',
    headline: 'Posicionamento Institucional de Prestígio e Atração de Clientes Qualificados',
    description: 'Sites institucionais sóbrios, em total conformidade com o código de ética da OAB e do CFC. Destaque suas áreas de atuação e receba contatos de empresas e pessoas físicas.',
    benefits: [
      'Design executivo que transmite seriedade, segurança jurídica e solidez profissional',
      'Explicação didática das áreas do direito ou contabilidade em que seu escritório é especialista',
      'Triagem inicial pelo WhatsApp para identificar a urgência e o tipo de caso',
      'Indexação no Google para quem precisa de assessoria jurídica ou contábil local'
    ],
    features: [
      { title: 'Áreas de Atuação Detalhadas', desc: 'Direito Trabalhista, Civil, Tributário, Família, Imobiliário ou Perícias.' },
      { title: 'Artigos e Informações Jurídicas', desc: 'Textos explicativos que geram autoridade e atraem buscas orgânicas.' },
      { title: 'Canal Seguro de Primeiro Contato', desc: 'Envio seguro de dúvidas com sigilo profissional garantido.' }
    ],
    whatsappMessage: 'Olá! Tenho um Escritório de Advocacia/Contabilidade e quero um site institucional de alto nível.'
  },
  {
    slug: 'sites-para-lojas-e-comercio-varejista',
    title: 'Criação de Sites para Lojas e Comércio Varejista',
    shortTitle: 'Lojas & Comércio',
    headline: 'Mostre suas Novidades e Venda Todos os Dias pelo WhatsApp',
    description: 'Perfeito para lojas de roupas, calçados, utilidades, móveis e presentes. Um catálogo digital bonito e rápido onde o cliente escolhe os produtos e fecha a compra no WhatsApp.',
    benefits: [
      'Substitui o PDF pesado que ninguém baixa por um site leve e moderno',
      'Cliente clica no produto e já abre o WhatsApp com a foto e o código do item',
      'Atualizações simples de coleções e promoções inclusas na sua mensalidade',
      'Coloque sua loja física no mapa do Google para atrair quem está passeando na cidade'
    ],
    features: [
      { title: 'Vitrine de Produtos por Categoria', desc: 'Fotos dos produtos, tamanhos disponíveis, cores e valores claros.' },
      { title: 'Destaques e Ofertas da Semana', desc: 'Banners chamativos para queima de estoque e novidades.' },
      { title: 'Informações de Retirada ou Entrega', desc: 'Orientações de motoboy local, frete ou retirada no balcão.' }
    ],
    whatsappMessage: 'Olá! Tenho uma Loja/Comércio e quero um catálogo digital integrado com WhatsApp.'
  },
  {
    slug: 'sites-para-estetica-e-salao-de-beleza',
    title: 'Criação de Sites para Estética e Salões de Beleza',
    shortTitle: 'Estética & Salões',
    headline: 'Apresente seus Resultados Antes e Depois e Lotem sua Agenda de Procedimentos',
    description: 'Destaque seus serviços de estética facial, corporal, cabelos, unhas e sobrancelhas. Robô no WhatsApp que tira dúvidas sobre cuidados, tabela de preços e pré-agenda horários.',
    benefits: [
      'Galeria impecável de resultados que convence a cliente a agendar na hora',
      'Explicação clara dos procedimentos para diminuir o medo de quem nunca fez',
      'Atendimento 24h: a cliente pode agendar no sábado à noite ou no domingo',
      'Apareça no topo do Google quando procurarem por "limpeza de pele" ou "salão de beleza perto de mim"'
    ],
    features: [
      { title: 'Menu de Procedimentos', desc: 'Duração média, benefícios, indicações e contraindicações de cada serviço.' },
      { title: 'Fotos Reais com Iluminação Perfeita', desc: 'Portfólio visual de alto impacto que valoriza a técnica das profissionais.' },
      { title: 'Link Direto de Agendamento', desc: 'A cliente escolhe o procedimento e a data que gostaria de atendimento.' }
    ],
    whatsappMessage: 'Olá! Sou da área de Estética/Beleza e quero um site com portfólio e agendamento automático.'
  },
  {
    slug: 'sites-para-oficinas-e-auto-center',
    title: 'Criação de Sites para Oficinas e Auto Centers',
    shortTitle: 'Oficinas & Auto Center',
    headline: 'Seja Encontrado por Quem Teve uma Pane ou Precisa de Revisão Automotiva',
    description: 'Quem tem problema no carro pesquisa no Google na mesma hora. Tenha um site com botão de emergência / reboque, lista de serviços mecânicos e localização fácil pelo GPS.',
    benefits: [
      'Apareça na 1ª página do Google quando motoristas pesquisarem mecânico urgente na cidade',
      'Botão de socorro rápido no WhatsApp para guincho e socorro mecânico',
      'Lista de serviços: suspensão, freios, injeção eletrônica, ar-condicionado e pneus',
      'Transmita transparência com fotos da oficina limpa e equipamentos modernos'
    ],
    features: [
      { title: 'Socorro Rápido 1 Toque', desc: 'Botão de emergência com discagem direta e envio de localização no WhatsApp.' },
      { title: 'Revisão Preventiva', desc: 'Checklist de itens revisados para viagens e inspeções de rotina.' },
      { title: 'Marcas Atendidas e Garantia', desc: 'Indicação de montadoras atendidas e garantia formal sobre peças e serviços.' }
    ],
    whatsappMessage: 'Olá! Tenho uma Oficina Mecânica/Auto Center e quero um site para atrair clientes do Google.'
  },
  {
    slug: 'sites-para-pet-shop-e-veterinaria',
    title: 'Criação de Sites para Pet Shops e Clínicas Veterinárias',
    shortTitle: 'Pet Shop & Veterinária',
    headline: 'Agendamento de Banho, Tosa e Consultas com Todo o Carinho que o Pet Merece',
    description: 'Apresente seus planos de banho e tosa, vacinas, hotelzinho e produtos. Facilite o agendamento de táxi dog e consultas com confirmação automática pelo WhatsApp.',
    benefits: [
      'Facilite a rotina dos tutores com agendamento simplificado pelo WhatsApp',
      'Destaque no Google Maps quando procurarem "veterinário de plantão" ou "banho e tosa perto"',
      'Apresente sua equipe de veterinários e a estrutura com foco em bem-estar animal',
      'Cardápio de rações especiais, medicamentos e acessórios mais vendidos'
    ],
    features: [
      { title: 'Tabela de Serviços Pet', desc: 'Banho simples, tosa higiênica, tosa na tesoura, hidratação e táxi dog.' },
      { title: 'Plantão Veterinário', desc: 'Instruções para urgências e horários de atendimento clínico.' },
      { title: 'Agendamento Recorrente', desc: 'Mecanismo para fidelizar clientes em pacotes semanais ou mensais.' }
    ],
    whatsappMessage: 'Olá! Tenho um Pet Shop/Veterinária e quero um site para organizar agendamentos no WhatsApp.'
  }
];
