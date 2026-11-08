import { ChevronDown } from 'lucide-react';
import { FAQ } from '../../data/companySite';
import { soundFx } from '../SoundEffects';

export function FaqList({ questions }: { questions?: readonly string[] }) {
  const items = questions ? FAQ.filter((item) => questions.includes(item.q)) : FAQ;

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <details
          key={item.q}
          open={idx === 0}
          className="group rounded-2xl bg-white border border-slate-200 shadow-xs open:shadow-sm"
        >
          <summary
            className="cursor-pointer list-none px-4 sm:px-5 py-4 font-bold text-slate-900 text-sm sm:text-base leading-snug [&::-webkit-details-marker]:hidden"
            onClick={() => soundFx.playUiClick()}
          >
            <span className="flex items-start justify-between gap-4">
              <span>{item.q}</span>
              <ChevronDown className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5 transition-transform group-open:rotate-180" />
            </span>
          </summary>
          <div className="px-4 sm:px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
