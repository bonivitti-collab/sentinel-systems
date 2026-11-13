import { FERRAMENTAS, ferramentasResumo } from './ferramentas';
import { GUIDES_INDEX, PUBLISHED_GUIDES, publishedGuideByPath } from './publishedGuides';

export const SITE = {
  name: 'Sentinel Systems',
  url: 'https://sentinelsystems.com.br',
  phoneDisplay: '(22) 99843-4956',
  phoneWa: '5522998434956',
  email: 'sentinelsystemsai@gmail.com',
  whatsappText:
    'Olá! Vim pelo site da Sentinel Systems. Quero o site essencial com a configuração básica do Perfil da Empresa no Google. Vi as 12 parcelas de R$ 50, total de R$ 600, ou R$ 540 à vista.',
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

export type PageKey = 'home' | 'sites' | 'videos' | 'ferramentas' | 'sobre' | 'servicos' | 'faq' | 'contato';

export interface PageMeta {
  key: string;
  path: string;
  label: string;
  title: string;
  description: string;
  ogType?: 'website' | 'article';
}

export const PAGES: Record<PageKey, PageMeta> = {
  home: {
    key: 'home',
    path: '/',
    label: 'Início',
    title: 'Ser encontrado no Google | Sentinel Systems',
    description:
      'Marketing para o pequeno negócio: site, Perfil da Empresa no Google, WhatsApp e redes. O site sai em 12 parcelas de R$ 50, total de R$ 600. Planilhas a R$ 9,90.',
  },
  sites: {
    key: 'sites',
    path: '/sites',
    label: 'Sites e Google',
    title: 'Criar site para empresa e aparecer no Google | Sentinel',
    description:
      'Site para pequeno negócio no celular e configuração do Perfil da Empresa no Google. 12 parcelas de R$ 50, total de R$ 600, ou R$ 540 à vista. Atendimento no Brasil.',
  },
  videos: {
    key: 'videos',
    path: '/videos',
    label: 'Vídeos com IA',
    title: 'Vídeo com IA para Instagram e Status | Sentinel',
    description:
      'Vídeo para restaurante, pousada ou loja: mande as fotos pelo WhatsApp e receba vídeos prontos para o Instagram e o Status, sem filmar e sem editar.',
  },
  ferramentas: {
    key: 'ferramentas',
    path: '/ferramentas',
    label: 'Ferramentas',
    title: 'Ferramentas: Valor Hora Real e CotaCasa | Sentinel',
    description: `${ferramentasResumo()} Saiba quanto cobrar pela hora e quanto a obra deve custar.`,
  },
  sobre: {
    key: 'sobre',
    path: '/sobre',
    label: 'Sobre',
    title: 'Sobre a Sentinel | Marketing para o pequeno negócio',
    description:
      'A Sentinel Systems faz o marketing do pequeno negócio no Brasil: site, Perfil da Empresa no Google, WhatsApp e redes, para o cliente aparecer e chamar.',
  },
  servicos: {
    key: 'servicos',
    path: '/servicos',
    label: 'Serviços',
    title: 'Serviços Sentinel para o pequeno negócio | Sentinel',
    description:
      'Site, Perfil da Empresa no Google, WhatsApp e redes para o cliente te achar, ligar e chamar. O site sai em 12 parcelas de R$ 50, total de R$ 600, ou R$ 540 à vista.',
  },
  faq: {
    key: 'faq',
    path: '/faq',
    label: 'FAQ',
    title: 'Perguntas sobre criação de site e Google Meu Negócio',
    description:
      'Dúvidas sobre site, Perfil da Empresa no Google, WhatsApp, redes, prazo e contratação. O caminho para ser encontrado, receber ligação e chamar no WhatsApp.',
  },
  contato: {
    key: 'contato',
    path: '/contato',
    label: 'Contato',
    title: 'Contato | Criação de site e Perfil da Empresa | Sentinel',
    description:
      'Fale com a Sentinel Systems sobre criação de site e aparecer no Google. WhatsApp (22) 99843-4956 e e-mail sentinelsystemsai@gmail.com. Atendimento no Brasil.',
  },
};

export const NAV_LINKS = (Object.values(PAGES) as PageMeta[]).map((page) => ({
  href: page.path,
  label: page.label,
}));

export const GUIAS_LINK = { href: '/guias', label: 'Guias' } as const;

export const MENU_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sites', label: 'Sites e Google' },
  { href: '/videos', label: 'Vídeos com IA' },
  { href: '/ferramentas', label: 'Ferramentas' },
] as const;

