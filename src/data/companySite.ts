import { productByPath, productCanonical, productJsonLd, productOgImageUrl, PRODUCT_LANDINGS } from './productLandings';
import { GUIDES_INDEX, PUBLISHED_GUIDES, publishedGuideByPath } from './publishedGuides';

export const SITE = {
  name: 'Sentinel Systems',
  url: 'https://sentinelsystems.com.br',
  phoneDisplay: '(22) 99972-6069',
  phoneWa: '5522999726069',
  email: 'sentinelsystemsai@gmail.com',
  whatsappText: 'Olá! Quero orçar um projeto com a Sentinel Systems.',
} as const;

export const ORCAMENTO_WHATSAPP_TEXT = SITE.whatsappText;
export const CONTATO_WHATSAPP_TEXT = 'Olá! Gostaria de falar com a Sentinel Systems.';

export function whatsappHref(text: string = SITE.whatsappText): string {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;
}

export const VIDEOS_WHATSAPP_TEXT =
  'Olá! Vim pelo site da Sentinel Systems. Quero vídeos prontos para o Instagram e o Status do WhatsApp. Posso enviar as fotos do meu negócio?';

export const SERVICES_WHATSAPP_TEXT =
  'Olá! Vim pelo site da Sentinel. Quero conversar sobre site, Google, WhatsApp e redes para o meu negócio.';

export const NEUTRAL_WHATSAPP_TEXT = CONTATO_WHATSAPP_TEXT;

export const EXAMPLE_VIDEOS = [
  {
    id: 'restaurante',
    label: 'Restaurante',
    description: 'Cena ilustrativa feita com IA para mostrar um restaurante no Instagram e no Status.',
    src: '/videos/exemplo-restaurante.mp4',
    poster: '/videos/exemplo-restaurante.jpg',
  },
  {
    id: 'loja',
    label: 'Loja',
    description: 'Cena ilustrativa feita com IA para mostrar uma loja no Instagram e no Status.',
    src: '/videos/exemplo-boutique.mp4',
    poster: '/videos/exemplo-boutique.jpg',
  },
  {
    id: 'pousada',
    label: 'Pousada',
    description: 'Cena ilustrativa feita com IA para mostrar uma pousada no Instagram e no Status.',
    src: '/videos/exemplo-pousada.mp4',
    poster: '/videos/exemplo-pousada.jpg',
  },
] as const;

export type PageKey = 'home' | 'privacidade' | 'termos';

export interface PageMeta {
  key: string;
  path: string;
  label: string;
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
}

export const PAGES: Record<PageKey, PageMeta> = {
  home: {
    key: 'home',
    path: '/',
    label: 'Início',
    title: 'Sentinel Systems | Sites, sistemas e automação com IA',
    description:
      'A Sentinel Systems desenvolve sites, sistemas e automação com IA para empresas e negócios locais, com atendimento em todo o Brasil.',
  },
  privacidade: {
    key: 'privacidade',
    path: '/privacidade',
    label: 'Política de Privacidade',
    title: 'Política de Privacidade | Sentinel Systems',
    description:
      'Como a Sentinel Systems trata informações de contato enviadas por WhatsApp e e-mail, em conformidade com a LGPD.',
  },
  termos: {
    key: 'termos',
    path: '/termos',
    label: 'Termos de Uso',
    title: 'Termos de Uso | Sentinel Systems',
    description:
      'Condições de uso do site da Sentinel Systems, contratação de projetos sob medida e acesso às planilhas.',
  },
};

export const HOME_SERVICES = [
  {
    id: 'sites',
    title: 'Sites',
    text: 'Sites institucionais e páginas do negócio, feitos para abrir bem no celular e apresentar o que a empresa faz com clareza.',
  },
  {
    id: 'sistemas',
    title: 'Sistemas web',
    text: 'Sistemas no navegador para organizar processos, dados e o trabalho do time, no ritmo da operação.',
  },
  {
    id: 'cardapio-digital',
    title: 'Cardápio digital',
    text: 'Cardápio online pensado para abrir rápido no celular, com categorias organizadas e pedido direto no WhatsApp.',
  },
  {
    id: 'automacao-whatsapp',
    title: 'Automação de atendimento no WhatsApp',
    text: 'Fluxos automatizados e atendimento com IA no WhatsApp para responder dúvidas frequentes, qualificar contatos e encaminhar pedidos.',
  },
  {
    id: 'automacoes',
    title: 'Automações e integrações',
    text: 'Ligamos ferramentas e tarefas repetitivas para o trabalho fluir com menos retrabalho manual.',
  },
  {
    id: 'ia',
    title: 'IA aplicada a negócios',
    text: 'Usamos inteligência artificial de forma prática, no que realmente ajuda a rotina e a decisão do negócio.',
  },
] as const;

