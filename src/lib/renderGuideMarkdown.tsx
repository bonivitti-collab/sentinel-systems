import type { MouseEvent, ReactNode } from 'react';

export function markdownToPlain(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];
  for (const line of lines) {
    if (line.trim() === '') {
      out.push('');
      continue;
    }
    if (isSeparatorRow(line)) continue;
    let text = line;
    if (text.startsWith('#')) text = text.replace(/^#+\s+/, '');
    else if (text.startsWith('>')) text = text.replace(/^>\s?/, '');
    else if (text.startsWith('|')) {
      text = splitRow(text).filter(Boolean).join(' ');
    } else if (text.startsWith('- [ ] ')) text = text.slice(6);
    else if (text.startsWith('- ')) text = text.slice(2);
    else if (/^\d+\. /.test(text)) text = text.replace(/^\d+\. /, '');
    out.push(stripInline(text));
  }
  return out.join('\n').replace(/\s+/g, ' ').trim();
}

export function stripInline(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([\s\S]+?)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

function splitRow(line: string): string[] {
  let inner = line.trim();
  if (inner.startsWith('|')) inner = inner.slice(1);
  if (inner.endsWith('|')) inner = inner.slice(0, -1);
  return inner.split('|').map((cell) => cell.trim());
}

function isSeparatorRow(line: string): boolean {
  if (!line.trim().startsWith('|')) return false;
  const cells = splitRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

type ListKind = 'check' | 'ul' | 'ol';

function listKind(line: string): ListKind | null {
  if (line.startsWith('- [ ] ')) return 'check';
  if (line.startsWith('- ')) return 'ul';
  if (/^\d+\. /.test(line)) return 'ol';
  return null;
}

function listText(line: string, kind: ListKind): string {
  if (kind === 'check') return line.slice(6);
  if (kind === 'ul') return line.slice(2);
  return line.replace(/^\d+\. /, '');
}

function renderInline(text: string, key: string, onNavigate: (path: string) => void): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([\s\S]+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let index = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={`${key}-b${index}`} className="font-semibold text-slate-900">
          {renderInline(match[1], `${key}-b${index}`, onNavigate)}
        </strong>,
      );
    } else if (match[2] !== undefined) {
      nodes.push(
        <code key={`${key}-c${index}`} className="font-mono text-[0.92em]">
          {match[2]}
        </code>,
      );
    } else {
      const label = match[3] ?? '';
      const href = match[4] ?? '';
      const internal = href.startsWith('/') && !href.startsWith('//');
      nodes.push(
        <a
          key={`${key}-a${index}`}
          href={href}
          onClick={
            internal
              ? (event: MouseEvent<HTMLAnchorElement>) => {
                  event.preventDefault();
                  onNavigate(href);
                }
              : undefined
          }
          target={internal ? undefined : '_blank'}
          rel={internal ? undefined : 'noopener noreferrer'}
          className="font-semibold text-cyan-800 underline decoration-cyan-200 underline-offset-2 hover:text-cyan-950"
        >
          {label}
        </a>,
      );
    }
    last = start + match[0].length;
    index += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function renderGuideMarkdown(markdown: string, onNavigate: (path: string) => void): ReactNode[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let index = 0;
  let cursor = 0;

  const push = (node: ReactNode) => {
    blocks.push(node);
    index += 1;
  };

  while (cursor < lines.length) {
    const line = lines[cursor];
    if (line.trim() === '') {
      cursor += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      push(
        <h3 key={`h3-${index}`} className="text-xl font-extrabold text-slate-900 mt-8 mb-3">
          {renderInline(line.slice(4), `h3-${index}`, onNavigate)}
        </h3>,
      );
      cursor += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      push(
        <h2 key={`h2-${index}`} className="text-2xl font-extrabold text-slate-900 mt-10 mb-3">
          {renderInline(line.slice(3), `h2-${index}`, onNavigate)}
        </h2>,
      );
      cursor += 1;
      continue;
    }
    if (line.startsWith('# ')) {
      push(
        <h1 key={`h1-${index}`} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
          {renderInline(line.slice(2), `h1-${index}`, onNavigate)}
        </h1>,
      );
      cursor += 1;
      continue;
    }

    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (cursor < lines.length && lines[cursor].startsWith('|')) {
        if (!isSeparatorRow(lines[cursor])) rows.push(splitRow(lines[cursor]));
        cursor += 1;
      }
      const [head, ...body] = rows;
      push(
        <div key={`table-${index}`} className="my-6 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-sm text-slate-700">
            {head && (
              <thead>
                <tr className="bg-slate-50">
                  {head.map((cell, cellIndex) => (
                    <th key={cellIndex} scope="col" className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900 align-top">
                      {renderInline(cell, `th-${index}-${cellIndex}`, onNavigate)}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-slate-200 px-3 py-2 align-top">
                      {renderInline(cell, `td-${index}-${rowIndex}-${cellIndex}`, onNavigate)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (line.startsWith('>')) {
      const quote: string[] = [];
      while (cursor < lines.length && lines[cursor].startsWith('>')) {
        quote.push(lines[cursor].replace(/^>\s?/, ''));
        cursor += 1;
      }
      push(
        <blockquote key={`q-${index}`} className="my-4 border-l-4 border-cyan-200 pl-4 text-slate-700 whitespace-pre-line">
          {renderInline(quote.join('\n'), `q-${index}`, onNavigate)}
        </blockquote>,
      );
      continue;
    }

    const kind = listKind(line);
    if (kind) {
      const items: string[] = [];
      while (cursor < lines.length && listKind(lines[cursor]) === kind) {
        items.push(listText(lines[cursor], kind));
        cursor += 1;
      }
      const listClass = 'my-4 space-y-2 pl-5 text-slate-700';
      const children = items.map((item, itemIndex) => (
        <li key={itemIndex}>{renderInline(item, `li-${index}-${itemIndex}`, onNavigate)}</li>
      ));
      if (kind === 'ol') push(<ol key={`ol-${index}`} className={`${listClass} list-decimal`}>{children}</ol>);
      else push(<ul key={`ul-${index}`} className={`${listClass} list-disc`}>{children}</ul>);
      continue;
    }

    push(
      <p key={`p-${index}`} className="my-4 text-base text-slate-700 leading-relaxed">
        {renderInline(line, `p-${index}`, onNavigate)}
      </p>,
    );
    cursor += 1;
  }

  return blocks;
}
