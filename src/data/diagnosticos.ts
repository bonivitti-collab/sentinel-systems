export type DiagnosticoTipo = 'instagram' | 'sem_site' | 'site_fraco';

export interface DiagnosticoOportunidade {
  titulo: string;
  paragrafos: string[];
}

export interface Diagnostico {
  slug: string;
  nome: string;
  ctaDe?: string;
  cidade: string;
  tipo: DiagnosticoTipo;
  descricao: string;
  lead: string;
  notaConsulta: string;
  googleFatos: string[];
  instagramFatos?: string[];
  siteFatos?: string[];
  oportunidadesTitulo: string;
  oportunidades: DiagnosticoOportunidade[];
  paginaResolveTitulo: string;
  paginaResolveKicker: string;
  paginaResolve: string[];
}

export const DIAGNOSTICOS: Diagnostico[] = [
  {
    slug: 'don-fratelli-pizzaria',
    nome: 'Don Fratelli Pizzaria',
    cidade: 'Cabo Frio',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado da Don Fratelli Pizzaria, em Cabo Frio, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, aqui em Cabo Frio. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 10 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Don Fratelli Pizzaria Cabo Frio, em Vila Nova, Cabo Frio - RJ, CEP 28905-100.',
      'A nota é 4,3, com 622 avaliações.',
      'Há 125 fotos no perfil.',
      'O horário está visível. Nesta terça, 10 de novembro de 2026, o perfil marcava fechado, com abertura na quarta às 18h30.',
      'O telefone aparece no perfil.',
      'O campo de site aponta para o Instagram, e não para uma página própria.',
      'O campo de endereço aparece como “Zap (35 - 99758.8070 - Vila Nova, Cabo Frio - RJ, 28905-100, Brasil”, sem o nome da rua de um jeito fácil de entender.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@donfratellicabofrio</strong>.',
      'Na consulta, o perfil exibia cerca de 10 mil seguidores e 111 publicações.',
      'A descrição fala do rodízio de pizzas, massas e petiscos.',
      'O horário informado no perfil é todos os dias, exceto terça, das 18h30 às 23h.',
      'Há um link de WhatsApp no perfil.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza na busca “pizzaria em Cabo Frio”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente que está na cidade, inclusive turista, pesquisa no Google antes de escolher onde jantar. O Instagram de vocês está forte, mas ele não é o site que o Google mostra, e nem toda busca termina no feed.',
          'Uma página sua ajuda a apresentar o rodízio, o horário e um jeito de chamar quando a pessoa está comparando opções. Isso não promete o primeiro lugar no Google. Só deixa a informação no caminho de quem já está procurando.',
        ],
      },
      {
        titulo: 'Endereço, horário e o que vocês servem, fáceis de entender',
        paragrafos: [
          'O perfil no Google já tem horário, fotos e muitas avaliações. O que pode atrapalhar é o endereço: do jeito que está escrito, falta o nome da rua com clareza, e isso confunde quem vai chegar pela primeira vez, sobretudo na temporada.',
          'Uma página com endereço certo, mapa, horário e o que entra no rodízio tira essas dúvidas antes da pessoa precisar perguntar.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'No Instagram, o WhatsApp já está à mão. Quem encontra vocês no Google ainda não tem uma página com um botão simples para chamar. O telefone aparece no perfil, mas muita gente prefere um toque e já abrir a conversa.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter uma página no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração básica do perfil no Google, se o negócio for elegível: endereço mais claro e informações alinhadas com a página. O perfil do Google é gratuito. O valor paga esse trabalho. A verificação depende do Google, e ninguém garante posição no mapa.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'pousada-brisa-da-praia',
    nome: 'Pousada Brisa da Praia',
    cidade: 'Arraial do Cabo',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado da Pousada Brisa da Praia, em Arraial do Cabo, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de Arraial. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 10 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Pousada Brisa da Praia, na Rua Pastor Paulo Manhard, em Arraial do Cabo - RJ.',
      'A nota é 4,7, com 182 avaliações.',
      'O campo de site do perfil aponta para o Instagram, e não para uma página própria.',
      'O telefone aparece no perfil.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@pousadabrisadapraia</strong>.',
      'A descrição fala de localização, piscina, estacionamento e café da manhã.',
      'Há um link de WhatsApp no perfil.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando o turista pesquisa “pousada em Arraial do Cabo”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente pesquisa pousada no celular antes de reservar, inclusive quem vem de fora. O Instagram de vocês apresenta a casa, mas ele não é o site que o Google mostra, e nem toda busca termina no feed.',
          'Uma página sua ajuda a mostrar a piscina, o café, a localização e um jeito simples de chamar no WhatsApp quando a pessoa está comparando opções. Isso não promete o primeiro lugar no Google. Só deixa a informação no caminho de quem já está procurando.',
        ],
      },
      {
        titulo: 'Um endereço de reserva que não depende só do Instagram',
        paragrafos: [
          'Quem encontra vocês no Google hoje é levado ao Instagram. Para muita gente, sobretudo turista, isso pede um aplicativo a mais e nem sempre fica claro como reservar ou ver o que a pousada oferece.',
          'Uma página com fotos, o que está incluso e um botão de WhatsApp reduz essa volta e deixa o próximo passo à mão.',
        ],
      },
      {
        titulo: 'Informações da temporada, fáceis de conferir no celular',
        paragrafos: [
          'Piscina, estacionamento e café da manhã já aparecem na descrição do Instagram. Numa página, isso fica organizado junto com o mapa e o horário de atendimento, para quem está planejando a viagem não precisar caçar a informação em vários lugares.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter uma página no celular, com até cinco seções, mostrando a pousada, onde fica, o que está incluso e um botão para chamar no WhatsApp.',
      'Também entra a configuração básica do perfil no Google, se o negócio for elegível: site, endereço e informações alinhadas com a página. O perfil do Google é gratuito. O valor paga esse trabalho. A verificação depende do Google, e ninguém garante posição no mapa.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'recanto-flor-de-maracuja',
    nome: 'Recanto Flor de Maracujá',
    ctaDe: 'do Recanto Flor de Maracujá',
    cidade: 'Cabo Frio',
    tipo: 'site_fraco',
    descricao:
      'Diagnóstico personalizado do Recanto Flor de Maracujá, em Cabo Frio, com o que qualquer visitante vê no site hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, aqui em Cabo Frio. Com a temporada de verão chegando, abri o site de vocês no celular, do jeito que um hóspede faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 10 de novembro de 2026, no horário de Brasília, com o que aparece publicamente no site.',
    googleFatos: [
      'O Recanto Flor de Maracujá aparece como casas de temporada em Cabo Frio, com destaque para a proximidade da Praia do Forte.',
    ],
    siteFatos: [
      'O site público é <strong>temporadacabofriorj.wixsite.com/maracuja</strong>, num endereço da plataforma Wix, não num domínio próprio.',
      'Na página inicial ainda aparece o destaque “REVEILLON 2015”.',
      'A descrição do site está como “Casa para aluguem de temporada e excursão em Cabo Frio”, com a palavra “aluguem” escrita assim.',
      'No rodapé aparece “© 2013 criado por Vini Alkin Designer”.',
      'O telefone 22 99923-8161 aparece no site.',
      'O texto da home fala das casas, da Praia do Forte e de pontos turísticos da região.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Uma página da temporada atual, não de 2015',
        paragrafos: [
          'Com a temporada de verão chegando, quem pesquisa uma casa em Cabo Frio abre o site para decidir se vale chamar. Encontrar ainda o destaque de “REVEILLON 2015” e um rodapé de 2013 passa a impressão de página parada, mesmo que as casas estejam em ordem.',
          'Uma página atual, com a temporada de agora, tira essa dúvida na hora e ajuda a pessoa a seguir para o contato.',
        ],
      },
      {
        titulo: 'Texto claro e um endereço de site fácil de passar',
        paragrafos: [
          'A descrição pública ainda traz “aluguem”, e o endereço do site é um subdomínio do Wix, mais longo e mais difícil de lembrar ou de mandar no WhatsApp.',
          'Um domínio no nome de vocês, com texto revisado, transmite mais cuidado para quem está escolhendo onde ficar na temporada.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp bem visível no celular',
        paragrafos: [
          'O telefone já aparece no site. Muita gente, sobretudo quem vem passar uns dias, prefere um botão simples que já abre a conversa para perguntar datas e valores.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página nova resolve',
    paginaResolveTitulo: 'As casas continuam as mesmas. A página acompanha a temporada de agora.',
    paginaResolve: [
      'A ideia é uma página no celular, com até cinco seções, mostrando as casas, a localização, o que está incluso e um botão para chamar no WhatsApp, com informações da temporada atual.',
      'Também entra a configuração básica do perfil no Google, se o negócio for elegível, para o site e os dados ficarem alinhados. O perfil do Google é gratuito. O valor paga esse trabalho. A verificação depende do Google, e ninguém garante posição no mapa.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'una-burguer-unamar',
    nome: 'Una Burguer',
    cidade: 'Unamar',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado da Una Burguer, em Unamar, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, também de Unamar. Com a temporada de verão chegando, procurei vocês no Google do jeito que um cliente novo faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 10 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como Una Burguer, na Avenida Independência, em Unamar, Cabo Frio - RJ.',
      'A nota é 4,4, com 1.176 avaliações.',
      'O horário está visível: todos os dias, das 18h à 1h.',
      'O telefone do perfil é um número de celular, e o campo de cardápio aponta para o WhatsApp.',
      'O campo de site aponta para a página no Facebook, e não para uma página própria.',
      'O campo de endereço aparece como “Avenida Independência, 9192-9296 22 26306730, Cabo Frio, RJ”, misturando um intervalo de numeração e um telefone no meio do endereço.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza na busca “hamburgueria em Unamar”',
        paragrafos: [
          'Com a temporada de verão chegando, quem está na região pesquisa no celular onde jantar. Vocês já têm muitas avaliações no Google, o que é difícil de conseguir. O que falta é uma página sua, com o que vocês servem e um jeito simples de chamar.',
          'O Facebook ajuda quem já conhece. Quem chega pelo Google, sobretudo turista, nem sempre quer passar por lá para entender o cardápio ou o endereço.',
        ],
      },
      {
        titulo: 'Endereço fácil de entender para quem vai chegar',
        paragrafos: [
          'Do jeito que o endereço aparece no Google, a numeração fica num intervalo e um telefone entra no meio do texto. Quem vem pela primeira vez, de carro ou a pé, pode se atrapalhar.',
          'Uma página com endereço certo, mapa e horário tira essa dúvida antes da pessoa precisar perguntar.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O WhatsApp já é o caminho do cardápio no perfil. Numa página sua, esse botão fica à vista, junto com o que vocês oferecem, para a pessoa chamar sem caçar o número.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O movimento de vocês continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia é uma página no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração básica do perfil no Google, se o negócio for elegível: endereço mais claro e o campo de site apontando para a página. O perfil do Google é gratuito. O valor paga esse trabalho. A verificação depende do Google, e ninguém garante posição no mapa.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'mingolo-pizzaria-esfiharia',
    nome: 'Mingolo Pizzaria e Esfiharia',
    cidade: 'Cabo Frio',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado da Mingolo Pizzaria e Esfiharia, em Cabo Frio, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, aqui em Cabo Frio. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 10 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Mingolo Pizzaria e Esfiharia, na Rua Cel. Ferreira, 397, em Cabo Frio - RJ, CEP 28915-370.',
      'A nota é 4,6 no Google, com mais de 190 avaliações.',
      'O horário está visível: de quarta a domingo, das 17h às 23h, fechado na segunda e na terça.',
      'O telefone aparece no perfil.',
      'Não aparece uma página própria no campo de site; o que se encontra além do Google é o Instagram e o Facebook.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@mingolopizzaseesfihas</strong>.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza na busca “pizzaria em Cabo Frio”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente pesquisa no Google onde jantar, inclusive quem veio passar uns dias. Vocês já têm uma nota alta e muitas avaliações. O Instagram apresenta o que vocês fazem, mas ele não é o site que o Google mostra, e nem toda busca termina no feed.',
          'Uma página sua ajuda a apresentar as pizzas e as esfihas, o horário e um jeito de chamar quando a pessoa está comparando opções. Isso não promete o primeiro lugar no Google. Só deixa a informação no caminho de quem já está procurando.',
        ],
      },
      {
        titulo: 'Horário e endereço, fáceis de achar no celular',
        paragrafos: [
          'O perfil no Google já tem endereço e horário, inclusive os dias em que a casa fecha. Numa página, isso fica junto com o mapa e o que vocês servem, para o cliente novo não precisar pular de um aplicativo para outro.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O telefone já aparece no perfil. Muita gente prefere um toque e já abrir a conversa, sobretudo para pedir ou tirar uma dúvida rápido na hora do jantar.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter uma página no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração básica do perfil no Google, se o negócio for elegível, para o site e as informações ficarem alinhados com a página. O perfil do Google é gratuito. O valor paga esse trabalho. A verificação depende do Google, e ninguém garante posição no mapa.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
];

export function diagnosticoBySlug(slug: string): Diagnostico | undefined {
  return DIAGNOSTICOS.find((item) => item.slug === slug);
}