export const HOME_FAQS = [
  {
    q: 'Como funciona o atendimento e o orçamento?',
    a: 'O primeiro contato é pelo WhatsApp (22) 99972-6069. Você explica o que o seu negócio precisa e nós enviamos uma proposta com escopo e prazo definidos antes de começar.',
  },
  {
    q: 'A Sentinel Systems atende apenas uma cidade ou todo o Brasil?',
    a: 'Atendemos todo o Brasil de forma remota, com reuniões e acompanhamento direto pelo WhatsApp e por e-mail.',
  },
  {
    q: 'Quais soluções vocês desenvolvem?',
    a: 'Desenvolvemos sites, sistemas web, cardápio digital, automação de atendimento no WhatsApp, integrações entre ferramentas e inteligência artificial aplicada a negócios.',
  },
  {
    q: 'O que são as planilhas Valor Hora Real e CotaCasa?',
    a: 'São planilhas prontas para Google Planilhas e Excel, vendidas por R$ 9,90 cada uma nas páginas dedicadas valorhora.sentinelsystems.com.br/valorhora e cotacasa.sentinelsystems.com.br/cotacasa.',
  },
  {
    q: 'Como entro em contato com a equipe?',
    a: 'Você pode falar diretamente pelo WhatsApp (22) 99972-6069 ou enviar um e-mail para sentinelsystemsai@gmail.com.',
  },
] as const;

export const NAV_LINKS = (Object.values(PAGES) as PageMeta[]).map((page) => ({
  href: page.path,
  label: page.label,
}));

export const GUIAS_LINK = { href: '/guias', label: 'Guias' } as const;

export const MENU_LINKS = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#como-trabalhamos', label: 'Como trabalhamos' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#contato', label: 'Contato' },
] as const;

export const FOOTER_LINKS = [...MENU_LINKS] as const;

export const SITEMAP_LINKS = FOOTER_LINKS;

export interface ServicePoint {
  title: string;
  text: string;
}

export interface ServiceOfferLink {
  href: string;
  label: string;
  headline: string;
  detail: string;
}

export interface SentinelService {
  id: string;
  title: string;
  eyebrow: string;
  result: string;
  summary: string;
  why: string;
  points: ServicePoint[];
  card: string;
  price: ServiceOfferLink | null;
  related: ServiceOfferLink | null;
  whatsappLabel: string;
  whatsappMessage: string;
}

