import { PageHero } from '../components/site/PageHero';
import { SITEMAP_LINKS } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <>
      <PageHero
        path="/404"
        eyebrow="Página não encontrada"
        title="Não encontramos essa página."
        description="Volte pelo menu e veja como a gente ajuda o seu negócio a ser encontrado no Google, receber ligação e mensagem no WhatsApp."
      />
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
          {SITEMAP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                soundFx.playUiClick();
                onNavigate(link.href);
              }}
              className="px-4 py-3 rounded-2xl bg-white border border-slate-200 font-semibold text-slate-800 hover:text-cyan-800"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
