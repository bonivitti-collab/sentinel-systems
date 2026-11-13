import { useState, type FormEvent } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { PageHero } from '../components/site/PageHero';
import { NEUTRAL_WHATSAPP_TEXT, SITE, whatsappHref } from '../data/companySite';
import { soundFx } from '../components/SoundEffects';

const INTERESTS = [
  'Ser encontrado no Google e no Maps',
  'Site para o cliente ligar e chamar',
  'Mais mensagens no WhatsApp',
  'Redes sociais',
  'Planilhas',
  'Ainda não sei — quero conversar',
];

export function ContactPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [details, setDetails] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    soundFx.playUiClick();
    const text = [
      'Olá, equipe da Sentinel Systems!',
      '',
      `Meu nome é ${name || 'não informado'}.`,
      `Empresa: ${company || 'não informada'}.`,
      `Cidade: ${city || 'não informada'}.`,
      `Quero conversar sobre: ${interest}.`,
      details ? `Detalhes: ${details}` : 'Quero conversar sobre o meu negócio e pedir uma proposta.',
    ].join('\n');
    window.open(whatsappHref(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageHero
        path="/contato"
        eyebrow="Contato no Brasil"
        title={
          <>
            Fale sobre criação de site e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
              Google Meu Negócio.
            </span>
          </>
        }
        description="Os canais são os que este site já usa: WhatsApp e e-mail. O formulário só monta a mensagem e abre o WhatsApp. Nada é enviado para outro lugar."
      />

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            <article className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900">Canais</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">WhatsApp</p>
                  <a
                    href={whatsappHref(NEUTRAL_WHATSAPP_TEXT)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-black text-slate-900 hover:text-emerald-700 break-words"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">E-mail</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-cyan-700 break-all"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Horário já publicado</p>
                  <p className="text-sm text-slate-700 font-semibold">Segunda a sexta: 08h às 19h</p>
                  <p className="text-sm text-slate-700 font-semibold">Sábado: 09h às 14h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Atendimento</p>
                  <p className="text-sm text-slate-700 font-semibold">Digital, à distância, para negócios no Brasil.</p>
                </div>
              </div>
            </article>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4"
          >
            <h2 className="text-xl font-extrabold text-slate-900">Abrir conversa no WhatsApp</h2>
            <label className="block">
              <span className="text-xs font-bold text-slate-700">Seu nome</span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400"
              />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-bold text-slate-700">Empresa</span>
                <input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold text-slate-700">Cidade</span>
                <input
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-bold text-slate-700">Assunto</span>
              <select
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400"
              >
                {INTERESTS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-bold text-slate-700">Como o cliente chega hoje</span>
              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400"
              />
            </label>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Continuar no WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
