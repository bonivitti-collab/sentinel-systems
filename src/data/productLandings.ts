import { FERRAMENTAS, type Ferramenta } from './ferramentas';

export interface ProductFact {
  title: string;
  text: string;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductLanding {
  id: 'valorhora' | 'cotacasa';
  path: '/valorhora' | '/cotacasa';
  host: 'valorhora.sentinelsystems.com.br' | 'cotacasa.sentinelsystems.com.br';
  ferramentaId: string;
  metaTitle: string;
  metaDescription: string;
  ogFile: 'og-valorhora.png' | 'og-cotacasa.png';
  ogAlt: string;
  /** Frase curta da capa, para a linha de apoio. */
  coverLine: string;
  includes: ProductFact[];
  receive: string;
  faq: ProductFaq[];
}

const RECEBE =
  'O pagamento é na Kiwify, pelo botão Comprar por R$ 9,90. A entrega do arquivo é automática, pela Kiwify. A planilha abre no Google Planilhas e no Excel.';

export const PRODUCT_LANDINGS: ProductLanding[] = [
  {
    id: 'valorhora',
    path: '/valorhora',
    host: 'valorhora.sentinelsystems.com.br',
    ferramentaId: 'valor-hora-real',
    metaTitle: 'Valor Hora Real por R$ 9,90 | Sentinel',
    metaDescription:
      'Planilha para saber quanto cobrar pela hora, como freelancer ou MEI. Google Planilhas e Excel. R$ 9,90.',
    ogFile: 'og-valorhora.png',
    ogAlt: 'Planilha Valor Hora Real por R$ 9,90, da Sentinel Systems',
    coverLine: 'Planilha de precificação para freelancer e MEI.',
    includes: [
      {
        title: 'Preço mínimo, ideal e premium',
        text: 'A capa da planilha descreve esses três preços da hora.',
      },
      {
        title: 'Orçamento pronto',
        text: 'Também está na capa, junto com o simulador de desconto.',
      },
      {
        title: 'Simulador de desconto',
        text: 'A capa cita o simulador para ver o preço com desconto.',
      },
      {
        title: 'Fórmulas protegidas',
        text: 'A capa informa que as fórmulas vêm protegidas.',
      },
      {
        title: 'Guia em PDF',
        text: 'A capa inclui um guia em PDF junto com a planilha.',
      },
      {
        title: 'Google Planilhas e Excel',
        text: 'A capa diz que a planilha é para Google Sheets e Excel, e que funciona no celular.',
      },
    ],
    receive: RECEBE,
    faq: [
      {
        q: 'Isso é um aplicativo?',
        a: 'Não. O Valor Hora Real é uma planilha, para Google Planilhas e Excel.',
      },
      {
        q: 'Quanto custa?',
        a: 'R$ 9,90. O pagamento é feito na Kiwify.',
      },
      {
        q: 'O que vem na planilha?',
        a: 'A capa descreve preço mínimo, ideal e premium, orçamento pronto, simulador de desconto, fórmulas protegidas e um guia em PDF.',
      },
      {
        q: 'Funciona no celular?',
        a: 'Sim. A capa da planilha informa que funciona no celular.',
      },
    ],
  },
  {
    id: 'cotacasa',
    path: '/cotacasa',
    host: 'cotacasa.sentinelsystems.com.br',
    ferramentaId: 'cotacasa',
    metaTitle: 'CotaCasa por R$ 9,90 | Sentinel',
    metaDescription:
      'Planilha para orçamento de obra por etapas, cotação e orçado x realizado. Google Planilhas e Excel. R$ 9,90.',
    ogFile: 'og-cotacasa.png',
    ogAlt: 'Planilha CotaCasa por R$ 9,90, da Sentinel Systems',
    coverLine: 'Planilha de orçamento e controle de reforma.',
    includes: [
      {
        title: 'Orçamento por etapas',
        text: 'Planilha para orçar a obra por etapas, antes de fechar com alguém.',
      },
      {
        title: 'Cotação',
        text: 'A capa descreve comparar orçamentos.',
      },
      {
        title: 'Orçado e realizado',
        text: 'A capa descreve acompanhar cada pagamento.',
      },
      {
        title: 'Preços SINAPI dos 27 estados',
        text: 'Está escrito na capa da planilha.',
      },
      {
        title: 'Guia em PDF',
        text: 'A capa inclui um guia em PDF junto com a planilha.',
      },
      {
        title: 'Google Planilhas e Excel',
        text: 'A capa diz que a planilha é para Google Planilhas e Excel, e que funciona no celular.',
      },
    ],
    receive: RECEBE,
    faq: [
      {
        q: 'Isso é um aplicativo ou um sistema?',
        a: 'Não. O CotaCasa é uma planilha de orçamento e controle de reforma, para Google Planilhas e Excel.',
      },
      {
        q: 'Quanto custa?',
        a: 'R$ 9,90. O pagamento é feito na Kiwify.',
      },
      {
        q: 'O que dá para acompanhar?',
        a: 'Orçamento da obra por etapas, cotação e orçado x realizado. A capa também cita a comparação de orçamentos, o acompanhamento de cada pagamento e preços SINAPI dos 27 estados.',
      },
      {
        q: 'Funciona no celular?',
        a: 'Sim. A capa da planilha informa que funciona no celular.',
      },
    ],
  },
];

export function ferramentaOf(product: ProductLanding): Ferramenta {
  const item = FERRAMENTAS.find((entry) => entry.id === product.ferramentaId);
  if (!item) throw new Error(`Planilha ausente: ${product.ferramentaId}`);
  return item;
}

export function productByPath(path: string): ProductLanding | undefined {
  return PRODUCT_LANDINGS.find((product) => product.path === path);
}

export function productCanonical(product: ProductLanding): string {
  return `https://${product.host}${product.path}`;
}

export function productOgImageUrl(product: ProductLanding): string {
  return `https://${product.host}/og/${product.ogFile}`;
}

export function productJsonLd(product: ProductLanding): Record<string, unknown> {
  const item = ferramentaOf(product);
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.name,
    description: product.metaDescription,
    image: productOgImageUrl(product),
    brand: {
      '@type': 'Brand',
      name: 'Sentinel Systems',
    },
    category: item.kind,
    url: productCanonical(product),
    offers: {
      '@type': 'Offer',
      price: item.priceAmount,
      priceCurrency: 'BRL',
      url: item.href,
    },
  };
}

/** Na raiz do subdomínio, a landing ocupa o lugar da home. */
export function productPathForHost(hostname: string, pathname: string): string | null {
  const host = hostname.toLowerCase().replace(/\.$/, '');
  const product = PRODUCT_LANDINGS.find((item) => item.host === host);
  if (!product) return null;
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || path === product.path) return product.path;
  return null;
}
