import { ArrowRight, Camera, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { FaqList } from '../components/site/FaqList';
import { PageHero } from '../components/site/PageHero';
import { HOME_FAQ, SERVICES, SITE, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const OBSTACLES = [
  {
    title: 'Horário',
    text: 'A pessoa quer saber se chama agora, se espera até amanhã ou se o atendimento é só em alguns dias.',
  },
  {
    title: 'Onde atende',
    text: 'Pode ser perto, em casa, com entrega ou com ida até o cliente. Sem isso, ela não sabe se você resolve o caso dela.',
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
    text: 'Quem já decidiu falar precisa ver o próximo passo. O contato escondido devolve a pessoa para a comparação.',
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
        eyebrow="Negócio local no Brasil"
        title={
          <>
            Quem chega à cidade precisa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              encontrar o seu negócio.
            </span>
          </>
        }
        description="Um site claro e uma presença bem cuidada no Google ajudam quem procura um serviço na região a conhecer a sua empresa, conferir as informações e falar com você pelo WhatsApp."
      >
        <div className="mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 sm:px-5">
          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
            Quando novos moradores e visitantes procuram serviços, surgem novas chances de atendimento. Se o cliente não encontra o seu negócio, pode escolher quem aparece.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playUiClick()}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Quero uma proposta no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => go('/servicos')}
            className="w-full sm:w-auto px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer"
          >
            Ver os serviços
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
              Se a outra opção está mais clara, o cliente pode ir nela
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Não é um concorrente seu, nem uma posição no Google. É o que pode acontecer quando alguém compara duas opções na região e uma responde o que a outra deixa em aberto.
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
              A pessoa trava em dúvidas práticas
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              O visual ajuda a confiança, mas não responde sozinho. Antes de chamar, ela tenta tirar estas dúvidas.
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

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Serviços</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              O que entra no trabalho
            </h2>
            <p className="text-slate-600 leading-relaxed">
              O site, o Google e a segurança dessa presença são o trabalho da Sentinel para serviço, localização e contato ficarem coerentes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SERVICES.map((service) => {
              const Icon = service.id === 'google' ? MapPin : service.id === 'seguranca' ? ShieldCheck : Phone;
              return (
                <article
                  key={service.id}
                  className="p-6 rounded-3xl bg-gradient-to-br from-white to-cyan-50/40 border border-slate-200/90 shadow-xs flex flex-col"
                >
                  <div className="w-11 h-11 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{service.summary}</p>
                  <button
                    type="button"
                    onClick={() => go(`/servicos#${service.id}`)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-cyan-800 cursor-pointer"
                  >
                    Por que isso importa
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Dúvidas antes de fechar</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              O que costuma travar a decisão
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Instagram, pressa no Google, esperar o movimento ou saber o que cabe no orçamento. O restante está nas{' '}
              <a href="/faq" onClick={(event) => { event.preventDefault(); go('/faq'); }} className="font-semibold text-cyan-800">perguntas frequentes</a>.
            </p>
          </div>
          <FaqList questions={HOME_FAQ} />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white px-6 py-10 sm:px-10 sm:py-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Se fizer sentido, a gente segue no WhatsApp
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
              Você conta como o negócio atende hoje. A Sentinel entende a necessidade e manda uma proposta por escrito. Preço e prazo ficam nessa proposta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Quero uma proposta no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => go('/contato')}
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-white text-slate-900 font-semibold text-xs tracking-wide cursor-pointer"
              >
                Ver e-mail e contato
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
