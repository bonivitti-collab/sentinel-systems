import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { jsonLdFor } from '../src/data/companySite.ts';
import { PUBLISHED_GUIDES } from '../src/data/publishedGuides.ts';
import { markdownToPlain, renderGuideMarkdown } from '../src/lib/renderGuideMarkdown.tsx';

let failed = false;
for (const guide of PUBLISHED_GUIDES) {
  const html = renderToStaticMarkup(<>{renderGuideMarkdown(guide.markdown, () => {})}</>);
  const text = html
    .replace(/<\/?(strong|a|code|em)\b[^>]*>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
  const plain = markdownToPlain(guide.markdown);
  if (text !== plain) {
    failed = true;
    let index = 0;
    while (index < text.length && index < plain.length && text[index] === plain[index]) index += 1;
    console.error('MISMATCH', guide.slug, 'at', index);
    console.error('HTML', text.slice(Math.max(0, index - 80), index + 160));
    console.error('MD  ', plain.slice(Math.max(0, index - 80), index + 160));
  } else {
    console.log('ok', guide.slug, text.length);
  }
  const ld = JSON.stringify(jsonLdFor(guide.slug));
  if (ld.includes('"Product"') || ld.includes('"Offer"')) {
    failed = true;
    console.error('schema product', guide.slug);
  }
  for (const item of guide.faq) {
    if (!text.includes(item.question)) {
      failed = true;
      console.error('missing question', item.question);
    }
  }
}
if (failed) process.exit(1);
