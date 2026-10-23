export interface AutomationItem {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  benefits: string[];
  features: { step: string; title: string; desc: string }[];
  whatsappMessage: string;
}

export const AUTOMATION_LIST: AutomationItem[] = [
  {
    slug: 'robo-whatsapp-para-restaurantes',
    title: 'Robô de WhatsApp para Restaurantes e Lanchonetes',
    shortTitle: 'Robô para Restaurantes',
    headline: 'Atenda 50 Clientes ao Mesmo Tempo no Horário de Pico sem Errar um Pedido',
    description: 'Nosso robô inteligente envia o cardápio interativo, anota o endereço de entrega, calcula a taxa de entrega e manda o pedido 100% pronto para a sua impressora térmica ou cozinha.',
    benefits: [
      'Elimina filas de espera no WhatsApp na sexta e sábado à noite',
      'Calcula o troco ou envia a chave PIX Copia e Cola na hora',
      'Salva o histórico do cliente para compras com 1 clique nas próximas vezes',
      'Diminui custos com atendentes manuais e zera erros de anotação de pedidos'
    ],
    features: [
      { step: '1', title: 'Saudação com Cardápio', desc: 'O cliente manda um "oi" e recebe as opções de hoje e pratos da casa imediatamente.' },
      { step: '2', title: 'Montagem do Pedido', desc: 'O cliente escolhe ponto da carne, adicionais, bebidas e tira ingredientes que não gosta.' },
      { step: '3', title: 'Endereço e Pagamento', desc: 'Captura bairro, taxa de entrega e gera o total com chave PIX ou cartão na maquininha.' }
    ],
    whatsappMessage: 'Olá! Quero instalar o Robô de WhatsApp para Restaurantes e Delivery na minha empresa.'
  },
  {
    slug: 'robo-whatsapp-para-imobiliarias',
    title: 'Robô de WhatsApp para Imobiliárias e Corretores',
    shortTitle: 'Robô para Imobiliárias',
    headline: 'Qualifique Compradores 24h e Só Passe para o Corretor Quem Tem Perfil Real',
    description: 'O cliente manda mensagem no domingo à noite perguntando de uma casa? O robô responde na hora, pergunta faixa de renda, número de quartos, envia o PDF com fotos e agenda a visita.',
    benefits: [
      'Nunca mais deixe um comprador esfriar esperando o corretor acordar na segunda-feira',
      'Filtra curiosos e entrega contatos qualificados e com real interesse de compra',
      'Dispara fotos, vídeos e fichas técnicas completas dos imóveis cadastrados',
      'Integrado com o calendário dos corretores da equipe'
    ],
    features: [
      { step: '1', title: 'Triagem de Perfil', desc: 'Identifica se o cliente quer comprar ou alugar, faixa de valor e bairros de preferência.' },
      { step: '2', title: 'Envio de Imóveis Compatíveis', desc: 'Apresenta 3 opções perfeitas com fotos e valores de condomínio/IPTU.' },
      { step: '3', title: 'Agendamento de Visita', desc: 'Oferece dias e horários livres na agenda do corretor para confirmação.' }
    ],
    whatsappMessage: 'Olá! Quero um Robô de WhatsApp para qualificar leads da minha Imobiliária.'
  },
  {
    slug: 'robo-whatsapp-para-pousadas',
    title: 'Robô de WhatsApp para Pousadas e Hospedagens',
    shortTitle: 'Robô para Pousadas',
    headline: 'Passe Valores de Diárias, Fotos dos Quartos e Chave PIX em Segundos',
    description: 'Quem viaja quer resposta rápida. Se a sua pousada demora 2 horas para responder, o hóspede já fechou com o concorrente. Nosso robô fecha reservas enquanto você dorme.',
    benefits: [
      'Respostas instantâneas para turistas pesquisando na madrugada ou fins de semana',
      'Calcula o valor exato do pacote conforme as datas de entrada e saída',
      'Envia fotos nítidas dos quartos, regras de cancelamento e política de pets/crianças',
      'Gera o comprovante de reserva assim que o hóspede envia o PIX'
    ],
    features: [
      { step: '1', title: 'Datas e Hóspedes', desc: 'O robô pergunta a data de check-in, check-out e quantas pessoas virão.' },
      { step: '2', title: 'Acomodações Disponíveis', desc: 'Exibe as categorias livres com fotos, comodidades (ar, hidromassagem, vista) e valores.' },
      { step: '3', title: 'Sinal de Reserva', desc: 'Instrui sobre o adiantamento de 50%, gera o PIX e envia a confirmação assinada.' }
    ],
    whatsappMessage: 'Olá! Tenho uma Pousada e quero o Robô de WhatsApp para fechar reservas direto comigo.'
  },
  {
    slug: 'robo-whatsapp-para-clinicas',
    title: 'Robô de WhatsApp para Clínicas Médicas e Odontológicas',
    shortTitle: 'Robô para Clínicas',
    headline: 'Agende Consultas e Reduza em 70% as Faltas de Pacientes',
    description: 'Automação ética e humanizada. Passa informações de convênios atendidos, valores de procedimentos particulares, pré-agenda horários e envia lembretes automáticos na véspera da consulta.',
    benefits: [
      'Alivia o telefone da recepção para que suas secretárias atendam melhor quem está na sala de espera',
      'Disparo de lembrete no dia anterior com botão de "Confirmar" ou "Remarcar"',
      'Orientações pré-exame enviadas automaticamente (como tempo de jejum e documentos)',
      'Total sigilo e discrição nas informações de saúde'
    ],
    features: [
      { step: '1', title: 'Escolha de Especialidade', desc: 'O paciente escolhe o médico, dentista ou procedimento desejado.' },
      { step: '2', title: 'Consulta de Convênios', desc: 'Verifica se o plano do paciente tem cobertura para aquela especialidade.' },
      { step: '3', title: 'Reserva e Lembrete', desc: 'Registra o horário e programa o envio do lembrete automático 24h antes.' }
    ],
    whatsappMessage: 'Olá! Quero automatizar o agendamento da minha Clínica pelo WhatsApp.'
  },
  {
    slug: 'robo-whatsapp-para-orcamentos-graficas',
    title: 'Robô de WhatsApp para Gráficas e Orçamentos',
    shortTitle: 'Robô para Gráficas',
    headline: 'Colete Medidas, Quantidades e Arquivos sem Perder Tempo no Chat',
    description: 'Chega de perder 20 minutos trocando mensagens para descobrir qual o tamanho do banner que o cliente quer. O robô faz as perguntas certas e entrega a ficha do pedido pronta para a produção.',
    benefits: [
      'Calculadora rápida de quantidades mínimas e tipos de papel ou lona',
      'Recebe links de Wetransfer, Google Drive ou arquivos PDF para conferência técnica',
      'Informa prazos de entrega e condições de frete ou retirada na loja física',
      'Aumenta em 3x a velocidade de emissão de orçamentos'
    ],
    features: [
      { step: '1', title: 'Seleção do Material', desc: 'Adesivo, banner, cartão, panfleto, placa ou faixa promocional.' },
      { step: '2', title: 'Medidas e Acabamentos', desc: 'Largura, altura, ilhós, laminação fosca/brilho e quantidade.' },
      { step: '3', title: 'Geração de Proposta', desc: 'Calcula o valor estimado e notifica o operador para conferência final.' }
    ],
    whatsappMessage: 'Olá! Sou de uma Gráfica e quero um robô para colher orçamentos no WhatsApp.'
  },
  {
    slug: 'robo-whatsapp-atendimento-geral-24h',
    title: 'Robô de WhatsApp 24h para Pequenas e Médias Empresas',
    shortTitle: 'Robô Comercial 24h',
    headline: 'Nunca Mais Deixe um Cliente Sem Resposta Fora do Horário Comercial',
    description: 'A maioria das pessoas pesquisa produtos e serviços à noite ou no domingo. Nosso robô atende com educação, tira as dúvidas mais frequentes, anota o recado e avisa sua equipe na segunda de manhã.',
    benefits: [
      'Garante que você seja a primeira empresa a responder quem tem pressa',
      'Personalizado com o tom de voz e nome da sua marca',
      'Menu numérico simples ou inteligência que entende o que o cliente escreve',
      'Incluso no pacote mensal da Sentinel com manutenção e atualizações'
    ],
    features: [
      { step: '1', title: 'Boas-Vindas Educadas', desc: 'Apresenta a empresa, horário de funcionamento e opções de ajuda imediata.' },
      { step: '2', title: 'Respostas para Dúvidas Frequentes', desc: 'Formas de pagamento, catálogo, localização, prazos e garantias.' },
      { step: '3', title: 'Transbordo Humano', desc: 'Se o caso for complexo, encaminha para o celular de um vendedor no dia seguinte.' }
    ],
    whatsappMessage: 'Olá! Quero um Robô de Atendimento 24h no WhatsApp para o meu comércio.'
  }
];
