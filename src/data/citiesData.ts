export interface CityItem {
  slug: string;
  name: string;
  region: string;
  headline: string;
  description: string;
  localKeywords: string[];
  commercialFocus: string;
  whatsappMessage: string;
}

export const CITIES_LIST: CityItem[] = [
  {
    slug: 'criacao-de-sites-em-sao-paulo',
    name: 'São Paulo',
    region: 'São Paulo - SP',
    headline: 'Criação de Sites de Alta Performance e Google Meu Negócio em São Paulo',
    description: 'São Paulo é o maior polo econômico e comercial da América Latina. Desenvolvemos sites ultrarrápidos, presença forte na 1ª página do Google e automações de atendimento no WhatsApp para empresas, clínicas e comércios de todas as regiões da capital paulista.',
    localKeywords: ['criação de sites são paulo', 'sites profissionais sp', 'google meu negocio sp', 'robo whatsapp sao paulo'],
    commercialFocus: 'Comércios, clínicas, consultorias empresariais, prestadores de serviços, franquias e empresas de toda a capital e Grande SP.',
    whatsappMessage: 'Olá! Tenho uma empresa em São Paulo e quero um site de alta performance com robô de WhatsApp.'
  },
  {
    slug: 'criacao-de-sites-no-rio-de-janeiro',
    name: 'Rio de Janeiro',
    region: 'Rio de Janeiro - RJ',
    headline: 'Criação de Sites Profissionais e Automação de Vendas no Rio de Janeiro',
    description: 'Destaque sua empresa na capital fluminense. Criamos ecossistemas web com carregamento instantâneo, posicionamento no Google Maps e robô de WhatsApp 24 horas para captar clientes na Barra da Tijuca, Zona Sul, Centro, Zona Norte e Zona Oeste.',
    localKeywords: ['criação de sites rj', 'agencia web rio de janeiro', 'google meu negocio rj', 'robo whatsapp rio de janeiro'],
    commercialFocus: 'Comércios locais, clínicas de saúde, escritórios de advocacia e contabilidade, gastronomia, turismo e empresas de serviços da capital.',
    whatsappMessage: 'Olá! Tenho um negócio no Rio de Janeiro e quero criar um site de alto padrão com atendimento no WhatsApp.'
  },
  {
    slug: 'criacao-de-sites-em-belo-horizonte',
    name: 'Belo Horizonte',
    region: 'Minas Gerais - MG',
    headline: 'Desenvolvimento Web Rápido e Marketing no Google em Belo Horizonte',
    description: 'Conquiste clientes na capital mineira com sites que carregam em menos de 1 segundo. Estruturamos seu negócio no Google Meu Negócio e conectamos um robô inteligente no WhatsApp para converter leads em Savassi, Lourdes, Pampulha, Centro e região metropolitana.',
    localKeywords: ['criação de sites bh', 'desenvolvimento de sites belo horizonte', 'marketing digital bh', 'sites para empresas mg'],
    commercialFocus: 'Comércio varejista, polos gastronômicos, startups, consultórios médicos, clínicas de estética e prestadores de serviços em BH.',
    whatsappMessage: 'Olá! Sou de Belo Horizonte e quero colocar minha empresa na 1ª página do Google com a Sentinel.'
  },
  {
    slug: 'criacao-de-sites-em-curitiba',
    name: 'Curitiba',
    region: 'Paraná - PR',
    headline: 'Criação de Sites Modernos e Presença no Google em Curitiba',
    description: 'Curitiba é referência nacional em inovação e exigência de mercado. Desenvolvemos páginas comerciais de alta conversão com suporte contínuo para negócios em Batel, Centro Cívico, Água Verde, Portão e toda a Região Metropolitana.',
    localKeywords: ['criação de sites curitiba', 'agencia de sites curitiba', 'google maps empresas curitiba', 'robo whatsapp pr'],
    commercialFocus: 'Clínicas especializadas, franquias, indústrias, comércio elegante, escritórios e serviços corporativos de Curitiba.',
    whatsappMessage: 'Olá! Tenho uma empresa em Curitiba e busco um site profissional com suporte mensal e robô 24h.'
  },
  {
    slug: 'criacao-de-sites-em-brasilia',
    name: 'Brasília',
    region: 'Distrito Federal - DF',
    headline: 'Criação de Sites Institucionais e Automação no Distrito Federal',
    description: 'Posicione sua marca com autoridade na capital do país. Criamos sites elegantes e robustos para empresas, consultorias e profissionais do Plano Piloto, Asa Sul, Asa Norte, Águas Claras, Taguatinga e todo o DF.',
    localKeywords: ['criação de sites brasilia', 'marketing institucional brasilia', 'empresas brasilia google', 'desenvolvimento web df'],
    commercialFocus: 'Escritórios corporativos, clínicas médicas, consultorias, prestadores de serviços, escolas e comércios do Distrito Federal.',
    whatsappMessage: 'Olá! Sou de Brasília e quero modernizar a presença digital da minha empresa com a Sentinel Systems.'
  },
  {
    slug: 'criacao-de-sites-em-salvador',
    name: 'Salvador',
    region: 'Bahia - BA',
    headline: 'Sites Rápidos e Robô de Vendas no WhatsApp para Salvador',
    description: 'Aqueça suas vendas na capital baiana. Criamos sites que aparecem no topo das buscas do Google para clientes e turistas em Pituba, Barra, Caminho das Árvores, Rio Vermelho e comércio geral de Salvador e Litoral Norte.',
    localKeywords: ['criação de sites salvador', 'desenvolvimento web bahia', 'marketing digital salvador', 'google meu negocio salvador'],
    commercialFocus: 'Hotéis e pousadas, restaurantes, clínicas odontológicas, lojas de varejo e prestadores de serviços de Salvador.',
    whatsappMessage: 'Olá! Tenho uma empresa em Salvador e quero aumentar minhas vendas com site e robô de WhatsApp.'
  },
  {
    slug: 'criacao-de-sites-em-porto-alegre',
    name: 'Porto Alegre',
    region: 'Rio Grande do Sul - RS',
    headline: 'Criação de Sites Profissionais e Gestão no Google em Porto Alegre',
    description: 'Aumente o faturamento da sua empresa no Rio Grande do Sul. Desenvolvemos sites rápidos, cadastramento completo no Google e automações que atendem e qualificam clientes 24 horas por dia em Moinhos de Vento, Petrópolis, Centro e Zona Sul.',
    localKeywords: ['criação de sites porto alegre', 'agencia web poa', 'marketing digital porto alegre', 'sites para empresas rs'],
    commercialFocus: 'Indústrias, comércio regional, consultórios, distribuidoras e prestadores de serviços corporativos de Porto Alegre.',
    whatsappMessage: 'Olá! Tenho uma empresa em Porto Alegre e quero um site moderno com atendimento automático.'
  },
  {
    slug: 'criacao-de-sites-em-goiania',
    name: 'Goiânia',
    region: 'Goiás - GO',
    headline: 'Criação de Sites Comerciais e Automação de WhatsApp em Goiânia',
    description: 'Destaque-se no vibrante mercado de Goiânia e Centro-Oeste. Criamos sites comerciais de alta velocidade para capturar clientes no Google em Setor Bueno, Marista, Oeste, Jardim Goiás e região metropolitana.',
    localKeywords: ['criação de sites goiânia', 'marketing digital goiania', 'sites goiania go', 'robo whatsapp goiania'],
    commercialFocus: 'Comércio atacadista e varejista, agronegócio, clínicas de estética e saúde, imobiliárias e prestadores de serviços em Goiânia.',
    whatsappMessage: 'Olá! Tenho um negócio em Goiânia e quero colocar minha empresa na 1ª página do Google.'
  }
];
