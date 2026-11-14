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
  'Você compra pelo botão e recebe a planilha na hora, no seu e-mail. Ela abre no Google Planilhas e no Excel. O pagamento é feito na Kiwify, plataforma segura de pagamento.';

export const PRODUCT_LANDINGS: ProductLanding[] = [
  {
    id: 'valorhora',
    path: '/valorhora',
    host: 'valorhora.sentinelsystems.com.br',
    ferramentaId: 'valor-hora-real',
    metaTitle: 'Valor Hora Real por R$ 9,90 | Sentinel',
    metaDescription:
      'Planilha para saber quanto cobrar pela hora, como freelancer ou MEI. Google Planilhas e Excel. R$ 9,90.',
    ogFile: 'og-valorhora.png',
    ogAlt: 'Planilha Valor Hora Real por R$ 9,90, da Sentinel Systems',
    coverLine: '',
    includes: [
      {
        title: 'Preço mínimo, ideal e premium',
        text: 'Você vê o preço mínimo, o ideal e o premium da sua hora.',
      },
      {
        title: 'Orçamento para o cliente',
        text: 'Coloque as horas de cada etapa e a planilha calcula o valor do serviço, com a mensagem pronta para mandar ao cliente.',
      },
      {
        title: 'Simulador de desconto',
        text: 'O cliente pediu desconto? Veja na hora se ainda vale a pena.',
      },
      {
        title: 'Fórmulas protegidas',
        text: 'As contas já vêm prontas e travadas, para você não apagar sem querer.',
      },
      {
        title: 'Guia em PDF',
        text: 'Vem com um guia em PDF.',
      },
      {
        title: 'Google Planilhas e Excel',
        text: 'Abre no Google Planilhas e no Excel, inclusive no celular.',
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
        a: 'R$ 9,90. O pagamento é feito na Kiwify, plataforma segura de pagamento.',
      },
      {
        q: 'O que vem na planilha?',
        a: 'Você vê o preço mínimo, o ideal e o premium da sua hora. Tem orçamento para o cliente, um simulador para ver o preço com desconto, fórmulas protegidas e um guia em PDF.',
      },
      {
        q: 'Funciona no celular?',
        a: 'Sim, você pode usar no celular.',
      },
    ],
  },
  {
    id: 'cotacasa',
    path: '/cotacasa',
    host: 'cotacasa.sentinelsystems.com.br',
    ferramentaId: 'cotacasa',
    metaTitle: 'CotaCasa por R$ 9,90 | Sentinel',
    metaDescription:
      'Planilha para orçamento de obra por etapas, cotação e orçado x realizado. Google Planilhas e Excel. R$ 9,90.',
    ogFile: 'og-cotacasa.png',
    ogAlt: 'Planilha CotaCasa por R$ 9,90, da Sentinel Systems',
    coverLine: 'Planilha de orçamento e controle de reforma.',
    includes: [
      {
        title: 'Orçamento por etapas',
        text: 'Planilha para orçar a obra por etapas, antes de fechar com alguém.',
      },
      {
        title: 'Cotação',
        text: 'Compare orçamentos lado a lado.',
      },
      {
        title: 'Orçado e realizado',
        text: 'Acompanhe cada pagamento, o que foi orçado e o que você já pagou.',
      },
      {
        title: 'Preços de referência dos 27 estados',
        text: 'Tabela oficial de preços da construção (SINAPI, da Caixa).',
      },
      {
        title: 'Guia em PDF',
        text: 'Vem com um guia em PDF.',
      },
      {
        title: 'Google Planilhas e Excel',
        text: 'Abre no Google Planilhas e no Excel, inclusive no celular.',
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
        a: 'R$ 9,90. O pagamento é feito na Kiwify, plataforma segura de pagamento.',
      },
      {
        q: 'O que dá para acompanhar?',
        a: 'Orçamento da obra por etapas, cotação e orçado x realizado. Compare orçamentos lado a lado, acompanhe cada pagamento e veja preços SINAPI dos 27 estados.',
      },
      {
        q: 'Funciona no celular?',
        a: 'Sim, você pode usar no celular.',
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