export const SERVICES: SentinelService[] = [
  {
    id: 'sites',
    title: 'Site',
    eyebrow: 'O meio',
    result: 'Quem já te achou entende o que você faz e chama, em vez de voltar para a busca.',
    summary:
      'Um site que abre bem no celular, com o seu negócio no Google e o botão do WhatsApp. 12x de R$ 50, total de R$ 600, ou R$ 540 à vista.',
    why: 'Ser encontrado não basta se o clique seguinte se perde. No celular, a página precisa abrir e deixar óbvio o que a empresa faz, onde fica e como falar com ela. Um site confuso devolve a pessoa para a busca.',
    card: '12 parcelas de R$ 50, total de R$ 600, ou R$ 540 à vista.',
    price: {
      href: '/sites#oferta',
      label: 'Ver a oferta do site',
      headline: '12 parcelas de R$ 50',
      detail:
        'Total de R$ 600, ou R$ 540 à vista, com 10% de desconto nesta primeira contratação. Depois de 12 meses, renovar é opcional: R$ 180 por ano, só domínio e hospedagem.',
    },
    related: null,
    whatsappLabel: 'Quero esse site no WhatsApp',
    whatsappMessage: SITE.whatsappText,
    points: [
      {
        title: 'Abre no celular',
        text: 'A maior parte de quem pesquisa um negócio local está no telefone. A página tem de aparecer e deixar o próximo passo visível.',
      },
      {
        title: 'Diz o que a empresa faz',
        text: 'Serviço, cidade, horário e diferenciais em linguagem de cliente, para a pessoa reconhecer que encontrou o lugar certo.',
      },
      {
        title: 'Leva ao contato',
        text: 'Telefone, WhatsApp e endereço ficam visíveis. O site existe para a pessoa ligar, chamar ou ir até você.',
      },
    ],
  },
  {
    id: 'google',
    title: 'Perfil da Empresa no Google',
    eyebrow: 'O meio',
    result: 'Quem pesquisa o serviço na região vê o nome, o mapa, o horário e um jeito de ligar.',
    summary:
      'Perfil da Empresa no Google, Maps, avaliações, fotos, posts e o texto da busca local. É a ficha que aparece antes do clique no site.',
    why: 'Negócio local é escolhido na busca e no mapa. A pessoa olha o nome, a distância, as fotos, as avaliações e se dá para chamar agora. Se isso está vazio, desatualizado ou diferente do site, ela segue para o próximo resultado.',
    card: 'A configuração básica entra na criação do site.',
    price: null,
    related: {
      href: '/sites#oferta',
      label: 'Ver o pacote do site',
      headline: 'Entra na oferta do site',
      detail:
        'Perfil da Empresa no Google configurado junto (quando o Google aceita o seu tipo de negócio). O perfil é gratuito. O valor paga esse trabalho. A verificação depende do Google.',
    },
    whatsappLabel: 'Conversar sobre o perfil',
    whatsappMessage: 'Olá! Vim pelo site da Sentinel. Quero conversar sobre o Perfil da Empresa no Google.',
    points: [
      {
        title: 'Perfil da Empresa no Google',
        text: 'Nome, categoria, endereço, horário, telefone e WhatsApp do jeito que o cliente procura.',
      },
      {
        title: 'Google Maps',
        text: 'Quem busca por perto decide no mapa. O ponto certo e o caminho até a porta fazem a pessoa sair de casa ou desistir.',
      },
      {
        title: 'Avaliações, fotos e posts',
        text: 'A nota, os comentários e a foto de fachada são o que a pessoa lê antes de ligar. Posts mantêm horário e novidade visíveis.',
      },
      {
        title: 'Busca da região',
        text: 'Nome, cidade e serviço organizados no perfil e no site, para a empresa aparecer quando alguém pesquisa o que ela faz por perto. Isso não é promessa de primeira posição.',
      },
    ],
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    eyebrow: 'O meio',
    result: 'Mais mensagens de quem já decidiu falar com o negócio.',
    summary:
      'O número e o botão ficam visíveis no site e no perfil, no momento em que a pessoa quer chamar.',
    why: 'O cliente local muitas vezes não compra na página. Ele chama. Se o WhatsApp está escondido, a visita volta para a comparação.',
    card: 'O botão entra no site. Um atendimento à parte: orçamento pelo WhatsApp.',
    price: null,
    related: null,
    whatsappLabel: 'Conversar no WhatsApp',
    whatsappMessage: 'Olá! Vim pelo site da Sentinel. Quero conversar sobre o WhatsApp do meu negócio.',
    points: [
      {
        title: 'Botão no site',
        text: 'No pacote do site, o WhatsApp fica junto do serviço e do lugar. A pessoa que já decidiu falar não precisa procurar o número.',
      },
      {
        title: 'Número no perfil',
        text: 'Na configuração básica do Perfil da Empresa, o telefone e o WhatsApp entram na ficha que o Google mostra.',
      },
      {
        title: 'Atendimento à parte',
        text: 'O botão entra no site. Para um atendimento feito do seu jeito, a conversa é no WhatsApp.',
      },
    ],
  },
  {
    id: 'redes',
    title: 'Redes sociais',
    eyebrow: 'O meio',
    result: 'Quem ainda não pesquisou no Google também vê o trabalho e chama.',
    summary:
      'Instagram e Status do WhatsApp mostram o negócio para quem acompanha. A gestão do perfil a gente combina no WhatsApp.',
    why: 'O feed alcança quem já acompanha. A busca alcança quem tem um problema agora. Os dois momentos são diferentes, e um não faz o trabalho do outro.',
    card: 'Gestão do Instagram: orçamento pelo WhatsApp. Vídeos: R$ 397, R$ 997/mês e R$ 1.797/mês.',
    price: null,
    related: {
      href: '/videos',
      label: 'Ver os pacotes de vídeo',
      headline: 'Vídeos para o Instagram e o Status',
      detail:
        'Avulso R$ 397. Mensal Básico R$ 997/mês. Mensal Completo R$ 1.797/mês. A gestão do Instagram é outro trabalho, combinado no WhatsApp.',
    },
    whatsappLabel: 'Conversar sobre as redes',
    whatsappMessage: 'Olá! Vim pelo site da Sentinel. Quero conversar sobre as redes do meu negócio.',
    points: [
      {
        title: 'Instagram',
        text: 'Mostra o trabalho para quem acompanha. No perfil, categoria, contato e um caminho para o WhatsApp ajudam a pessoa a sair do feed e chamar.',
      },
      {
        title: 'Status do WhatsApp',
        text: 'Quem já conversa com o negócio vê novidade sem precisar pesquisar. O Status não substitui o site nem o perfil no Google.',
      },
      {
        title: 'Gestão do perfil',
        text: 'Cuidar do perfil no dia a dia a gente combina no WhatsApp. Os vídeos prontos custam R$ 397, R$ 997 por mês ou R$ 1.797 por mês.',
      },
    ],
  },
];

