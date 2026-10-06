import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { api } from '../api';
import { DocumentIcon, XIcon } from '../components/icons';

export default function ReportPage() {
  const [state, setState] = useState({ status: 'loading', markdown: null, title: '', source: '' });

  useEffect(() => {
    let active = true;

    api
      .getReport()
      .then((payload) => {
        if (!active) return;
        setState({
          status: 'ready',
          markdown: payload.markdown,
          title: payload.title,
          source: payload.source,
        });
      })
      .catch((err) => {
        if (!active) return;
        setState({ status: 'error', markdown: null, title: '', source: '', message: err.message });
      });

    return () => {
      active = false;
    };
  }, []);

  if (state.status === 'loading') {
    return (
      <div className="container-page py-10">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="skeleton h-24" />
          <div className="skeleton h-96" />
        </div>
      </div>
    );
  }

  if (state.status === 'error') {
    return (
      <div className="container-page py-16">
        <div className="mx-auto max-w-lg card p-8 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400">
            <XIcon className="h-6 w-6" />
          </span>
          <h1 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
            Report unavailable
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{state.message}</p>
          <a href="/api/report/raw" className="btn btn-secondary mt-6">
            Open raw markdown
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <header className="card overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-brand-500 via-violet-500 to-fuchsia-500" />
          <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <DocumentIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Technical report &amp; case study
                </p>
                <h1 className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">
                  {state.title}
                </h1>
                <p className="mt-1 font-mono text-xs text-slate-400">{state.source}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button type="button" onClick={() => window.print()} className="btn btn-secondary">
                Print
              </button>
              <a href="/api/report/raw" className="btn btn-primary" download>
                Raw markdown
              </a>
            </div>
          </div>
        </header>

        <article className="card mt-6 px-6 py-8 sm:px-10 sm:py-10">
          <div className="prose prose-slate prose-headings:scroll-mt-24 prose-a:text-brand-600 dark:prose-invert dark:prose-a:text-brand-400 max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ node, ...props }) => <a {...props} target="_blank" rel="noreferrer" />,
              }}
            >
              {state.markdown}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