export const FOOTER_LINKS = [
  ...MENU_LINKS,
  { href: '/sobre', label: 'Sobre' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contato', label: 'Contato' },
  GUIAS_LINK,
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
    eyebrow: 'Sua página',
    result: 'Quem já te achou entende o que você faz e chama, em vez de voltar para a busca.',
    summary:
      'A página que abre no celular quando alguém já te achou e quer saber se liga, chama no WhatsApp ou vai até você.',
    why: 'Ser encontrado não basta se o clique seguinte se perde. No celular, a página precisa abrir e deixar óbvio o que a empresa faz, onde fica e como falar com ela. Um site confuso devolve a pessoa para a busca.',
    card: '12 parcelas de R$ 50, total de R$ 600, ou R$ 540 à vista, com 10% de desconto nesta primeira contratação. Depois de 12 meses, renovar é opcional: R$ 180 por ano, só domínio e hospedagem.',
    price: {
      href: '/sites#oferta',
      label: 'Ver o pacote do site',
      headline: '12 parcelas de R$ 50',
      detail:
        'Total de R$ 600, ou R$ 540 à vista, com 10% de desconto nesta primeira contratação do pacote. Depois de 12 meses, renovar é opcional: R$ 180 por ano, só domínio e hospedagem. O que entra em cada valor está na página do site.',
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
    eyebrow: 'Na busca',
    result: 'Quem pesquisa o serviço na região vê o nome, o mapa, o horário e um jeito de ligar.',
    summary:
      'Perfil da Empresa no Google, Maps, avaliações, fotos, posts e o texto da busca local. É a ficha que aparece antes do clique no site.',
    why: 'Negócio local é escolhido na busca e no mapa. A pessoa olha o nome, a distância, as fotos, as avaliações e se dá para chamar agora. Se isso está vazio, desatualizado ou diferente do site, ela segue para o próximo resultado.',
    card: 'A configuração básica entra no pacote do site: nome, mapa, horário e um jeito de ligar.',
    price: null,
    related: {
      href: '/sites#oferta',
      label: 'Ver o pacote do site',
      headline: 'Já entra no pacote do site',
      detail:
        'A configuração básica do Perfil da Empresa entra no pacote do site, quando o Google permite. O perfil é gratuito. O valor do pacote paga o trabalho de deixar nome, mapa, horário e telefone prontos para quem pesquisa. A conferência final é do Google.',
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
        text: 'Nome, cidade e serviço organizados no perfil e no site, para quem pesquisa o que você faz por perto encontrar um jeito de ligar ou chamar.',
      },
    ],
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    eyebrow: 'A conversa',
    result: 'Mais mensagens de quem já decidiu falar com o negócio.',
    summary:
      'O número e o botão ficam visíveis no site e no perfil, no momento em que a pessoa quer chamar. Quem já decidiu falar encontra o WhatsApp na hora.',
    why: 'O cliente local muitas vezes não compra na página. Ele chama. Se o WhatsApp está escondido, a visita volta para a comparação.',
    card: 'Orçamento sob medida: conta no WhatsApp o que você precisa e a gente monta junto.',
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
        title: 'Orçamento sob medida',
        text: 'Conta no WhatsApp o que o seu negócio precisa além do pacote do site. A gente monta junto o caminho para mais mensagens e mais clientes.',
      },
    ],
  },
  {
    id: 'redes',
    title: 'Redes sociais',
    eyebrow: 'Quem acompanha',
    result: 'Quem ainda não pesquisou no Google também vê o trabalho e chama.',
    summary:
      'Instagram e Status do WhatsApp mostram o negócio para quem acompanha e deixam o caminho aberto para chamar.',
    why: 'O feed alcança quem já acompanha. A busca alcança quem tem um problema agora. Os dois juntos colocam o negócio na frente de mais gente.',
    card: 'Vídeos prontos para postar: R$ 397, R$ 997/mês e R$ 1.797/mês. O cuidado do dia a dia a gente combina no WhatsApp.',
    price: null,
    related: {
      href: '/videos',
      label: 'Ver os pacotes de vídeo',
      headline: 'Vídeos para o Instagram e o Status',
      detail:
        'Avulso R$ 397. Mensal Básico R$ 997/mês. Mensal Completo R$ 1.797/mês. Vídeos prontos para o Instagram e o Status, para o perfil não parar e o cliente chamar.',
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
        title: 'Orçamento sob medida',
        text: 'Quer alguém cuidando do perfil no dia a dia? Conta no WhatsApp o que você precisa e a gente monta junto. Os vídeos prontos continuam na página de vídeos: R$ 397, R$ 997/mês e R$ 1.797/mês.',
      },
    ],
  },
];