export const HOME_FAQ = [
  'O que entra nos R$ 600?',
  'Isso é uma mensalidade?',
  'E depois dos 12 meses?',
  'O site do meu negócio vai aparecer em primeiro no Google?',
  'Já tenho Instagram. Preciso do site mesmo assim?',
] as const;

export const FAQ = [
  {
    q: 'O que entra nos R$ 600?',
    a: 'Um site do seu negócio que abre bem no celular, com até cinco seções, domínio .com.br e hospedagem por 12 meses. Se o Google aceitar o seu tipo de negócio, a gente também configura o Perfil da Empresa.',
  },
  {
    q: 'Isso é uma mensalidade?',
    a: 'Não. São 12 parcelas de R$ 50, no total de R$ 600, ou R$ 540 à vista.',
  },
  {
    q: 'E depois dos 12 meses?',
    a: 'A renovação é opcional: R$ 180 por ano, só domínio e hospedagem. Não inclui manutenção, e a renovação não é automática.',
  },
  {
    q: 'O site do meu negócio vai aparecer em primeiro no Google?',
    a: 'Não. Ninguém pode garantir a primeira posição. O que a gente faz é deixar seu negócio fácil de achar e de chamar.',
  },
  {
    q: 'Já tenho Instagram. Preciso do site mesmo assim?',
    a: 'O Instagram continua. O site é a página com serviços, localização e WhatsApp para quem chega pelo Google.',
  },
  {
    q: 'Como eu contrato?',
    a: 'Chame no WhatsApp (22) 99972-6069. Antes de começar, a gente manda tudo combinado por escrito.',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    title: 'Você conta como o cliente chega hoje',
    text: 'O que vende, em que cidade, se as pessoas ligam, chamam no WhatsApp ou aparecem na porta.',
  },
  {
    title: 'A gente organiza os meios',
    text: 'Site no celular, Perfil da Empresa, caminho até o WhatsApp e o que faz sentido nas redes.',
  },
  {
    title: 'O contato continua no WhatsApp',
    text: 'Dúvida, ajuste e acompanhamento seguem no mesmo WhatsApp da Sentinel. Você não precisa abrir chamado em outro sistema.',
  },
] as const;

export function canonicalUrl(path: string): string {
  const product = productByPath(path);
  if (product) return productCanonical(product);
  if (path === '/') return `${SITE.url}/`;
  return `${SITE.url}${path}`;
}

