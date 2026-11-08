export const SITE = {
  name: 'Sentinel Systems',
  url: 'https://sentinelsystems.com.br',
  phoneDisplay: '(22) 99972-6069',
  phoneWa: '5522999726069',
  email: 'sentinelsystemsai@gmail.com',
  whatsappText:
    'Olá! Vim pelo site da Sentinel Systems. Quero conversar sobre o meu negócio e pedir uma proposta.',
} as const;

export function whatsappHref(text: string = SITE.whatsappText): string {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;
}

export type PageKey = 'home' | 'sobre' | 'servicos' | 'faq' | 'contato';

export interface PageMeta {
  key: PageKey;
  path: string;
  label: string;
  title: string;
  description: string;
}

export const PAGES: Record<PageKey, PageMeta> = {
  home: {
    key: 'home',
    path: '/',
    label: 'Início',
    title: 'Site e Google Meu Negócio para o negócio local | Sentinel Systems',
    description:
      'Site claro e presença cuidada no Google para quem procura um serviço na região. A Sentinel atende negócios locais no Brasil. A proposta é combinada no WhatsApp.',
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
      'Fale com a Sentinel Systems sobre criação de site e aparecer no Google. WhatsApp (22) 99972-6069 e e-mail sentinelsystemsai@gmail.com. Atendimento no Brasil.',
  },
};

export const NAV_LINKS = (Object.values(PAGES) as PageMeta[]).map((page) => ({
  href: page.path,
  label: page.label,
}));

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
  'Já tenho Instagram. Por que preciso de um site?',
  'O site vai aparecer em primeiro no Google?',
  'Vale esperar o movimento melhorar?',
  'Como começamos?',
] as const;

export const FAQ = [
  {
    q: 'Já tenho Instagram. Por que preciso de um site?',
    a: 'O Instagram funciona e pode gerar contato. No perfil profissional dá para mostrar categoria, contato, endereço e um caminho para o WhatsApp, além do trabalho no feed. Seguidores e curtidas não são clientes, e postar todo dia não garante alcance nem um pedido de orçamento: o que aparece depende da plataforma. Outra pessoa pode procurar o serviço no Google e no Maps. O site organiza a decisão, mas também precisa ser divulgado e atualizado. Instagram, Google, Maps, site e WhatsApp se completam.',
  },
  {
    q: 'O site vai aparecer em primeiro no Google?',
    a: 'Não. O site não cria o perfil no Google nem no Maps, e nenhum dos dois garante a primeira posição ou aparecer ao lado de quem pesquisa. O perfil é outra superfície: precisa ser configurado e atualizado, e nem toda empresa entra do mesmo jeito. A Sentinel organiza site e perfil para quem procura na região. A posição muda com o tempo.',
  },
  {
    q: 'Vale esperar o movimento melhorar?',
    a: 'Planejar antes do movimento aumentar permite organizar serviços, informações e contato com calma. O primeiro passo é entender o que faz sentido para o momento e o orçamento do seu negócio. A proposta não empurra a execução se não couber agora.',
  },
  {
    q: 'Como começamos?',
    a: 'A conversa começa no WhatsApp. Você conta o que o negócio faz, como as pessoas chegam hoje e o que cabe no orçamento. A Sentinel entende a necessidade antes de propor o trabalho. A proposta vem por escrito, com preço e prazo. Se não fizer sentido, nada começa.',
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
    a: 'Sim. O domínio é registrado no nome do cliente. Se um dia você quiser levar o site para outro lugar ou encerrar o trabalho, os acessos são entregues, sem taxa de resgate.',
  },
  {
    q: 'Como eu contrato?',
    a: 'A conversa começa pelo WhatsApp (22) 99972-6069 ou pelo e-mail sentinelsystemsai@gmail.com. Você conta como o cliente chega hoje. A Sentinel devolve o que faz sentido fazer, e o combinado segue por escrito antes de começar.',
  },
  {
    q: 'Qual é o prazo?',
    a: 'Não publicamos um prazo único, porque cada negócio pede um escopo diferente. O prazo é combinado por escrito na contratação, depois de entender o que precisa ser feito.',
  },
  {
    q: 'Quanto custa?',
    a: 'Não há tabela de preços dos serviços neste site. O valor é apresentado na proposta, depois de entender o negócio.',
  },
  {
    q: 'Vocês atendem a minha cidade?',
    a: 'O atendimento é digital, à distância, para negócios no Brasil. A conversa e o acompanhamento usam o WhatsApp e o e-mail que já estão neste site.',
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

export function pageByPath(path: string): PageMeta | undefined {
  return (Object.values(PAGES) as PageMeta[]).find((page) => page.path === path);
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
    telephone: '+55-22-99972-6069',
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

export function jsonLdFor(path: string): Record<string, unknown> {
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