export const HOME_FAQ = [
  'O que entra nos R$ 600?',
  'Isso é uma mensalidade?',
  'E depois dos 12 meses?',
  'O site do meu negócio vai aparecer em primeiro no Google?',
  'Já tenho Instagram. Preciso do site mesmo assim?',
] as const;

export const FAQ = [
  {
    q: 'O que entra nos R$ 600?',
    a: 'Você recebe uma página do seu negócio, pronta para o celular, com até cinco seções. Nela ficam seus serviços, a localização e o botão de WhatsApp.\n\nOs textos saem do material que você enviar, e há uma rodada de ajustes. Também configuramos o básico do Perfil da Empresa no Google, quando o Google permite. O perfil é gratuito: o valor do pacote paga esse trabalho de deixar nome, horário e telefone prontos para quem pesquisa. Nas 12 parcelas, o total é R$ 600. À vista, são R$ 540 na contratação, com 10% de desconto. Esse desconto vale só nesta primeira contratação, não na renovação nem em outros serviços. A conferência final é do Google.\n\nO domínio .com.br entra se o nome estiver disponível, com hospedagem por 12 meses a partir da publicação. O domínio fica no seu nome. A página fica pronta para a pessoa ligar, chamar no WhatsApp e chegar até você.',
  },
  {
    q: 'Isso é uma mensalidade?',
    a: 'Não. A criação pode ser paga em 12 parcelas de R$ 50, no total de R$ 600, ou à vista por R$ 540 na contratação, com 10% de desconto. No parcelado, o primeiro pagamento é na contratação e os outros 11 são mensais. À vista, o valor integral é na contratação. O desconto vale só nesta primeira contratação do pacote, não na renovação nem em outros serviços.\n\nNão há mensalidade obrigatória de acompanhamento.',
  },
  {
    q: 'E depois dos 12 meses?',
    a: 'A renovação é opcional: R$ 180 por ano, só domínio e hospedagem. O desconto de 10% da primeira contratação não se aplica a esta renovação. Não inclui manutenção, e a renovação não é automática.\n\nSe você não renovar, a hospedagem não continua de graça. O domínio continua no seu nome. Se quiser levar o site, os acessos são entregues, sem taxa de resgate.',
  },
  {
    q: 'Já tenho Instagram. Preciso do site mesmo assim?',
    a: 'O Instagram pode continuar com o seu negócio. O site é a página com seus serviços, a localização e o WhatsApp, para quem chega pelo Google ou por um link que você divulga.\n\nOs dois se completam. Este pacote não substitui o seu Instagram.',
  },
  {
    q: 'O site do meu negócio vai aparecer em primeiro no Google?',
    a: 'Não. A primeira posição depende do Google e muda com o tempo.\n\nO que a gente faz é deixar o site pronto e configurar o básico do perfil, quando o Google permite. O perfil é gratuito. A conferência final é do Google. O objetivo é a pessoa da região ver o que você faz, ligar e chamar.',
  },
  {
    q: 'Vale esperar o movimento melhorar?',
    a: 'Planejar antes do movimento aumentar permite organizar serviços, informações e contato com calma. O primeiro passo é entender o que faz sentido para o momento e o orçamento do seu negócio. Se agora não for a hora, a conversa no WhatsApp serve para ver o caminho com calma.',
  },
  {
    q: 'Como começamos?',
    a: 'A conversa começa no WhatsApp. Para o site essencial, o valor é de 12 parcelas de R$ 50, no total de R$ 600, ou R$ 540 à vista na contratação, com 10% de desconto. No parcelado, o primeiro pagamento é na contratação e os outros 11 são mensais. À vista, o valor integral é na contratação. O desconto vale só nesta primeira contratação do pacote. O que ficar fora desse pacote a gente monta junto no WhatsApp, do jeito que faz sentido para o seu negócio.',
  },
  {
    q: 'A Sentinel vende um site ou o resultado no Google?',
    a: 'A Sentinel organiza o site, o Perfil da Empresa, o caminho até o WhatsApp e a presença nas redes. A intenção é a pessoa da região te encontrar, ligar e chamar. Isso não é garantia de primeira posição, nem de venda.',
  },
  {
    q: 'O que a Sentinel Systems faz?',
    a: 'Faz o marketing do pequeno negócio local: site, Perfil da Empresa no Google, WhatsApp e redes. O intuito é a pessoa te achar e ter um jeito simples de chamar. Também há planilhas prontas por R$ 9,90 cada, para a conta do dia a dia.',
  },
  {
    q: 'O que entra na gestão do Google?',
    a: 'Perfil da Empresa no Google, presença no Maps, avaliações, fotos e posts, SEO local e o site rápido que recebe quem clica e mostra como falar com o negócio.',
  },
  {
    q: 'Por que o perfil, o mapa e as avaliações importam para um negócio local?',
    a: 'Quem precisa de um comércio ou serviço por perto pode pesquisar no Google e abrir o mapa. Antes de ligar, a pessoa olha a distância, as fotos, o horário e o que outros clientes escreveram. Se isso não está cuidado, ela pode seguir para quem está mais fácil de entender.',
  },
  {
    q: 'Para que serve o site, se o objetivo é ser encontrado?',
    a: 'O site é a página que abre quando a pessoa quer saber mais. Ele precisa carregar rápido no celular e deixar claro o que a empresa faz, onde fica e como chamar. Sem isso, a visita que veio do Google se perde.',
  },
  {
    q: 'Vocês cuidam do WhatsApp e das redes?',
    a: 'O pacote do site deixa o botão de WhatsApp visível, junto com o serviço e o lugar. WhatsApp e redes sob medida a gente combina na conversa, para mais gente te chamar. Os vídeos para o Instagram e o Status têm pacotes próprios: R$ 397, R$ 997 por mês e R$ 1.797 por mês.',
  },
  {
    q: 'O domínio e o site ficam no meu nome?',
    a: 'Sim. O domínio é registrado no nome do cliente. A hospedagem incluída no pacote vale por 12 meses a partir da publicação e não continua de graça depois disso. Se um dia você quiser levar o site para outro lugar ou encerrar o trabalho, os acessos são entregues, sem taxa de resgate.',
  },
  {
    q: 'Como eu contrato?',
    a: 'A conversa começa pelo WhatsApp (22) 99843-4956 ou pelo e-mail sentinelsystemsai@gmail.com. Você conta como o cliente chega hoje. A Sentinel devolve o que faz sentido fazer, e o combinado segue por escrito antes de começar.',
  },
  {
    q: 'Qual é o prazo?',
    a: 'O prazo acompanha o que o seu negócio precisa. A gente entende o serviço, combina por escrito e começa. Cada comércio tem o seu caminho para aparecer no Google e receber contato.',
  },
  {
    q: 'Quanto custa?',
    a: 'O site essencial com a configuração básica do Perfil da Empresa no Google custa 12 parcelas de R$ 50, no total de R$ 600, ou R$ 540 à vista, com 10% de desconto. O desconto vale só nesta primeira contratação do pacote, não na renovação de R$ 180 nem em outros serviços. O que for além desse pacote a gente monta sob medida no WhatsApp.',
  },
  {
    q: 'Vocês atendem a minha cidade?',
    a: 'Atendemos todo o Brasil. O atendimento é online, pelo WhatsApp e pelo e-mail deste site.',
  },
  {
    q: 'Preciso entender de tecnologia?',
    a: 'Não. A conversa é sobre como o cliente procura, liga, chama e chega. A parte técnica fica com a Sentinel.',
  },
  {
    q: 'Preciso criar conta para falar com vocês?',
    a: 'Não. A conversa começa no WhatsApp ou no e-mail. Se for preciso acessar o Perfil da Empresa no Google, a gente combina com você, com a sua autorização.',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    title: 'Você conta como o cliente chega hoje',
    text: 'O que vende, em que cidade, se as pessoas ligam, chamam no WhatsApp ou aparecem na porta. Você fala do jeito do balcão. A parte técnica fica com a gente.',
  },
  {
    title: 'A gente organiza os meios',
    text: 'Site no celular, Perfil da Empresa, caminho até o WhatsApp e o que faz sentido nas redes. 12 parcelas de R$ 50, total de R$ 600, ou R$ 540 à vista, com 10% de desconto nesta primeira contratação. Depois de 12 meses, renovar é opcional: R$ 180 por ano, só domínio e hospedagem.',
  },
  {
    title: 'O contato continua no WhatsApp',
    text: 'Dúvida, ajuste e acompanhamento seguem no mesmo WhatsApp da Sentinel. Um número só, do começo até o cliente te chamar.',
  },
] as const;