export function indexablePages(): PageMeta[] {
  return [
    ...(Object.values(PAGES) as PageMeta[]),
    ...PRODUCT_LANDINGS.map((product) => ({
      key: product.id,
      path: product.path,
      label: product.metaTitle,
      title: product.metaTitle,
      description: product.metaDescription,
      ogType: 'website' as const,
      ogImage: productOgImageUrl(product),
      ogImageAlt: product.ogAlt,
    })),
  ];
}

export function guidePages(): PageMeta[] {
  return [
    {
      key: 'guias',
      path: GUIDES_INDEX.path,
      label: GUIDES_INDEX.label,
      title: GUIDES_INDEX.title,
      description: GUIDES_INDEX.description,
      ogType: 'website',
    },
    ...PUBLISHED_GUIDES.map((guide) => ({
      key: guide.slug,
      path: guide.slug,
      label: guide.title,
      title: `${guide.title} | Sentinel Systems`,
      description: guide.description,
      ogType: 'article' as const,
    })),
  ];
}

export function pageByPath(path: string): PageMeta | undefined {
  return indexablePages().find((page) => page.path === path) ?? guidePages().find((page) => page.path === path);
}

const ORGANIZATION_ID = `${SITE.url}/#organization`;

function organizationNode() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon-512.png`,
    image: `${SITE.url}/og-image.jpg`,
    email: SITE.email,
    telephone: '+55-22-99972-6069',
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+55-22-99972-6069',
      email: SITE.email,
      availableLanguage: 'Portuguese',
    },
  };
}

function visibleAnswer(answer: string): string {
  return answer
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([\s\S]+?)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'pt-BR',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

function guideArticleJsonLd(guide: (typeof PUBLISHED_GUIDES)[number]): Record<string, unknown> {
  const url = canonicalUrl(guide.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      websiteNode(),
      organizationNode(),
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: guide.h1,
        description: guide.description,
        datePublished: '2026-11-09',
        inLanguage: 'pt-BR',
        image: `${SITE.url}/og-image.jpg`,
        mainEntityOfPage: url,
        author: { '@id': ORGANIZATION_ID },
        publisher: { '@id': ORGANIZATION_ID },
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: visibleAnswer(item.answer),
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: canonicalUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Guias', item: canonicalUrl('/guias') },
          { '@type': 'ListItem', position: 3, name: guide.h1, item: url },
        ],
      },
    ],
  };
}

function guidesIndexJsonLd(): Record<string, unknown> {
  const url = canonicalUrl(GUIDES_INDEX.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      websiteNode(),
      organizationNode(),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: GUIDES_INDEX.title,
        description: GUIDES_INDEX.description,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': ORGANIZATION_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: canonicalUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Guias', item: url },
        ],
      },
    ],
  };
}

export function jsonLdFor(path: string): Record<string, unknown> {
  const product = productByPath(path);
  if (product) return productJsonLd(product);
  if (path === GUIDES_INDEX.path) return guidesIndexJsonLd();
  const published = publishedGuideByPath(path);
  if (published) return guideArticleJsonLd(published);
  const known = pageByPath(path);
  if (!known) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Página não encontrada',
      url: `${SITE.url}/`,
      inLanguage: 'pt-BR',
    };
  }
  const page = known;
  const url = canonicalUrl(page.path);
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: 'pt-BR',
      publisher: { '@id': ORGANIZATION_ID },
    },
    organizationNode(),
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'pt-BR',
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: { '@id': ORGANIZATION_ID },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: canonicalUrl('/'),
        },
        ...(page.path === '/'
          ? []
          : [
              {
                '@type': 'ListItem',
                position: 2,
                name: page.label,
                item: url,
              },
            ]),
      ],
    },
  ];

  if (page.path === '/') {
    graph.push({
      '@type': 'ItemList',
      name: 'Serviços da Sentinel Systems',
      itemListElement: HOME_SERVICES.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.text,
          url: `${canonicalUrl('/')}#servicos`,
          areaServed: { '@type': 'Country', name: 'Brasil' },
          provider: { '@id': ORGANIZATION_ID },
        },
      })),
    });
    graph.push({
      '@type': 'FAQPage',
      mainEntity: HOME_FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

