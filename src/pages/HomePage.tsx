import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { soundFx } from '../components/SoundEffects';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const PARTS = [
  {
    href: '/sites',
    title: 'Site e Google',
    text: 'Criar o site da empresa e aparecer no Google, com o Perfil da Empresa configurado. Quem procura o serviço vê o que você faz e chama no WhatsApp.',
    cta: 'Ver site e Google',
  },
  {
    href: '/videos',
    title: 'Vídeos com IA',
    text: 'Vídeo para Instagram e Status, feito com as fotos do lugar. Serve para restaurante, pousada ou loja, sem você filmar nem editar.',
    cta: 'Ver vídeos',
  },
  {
    href: '/ferramentas',
    title: 'Ferramentas',
    text: 'Planilhas para saber quanto cobrar pela sua hora e quanto a obra deve custar.',
    cta: 'Ver ferramentas',
  },
] as const;

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <PageHero
        path="/"
        eyebrow="Para o pequeno negócio"
        title="Um jeito completo de vender mais e ser encontrado."
        description="O site, a presença no Google e a divulgação no Instagram e no Status fazem parte do mesmo trabalho. O atendimento é no Brasil, pelo WhatsApp."
      />

      <section className="pb-16" aria-labelledby="ecossistema-titulo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-w-0 rounded-[2rem] border border-cyan-100 bg-gradient-to-b from-cyan-50/90 to-white p-5 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">Uma solução só</p>
            <h2 id="ecossistema-titulo" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ecossistema completo
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600 leading-relaxed">
              Três partes do mesmo conjunto, para o negócio vender mais e ser encontrado. Uma leva à outra.
            </p>

            <ol className="relative mt-8 lg:mt-10 list-none p-0 m-0 grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
              <span
                className="hidden lg:block absolute left-[12%] right-[12%] top-5 h-px bg-cyan-300"
                aria-hidden="true"
              />
              {PARTS.map((part, index) => (
                <li key={part.href} className="relative min-w-0 flex gap-4 pb-8 last:pb-0 lg:pb-0 lg:block">
                  {index < PARTS.length - 1 && (
                    <span
                      className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-cyan-300"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cyan-600 bg-white text-sm font-extrabold text-cyan-800 lg:mb-4">
                    {index + 1}
                  </span>
                  <div className="min-w-0 pt-1 lg:pt-0">
                    <h3 className="text-lg font-extrabold text-slate-900">{part.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{part.text}</p>
                    <a
                      href={part.href}
                      onClick={(event) => {
                        event.preventDefault();
                        soundFx.playUiClick();
                        onNavigate(part.href);
                      }}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-950"
                    >
                      {part.cta}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
