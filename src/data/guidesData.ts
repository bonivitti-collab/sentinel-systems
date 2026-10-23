export interface GuideItem {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  content: string[];
}

export const GUIDES_LIST: GuideItem[] = [
  {
    slug: 'por-que-so-o-instagram-nao-da-vendas',
    title: 'Por que depender apenas do Instagram é o maior erro do comércio local',
    headline: 'O algoritmo do Instagram não foi feito para vender o seu produto local: entenda o porquê.',
    excerpt: 'Quem está rolando o feed do Instagram quer entretenimento, memes e ver amigos. Quem pesquisa no Google está com o cartão de crédito na mão pronto para comprar agora.',
    readTime: '4 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'Todo dia vemos donos de comércios postando stories sem parar, gastando horas para criar reels que quase ninguém vê e se perguntando por que o faturamento não aumenta.',
      'O motivo é simples: o comportamento do consumidor no Instagram é passivo. A pessoa não entra na rede social para contratar um eletricista, pedir um orçamento de banner ou achar uma pousada para o fim de semana. Ela entra para se distrair.',
      'Já no Google, a história é completamente diferente. Quando alguém digita "pousada em cabo frio para o feriado" ou "gráfica que faz banner hoje", essa pessoa tem intenção clara e urgente de compra.',
      'Se você não tem um site rápido no Google, 100% desses clientes prontos para comprar caem direto no colo do seu concorrente. Ter um site próprio é ser dono do seu ponto digital sem depender do humor do algoritmo.'
    ]
  },
  {
    slug: 'como-colocar-minha-empresa-no-google-meu-negocio',
    title: 'Como colocar sua empresa na 1ª página do Google Meu Negócio',
    headline: 'O passo a passo simples para aparecer no mapa e atrair quem pesquisa "perto de mim".',
    excerpt: 'O Perfil da Empresa no Google é a vitrine mais lucrativa da sua cidade. Saiba como preencher corretamente para receber ligações e mensagens todo dia.',
    readTime: '5 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'O Google Meu Negócio é responsável por mais de 70% das ligações e rotas traçadas para comércios locais no Brasil. Quando alguém precisa de um produto ou serviço urgente, a primeira coisa que faz é abrir o Google Maps.',
      'Para cadastrar sua empresa, você precisa de uma conta Google, definir o nome oficial da empresa (evite encher de palavras-chave estranhas para não sofrer bloqueio) e escolher a categoria exata de atuação.',
      'A grande dica de ouro: conecte o seu site profissional ao seu perfil do Google. O Google dá preferência de posicionamento para empresas que possuem um site seguro (HTTPS), rápido no celular e com informações condizentes.',
      'Mantenha fotos atualizadas da fachada, do interior e dos produtos toda semana, e peça para seus clientes satisfeitos deixarem avaliações sinceras com 5 estrelas.'
    ]
  },
  {
    slug: 'como-funciona-robo-de-atendimento-no-whatsapp',
    title: 'Como funciona um robô inteligente de WhatsApp para empresas',
    headline: 'Tecnologia que atende com educação, tira dúvidas e fecha vendas 24 horas por dia.',
    excerpt: 'Descubra como pequenos negócios estão faturando alto respondendo clientes à noite e nos fins de semana sem precisar contratar atendentes extras.',
    readTime: '4 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'Quantas vezes você acordou na segunda-feira de manhã e viu mensagens no WhatsApp da sua empresa enviadas na noite de sexta ou no domingo que ficaram sem resposta?',
      'Na maioria das vezes, quando você responde 12 horas depois, o cliente já comprou de outro lugar. Na internet, a pressa é soberana: quem responde primeiro quase sempre fica com a venda.',
      'Um robô de WhatsApp bem configurado não parece uma máquina fria. Ele dá boas-vindas com cordialidade, apresenta o cardápio ou catálogo com fotos, responde sobre formas de pagamento e localização e coleta os dados do pedido.',
      'E o melhor: quando o cliente precisa de um atendimento complexo, o robô encaminha tudo mastigado para a sua equipe no dia seguinte, poupando horas de trabalho braçal.'
    ]
  },
  {
    slug: 'quanto-custa-criar-e-manter-um-site-profissional',
    title: 'Quanto custa criar e manter um site profissional sem pegadinhas?',
    headline: 'Valores reais de mercado, custos de hospedagem e por que pacotes mensais são mais vantajosos.',
    excerpt: 'Entenda a diferença entre pagar R$ 5.000 para um programador avulso que depois some vs contratar uma assinatura mensal com manutenção e suporte contínuo.',
    readTime: '4 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'Muitos empresários já passaram pelo trauma de pagar caro para uma agência ou sobrinho criar um site, para poucos meses depois o site quebrar, sair do ar ou ninguém conseguir trocar uma foto de promoção.',
      'Um site profissional tem custos fixos: registro do domínio no Registro.br (cerca de R$ 40/ano), servidor de hospedagem rápida com certificado SSL e manutenção técnica periódica para segurança contra invasões.',
      'O modelo de assinatura mensal da Sentinel Systems (com planos de R$ 149 a R$ 590/mês) resolve esse problema: a taxa de entrada é simbólica e acessível, e você conta com suporte contínuo todo mês para trocar fotos, cardápios e manter o robô de WhatsApp ativo.',
      'Você tem a tranquilidade de saber que tem uma equipe de plantão cuidando de tudo, sem contratos de fidelidade forçada.'
    ]
  },
  {
    slug: 'o-que-e-seo-local-e-como-ele-atrai-clientes',
    title: 'O que é SEO Local e como ele coloca clientes na sua porta',
    headline: 'A estratégia que faz os moradores do seu bairro e turistas encontrarem a sua empresa primeiro.',
    excerpt: 'Entenda como os robôs do Google identificam a localização de quem está buscando e por que ter termos da sua cidade no site atrai clientes prontos para comprar.',
    readTime: '3 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'SEO (Search Engine Optimization) significa otimização para motores de busca. Quando falamos em SEO Local, o objetivo é garantir que pessoas fisicamente perto de você achem seu comércio.',
      'O Google usa o GPS do celular do usuário e o endereço IP da internet para saber onde ele está. Se a pessoa pesquisa "oficina mecânica", o Google não vai mostrar uma em São Paulo se ela estiver em Cabo Frio.',
      'Para que o seu site seja o escolhido pelo Google, ele precisa conter metadados geográficos, tags estruturadas de LocalBusiness e textos naturais que citem os bairros e cidades onde você atende.',
      'Na Sentinel Systems, todos os sites já nascem com geotargeting ativado e indexado nas cidades da Região dos Lagos e do Brasil.'
    ]
  },
  {
    slug: 'como-evitar-golpes-de-criadores-de-sites-que-somem',
    title: 'Como não cair no golpe do criador de site que cobra caro e desaparece',
    headline: 'As 4 regras de ouro para proteger o domínio, os acessos e o patrimônio da sua empresa.',
    excerpt: 'Nunca deixe o domínio no CPF de terceiros e saiba exatamente o que exigir em contrato antes de fechar qualquer serviço de tecnologia.',
    readTime: '4 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'Infelizmente, o mercado de criação de sites é cheio de aventureiros. O dono do negócio contrata uma pessoa física que promete mundos e fundos, pede 50% de sinal e depois passa meses sem dar satisfação.',
      'Regra 1: O domínio (o .com.br) DEVE ser registrado no seu CPF ou no seu CNPJ. Nunca aceite que o programador registre no nome dele, pois se ele brigar com você, ele pode sequestrar seu site.',
      'Regra 2: Exija contrato com prazos de entrega claros e descrição detalhada do que está incluso (hospedagem, e-mails, celular, suporte).',
      'Regra 3: Peça nota fiscal e exija garantia formal de suporte. Na Sentinel Systems, garantimos 100% de posse ao cliente: seu domínio é seu e você nunca fica refém de ninguém.'
    ]
  },
  {
    slug: 'site-institucional-vs-landing-page-qual-o-melhor',
    title: 'Site Institucional ou Landing Page: qual traz mais dinheiro para o seu comércio?',
    headline: 'Descubra a diferença de objetivos entre um portal de várias páginas e uma página focada em WhatsApp.',
    excerpt: 'Entenda quando usar uma landing page direta para fechar pedidos rápidos e quando usar um site completo para transmitir porte e autoridade.',
    readTime: '3 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'Uma Landing Page é uma página única com foco absoluto em conversão: ela elimina distrações, apresenta o benefício principal e conduz o usuário diretamente para o botão de WhatsApp ou formulário.',
      'Já um Site Institucional completo possui páginas dedicadas de "Quem Somos", "Serviços", "Localidades" e "Blog/Guias", sendo a melhor escolha para SEO a longo prazo e ranqueamento orgânico no Google.',
      'A solução ideal da Sentinel Systems combina o melhor dos dois mundos: uma primeira dobra de alto impacto focada em conversão imediata no WhatsApp, apoiada por uma estrutura de páginas secundárias que ranqueiam no Google.'
    ]
  },
  {
    slug: 'como-aumentar-as-avaliacoes-5-estrelas-no-google',
    title: 'Como conseguir dezenas de avaliações 5 estrelas no Google Meu Negócio',
    headline: 'Estratégia simples e comprovada para fazer clientes satisfeitos elogiarem sua empresa na internet.',
    excerpt: 'Empresas com mais de 50 avaliações positivas no Google recebem até 4 vezes mais contatos que os concorrentes com poucas estrelas.',
    readTime: '3 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'O consumidor moderno desconfia de empresas sem avaliação no Google. Antes de ir a um restaurante ou contratar um serviço, todo mundo olha as estrelinhas.',
      'A forma mais fácil de conseguir avaliações é criar um link direto curto de avaliação no painel do Google Meu Negócio e automatizar o pedido no WhatsApp assim que o serviço for concluído ou a entrega for feita.',
      'Uma mensagem gentil no dia seguinte dizendo "Sua opinião é fundamental para nossa equipe! Poderia deixar uma avaliação de 30 segundos no Google?" converte em média 35% dos clientes em avaliações 5 estrelas.'
    ]
  },
  {
    slug: 'como-funciona-o-registro-de-dominio-no-registro-br',
    title: 'Como funciona o Registro.br e por que o domínio .com.br é o mais seguro',
    headline: 'A entidade oficial da internet brasileira e a importância de ter sua marca registrada no Brasil.',
    excerpt: 'Tudo sobre o Registro.br, taxas anuais, DNS, servidores autoritativos e proteção de marca para pequenas e médias empresas.',
    readTime: '4 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'O Registro.br é o departamento do NIC.br responsável pela administração de todos os domínios terminados em .br na internet brasileira.',
      'Ter um domínio `.com.br` confere credibilidade instantânea aos olhos do cliente brasileiro, além de ser o formato prioritário nas buscas locais do Google Brasil.',
      'A anuidade oficial do Registro.br custa R$ 40 por ano e garante que nenhuma outra pessoa ou empresa possa usar o seu nome na internet dentro do Brasil.',
      'Ao contratar a Sentinel Systems, nós auxiliamos na configuração das zonas de DNS e apontamento de servidores para que você não precise se preocupar com aspectos técnicos.'
    ]
  },
  {
    slug: 'estrategias-para-vender-fora-do-horario-comercial',
    title: 'Como faturar fora do horário comercial enquanto seus concorrentes dormem',
    headline: 'Transforme as madrugadas e fins de semana no seu turno mais lucrativo com robô de atendimento.',
    excerpt: 'Mais de 40% das intenções de compra de turismo, lazer e delivery acontecem à noite. Veja como fechar vendas no piloto automático.',
    readTime: '3 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'A rotina das pessoas mudou: depois de um dia cansativo de trabalho, é à noite que a maioria senta no sofá para pesquisar presentes, viagens de fim de semana ou reformas para a casa.',
      'Se o cliente manda mensagem às 22h e recebe uma resposta automática fria dizendo "voltamos amanhã às 9h", o ímpeto de compra muitas vezes se perde até o dia seguinte.',
      'Com um robô interativo no WhatsApp, o cliente recebe na hora o catálogo, as fotos e a tabela de valores. Ele pode tomar a decisão de compra ali mesmo e deixar o pedido pago via PIX.',
      'Sua empresa passa a operar em regime 24/7 sem aumentar a folha de pagamento.'
    ]
  },
  {
    slug: 'velocidade-do-site-e-vendas-por-que-segundos-importam',
    title: 'Velocidade do site no celular: por que cada segundo a mais custa vendas',
    headline: 'Estudos do Google comprovam que sites lentos perdem mais de 53% dos visitantes antes de carregar.',
    excerpt: 'Como a Sentinel Systems constrói sites que carregam em menos de 1 segundo mesmo em conexões lentas de celular.',
    readTime: '3 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'Na era do 4G e 5G, ninguém tem paciência de esperar uma barrinha de carregamento rodar por 5 segundos. O usuário simplesmente aperta o botão de voltar e clica no próximo resultado.',
      'O Google usa a velocidade de carregamento (Core Web Vitals) como um dos critérios mais importantes de ranqueamento. Sites rápidos ganham posições de graça; sites pesados caem para a 2ª ou 3ª página.',
      'Os sites desenvolvidos pela Sentinel Systems utilizam arquitetura moderna em React, Vite e CDN global da Vercel, entregando o código a partir de servidores em São Paulo com pontuação máxima no Google PageSpeed.'
    ]
  },
  {
    slug: 'checklist-da-presenca-digital-perfeita-para-pequenos-negocios',
    title: 'O Checklist da Presença Digital Perfeita para Pequenos e Médios Negócios',
    headline: 'Faça um raio-x do seu comércio e descubra os pontos cegos por onde você está perdendo dinheiro.',
    excerpt: 'Os 7 itens obrigatórios que toda empresa precisa ter na internet hoje para ser respeitada e vender com consistência.',
    readTime: '4 min de leitura',
    publishedDate: '2026-10-22',
    content: [
      'Item 1: Domínio próprio oficial (.com.br) registrado em seu nome para não parecer amador.',
      'Item 2: Site rápido no celular com certificado de segurança (cadeado HTTPS) e botão de WhatsApp flutuante sempre visível.',
      'Item 3: Perfil da Empresa no Google Meu Negócio verificado, com fotos nítidas e endereço correto no mapa.',
      'Item 4: Link de WhatsApp formatado que já inicia a conversa com mensagem personalizada de boas-vindas.',
      'Item 5: Robô ou fluxo de automação para atender clientes fora do horário comercial.',
      'Item 6: Catálogo ou cardápio digital leve que não exija download de arquivos pesados.',
      'Item 7: Provas sociais, fotos reais de serviços entregues e avaliações de clientes satisfeitos para gerar credibilidade imediata.'
    ]
  }
];
