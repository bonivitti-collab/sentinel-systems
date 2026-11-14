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
          'Uma página sua ajuda a apresentar o rodízio, o horário e um jeito de chamar quando a pessoa está comparando opções. Assim, quem já está procurando acha tudo e chama na hora.',
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
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
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
          'Uma página sua ajuda a mostrar a piscina, o café, a localização e um jeito simples de chamar no WhatsApp quando a pessoa está comparando opções. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
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
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a pousada, onde fica, o que está incluso e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
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
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando as casas, a localização, o que está incluso e um botão para chamar no WhatsApp, com informações da temporada atual.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
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
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
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
          'Uma página sua ajuda a apresentar as pizzas e as esfihas, o horário e um jeito de chamar quando a pessoa está comparando opções. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
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
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'odontoeasy-nova-friburgo',
    nome: 'Odontoeasy',
    ctaDe: 'da Odontoeasy',
    cidade: 'Nova Friburgo',
    tipo: 'site_fraco',
    descricao:
      'Diagnóstico personalizado da Odontoeasy, em Nova Friburgo, com o que aparece no Google e no site hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems. Olhei só o que qualquer pessoa vê hoje no Google e no site de vocês, do jeito que um paciente novo faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 10 de novembro de 2026, no horário de Brasília, com informações públicas do Google e dos sites.',
    googleFatos: [
      'O perfil da unidade do Cadima Shopping existe como OdontoEasy | Dentista | Implante Dentário | Centro | Nova Friburgo - RJ, na Rua Moisés Amélio, 17, Loja 506, último andar, ao lado do cinema, CEP 28613-210.',
      'A nota é 5,0, com 253 avaliações.',
      'Há 73 fotos no perfil.',
      'O horário está visível: de segunda a sexta, das 9h às 19h; sábado, das 9h às 14h; fechado no domingo.',
      'O telefone do perfil é (22) 99911-9504.',
      'O campo de site aponta para odontoeasyclinica.com.br, e não para odontoeasy.com.',
    ],
    siteFatos: [
      'Além da página apontada pelo Google, existe o site <strong>odontoeasy.com</strong>, com as três unidades: Cadima Shopping, Centro (Praça Getúlio Vargas, 193) e Banquete (Estrada do Rosário).',
      'A página que o Google abre, <strong>odontoeasyclinica.com.br</strong>, é uma página de captura com destaque para implantes e um formulário de nome e WhatsApp.',
      'Na página de agendar avaliação do odontoeasy.com, o número (22) 99898-9504 aparece escrito certo, mas o link do WhatsApp vai para um número sem o DDD 22.',
      'O horário de sábado da unidade do Cadima aparece como 14h na página inicial e no Fale Conosco, e como 15h na página /home/.',
      'No odontoeasy.com há botão de WhatsApp, formulário para agendar e links para o Instagram <strong>@odontoeasyfriburgo</strong> e para a página no Facebook.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Um só caminho quando a pessoa pesquisa “dentista em Nova Friburgo”',
        paragrafos: [
          'Vocês já têm uma nota alta e muitas avaliações no Google, o que é difícil de conseguir. O que pode atrapalhar é o destino: quem encontra o perfil é levado para odontoeasyclinica.com.br, enquanto o site com as três unidades, os tratamentos e o agendamento é o odontoeasy.com.',
          'Uma página clara, apontada no Google, deixa endereço, horário, as unidades e um jeito de agendar no mesmo lugar. Assim, o paciente novo encontra o endereço certo e um jeito de agendar, sem bater em duas portas diferentes.',
        ],
      },
      {
        titulo: 'O WhatsApp de agendar precisa abrir certo, de um toque só',
        paragrafos: [
          'Na página de agendar do odontoeasy.com, o número (22) 99898-9504 está escrito com o 22, mas o link do WhatsApp abre sem o DDD. Quem toca para marcar pode cair num número incompleto e desistir.',
          'Um botão por unidade, com o número certo, deixa o próximo passo fácil para quem já decidiu chamar.',
        ],
      },
      {
        titulo: 'Horário e unidades, fáceis de conferir no celular',
        paragrafos: [
          'As três unidades e os horários já estão no site. O que pode gerar dúvida é o sábado da unidade do Cadima: em uma página aparece até 14h e, em outra, até 15h.',
          'Numa página organizada, cada unidade fica com o endereço, o horário certo e o WhatsApp correspondente, para a pessoa escolher onde ir sem precisar perguntar o básico.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página nova resolve',
    paginaResolveTitulo: 'O cuidado de vocês continua. O caminho até a agenda fica mais claro.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando os tratamentos, as três unidades, o horário e um botão de WhatsApp que já abre a conversa certa.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'club-fashion-multimarcas-sao-pedro-da-aldeia',
    nome: 'Club Fashion Multimarcas',
    ctaDe: 'da Club Fashion',
    cidade: 'São Pedro da Aldeia',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado da Club Fashion Multimarcas, em São Pedro da Aldeia, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de São Pedro. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Club Fashion Multimarcas, na Av. São Pedro, em São Pedro da Aldeia - RJ.',
      'A nota é 4,6, com 45 avaliações.',
      'O horário está visível: de segunda a sexta, das 9h às 19h; sábado, das 9h às 18h; fechado no domingo.',
      'O telefone do perfil é um número de celular.',
      'O campo de site aponta para o Instagram, e não para uma página própria.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@clubfashionmulti</strong>.',
      'Na consulta, o perfil exibia cerca de 42 mil seguidores e mais de 5.800 publicações.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “loja de roupa em São Pedro da Aldeia”',
        paragrafos: [
          'Com a temporada de verão chegando, a cidade recebe muita gente de fora, e boa parte pesquisa no Google antes de sair de casa. O Instagram de vocês é forte, mas ele não é o site que o Google mostra, e nem toda busca termina no feed.',
          'Uma página de vocês ajuda a mostrar as marcas, o endereço, o horário e um jeito simples de chamar. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Novidades da temporada sem depender só do feed',
        paragrafos: [
          'Com milhares de publicações, o que chegou de novo pode ficar escondido no meio do feed para quem chega agora. Uma página com as coleções do verão e as marcas da loja deixa isso à vista em poucos segundos.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O telefone já aparece no perfil. Muita gente prefere um toque que já abre a conversa para perguntar tamanho, cor ou se a peça ainda está na loja. Numa página, esse botão fica sempre à vista.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a loja, as marcas, onde fica, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'oticas-agatha-sao-pedro-da-aldeia',
    nome: 'Óticas Agatha',
    ctaDe: 'da Óticas Agatha',
    cidade: 'São Pedro da Aldeia',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado da Óticas Agatha, em São Pedro da Aldeia, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de São Pedro. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Óticas Agatha, em São Pedro da Aldeia - RJ.',
      'A nota é 5,0, com 43 avaliações.',
      'O horário está visível: de segunda a sexta, das 9h às 17h30; sábado, das 9h às 12h30; fechado no domingo.',
      'O telefone do perfil é um número de celular.',
      'O campo de site aponta para o Instagram, e não para uma página própria.',
      'Na listagem pública consultada, o endereço aparece só como “São Pedro da Aldeia, RJ”, sem o nome da rua.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@oticasagatha</strong>.',
      'Na consulta, o perfil exibia cerca de 2.700 seguidores e 92 publicações.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “ótica em São Pedro da Aldeia”',
        paragrafos: [
          'No verão, muita gente que está na região precisa de óculos de sol, de um ajuste ou de um conserto rápido, e pesquisa no celular. A nota máxima de vocês é difícil de conseguir. O que falta é uma página própria no lugar do link do Instagram.',
          'Uma página ajuda a mostrar os serviços, as armações e um jeito simples de chamar. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Endereço fácil de encontrar para quem não conhece a cidade',
        paragrafos: [
          'Na listagem consultada, o endereço aparece só com o nome da cidade. Para quem está de passagem, isso obriga a perguntar onde fica antes de ir.',
          'Uma página com rua, ponto de referência, mapa e horário tira essa dúvida na hora.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O telefone já aparece no perfil. Muita gente prefere um toque que já abre a conversa para perguntar preço, prazo ou se dá para passar hoje. Numa página, esse botão fica sempre à vista.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando os serviços, onde fica, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'paparico-pet-shop-cabo-frio',
    nome: 'Paparico Pet Shop',
    ctaDe: 'do Paparico Pet Shop',
    cidade: 'Cabo Frio',
    tipo: 'site_fraco',
    descricao:
      'Diagnóstico personalizado do Paparico Pet Shop, em Cabo Frio, com o que aparece no Google e no link de site hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui em Cabo Frio. Com a temporada de verão chegando, procurei vocês no Google do jeito que um cliente novo faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do link de site do perfil.',
    googleFatos: [
      'O perfil existe como Paparico Pet Shop, na R. Antônio Feliciano de Almeida, em Cabo Frio - RJ.',
      'A nota é 4,7, com 65 avaliações.',
      'O horário está visível: fechado na segunda; de terça a sexta, das 9h às 18h; sábado, das 9h às 13h; fechado no domingo.',
      'O telefone do perfil é um número de celular.',
    ],
    siteFatos: [
      'O campo de site do perfil traz um link curto (<strong>goo.gl</strong>) que leva a um endereço do Google Sites.',
      'Ao abrir esse link sem estar logado, aparece uma tela de login do Google, e não o site do pet shop.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'O link de site precisa abrir o site',
        paragrafos: [
          'Quem toca em “Site” no perfil de vocês cai numa tela pedindo login do Google. A maioria das pessoas desiste ali, sem ver serviços, preços ou como agendar.',
          'Uma página aberta, que carrega direto no celular, resolve isso e aproveita as boas avaliações que vocês já têm.',
        ],
      },
      {
        titulo: 'Banho e tosa fáceis de agendar na temporada',
        paragrafos: [
          'No verão, muita família vem para Cabo Frio com o cachorro e procura banho e tosa no celular. Uma página com os serviços, o horário e um botão de WhatsApp deixa o agendamento a um toque.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Horário e endereço claros para quem é de fora',
        paragrafos: [
          'O horário já está no perfil, inclusive o fechamento na segunda. Numa página, isso fica junto com o mapa e o que vocês oferecem, para a pessoa não precisar perguntar o básico.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página nova resolve',
    paginaResolveTitulo: 'O cuidado com os pets continua. O caminho até a agenda fica mais claro.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando os serviços, onde fica, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'caramelo-racoes-pet-shop-cabo-frio',
    nome: 'Caramelo Rações e Pet Shop',
    ctaDe: 'da Caramelo Rações e Pet Shop',
    cidade: 'Cabo Frio',
    tipo: 'site_fraco',
    descricao:
      'Diagnóstico personalizado da Caramelo Rações e Pet Shop, em Cabo Frio, com o que aparece no Google e no link de site hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui em Cabo Frio. Com a temporada de verão chegando, procurei vocês no Google do jeito que um cliente novo faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do link de site do perfil.',
    googleFatos: [
      'O perfil existe como CARAMELO Rações e Pet Shop, na Av. América Central, em Cabo Frio - RJ.',
      'A nota é 4,9, com 35 avaliações.',
      'O horário está visível: de segunda a sexta, das 9h às 19h; sábado, das 9h às 16h; fechado no domingo.',
      'O telefone do perfil é um número de celular.',
    ],
    siteFatos: [
      'O campo de site do perfil aponta para <strong>caramelo-racoes-e-pet-shop.negocio.site</strong>.',
      'Ao abrir esse endereço, aparece uma página de erro 404 (página não encontrada).',
      'Os sites com final .negocio.site eram criados pelo próprio Perfil da Empresa no Google, e o Google desativou esse tipo de site em 2024.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Trocar um link que hoje dá erro',
        paragrafos: [
          'Quem toca em “Site” no perfil de vocês cai numa página de erro. Para quem ainda não conhece a loja, isso pode passar a impressão de que o negócio parou, mesmo com nota 4,9.',
          'Uma página que abre de verdade no celular, com o que vocês vendem e como pedir, resolve isso.',
        ],
      },
      {
        titulo: 'Pedido de ração e entrega a um toque',
        paragrafos: [
          'Na temporada, chega muita gente com pet que esqueceu a ração ou precisa de um acessório e pesquisa no celular. Uma página com as marcas, a entrega e um botão de WhatsApp deixa o pedido fácil.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Horário e endereço claros para quem é de fora',
        paragrafos: [
          'O horário já está no perfil. Numa página, ele fica junto com o mapa e o WhatsApp, para a pessoa não precisar perguntar o básico.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página nova resolve',
    paginaResolveTitulo: 'O bom atendimento continua. O link do Google volta a levar a algum lugar.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês vendem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'stalefish-board-shop-saquarema',
    nome: 'StaleFish Board Shop',
    ctaDe: 'da StaleFish Board Shop',
    cidade: 'Saquarema',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado da StaleFish Board Shop, em Saquarema, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, procurei vocês no Google do jeito que um cliente novo faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como StaleFish Board Shop, na Av. Oceânica, em Itaúna, Saquarema - RJ.',
      'A nota é 4,8, com 41 avaliações.',
      'O horário está visível: fechado na segunda; de terça a sábado, das 10h às 17h; domingo, das 10h às 16h.',
      'O telefone do perfil é um número de celular.',
      'O único link do perfil é a página no Facebook. Não há site nem Instagram no perfil.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “surf shop em Itaúna”',
        paragrafos: [
          'No verão, Itaúna recebe muito surfista e turista que chega sem algum equipamento e pesquisa no celular onde comprar. Vocês já têm nota alta, o que é difícil de conseguir. O que falta é uma página que mostre o que tem na loja.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Mostrar o que vocês vendem sem depender do Facebook',
        paragrafos: [
          'Hoje o perfil leva só ao Facebook, que nem todo mundo usa. Uma página com pranchas, acessórios e o que mais vocês trabalham ajuda a pessoa a decidir ir até a loja.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para perguntar antes de ir',
        paragrafos: [
          'O telefone já está no perfil. Um botão que já abre a conversa ajuda quem quer saber se tem a peça antes de sair da praia.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'A loja continua a mesma. A página completa o caminho.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'pousada-catavento-saquarema',
    nome: 'Pousada Catavento',
    ctaDe: 'da Pousada Catavento',
    cidade: 'Saquarema',
    tipo: 'site_fraco',
    descricao:
      'Diagnóstico personalizado da Pousada Catavento, em Saquarema, com o que aparece no Google e no site hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, abri o site de vocês no celular, do jeito que um hóspede faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do site.',
    googleFatos: [
      'O perfil existe como Pousada Catavento, na R. dos Tatuís, em Itaúna, Saquarema - RJ.',
      'A nota é 4,7, com 430 avaliações.',
      'O perfil lista café da manhã, piscina, estacionamento, bar e espaço para crianças.',
      'O campo de site aponta para pousadacataventosaquarema.com.br.',
    ],
    siteFatos: [
      'A página inicial diz que os pacotes para o Réveillon e o Carnaval “já estão no ar”.',
      'A página de pacotes ainda mostra o <strong>Réveillon 2025/26</strong> e o <strong>Carnaval 2026</strong>, ou seja, a temporada que já passou.',
      'O WhatsApp aparece escrito como “Cel / WhatsApp: (22) 9-9961-4858”, mas o link abre a ligação de telefone, e não a conversa no WhatsApp.',
      'O rodapé mostra “Copyright © 2012 Pousada Catavento”.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Pacotes da temporada que vem, não da que passou',
        paragrafos: [
          'Agora é a época em que muita gente fecha Réveillon e Carnaval. Quem entra no site vê o aviso de pacotes no ar, mas encontra os de 2025/26. Pode achar que ainda não há data aberta e ir procurar outra pousada.',
          'Atualizar os pacotes para 2026/27, com um botão para pedir a reserva, aproveita esse movimento.',
        ],
      },
      {
        titulo: 'Um toque para abrir o WhatsApp, não o discador',
        paragrafos: [
          'O número de WhatsApp já está no site, o que é ótimo. Hoje, ao tocar, o celular abre uma ligação. Um botão que já abre a conversa, com uma mensagem pronta pedindo datas, deixa o pedido de reserva mais fácil.',
        ],
      },
      {
        titulo: 'Mostrar o que vocês têm de melhor logo de cara',
        paragrafos: [
          'Piscina, parquinho, salão de jogos e café da manhã são diferenciais fortes para famílias. Numa página organizada, isso aparece junto com as fotos, o mapa e as datas da temporada.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página nova resolve',
    paginaResolveTitulo: 'A pousada continua a mesma. O caminho até a reserva fica mais curto.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a pousada, os pacotes da temporada, onde fica e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'pousada-rio-das-ostras-cidade-praiana',
    nome: 'Pousada Rio das Ostras',
    ctaDe: 'da Pousada Rio das Ostras',
    cidade: 'Rio das Ostras',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado da Pousada Rio das Ostras, em Rio das Ostras, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de Rio das Ostras. Com a temporada de verão chegando, procurei vocês no Google do jeito que um hóspede faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como Pousada Rio das Ostras, na R. Espírito Santo, em Cidade Praiana, Rio das Ostras - RJ.',
      'A nota é 4,5, com 94 avaliações.',
      'O telefone do perfil é um número de celular.',
      'O perfil não tem link de site, Instagram nem Facebook.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando o turista pesquisa “pousada em Rio das Ostras”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente pesquisa pousada no celular e compara pelas fotos e pelo que está incluso. Vocês já têm muitas avaliações, o que é difícil de conseguir. O que falta é um lugar para a pessoa ver os quartos e chamar.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Deixar claro o que está incluso',
        paragrafos: [
          'Sem site, quem pesquisa depende só do que aparece nos aplicativos de reserva. Uma página com os quartos, o que está incluso e as regras da casa evita surpresa na chegada e pergunta repetida no WhatsApp.',
        ],
      },
      {
        titulo: 'Reserva direto com vocês, por WhatsApp',
        paragrafos: [
          'O celular já está no perfil. Uma página com um botão que já abre a conversa, com uma mensagem pronta pedindo datas, ajuda o hóspede a falar direto com a pousada.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O atendimento de vocês continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando os quartos, o que está incluso, onde fica e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'pousada-recanto-de-praia-seca-araruama',
    nome: 'Pousada Recanto de Praia Seca',
    ctaDe: 'da Pousada Recanto de Praia Seca',
    cidade: 'Araruama',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado da Pousada Recanto de Praia Seca, em Araruama, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, procurei vocês no Google do jeito que um hóspede faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como POUSADA RECANTO DE PRAIA SECA, na R. Trópicos, em Praia Seca, Araruama - RJ.',
      'A nota é 4,7, com 152 avaliações.',
      'O telefone do perfil é um número de celular.',
      'O perfil não tem link de site, Instagram nem Facebook.',
      'Avaliações de 2025 elogiam o café da manhã, a limpeza e a piscina.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando o turista pesquisa “pousada em Praia Seca”',
        paragrafos: [
          'Com a temporada de verão chegando, muita família pesquisa pousada no celular antes de reservar. Uma nota 4,7 com mais de 150 avaliações é difícil de conseguir. O que falta é um lugar para a pessoa ver os quartos, a piscina e chamar.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Fotos e o que está incluso, num lugar só',
        paragrafos: [
          'Sem nenhum link no perfil, quem quer saber mais precisa ligar ou caçar a pousada em aplicativos de reserva. Uma página com fotos, café da manhã, piscina e como chegar resolve isso de uma vez.',
        ],
      },
      {
        titulo: 'Reserva direto com vocês, por WhatsApp',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa, com uma mensagem pronta pedindo datas, deixa o próximo passo à mão.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O cuidado de vocês continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a pousada, o que está incluso, onde fica e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'pousada-recanto-verde-e-mar-araruama',
    nome: 'Pousada Recanto Verde e Mar',
    ctaDe: 'da Pousada Recanto Verde e Mar',
    cidade: 'Araruama',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado da Pousada Recanto Verde e Mar, em Araruama, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, procurei vocês no Google do jeito que um hóspede faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como Pousada Recanto Verde e Mar, em Araruama - RJ.',
      'A nota é 4,4, com 122 avaliações.',
      'O perfil lista café da manhã, piscina, estacionamento, ar-condicionado e aceita pets.',
      'O telefone do perfil é um número de celular.',
      'O único link do perfil é a página no Facebook. Não há site nem Instagram no perfil.',
      'O endereço aparece como “RUA 40, Araruama, RJ”, sem número nem bairro.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando o turista pesquisa “pousada em Araruama”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente pesquisa pousada no celular, inclusive quem vem para o kitesurf. Vocês já têm muitas avaliações, o que é difícil de conseguir. O que falta é uma página que mostre a pousada sem depender do Facebook.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Endereço fácil de achar para quem chega pela primeira vez',
        paragrafos: [
          'Do jeito que está no Google, o endereço é só “RUA 40”, sem número nem bairro. Quem chega de noite ou de fora pode se perder.',
          'Uma página com endereço completo, ponto de referência e mapa tira essa dúvida antes da viagem.',
        ],
      },
      {
        titulo: 'Pet e piscina à vista, com reserva por WhatsApp',
        paragrafos: [
          'Aceitar pets e ter piscina são diferenciais fortes no verão. Numa página, isso aparece logo de cara, com um botão de WhatsApp que já abre a conversa pedindo datas.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O acolhimento de vocês continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a pousada, o que está incluso, onde fica e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'lourencos-pizza-macae',
    nome: "Lourenço's pizza",
    ctaDe: "da Lourenço's",
    cidade: 'Macaé',
    tipo: 'instagram',
    descricao:
      "Diagnóstico personalizado da Lourenço's pizza, em Macaé, com o que aparece no Google e no Instagram.",
    lead: "Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de Macaé. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.",
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      "O perfil existe como Lourenço's pizza, na R. Juno, 62, em Granja dos Cavaleiros, Macaé - RJ, CEP 27930-680.",
      'A nota é 4,9, com 967 avaliações na listagem consultada. Outra listagem pública, no mesmo dia, mostrava 1.016 avaliações com a mesma nota; por isso o texto fala em mais de 960 avaliações.',
      'O horário está visível: fechado na segunda; de terça a domingo, das 19h às 23h.',
      'O telefone do perfil é um número de celular.',
      'O campo de site aponta para uma página de pedido na plataforma saipos.com, e não para uma página própria.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@pizzaria_lourenco</strong>, conforme a listagem do Restaurant Guru consultada no mesmo dia.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “pizzaria em Macaé”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente de fora pesquisa no Google antes de escolher onde jantar. Uma nota 4,9 com mais de 960 avaliações é difícil de conseguir. O Instagram existe, mas o link que o Google mostra é uma página de pedido, e nem toda busca termina ali.',
          'Uma página sua ajuda a mostrar o que vocês servem, o endereço, o horário e um jeito simples de chamar quando a pessoa está comparando opções. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Horário, endereço e um jeito de chamar, num só lugar',
        paragrafos: [
          'O perfil no Google já tem nota, endereço e horário. Quem toca em “Site”, porém, cai numa plataforma de pedido, e não numa página com essas informações à vista.',
          'Uma página com mapa, horário e o que entra no cardápio tira essas dúvidas antes da pessoa precisar perguntar.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O celular já aparece no perfil. Muita gente prefere um toque e já abrir a conversa. Uma página com um botão simples deixa esse passo à mão, inclusive para quem está na cidade só na temporada.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'the-place-lanches-bar-cabo-frio',
    nome: 'The Place Lanches & Bar',
    ctaDe: 'do The Place',
    cidade: 'Cabo Frio',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado do The Place Lanches & Bar, em Cabo Frio, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de Cabo Frio. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como The Place Lanches & Bar, na R. Finlândia, 110, em Jardim Caiçara, Cabo Frio - RJ, CEP 28910-260.',
      'A nota é 4,7, com 246 avaliações na listagem consultada. Outra listagem pública, no mesmo dia, mostrava 248 avaliações com a mesma nota; por isso o texto fala em mais de 240 avaliações.',
      'O horário está visível: fechado na segunda; de terça a domingo, das 18h às 23h.',
      'O telefone do perfil é um número de celular.',
      'O perfil não tem link de site nem de Instagram.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@theplacecf</strong>, conforme a listagem do Restaurant Guru consultada no mesmo dia. Esse endereço não aparece no perfil do Google.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “hamburgueria em Cabo Frio”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente de fora pesquisa no celular antes de escolher onde lanchar. Uma nota 4,7 com mais de 240 avaliações é difícil de conseguir. O Instagram existe, mas quem encontra vocês no Google não vê esse link nem uma página própria.',
          'Uma página sua ajuda a mostrar o que vocês servem, o endereço, o horário e um jeito simples de chamar. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Um caminho que não depende só da ficha do Google',
        paragrafos: [
          'Hoje, quem pesquisa o The Place no Google fica só com a ficha: nome, nota, endereço e telefone. Para ver o que vocês servem, a pessoa precisa caçar o Instagram por conta própria ou ligar.',
          'Uma página com fotos, o que sai da cozinha e o horário reduz essa volta.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa deixa o próximo passo à mão, sobretudo para quem está na cidade só na temporada e prefere chamar pelo WhatsApp.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'rota-22-hamburgueria-rio-das-ostras',
    nome: 'Rota 22 Hamburgueria',
    ctaDe: 'da Rota 22',
    cidade: 'Rio das Ostras',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado da Rota 22 Hamburgueria, em Rio das Ostras, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de Rio das Ostras. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Rota 22 Hamburgueria, na Rodovia Amaral Peixoto, 4961, 3º andar — rooftop, em Rio das Ostras - RJ, CEP 28893-076.',
      'A nota é 4,9, com 561 avaliações.',
      'O horário está visível: fechado na segunda e na terça; de quarta a domingo, das 18h às 23h.',
      'O telefone do perfil é um número de celular.',
      'O campo de site aponta para uma página de pedido na plataforma goomer.app. Há também um link para o Facebook. Não há uma página própria.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@rota22hamburgueria</strong>. Esse endereço não aparece como site no perfil do Google.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “hamburgueria em Rio das Ostras”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente de fora pesquisa no celular onde comer, inclusive quem ainda não conhece o rooftop na Amaral Peixoto. Uma nota 4,9 com 561 avaliações é difícil de conseguir. O Instagram existe, mas o link que o Google mostra é uma página de pedido.',
          'Uma página sua ajuda a apresentar a casa, o endereço, o horário e um jeito simples de chamar. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Mostrar o rooftop sem depender só do pedido online',
        paragrafos: [
          'Quem toca em “Site” no perfil cai numa plataforma de pedido. Para muita gente, sobretudo turista, isso não explica a vista, o endereço no terceiro andar nem como chegar.',
          'Uma página com fotos do espaço, o horário e o mapa deixa isso claro antes da pessoa precisar perguntar.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa, para reserva ou pedido, deixa o próximo passo à mão.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram nem a página de pedido. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a casa, onde fica, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'vicoli-pizzeria-macae',
    nome: 'Vicoli Pizzeria',
    ctaDe: 'da Vicoli',
    cidade: 'Macaé',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado da Vicoli Pizzeria, em Macaé, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de Macaé. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Vicoli Pizzeria, na Galeria Praiana, R. Mal. Floriano Peixoto, 121, loja 1, em Cavaleiros, Macaé - RJ, CEP 27920-200.',
      'A nota é 4,7, com 463 avaliações.',
      'O horário está visível: fechado na segunda; de terça a domingo, das 17h30 às 23h.',
      'O telefone do perfil é um número de celular.',
      'O campo de site aponta para o Instagram, e não para uma página própria. Há também um link de cardápio na plataforma jotaja.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@vicoli_macae</strong>.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “pizzaria em Macaé”',
        paragrafos: [
          'Com a temporada de verão chegando, muita gente de fora pesquisa no celular antes de escolher onde jantar. Uma nota 4,7 com 463 avaliações é difícil de conseguir. O Instagram de vocês está no ar, mas ele não é o site que o Google mostra, e nem toda busca termina no feed.',
          'Uma página sua ajuda a mostrar o que vocês servem, o endereço na Galeria Praiana, o horário e um jeito simples de chamar. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Endereço, horário e o que vocês servem, sem abrir outro aplicativo',
        paragrafos: [
          'Quem encontra vocês no Google hoje é levado ao Instagram ou a uma página de pedido. Para muita gente, sobretudo quem é de fora, isso pede um aplicativo a mais e nem sempre fica claro o horário e como chegar à loja 1 da galeria.',
          'Uma página com endereço, mapa, horário e o que vocês servem reduz essa volta.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa deixa o próximo passo à mão, inclusive para reserva no verão, quando a casa costuma encher.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'fornare-pizzeria-macae',
    nome: 'Fornare Pizzeria',
    ctaDe: 'da Fornare',
    cidade: 'Macaé',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado da Fornare Pizzeria, em Macaé, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de Macaé. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 11 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Fornare Pizzeria (Macaé), na Av. Atlântica, 580, em Macaé - RJ, CEP 27920-325.',
      'A nota é 4,8, com 88 avaliações.',
      'O horário está visível: fechado na segunda; de terça a domingo, das 18h às 23h30.',
      'O telefone do perfil é um número de celular.',
      'O campo de site aponta para o Instagram, e não para uma página própria. Há também um link para o Facebook.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@fornarepizzeria</strong>.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “pizzaria em Macaé”',
        paragrafos: [
          'Com a temporada de verão chegando, a Avenida Atlântica recebe muita gente de fora, e boa parte pesquisa no celular antes de sair. Uma nota 4,8 é difícil de conseguir. O Instagram de vocês está no ar, mas ele não é o site que o Google mostra, e nem toda busca termina no feed.',
          'Uma página sua ajuda a mostrar o que vocês servem, o endereço na orla, o horário e um jeito simples de chamar. Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Horário e endereço à vista, sem rolar o feed',
        paragrafos: [
          'Quem toca em “Site” no perfil é levado ao Instagram. Para quem está na orla e só quer saber se está aberto, onde fica e como chamar, isso pede outro aplicativo.',
          'Uma página com horário, mapa e um resumo do que vocês servem resolve isso de uma vez.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa deixa o próximo passo à mão, sobretudo no verão, quando a orla está mais cheia.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'pet-shop-best-friend-araruama',
    nome: 'Pet Shop Best Friend',
    ctaDe: 'do Pet Shop Best Friend',
    cidade: 'Araruama',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado do Pet Shop Best Friend, em Araruama, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, procurei vocês no Google do jeito que um cliente novo faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 12 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como Pet Shop Best Friend, na Av. Araruama, 1205, no Parque Hotel, em Araruama - RJ.',
      'A nota é 4,8, com 428 avaliações.',
      'O horário está visível: de segunda a sexta, das 8h às 19h; sábado, das 8h às 18h; fechado no domingo.',
      'O telefone do perfil é um número de celular.',
      'O perfil não tem nenhum link: nem site, nem Instagram, nem Facebook.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “pet shop em Araruama”',
        paragrafos: [
          'No verão, muita família vem para Araruama com o cachorro ou o gato e, quando falta ração ou remédio, pesquisa no celular. Com mais de 400 avaliações e nota 4,8, vocês já têm o que é mais difícil de conseguir. O que falta é um lugar para a pessoa ver o que a loja oferece.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Mostrar medicamentos, rações e marcas antes da visita',
        paragrafos: [
          'Os clientes elogiam a variedade de medicamentos e o esforço para conseguir o que falta. Uma página com as linhas de produtos e as marcas que vocês trabalham ajuda quem é de fora a decidir ir até a loja.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para perguntar se tem o produto',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa ajuda quem quer saber se tem aquele remédio ou ração antes de sair de casa.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'A loja continua a mesma. A página completa o caminho.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando o que vocês oferecem, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'pousada-cantinho-da-armacao-buzios',
    nome: 'Pousada Cantinho da Armação',
    ctaDe: 'da Pousada Cantinho da Armação',
    cidade: 'Armação dos Búzios',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado da Pousada Cantinho da Armação, em Búzios, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, procurei vocês no Google do jeito que um hóspede faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 12 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como Pousada Cantinho da Armação, na Travessa Santana, na Praia dos Ossos, em Búzios - RJ.',
      'A nota é 4,6, com 141 avaliações.',
      'O perfil lista Wi-Fi, ar-condicionado, acesso à praia, restaurante e transfer do aeroporto.',
      'O telefone do perfil é um número de celular.',
      'O perfil não tem nenhum link: nem site, nem Instagram, nem Facebook.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Ver os quartos e a vista antes de chamar',
        paragrafos: [
          'Quem compara pousadas em Búzios quer ver fotos dos quartos, da varanda e do café da manhã antes de pedir preço. Hoje o perfil no Google não leva a lugar nenhum, nem ao Instagram de vocês, então a pessoa precisa procurar por conta própria.',
          'Uma página com fotos, tipos de quarto e o que está incluso resolve isso em poucos segundos.',
        ],
      },
      {
        titulo: 'A Praia dos Ossos como ponto forte',
        paragrafos: [
          'Os hóspedes elogiam o atendimento e o barulho do mar a poucos metros. Uma página que mostra a localização no mapa e o que dá para fazer a pé ajuda a fechar a reserva de quem está em dúvida.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para pedir datas',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa, com uma mensagem pronta pedindo datas e número de pessoas, deixa o pedido de reserva mais fácil.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'A pousada continua a mesma. O caminho até a reserva fica mais curto.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a pousada, os quartos, onde fica e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'pousada-eu-amo-arraial-arraial-do-cabo',
    nome: 'Pousada Eu Amo Arraial',
    ctaDe: 'da Pousada Eu Amo Arraial',
    cidade: 'Arraial do Cabo',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado da Pousada Eu Amo Arraial, em Arraial do Cabo, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, procurei vocês no Google do jeito que um hóspede faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 12 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como Pousada Eu amo Arraial, na R. Washington Luís, 60, em Arraial do Cabo - RJ.',
      'A nota é 4,3, com 201 avaliações.',
      'O perfil lista Wi-Fi, café da manhã, ar-condicionado e hidromassagem.',
      'O telefone do perfil é um número de celular.',
      'Os links do perfil são o WhatsApp e o Facebook. Não há site no perfil.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Ver os quartos e a estrutura antes de chamar',
        paragrafos: [
          'Quem compara pousadas em Arraial quer ver fotos dos quartos, da piscina e do café da manhã antes de pedir preço. Hoje o perfil leva direto ao WhatsApp ou ao Facebook, sem uma página que mostre a pousada.',
          'Uma página com fotos, tipos de quarto e o que está incluso deixa a decisão mais rápida.',
        ],
      },
      {
        titulo: 'A localização como argumento',
        paragrafos: [
          'Hóspedes contam que a pousada fica a poucos minutos a pé da Praia Grande e da Praia dos Anjos, com mercado e farmácia perto. Uma página com o mapa e essas distâncias responde a pergunta mais comum antes mesmo de ela chegar no WhatsApp.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'O WhatsApp de vocês com mensagem pronta',
        paragrafos: [
          'O WhatsApp já está no perfil, o que é ótimo. Numa página, o botão pode abrir a conversa já pedindo datas e número de pessoas, o que poupa tempo dos dois lados.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'A pousada continua a mesma. O caminho até a reserva fica mais curto.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a pousada, os quartos, onde fica e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'le-twins-arraial-do-cabo',
    nome: 'Le Twins',
    ctaDe: 'do Le Twins',
    cidade: 'Arraial do Cabo',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado do Le Twins, em Arraial do Cabo, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, procurei vocês no Google do jeito que um turista com fome faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 12 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como Le Twins, na Av. Roberto Silveira, 19, na Praia dos Anjos, em Arraial do Cabo - RJ.',
      'A nota é 4,9, com 396 avaliações.',
      'O horário está visível: fechado na segunda; de terça a domingo, das 18h às 23h30.',
      'O telefone do perfil é um número de celular.',
      'Os links do perfil são o cardápio no Goomer e o Facebook. Não há site nem Instagram no perfil.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “hambúrguer em Arraial do Cabo”',
        paragrafos: [
          'No verão, muito turista sai do passeio de barco e pesquisa no celular onde comer. Nota 4,9 com quase 400 avaliações é muito difícil de conseguir. O que falta é uma página que mostre o ambiente, os lanches e o horário de um jeito simples.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'O Instagram de vocês no caminho do Google',
        paragrafos: [
          'O Instagram da casa existe, mas não aparece no perfil do Google. Quem chega pela busca vê só o cardápio e o Facebook. Uma página com fotos dos lanches e o link do Instagram junta tudo num lugar só.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para reservar ou pedir',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa ajuda quem quer saber se tem fila ou se dá para pedir para viagem.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O cardápio continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a casa, os lanches, onde fica, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'hay-lanches-arraial-do-cabo',
    nome: 'Hay Lanches',
    ctaDe: 'do Hay Lanches',
    cidade: 'Arraial do Cabo',
    tipo: 'sem_site',
    descricao:
      'Diagnóstico personalizado do Hay Lanches, em Arraial do Cabo, com o que aparece no Google hoje.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, procurei vocês no Google do jeito que um turista com fome faria. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 12 de novembro de 2026, no horário de Brasília, com informações públicas do Google.',
    googleFatos: [
      'O perfil existe como Hay Lanches, na Av. Getúlio Vargas, 84, no Centro de Arraial do Cabo - RJ.',
      'A nota é 4,6, com 381 avaliações.',
      'O horário está visível: segunda, das 15h à meia-noite; de terça a quinta, das 17h à meia-noite; de sexta a domingo, das 17h à 1h.',
      'O telefone do perfil é um número de celular.',
      'O único link do perfil é a página no Facebook. Não há site, cardápio nem Instagram no perfil.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Cardápio à vista para quem pesquisa “lanche em Arraial do Cabo”',
        paragrafos: [
          'No verão, muita gente pesquisa no celular onde comer à noite e escolhe pelo que consegue ver. Vocês já têm nota alta e clientes elogiando os combos e a entrega rápida. O que falta é o cardápio no caminho de quem chega pelo Google.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Mostrar os lanches sem depender do Facebook',
        paragrafos: [
          'Hoje o perfil leva só ao Facebook, que muito turista nem abre. Uma página com fotos dos combos, preços e horário ajuda a pessoa a decidir na hora.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para pedir',
        paragrafos: [
          'O celular já está no perfil. Um botão que já abre a conversa, com o pedido começando pronto, facilita para quem está na pousada e quer receber o lanche.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'A lanchonete continua a mesma. O pedido fica mais perto.',
    paginaResolve: [
      'A ideia é um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando os lanches, onde ficam, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'sanduba-arraial-do-cabo',
    nome: 'Sanduba',
    ctaDe: 'do Sanduba',
    cidade: 'Arraial do Cabo',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado do Sanduba, em Arraial do Cabo, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui na Região dos Lagos. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 12 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Sanduba, na Av. Governador Leonel de Moura Brizola, em Arraial do Cabo - RJ.',
      'A nota é 4,4, com 748 avaliações.',
      'O horário está visível: todos os dias, das 19h à meia-noite.',
      'O telefone do perfil é um número de celular.',
      'O campo de site aponta para o Instagram, e não para uma página própria.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@hamburgueria_sanduba</strong>.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “hamburgueria em Arraial do Cabo”',
        paragrafos: [
          'Quase 750 avaliações é muita coisa, e mostra que muita gente já passou por aí. No verão, o turista pesquisa no celular e quer ver rápido o cardápio, o preço e se dá para levar as crianças. O Instagram é ótimo, mas nem toda busca termina no feed.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'O diferencial da carne moída na casa à vista',
        paragrafos: [
          'Clientes destacam que vocês moem a própria carne e que o ambiente é bom para família. Uma página com isso logo no começo, junto com fotos e o cardápio, ajuda a decidir entre vocês e o vizinho.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para quem chega pelo Google',
        paragrafos: [
          'O telefone já aparece no perfil. Um toque que já abre a conversa ajuda quem quer saber se tem espera ou pedir para viagem.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a casa, o cardápio, onde fica, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
  {
    slug: 'mar-azul-sao-pedro-da-aldeia',
    nome: 'Mar Azul',
    ctaDe: 'do Mar Azul',
    cidade: 'São Pedro da Aldeia',
    tipo: 'instagram',
    descricao:
      'Diagnóstico personalizado do restaurante e pizzaria Mar Azul, em São Pedro da Aldeia, com o que aparece no Google e no Instagram.',
    lead: 'Olá, sou o Danillo, da Sentinel Systems, de Unamar, aqui pertinho de São Pedro. Com a temporada de verão chegando, olhei só o que qualquer pessoa vê hoje no Google e no Instagram de vocês. Segue o que eu encontrei, com calma e sem enrolação.',
    notaConsulta:
      'Consulta feita em 12 de novembro de 2026, no horário de Brasília, com informações públicas do Google e do Instagram.',
    googleFatos: [
      'O perfil existe como Mar Azul, restaurante e pizzaria na Av. São Pedro, 93, no Centro de São Pedro da Aldeia - RJ.',
      'A nota é 4,5, com 141 avaliações.',
      'O horário está visível: fechado na segunda; de terça a domingo, das 18h à meia-noite.',
      'O telefone do perfil é um número de celular.',
      'O campo de site aponta para o Instagram, e não para uma página própria.',
    ],
    instagramFatos: [
      'O perfil público é <strong>@___mar_azul___</strong>.',
    ],
    oportunidadesTitulo: 'O que pode ficar mais fácil para quem procura vocês',
    oportunidades: [
      {
        titulo: 'Aparecer com clareza quando alguém pesquisa “restaurante em São Pedro da Aldeia”',
        paragrafos: [
          'No verão, muita gente de fora procura onde jantar no celular. Clientes contam que frequentam a casa desde criança e elogiam o preço justo e o chope gelado. Essa história merece aparecer para quem ainda não conhece.',
          'Assim, quem já está procurando encontra a informação e um jeito de chamar.',
        ],
      },
      {
        titulo: 'Cardápio e preços sem precisar rolar o feed',
        paragrafos: [
          'Quem chega pelo Google cai direto no Instagram e precisa procurar o cardápio entre as publicações. Uma página com pratos, pizzas e faixas de preço responde isso em segundos.',
        ],
      },
      {
        titulo: 'Um botão de WhatsApp para reservar mesa ou pedir',
        paragrafos: [
          'O celular já está no perfil. Um toque que já abre a conversa ajuda quem quer reservar para a família ou pedir uma pizza para viagem.',
        ],
      },
    ],
    paginaResolveKicker: 'O que uma página resolve',
    paginaResolveTitulo: 'O Instagram continua. A página completa o caminho.',
    paginaResolve: [
      'A ideia não é trocar o Instagram. É ter um site do seu negócio, feito para abrir bem no celular, com até cinco seções, mostrando a casa, o cardápio, onde fica, o horário e um botão para chamar no WhatsApp.',
      'Também entra a configuração do perfil no Google, para o site e o telefone ficarem alinhados com a página.',
      'Os textos saem do material que vocês enviarem, e há uma rodada de ajustes para fechar do jeito combinado.',
    ],
  },
];

export function diagnosticoBySlug(slug: string): Diagnostico | undefined {
  return DIAGNOSTICOS.find((item) => item.slug === slug);
}
