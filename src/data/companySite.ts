import { FERRAMENTAS, ferramentasResumo } from './ferramentas';
import { VIDEO_PACKAGES } from './offers';
import { productByPath, productCanonical, productJsonLd, productOgImageUrl, PRODUCT_LANDINGS } from './productLandings';
import { GUIDES_INDEX, PUBLISHED_GUIDES, publishedGuideByPath } from './publishedGuides';

export const SITE = {
  name: 'Sentinel Systems',
  url: 'https://sentinelsystems.com.br',
  phoneDisplay: '(22) 99843-4956',
  phoneWa: '5522998434956',
  email: 'sentinelsystemsai@gmail.com',
  whatsappText:
    'Olá! Vim pelo site da Sentinel Systems. Quero o site essencial com a configuração básica do Perfil da Empresa no Google. Vi as 12 parcelas de R$ 50, total de R$ 600, ou R$ 540 à vista.',
} as const;

export function whatsappHref(text: string = SITE.whatsappText): string {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;
}

export const VIDEOS_WHATSAPP_TEXT =
  'Olá! Vim pelo site da Sentinel Systems. Quero vídeos prontos para o Instagram e o Status do WhatsApp. Posso enviar as fotos do meu negócio?';

export const SERVICES_WHATSAPP_TEXT =
  'Olá! Vim pelo site da Sentinel. Quero conversar sobre site, Google, WhatsApp e redes para o meu negócio.';

export const NEUTRAL_WHATSAPP_TEXT = 'Olá! Vim pelo site da Sentinel e quero conversar.';

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

export type PageKey = 'home' | 'ferramentas';

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
    title: 'Seu cliente te procura e não te acha | Sentinel Systems',
    description:
      'Um site que abre bem no celular, com o seu negócio no Google e o botão do WhatsApp. 12x de R$ 50, total de R$ 600, ou R$ 540 à vista.',
  },
  ferramentas: {
    key: 'ferramentas',
    path: '/ferramentas',
    label: 'Ferramentas',
    title: 'Ferramentas: Valor Hora Real e CotaCasa | Sentinel',
    description: `${ferramentasResumo()} Saiba quanto cobrar pela hora e quanto a obra deve custar.`,
  },
};

export const NAV_LINKS = (Object.values(PAGES) as PageMeta[]).map((page) => ({
  href: page.path,
  label: page.label,
}));

export const GUIAS_LINK = { href: '/guias', label: 'Guias' } as const;

export const MENU_LINKS = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#exemplos', label: 'Exemplos' },
  { href: '/#precos', label: 'Preços' },
  { href: '/#contato', label: 'Contato' },
] as const;

export const FOOTER_LINKS = [
  ...MENU_LINKS,
  { href: '/guias', label: 'Guias' },
  { href: '/ferramentas', label: 'Ferramentas' },
] as const;

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
    a: 'Chame no WhatsApp (22) 99843-4956. Antes de começar, a gente manda tudo combinado por escrito.',
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
      label: GUIDES_INDEX.label,
      title: guide.title,
      description: guide.description,
      ogType: 'article' as const,
    })),
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

export function pageByPath(path: string): PageMeta | undefined {
  return indexablePages().find((page) => page.path === path);
}

const ORGANIZATION_ID = `${SITE.url}/#organization`;

function organizationNode() {
  return {
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon-512.png`,
    image: `${SITE.url}/og-image.jpg`,
    email: SITE.email,
    telephone: '+55-22-99843-4956',
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
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

  if (page.path === '/' || page.path === '/ferramentas') {
    const siteService: Record<string, unknown> = {
      '@type': 'Service',
      '@id': `${canonicalUrl('/')}#site`,
      name: 'Site e Perfil da Empresa no Google',
      description:
        'Criação de site para empresa e para pequeno negócio, com página no celular e configuração básica do Perfil da Empresa no Google. A criação custa 12 parcelas de R$ 50, no total de R$ 600, ou R$ 540 à vista. A renovação opcional, só domínio e hospedagem, é R$ 180 por ano.',
      url: `${canonicalUrl('/')}#precos`,
      areaServed: { '@type': 'Country', name: 'Brasil' },
      provider: { '@id': ORGANIZATION_ID },
      offers: [
        {
          '@type': 'Offer',
          name: 'Criação parcelada',
          price: '600',
          priceCurrency: 'BRL',
          description: '12 parcelas de R$ 50. No parcelado, o primeiro pagamento é na contratação e os outros 11 são mensais.',
        },
        {
          '@type': 'Offer',
          name: 'Criação à vista',
          price: '540',
          priceCurrency: 'BRL',
          description: 'R$ 540 à vista na contratação, com 10% de desconto nesta primeira contratação.',
        },
        {
          '@type': 'Offer',
          name: 'Renovação anual opcional',
          price: '180',
          priceCurrency: 'BRL',
          description: 'R$ 180 por ano, só domínio e hospedagem, depois de 12 meses. Não inclui manutenção e não renova sozinha.',
        },
      ],
    };
    const videoService: Record<string, unknown> = {
      '@type': 'Service',
      '@id': `${canonicalUrl('/')}#videos`,
      name: 'Vídeos com IA para Instagram e Status',
      description:
        'Vídeo com IA para restaurante, pousada ou loja, feito a partir das fotos enviadas pelo WhatsApp, pronto para o Instagram e o Status.',
      url: `${canonicalUrl('/')}#precos`,
      areaServed: { '@type': 'Country', name: 'Brasil' },
      provider: { '@id': ORGANIZATION_ID },
      offers: VIDEO_PACKAGES.map((pack) => ({
        '@type': 'Offer',
        name: pack.name,
        price: pack.priceAmount,
        priceCurrency: 'BRL',
        description: pack.detail,
      })),
    };
    if (page.path === '/') {
      graph.push(siteService, videoService);
      for (const video of EXAMPLE_VIDEOS) {
        graph.push({
          '@type': 'VideoObject',
          name: `Exemplo de vídeo para ${video.label.toLowerCase()}`,
          description: video.description,
          thumbnailUrl: `${SITE.url}${video.poster}`,
          contentUrl: `${SITE.url}${video.src}`,
          uploadDate: '2026-11-11',
          duration: 'PT20S',
        });
      }
      graph.push({
        '@type': 'FAQPage',
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      });
      graph.push({
        '@type': 'ItemList',
        name: 'Serviços da Sentinel Systems',
        itemListElement: SERVICES.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: service.title,
            description: service.summary,
            url: `${canonicalUrl('/')}#servicos`,
            areaServed: { '@type': 'Country', name: 'Brasil' },
            provider: { '@id': ORGANIZATION_ID },
          },
        })),
      });
    }
    if (page.path === '/ferramentas') {
      graph.push({
        '@type': 'Service',
        '@id': `${url}#servico`,
        name: 'Ferramentas Valor Hora Real e CotaCasa',
        description: page.description,
        url,
        areaServed: { '@type': 'Country', name: 'Brasil' },
        provider: { '@id': ORGANIZATION_ID },
        offers: FERRAMENTAS.map((ferramenta) => ({
          '@type': 'Offer',
          name: ferramenta.name,
          price: ferramenta.priceAmount,
          priceCurrency: 'BRL',
          url:
            ferramenta.id === 'valor-hora-real'
              ? 'https://valorhora.sentinelsystems.com.br'
              : 'https://cotacasa.sentinelsystems.com.br',
          description: `${ferramenta.kind}. ${ferramenta.benefit}`,
        })),
      });
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

