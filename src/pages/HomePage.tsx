import { ArrowRight, Clapperboard, MapPin, Table2 } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { soundFx } from '../components/SoundEffects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const PATHS = [
  {
    href: '/sites',
    title: 'Sites e Google',
    benefit: 'Seja encontrado quando alguém procurar o seu serviço e receba o contato no WhatsApp.',
    cta: 'Ver sites e Google',
    icon: MapPin,
  },
  {
    href: '/videos',
    title: 'Vídeos com IA para divulgação',
    benefit: 'Mande as fotos pelo WhatsApp e receba vídeos prontos para o Instagram e o Status, sem filmar.',
    cta: 'Ver vídeos',
    icon: Clapperboard,
  },
  {
    href: '/ferramentas',
    title: 'Ferramentas',
    benefit: 'Planilhas prontas para saber quanto cobrar pela sua hora e quanto a obra deve custar.',
    cta: 'Ver ferramentas',
    icon: Table2,
  },
] as const;

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <PageHero
        path="/"
        eyebrow="Para o seu negócio"
        title="Escolha o que o seu negócio precisa agora."
        description="Três caminhos separados. Um para ser encontrado no Google e receber mais gente no WhatsApp. Outro para divulgar com vídeos prontos. Outro para ferramentas do dia a dia."
      >
        <p className="mt-4 max-w-3xl text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
          Atendemos todo o Brasil. A conversa é pelo WhatsApp.
        </p>
      </PageHero>

      <section className="pb-16" aria-label="Caminhos">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PATHS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.href}
                  className="min-w-0 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col"
                >
                  <div className="w-11 h-11 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{item.benefit}</p>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      soundFx.playUiClick();
                      onNavigate(item.href);
                    }}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950"
                  >
                    {item.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
