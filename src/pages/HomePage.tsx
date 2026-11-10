import { ArrowRight, Camera, MapPin, MessageCircle, Phone } from 'lucide-react';
import { FerramentasSection } from '../components/FerramentasSection';
import { SiteModelCarousel } from '../components/SiteModelCarousel';
import { FaqList } from '../components/site/FaqList';
import { PageHero } from '../components/site/PageHero';
import { HOME_FAQ, SITE, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const OBSTACLES = [
  {
    title: 'Horário',
    text: 'O cliente quer saber se chama agora, se espera até amanhã ou se o atendimento é só em alguns dias.',
  },
  {
    title: 'Onde atende',
    text: 'Pode ser perto, em casa, com entrega ou com ida até o cliente. Sem isso, ele não sabe se você resolve o caso dele.',
  },
  {
    title: 'Serviço',
    text: 'O que entra, o que fica de fora e para quem é. Uma frase bonita não substitui essa resposta.',
  },
  {
    title: 'Preço, quando cabe',
    text: 'Se o valor pode ser dito, a dúvida não precisa esperar a conversa. Se depende do caso, explique como o orçamento é pedido.',
  },
  {
    title: 'WhatsApp',
    text: 'Quem já decidiu falar precisa ver o próximo passo. O contato escondido devolve o cliente para a comparação.',
  },
] as const;

const PREP_STEPS = [
  {
    title: 'Informação consistente',
    text: 'Serviço, endereço, horário e WhatsApp iguais no site e no perfil do Google. O que muda de um lugar para o outro gera dúvida.',
  },
  {
    title: 'Teste no celular',
    text: 'Alguém abre a página no telefone, entende o que você faz e consegue chamar. Se travar aqui, trava na hora em que a pessoa decide.',
  },
  {
    title: 'Ajuste com calma',
    text: 'O que ficou confuso se corrige antes do movimento aumentar. Na correria, o ajuste vira pressa.',
  },
] as const;

const PACKAGE_ITEMS = [
  {
    title: 'Uma página no celular',
    text: 'Até cinco seções, feitas para abrir no telefone e mostrar o seu comércio com clareza.',
  },
  {
    title: 'Serviço, lugar e WhatsApp',
    text: 'O que você faz, onde atende e um botão para chamar. Os textos saem do material que você enviar.',
  },
  {
    title: 'Uma rodada de ajustes',
    text: 'Os pedidos de ajuste entram juntos, numa rodada só, para a página fechar do jeito combinado.',
  },
  {
    title: 'Perfil no Google',
    text: 'Configuração básica do Perfil da Empresa, se o negócio for elegível. O perfil é gratuito. O valor paga o trabalho. A verificação depende do Google.',
  },
] as const;

const CHANNELS = [
  {
    title: 'Instagram',
    text: 'Mostra o trabalho para quem acompanha e pode gerar conversa. No perfil profissional dá para exibir categoria, contato, endereço e um caminho para o WhatsApp. Atenção no feed não é, por si, um pedido de orçamento.',
    icon: Camera,
  },
  {
    title: 'Google e Maps',
    text: 'Ajudam quem busca um serviço na região a ver nome, endereço, horário e caminho. O perfil é outra superfície, diferente do site, e precisa ser configurado e atualizado.',
    icon: MapPin,
  },
  {
    title: 'Site',
    text: 'Organiza serviços, informações e contato para a pessoa decidir. Precisa ser divulgado e cuidado. Sozinho, não cria o perfil no Google nem garante visita.',
    icon: Phone,
  },
] as const;

export function HomePage({ onNavigate }: HomePageProps) {
  const go = (path: string) => {
    soundFx.playUiClick();
    onNavigate(path);
  };

  return (
    <>
      <PageHero
        path="/"
        eyebrow="Para pequenos negócios"
        title={
          <>
            Site essencial e perfil no Google{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              para o seu comércio.
            </span>
          </>
        }
        description="Uma página no celular para apresentar seus serviços, mostrar onde você fica e facilitar o contato no WhatsApp, com a configuração básica do Perfil da Empresa no Google. O Instagram continua útil. Este pacote ajuda o negócio a ser encontrado."
      >
        <p className="mt-4 max-w-3xl text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
          Atendemos todo o Brasil. Atendimento online pelo WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Quero esse site no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => go('/#oferta')}
            className="w-full sm:w-auto px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver o que entra
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </PageHero>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Como isso ajuda</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Quem visita nem sempre conhece o comércio local
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Em cidade de temporada, chega gente que ainda não conhece o comércio local. Uma pessoa pode procurar e comparar na hora, por exemplo “salão perto de mim”, “restaurante em [nome da cidade]” ou “serviço aberto agora”. Nem toda visita começa assim.
            </p>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Quem está comparando pode olhar mais de uma opção antes de chamar. O Instagram, o Google e o site entram em momentos diferentes, e um não faz o trabalho do outro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <article
                  key={channel.title}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs"
                >
                  <div className="w-11 h-11 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{channel.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{channel.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Os caminhos</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Seu negócio não precisa depender só do Instagram
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Publicar e receber atenção não é o mesmo que um pedido de orçamento. Quem usa o feed como estratégia dedica tempo a conteúdo recorrente. O alcance depende do que a plataforma mostra, e isso não está garantido.
            </p>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Nem todo mundo começa no mesmo lugar. Numa mesma decisão, ela pode abrir o Instagram e ele o Google. Alguns clientes descobrem pelo feed. Outros buscam o serviço no Google e no Maps, com a localização e as informações do perfil.
            </p>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Imagine alguém planejando comprar moda praia em Cabo Frio. A busca pode começar no Instagram, no Google ou no Maps. A loja precisa apresentar claramente o que vende, onde fica e como falar com você.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Seguidores e curtidas</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mostram atenção. Não são clientes e não fecham a venda. Sem olhar a conta de verdade, isso não é um diagnóstico.
              </p>
            </article>
            <article className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Postar e informar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Postar todo dia pede tempo e não garante alcance nem intenção de compra. O que ajuda a decidir é o que você vende, onde fica e como chamar.
              </p>
            </article>
            <article className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Um canal e vários</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Existir no Instagram não resolve sozinho o caminho até o orçamento. Instagram, Google, Maps, site e WhatsApp entram em momentos diferentes.
              </p>
            </article>
          </div>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 leading-relaxed">
            O site organiza essa apresentação. Ele precisa ser divulgado, atualizado e encontrado. Deixá-lo no ar não traz o cliente sozinho, não cria o perfil no Google e não garante posição no mapa. Visibilidade ajuda. A contratação também depende da oferta, do preço e do atendimento.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">A escolha</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Se o seu concorrente facilita a escolha, o cliente pode escolher ele.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Enquanto seu negócio deixa dúvidas sobre serviços, horários ou como entrar em contato, outra empresa pode apresentar tudo com clareza. Você não precisa esperar perder uma oportunidade para organizar sua presença digital.
            </p>
          </div>
          <p className="text-sm font-bold text-slate-900 mb-1">Um cliente procurando um serviço na região encontra duas opções.</p>
          <p className="text-sm text-slate-500 mb-4">Exemplo ilustrativo, não um caso real.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">A opção fácil de entender</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dá para ver o que é oferecido, a localização, o horário e um contato. A pessoa sabe se aquele lugar resolve o que ela procura e como chamar.
              </p>
            </article>
            <article className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">A opção que deixa dúvida</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                O nome aparece, mas faltam o serviço, o horário, onde atende ou um jeito simples de chamar. A comparação fica mais difícil, e a pessoa pode seguir na outra.
              </p>
            </article>
          </div>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 leading-relaxed">
            Se a sua empresa é a que deixa a dúvida, o cliente pode escolher a outra. Pode, não é uma sentença. Isso também não exige que a outra esteja em primeiro lugar.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Antes do contato</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              O cliente trava em dúvidas práticas
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              O visual ajuda a confiança, mas não responde sozinho. Antes de chamar, ele tenta tirar estas dúvidas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OBSTACLES.map((item) => (
              <article key={item.title} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">O tempo do preparo</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Prepare seu negócio antes da próxima temporada.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Montar o site, configurar o perfil no Google e deixar as informações coerentes pede planejamento. Testar no celular, ver se o contato funciona e ajustar o que ficou confuso também.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PREP_STEPS.map((step) => (
              <article key={step.title} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="max-w-3xl mt-6 space-y-3 text-slate-600 text-base leading-relaxed">
            <p>
              Começar antes do movimento aumentar dá tempo para esse preparo. A indexação, a posição no Google e o resultado não têm data prometida.
            </p>
            <p>
              Começar antes da temporada dá tempo de apresentar melhor seus serviços, organizar sua presença no Google e facilitar o contato. Assim, quando o movimento aumentar, seu negócio estará mais preparado para receber quem procura o que você oferece.
            </p>
            <p>
              A temporada deixa a situação clara. O mesmo cuidado da {SITE.name} vale para outros negócios locais no Brasil: site, Perfil da Empresa no Google e segurança dessa presença.
            </p>
          </div>
          <button
            type="button"
            onClick={() => go('/sobre')}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950 cursor-pointer"
          >
            Conhecer a empresa
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section id="oferta" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">O pacote</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              O que você recebe
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Um pacote só, com começo e fim. Não é acompanhamento mensal obrigatório, e não promete a primeira posição no Google.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PACKAGE_ITEMS.map((item) => (
              <article key={item.title} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteModelCarousel />

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Além deste pacote</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Outras soluções sob consulta
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Também trabalhamos com cardápio digital, automação de WhatsApp, ferramentas de IA, lojas virtuais e segurança da presença. Conte o que seu negócio precisa: orçamento sob consulta.
          </p>
          <p className="mt-4 text-slate-800 font-semibold leading-relaxed">
            Quer conversar sobre como o digital pode ajudar seu negócio a vender mais?
          </p>
          <a
            href={whatsappHref('Olá! Quero agendar uma conversa sobre como o digital pode ajudar meu negócio. Podemos combinar um horário?')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950"
          >
            Agendar uma conversa pelo WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl rounded-3xl bg-white border border-slate-200/90 shadow-xs p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">Valor da criação</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">12 parcelas de R$ 50</h2>
            <p className="mt-1 text-base font-bold text-slate-800">Total de R$ 600</p>
            <p className="mt-1 text-base font-bold text-slate-800">ou R$ 540 à vista, com 10% de desconto</p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              É o parcelamento da criação, não uma mensalidade para sempre. No parcelado, o primeiro pagamento é na contratação e os outros 11 são mensais. À vista, os R$ 540 são pagos por inteiro na contratação. O desconto de 10% vale só nesta primeira contratação do pacote, não na renovação nem em outros serviços. Não há mensalidade obrigatória de acompanhamento.
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Inclui um domínio .com.br, se o nome estiver disponível, e a hospedagem por 12 meses a partir da publicação. O domínio fica no seu nome.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Depois de 12 meses, renovar é opcional: R$ 180 por ano, só domínio e hospedagem. Esse valor não tem o desconto de 10%. Não inclui manutenção e não renova sozinha. Sem esse combinado, a hospedagem não continua de graça. Você pode levar o site e o domínio.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Quero esse site no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => go('/contato')}
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide cursor-pointer"
              >
                Ver e-mail e contato
              </button>
            </div>
          </div>
        </div>
      </section>

      <FerramentasSection />

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Perguntas sobre a contratação
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Veja o que está incluído no seu site, como funciona o pagamento e quais são as condições de renovação.
            </p>
          </div>
          <FaqList questions={HOME_FAQ} />
        </div>
      </section>
    </>
  );
}
