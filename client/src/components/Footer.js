import React from 'react';
import { Link } from 'react-router-dom';

const stack = ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'REST API'];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 text-[11px] font-black text-white">
              DA
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">DevAssess Pro</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            An open-source technical assessment platform: QCM quizzes, logical analysis puzzles and
            engineering case studies.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Assess</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link to="/quiz" className="transition hover:text-brand-500">
                All categories
              </Link>
            </li>
            <li>
              <Link to="/quiz/dsa" className="transition hover:text-brand-500">
                DSA quiz
              </Link>
            </li>
            <li>
              <Link to="/quiz/logical" className="transition hover:text-brand-500">
                Logical analysis
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Learn</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link to="/report" className="transition hover:text-brand-500">
                Technical report
              </Link>
            </li>
            <li>
              <a href="/api/health" className="transition hover:text-brand-500">
                API health
              </a>
            </li>
            <li>
              <a href="/api/report/raw" className="transition hover:text-brand-500">
                Report (raw markdown)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Built with</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5 dark:border-slate-800">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-500 sm:flex-row">
          <p>MIT License &middot; &copy; 2026 DevAssess Pro Contributors</p>
          <p>Built for developers, by developers.</p>
        </div>
      </div>
    </footer>
  );
}
