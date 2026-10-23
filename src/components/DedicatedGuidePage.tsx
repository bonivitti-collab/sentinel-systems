import React from 'react';
import { ArrowLeft, Clock, Calendar, MessageCircle, BookOpen } from 'lucide-react';
import type { GuideItem } from '../data/guidesData';
import { soundFx } from './SoundEffects';

interface DedicatedGuidePageProps {
  guide: GuideItem;
  onBack: () => void;
  onOpenContact: (plan?: string) => void;
}

export const DedicatedGuidePage: React.FC<DedicatedGuidePageProps> = ({ guide, onBack, onOpenContact }) => {
  const whatsappUrl = `https://wa.me/5522999726069?text=${encodeURIComponent(`Olá! Li o guia "${guide.title}" no site da Sentinel e gostaria de tirar uma dúvida.`)}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => {
            soundFx.playUiClick();
            onBack();
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-cyan-700 mb-8 p-2 rounded-lg hover:bg-slate-200/60 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Página Inicial</span>
        </button>

        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-xs mb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              Guia Estratégico Sentinel
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {guide.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {guide.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8 pb-8 border-b border-slate-100">
            {guide.headline}
          </p>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {guide.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-cyan-50/50 p-6 sm:p-8 rounded-2xl border border-cyan-200/60">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Quer aplicar isso no seu comércio sem complicação?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                A Sentinel Systems cuida do seu site no Google e robô no WhatsApp com mensalidades a partir de R$ 149/mês.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  soundFx.playUiClick();
                  onOpenContact(`Leitor do Guia: ${guide.title}`);
                }}
                className="px-5 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer text-center"
              >
                Ver Planos
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playUiClick()}
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
