/** Preços publicados. A home e o JSON-LD leem daqui. */

export const VIDEO_PACKAGES = [
  {
    id: 'avulso',
    name: 'Avulso',
    price: 'R$ 397',
    priceAmount: '397',
    detail: '1 vídeo com 1 revisão, entrega em 5 dias úteis depois das fotos e do briefing.',
    message: 'Olá! Vim pelo site da Sentinel e quero o pacote Avulso de vídeos.',
  },
  {
    id: 'mensal-basico',
    name: 'Mensal Básico',
    price: 'R$ 997/mês',
    priceAmount: '997',
    detail: '4 vídeos com 1 revisão cada.',
    message: 'Olá! Vim pelo site da Sentinel e quero o pacote Mensal Básico de vídeos.',
  },
  {
    id: 'mensal-completo',
    name: 'Mensal Completo',
    price: 'R$ 1.797/mês',
    priceAmount: '1797',
    detail: '8 vídeos com 1 revisão cada.',
    message: 'Olá! Vim pelo site da Sentinel e quero o pacote Mensal Completo de vídeos.',
  },
] as const;

export const VIDEO_INCLUDED = [
  'criação a partir das fotos enviadas pelo WhatsApp',
  'edição com música e texto',
  'pessoas ilustrativas',
  'aviso de cena feita com IA',
  'arquivo pronto pra postar',
] as const;

export const VIDEO_EXCLUDED = [
  'filmagem no local',
  'locução',
  'anúncios pagos',
  'publicação no perfil do cliente',
  'revisões ilimitadas',
  'promessa de vendas',
] as const;

export const SITE_INCLUDED = [
  'Uma página do seu negócio no celular, com até cinco seções',
  'Serviços, localização e botão de WhatsApp',
  'Textos a partir do material que você enviar',
  'Uma rodada de ajustes',
  'Configuração básica do Perfil da Empresa no Google, quando o seu negócio pode ter perfil',
  'Domínio .com.br, se o nome estiver disponível, no seu nome',
  'Hospedagem por 12 meses a partir da publicação',
] as const;

export const SITE_EXCLUDED = [
  'Não inclui manutenção, e a renovação não é automática.',
  'O desconto de 10% vale só nesta primeira contratação, não na renovação nem nos outros serviços.',
  'Não há mensalidade obrigatória de acompanhamento.',
  'Não há garantia de primeira posição no Google.',
] as const;
