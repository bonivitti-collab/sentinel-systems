export interface Ferramenta {
  id: string;
  name: string;
  kind: 'Planilha';
  benefit: string;
  priceLabel: string;
  priceAmount: string;
  href: string;
  image: string;
  alt: string;
  /** Rota da landing. O endereço público é o subdomínio em productLandings. */
  landingPath: '/valorhora' | '/cotacasa';
}

/** Novas planilhas entram neste array. O card e o JSON-LD leem daqui. */
export const FERRAMENTAS: Ferramenta[] = [
  {
    id: 'valor-hora-real',
    name: 'Valor Hora Real',
    kind: 'Planilha',
    benefit: 'Saiba quanto cobrar pela sua hora, como freelancer ou MEI.',
    priceLabel: 'R$ 9,90',
    priceAmount: '9.90',
    href: 'https://pay.kiwify.com.br/2ydXBfN',
    image: '/ferramentas/valor-hora-real.webp',
    alt: 'Capa da planilha Valor Hora Real, para calcular o preço da hora de freelancer e MEI',
    landingPath: '/valorhora',
  },
  {
    id: 'cotacasa',
    name: 'CotaCasa',
    kind: 'Planilha',
    benefit: 'O controle da sua obra na sua mão: saiba quanto ela deve custar antes de fechar com alguém.',
    priceLabel: 'R$ 9,90',
    priceAmount: '9.90',
    href: 'https://pay.kiwify.com.br/1Nf3zMM',
    image: '/ferramentas/cotacasa.webp',
    alt: 'Capa do CotaCasa, planilha para estimar e acompanhar o custo da obra',
    landingPath: '/cotacasa',
  },
];

export function ferramentasResumo(): string {
  const lista = FERRAMENTAS.map((item) => `${item.name} por ${item.priceLabel}`).join(' e ');
  return `${lista}. São planilhas prontas.`;
}
