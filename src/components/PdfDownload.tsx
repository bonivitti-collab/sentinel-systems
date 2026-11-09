import { GUIDE_PDF_PATH } from '../data/publishedGuides';

export function PdfDownload() {
  return (
    <aside className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6" aria-label="Guia em PDF">
      <p className="text-sm text-slate-600">5 passos para vender mais online</p>
      <a
        href={GUIDE_PDF_PATH}
        download
        className="mt-3 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-cyan-800 hover:text-cyan-950"
      >
        Baixe o guia em PDF
      </a>
    </aside>
  );
}