export function canonicalUrl(path: string): string {
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

  if (page.path === '/' || page.path === '/sites' || page.path === '/videos' || page.path === '/ferramentas') {
    const offerings = [
      {
        key: 'sites',
        name: 'Site e Perfil da Empresa no Google',
        path: '/sites',
        description:
          'Criação de site para empresa e para pequeno negócio, com página no celular e configuração básica do Perfil da Empresa no Google. A criação custa 12 parcelas de R$ 50, no total de R$ 600, ou R$ 540 à vista. A renovação opcional, só domínio e hospedagem, é R$ 180 por ano.',
      },
      {
        key: 'videos',
        name: 'Vídeos com IA para Instagram e Status',
        path: '/videos',
        description:
          'Vídeo com IA para restaurante, pousada ou loja, feito a partir das fotos enviadas pelo WhatsApp, pronto para o Instagram e o Status.',
      },
      {
        key: 'ferramentas',
        name: 'Ferramentas Valor Hora Real e CotaCasa',
        path: '/ferramentas',
        description: ferramentasResumo(),
      },
    ];
    const visible = page.path === '/' ? offerings : offerings.filter((item) => item.path === page.path);
    for (const item of visible) {
      const service: Record<string, unknown> = {
        '@type': 'Service',
        '@id': `${canonicalUrl(item.path)}#servico`,
        name: item.name,
        description: item.description,
        url: canonicalUrl(item.path),
        areaServed: { '@type': 'Country', name: 'Brasil' },
        provider: { '@id': ORGANIZATION_ID },
      };
      if (page.path === '/videos' && item.key === 'videos') {
        service.offers = [
          {
            '@type': 'Offer',
            name: 'Avulso',
            price: '397',
            priceCurrency: 'BRL',
            description: '1 vídeo com 1 revisão, entrega em 5 dias úteis depois das fotos e do que você contar sobre o negócio.',
          },
          {
            '@type': 'Offer',
            name: 'Mensal Básico',
            price: '997',
            priceCurrency: 'BRL',
            description: '4 vídeos com 1 revisão cada.',
          },
          {
            '@type': 'Offer',
            name: 'Mensal Completo',
            price: '1797',
            priceCurrency: 'BRL',
            description: '8 vídeos com 1 revisão cada.',
          },
        ];
      }
      if (page.path === '/sites' && item.key === 'sites') {
        service.offers = [
          {
            '@type': 'Offer',
            name: 'Criação parcelada',
            price: '600',
            priceCurrency: 'BRL',
            description: '12 parcelas de R$ 50. No parcelado, o primeiro pagamento é na contratação e os outros 11 são mensais.',
          },
          {
            '@type': 'Offer',
            name: 'Criação à vista',
            price: '540',
            priceCurrency: 'BRL',
            description: 'R$ 540 à vista na contratação, com 10% de desconto nesta primeira contratação do pacote.',
          },
          {
            '@type': 'Offer',
            name: 'Renovação anual opcional',
            price: '180',
            priceCurrency: 'BRL',
            description: 'R$ 180 por ano, só domínio e hospedagem, depois de 12 meses. Não inclui manutenção, e a renovação não é automática.',
          },
        ];
      }
      if (page.path === '/ferramentas' && item.key === 'ferramentas') {
        service.offers = FERRAMENTAS.map((ferramenta) => ({
          '@type': 'Offer',
          name: ferramenta.name,
          price: ferramenta.priceAmount,
          priceCurrency: 'BRL',
          url: ferramenta.href,
          description: `${ferramenta.kind}. ${ferramenta.benefit}`,
        }));
      }
      graph.push(service);
    }
  }

  if (page.path === '/videos') {
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
  }

  if (page.path === '/servicos') {
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
          url: `${canonicalUrl('/servicos')}#${service.id}`,
          areaServed: { '@type': 'Country', name: 'Brasil' },
          provider: { '@id': ORGANIZATION_ID },
        },
      })),
    });
  }

  if (page.path === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
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

