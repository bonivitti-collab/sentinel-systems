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

export type PageKey = 'home' | 'sobre' | 'servicos' | 'faq' | 'contato';

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
    title: 'Site essencial e perfil no Google para pequenos negócios | Sentinel',
    description:
      'Página no celular e configuração básica do Perfil da Empresa no Google para pequenos negócios. Atendemos todo o Brasil. Atendimento online pelo WhatsApp.',
  },
  sobre: {
    key: 'sobre',
    path: '/sobre',
    label: 'Sobre',
    title: 'Sobre a Sentinel | Criação de site no Brasil',
    description:
      'A Sentinel Systems cria produtos digitais e faz criação de site para pequenos negócios no Brasil, com a missão de fazer o cliente aparecer no Google.',
  },
  servicos: {
    key: 'servicos',
    path: '/servicos',
    label: 'Serviços',
    title: 'Criação de site, Google Meu Negócio e segurança | Sentinel',
    description:
      'Criação de site que converte, Google Meu Negócio, Maps, avaliações, fotos, posts, SEO local e blindagem digital para aparecer no Google. Serviço no Brasil.',
  },
  faq: {
    key: 'faq',
    path: '/faq',
    label: 'FAQ',
    title: 'Perguntas sobre criação de site e Google Meu Negócio',
    description:
      'Dúvidas sobre criação de site, Perfil da Empresa no Google, prazo, contratação e segurança. O preço do serviço é combinado na conversa, não numa tabela inventada.',
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

export const FERRAMENTAS_LINK = { href: '/#ferramentas', label: 'Ferramentas' } as const;

export const MENU_LINKS = [
  NAV_LINKS[0],
  NAV_LINKS[1],
  NAV_LINKS[2],
  FERRAMENTAS_LINK,
  NAV_LINKS[3],
  NAV_LINKS[4],
  GUIAS_LINK,
];

export const SERVICES = [
  {
    id: 'sites',
    title: 'Criação de sites rápidos',
    eyebrow: 'O meio',
    summary:
      'A página que abre no celular quando alguém já te achou e quer saber se liga, chama no WhatsApp ou vai até você.',
    why: 'Ser encontrado não basta se o clique seguinte se perde. No celular, a página precisa abrir rápido e deixar óbvio o que a empresa faz, onde fica e como falar com ela. Um site lento ou confuso devolve a pessoa para a busca.',
    points: [
      {
        title: 'Abre rápido no celular',
        text: 'A maior parte de quem pesquisa um negócio local está no telefone. A página tem de aparecer logo, sem a pessoa desistir enquanto espera.',
      },
      {
        title: 'Diz o que a empresa faz',
        text: 'Serviço, cidade, horário e diferenciais em linguagem de cliente, para a pessoa reconhecer que encontrou o lugar certo.',
      },
      {
        title: 'Converte a visita em contato',
        text: 'Telefone, WhatsApp e endereço ficam visíveis. O site existe para a pessoa dar o próximo passo, não para enfeitar.',
      },
    ],
  },
  {
    id: 'google',
    title: 'Gestão do Google',
    eyebrow: 'Onde o cliente procura',
    summary:
      'Google Meu Negócio (Perfil da Empresa), Maps, avaliações, fotos, posts, SEO local e o site que recebe quem clica.',
    why: 'Negócio local é escolhido na busca e no mapa. A pessoa olha o nome, a distância, as fotos, as avaliações e se dá para chamar agora. Se isso está vazio, desatualizado ou diferente do site, ela segue para o próximo resultado.',
    points: [
      {
        title: 'Perfil da Empresa no Google',
        text: 'Nome, categoria, endereço, horário, telefone e WhatsApp do jeito que o cliente procura. É a ficha que aparece antes mesmo de existir um clique no site.',
      },
      {
        title: 'Google Maps',
        text: 'Quem busca “perto de mim” decide no mapa. O ponto certo, a área atendida e o caminho até a porta fazem a pessoa sair de casa ou desistir.',
      },
      {
        title: 'Avaliações',
        text: 'A nota e os comentários são a prova social que o cliente lê antes de ligar. A gestão inclui acompanhar o que está público e responder com educação.',
      },
      {
        title: 'Fotos e posts',
        text: 'Foto de fachada, de produto e de serviço mostra que o negócio existe de verdade. Posts mantêm o perfil vivo com novidade, horário e o que está disponível.',
      },
      {
        title: 'SEO local',
        text: 'Organizar nome, cidade, serviço e texto para a busca da região, no perfil e no site, para a empresa aparecer quando alguém pesquisa o que ela faz por perto.',
      },
      {
        title: 'Site rápido que converte',
        text: 'Quando a pessoa sai do perfil e abre o site, a página confirma o que o Google mostrou e oferece um caminho direto para ligar, chamar ou ir até o endereço.',
      },
    ],
  },
  {
    id: 'seguranca',
    title: 'Segurança e blindagem digital',
    eyebrow: 'Para a presença não cair',
    summary:
      'Proteção do site, das contas, do domínio, cópias de segurança, SSL e práticas simples de acesso.',
    why: 'De nada adianta ser encontrado se o site sai do ar, o domínio vence no nome de outra pessoa ou a conta do Google é invadida. A blindagem existe para o cliente continuar achando a empresa amanhã.',
    points: [
      {
        title: 'Proteção do site',
        text: 'Atualização, acesso restrito e cuidado com o que fica público, para reduzir invasão e página derrubada.',
      },
      {
        title: 'Contas',
        text: 'E-mail, hospedagem, Perfil da Empresa e domínio com dono identificado e verificação em duas etapas, para ninguém recuperar a senha no seu lugar.',
      },
      {
        title: 'Domínio',
        text: 'O domínio fica no nome do cliente, com renovação acompanhada. Assim o endereço da empresa não se perde nem fica preso a um terceiro.',
      },
      {
        title: 'Backups',
        text: 'Cópias do site para voltar atrás se algo quebrar, for apagado ou for alterado sem querer.',
      },
      {
        title: 'SSL',
        text: 'Cadeado de segurança no endereço. O navegador deixa de avisar que a página é insegura, e o cliente não desiste na hora de chamar.',
      },
      {
        title: 'Boas práticas',
        text: 'Senha própria, quem tem acesso e o que fazer se um celular ou e-mail for perdido. Linguagem simples, sem manual de informática.',
      },
    ],
  },
] as const;

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
    a: 'Você recebe uma página do seu negócio, pronta para o celular, com até cinco seções. Nela ficam seus serviços, a localização e o botão de WhatsApp.\n\nOs textos saem do material que você enviar, e há uma rodada de ajustes. Também configuramos o básico do Perfil da Empresa no Google, se o seu negócio for elegível. O perfil é gratuito: o valor do pacote paga esse trabalho. Nas 12 parcelas, o total é R$ 600. À vista, são R$ 540 na contratação, com 10% de desconto. Esse desconto vale só nesta primeira contratação, não na renovação nem em outros serviços. A verificação depende do Google.\n\nO domínio .com.br entra se o nome estiver disponível, com hospedagem por 12 meses a partir da publicação. O domínio fica no seu nome. Não prometemos posição no Google, nem que seus clientes encontrem você ou comprem.',
  },
  {
    q: 'Isso é uma mensalidade?',
    a: 'Não. A criação pode ser paga em 12 parcelas de R$ 50, no total de R$ 600, ou à vista por R$ 540 na contratação, com 10% de desconto. No parcelado, o primeiro pagamento é na contratação e os outros 11 são mensais. À vista, o valor integral é na contratação. O desconto vale só nesta primeira contratação do pacote, não na renovação nem em outros serviços.\n\nNão há mensalidade obrigatória de acompanhamento.',
  },
  {
    q: 'E depois dos 12 meses?',
    a: 'A renovação é opcional: R$ 180 por ano, só domínio e hospedagem. O desconto de 10% da primeira contratação não se aplica a esta renovação. Não inclui manutenção e não renova sozinha.\n\nSe você não renovar, a hospedagem não continua de graça. O domínio continua no seu nome. Se quiser levar o site, os acessos são entregues, sem taxa de resgate.',
  },
  {
    q: 'Já tenho Instagram. Preciso do site mesmo assim?',
    a: 'O Instagram pode continuar com o seu negócio. O site é a página com seus serviços, a localização e o WhatsApp, para quem chega pelo Google ou por um link que você divulga.\n\nOs dois se completam. Este pacote não substitui o seu Instagram.',
  },
  {
    q: 'O site do meu negócio vai aparecer em primeiro no Google?',
    a: 'Não. O site não cria o perfil no Google nem no Maps, e não garante a primeira posição nem que seus clientes vejam você ao lado no mapa.\n\nO perfil é gratuito e é outra página. A configuração básica entra se o seu negócio for elegível. A verificação depende do Google, e a posição muda com o tempo.',
  },
  {
    q: 'Vale esperar o movimento melhorar?',
    a: 'Planejar antes do movimento aumentar permite organizar serviços, informações e contato com calma. O primeiro passo é entender o que faz sentido para o momento e o orçamento do seu negócio. A proposta não empurra a execução se não couber agora.',
  },
  {
    q: 'Como começamos?',
    a: 'A conversa começa no WhatsApp. Para o site essencial, o valor publicado é de 12 parcelas de R$ 50, no total de R$ 600, ou R$ 540 à vista na contratação, com 10% de desconto. No parcelado, o primeiro pagamento é na contratação e os outros 11 são mensais. À vista, o valor integral é na contratação. O desconto vale só nesta primeira contratação do pacote. O que ficar fora desse pacote é conversado à parte, sem preço avulso nesta página. Se não fizer sentido, nada começa.',
  },
  {
    q: 'A Sentinel vende um site ou o resultado no Google?',
    a: 'A Sentinel faz o site, o cuidado do Perfil da Empresa e a segurança dessa presença. A intenção é a pessoa da região te conhecer e ter um jeito simples de chamar. Isso não é garantia de primeira posição, nem de venda.',
  },
  {
    q: 'O que a Sentinel Systems faz?',
    a: 'Faz sites e cuida do Perfil da Empresa no Google para pequenos negócios locais. O intuito é deixar a empresa fácil de entender para quem procura um serviço na região.',
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
    q: 'O que é segurança e blindagem digital?',
    a: 'É proteger o que faz a empresa continuar encontrável: o site, as contas, o domínio, as cópias de segurança e o cadeado SSL, com práticas simples de acesso. Se a conta cai ou o domínio se perde, o cliente que ia te achar não chega.',
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
    a: 'Não publicamos um prazo único, porque cada negócio pede um escopo diferente. O prazo é combinado por escrito na contratação, depois de entender o que precisa ser feito.',
  },
  {
    q: 'Quanto custa?',
    a: 'O site essencial com a configuração básica do Perfil da Empresa no Google custa 12 parcelas de R$ 50, no total de R$ 600, ou R$ 540 à vista, com 10% de desconto. O desconto vale só nesta primeira contratação do pacote, não na renovação de R$ 180 nem em outros serviços. Outras soluções ficam sob consulta e não têm preço publicado aqui.',
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
    q: 'Este site pede login do Google?',
    a: 'Não. Não há login do Google aqui. Se no serviço for preciso acessar o Perfil da Empresa ou outra conta, isso é combinado direto com você, fora deste site.',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    title: 'Você conta como o cliente chega hoje',
    text: 'O que vende, em que cidade, se as pessoas ligam, chamam no WhatsApp ou aparecem na porta. Sem briefing técnico.',
  },
  {
    title: 'A gente organiza os meios',
    text: 'Perfil da Empresa, mapa, avaliações, fotos, posts, SEO local, site rápido e a proteção do domínio, das contas e do site.',
  },
  {
    title: 'O contato continua no WhatsApp',
    text: 'Dúvida, ajuste e acompanhamento seguem no mesmo WhatsApp da Sentinel. Você não precisa abrir chamado em outro sistema.',
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

