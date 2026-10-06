import React from 'react';
import { accentFor } from '../constants';
import { ArrowLeftIcon, CheckIcon, XIcon } from './icons';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function ScoreRing({ percentage, passed }) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative h-40 w-40 shrink-0">
      <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
        <circle
          cx="70"
          cy="70"
          r={radius}
          className="fill-none stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="12"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          className={`fill-none transition-all duration-1000 ${
            passed ? 'stroke-emerald-500' : 'stroke-rose-500'
          }`}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-black text-slate-900 dark:text-white">
          {Math.round(percentage)}%
        </span>
        <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          score
        </span>
      </div>
    </div>
  );
}

export default function Results({ category, result, onRetry, onExit }) {
  const accent = accentFor(category.id);
  const correct = result.score;
  const incorrect = result.total - result.score - result.unanswered.length;
  const unanswered = result.unanswered.length;

  return (
    <div className="container-page py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <section className="card overflow-hidden animate-fade-up">
          <div className={`h-1.5 bg-gradient-to-r ${accent.gradient}`} />
          <div className="flex flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:px-8">
            <ScoreRing percentage={result.percentage} passed={result.passed} />

            <div className="flex-1 text-center sm:text-left">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                  result.passed
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300'
                }`}
              >
                {result.passed ? 'Passed' : 'Not passed'}
              </span>
              <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                {category.title}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                You answered{' '}
                <strong className="text-slate-700 dark:text-slate-200">
                  {correct} of {result.total}
                </strong>{' '}
                questions correctly. Passing score is {result.threshold}%.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-slate-100 px-2 py-3 dark:bg-slate-800">
                  <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                    {correct}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Correct
                  </p>
                </div>
                <div className="rounded-xl bg-slate-100 px-2 py-3 dark:bg-slate-800">
                  <p className="text-lg font-black text-rose-600 dark:text-rose-400">{incorrect}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Incorrect
                  </p>
                </div>
                <div className="rounded-xl bg-slate-100 px-2 py-3 dark:bg-slate-800">
                  <p className="text-lg font-black text-slate-500 dark:text-slate-400">
                    {unanswered}
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Skipped
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-200 px-6 py-5 dark:border-slate-800 sm:px-8">
            <button type="button" onClick={onRetry} className="btn btn-primary">
              Retake quiz
            </button>
            <button type="button" onClick={onExit} className="btn btn-secondary">
              <ArrowLeftIcon className="h-4 w-4" />
              Choose another category
            </button>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Answer review
          </h2>

          <ol className="mt-4 space-y-4">
            {result.breakdown.map((entry, position) => (
              <li key={entry.id} className="card overflow-hidden">
                <div className="flex items-start gap-3 px-5 py-4">
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      entry.correct
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400'
                        : 'bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400'
                    }`}
                  >
                    {entry.correct ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <XIcon className="h-3.5 w-3.5" />
                    )}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        Q{position + 1}
                      </span>
                      <span className="chip">{entry.topic}</span>
                    </div>

                    <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-900 dark:text-white">
                      {entry.question}
                    </p>

                    <div className="mt-3 space-y-1.5 text-sm">
                      <p
                        className={
                          entry.correct
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-rose-600 dark:text-rose-400'
                        }
                      >
                        Your answer:{' '}
                        <strong>
                          {entry.selected === null
                            ? 'Not answered'
                            : `${LETTERS[entry.selected]}. ${entry.options[entry.selected]}`}
                        </strong>
                      </p>
                      {!entry.correct && (
                        <p className="text-emerald-600 dark:text-emerald-400">
                          Correct answer:{' '}
                          <strong>
                            {LETTERS[entry.correctIndex]}. {entry.options[entry.correctIndex]}
                          </strong>
                        </p>
                      )}
                      <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                        {entry.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
