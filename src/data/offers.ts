/** Preços publicados. A home e o JSON-LD leem daqui. */

export const VIDEO_PACKAGES = [
  {
    id: 'avulso',
    name: 'Avulso',
    price: 'R$ 397',
    priceAmount: '397',
    detail: '1 vídeo com 1 revisão, entrega em 5 dias úteis depois que você mandar as fotos e contar o que quer no vídeo.',
    message: 'Olá! Vim pelo site da Sentinel e quero 1 vídeo avulso (R$ 397).',
  },
  {
    id: 'mensal-basico',
    name: 'Mensal Básico',
    price: 'R$ 997/mês',
    priceAmount: '997',
    detail: '4 vídeos com 1 revisão cada.',
    message: 'Olá! Vim pelo site da Sentinel e quero o pacote Mensal Básico de vídeos.',
  },
  {
    id: 'mensal-completo',
    name: 'Mensal Completo',
    price: 'R$ 1.797/mês',
    priceAmount: '1797',
    detail: '8 vídeos com 1 revisão cada.',
    message: 'Olá! Vim pelo site da Sentinel e quero o pacote Mensal Completo de vídeos.',
  },
] as const;

export const VIDEO_INCLUDED = [
  'criação a partir das fotos enviadas pelo WhatsApp',
  'edição com música e texto',
  'pessoas feitas com IA',
  'o vídeo leva um aviso de que foi feito com IA',
  'arquivo pronto para postar',
] as const;

export const VIDEO_EXCLUDED = [
  'filmagem no local',
  'locução',
  'anúncios pagos',
  'publicação no seu Instagram',
  'revisões ilimitadas',
  'promessa de vendas',
] as const;

export const SITE_INCLUDED = [
  'Um site do seu negócio, feito para abrir bem no celular, com até cinco seções',
  'Serviços, localização e botão de WhatsApp',
  'Textos a partir do material que você enviar',
  'Uma rodada de ajustes',
  'Perfil da Empresa no Google configurado junto (quando o Google aceita o seu tipo de negócio)',
  'Domínio .com.br, se o nome estiver disponível, no seu nome',
  'Hospedagem por 12 meses a partir da publicação',
] as const;

export const SITE_EXCLUDED = [
  'Manutenção depois da entrega',
  'A renovação não é automática: você decide se renova',
  'Não tem mensalidade.',
] as const;
