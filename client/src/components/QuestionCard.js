import React from 'react';
import { DIFFICULTY_STYLES } from '../constants';
import { CheckIcon, XIcon } from './icons';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function optionClasses(index, selected, result) {
  const base =
    'flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:cursor-default ';
  const isSelected = selected === index;

  if (!result) {
    if (isSelected) {
      return (
        base +
        'border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-500 dark:bg-brand-500/10 dark:text-brand-300'
      );
    }
    return (
      base +
      'border-slate-200 bg-white text-slate-700 hover:border-brand-400 hover:bg-brand-50/60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800/70'
    );
  }

  const isCorrectAnswer = index === result.correctIndex;
  const isWrongPick = isSelected && !result.correct;

  if (isCorrectAnswer) {
    return (
      base +
      'border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-300'
    );
  }
  if (isWrongPick) {
    return (
      base +
      'border-rose-500 bg-rose-50 text-rose-800 ring-1 ring-rose-500 dark:bg-rose-500/10 dark:text-rose-300'
    );
  }
  return (
    base +
    'border-slate-200 bg-white text-slate-400 opacity-75 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-500'
  );
}

export default function QuestionCard({ question, number, total, selected, result, checking, onSelect }) {
  const difficultyClass =
    DIFFICULTY_STYLES[question.difficulty] || DIFFICULTY_STYLES.medium;

  return (
    <article className="card overflow-hidden animate-fade-up" key={question.id}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-6 py-4 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
            Q{number}/{total}
          </span>
          <span className="chip">{question.topic}</span>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${difficultyClass}`}
        >
          {question.difficulty}
        </span>
      </div>

      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold leading-relaxed text-slate-900 dark:text-white">
          {question.question}
        </h2>

        <div className="mt-5 space-y-2.5">
          {question.options.map((option, index) => {
            const isSelected = selected === index;
            const isCorrectAnswer = Boolean(result) && index === result.correctIndex;
            const isWrongPick = Boolean(result) && isSelected && !result.correct;

            return (
              <button
                key={option}
                type="button"
                onClick={() => onSelect(index)}
                disabled={Boolean(result) || checking}
                aria-pressed={isSelected}
                className={optionClasses(index, selected, result)}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-300 font-mono text-xs font-bold dark:border-slate-600">
                  {LETTERS[index]}
                </span>
                <span className="flex-1">{option}</span>
                {isCorrectAnswer && (
                  <CheckIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                )}
                {isWrongPick && <XIcon className="h-5 w-5 text-rose-600 dark:text-rose-400" />}
              </button>
            );
          })}
        </div>

        {checking && (
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="h-2 w-2 animate-ping rounded-full bg-brand-500" />
            Verifying answer with the scoring engine...
          </p>
        )}

        {result && (
          <div
            className={`mt-5 rounded-xl border p-4 ${
              result.correct
                ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10'
                : 'border-rose-200 bg-rose-50 dark:border-rose-500/30 dark:bg-rose-500/10'
            }`}
          >
            <p
              className={`flex items-center gap-2 text-sm font-bold ${
                result.correct
                  ? 'text-emerald-700 dark:text-emerald-300'
                  : 'text-rose-700 dark:text-rose-300'
              }`}
            >
              {result.correct ? <CheckIcon className="h-4 w-4" /> : <XIcon className="h-4 w-4" />}
              {result.correct ? 'Correct' : 'Incorrect'}
              <span className="ml-auto text-xs font-semibold opacity-70">
                +{result.points} pt
              </span>
            </p>

            {!result.correct && (
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                Correct answer:{' '}
                <strong>
                  {LETTERS[result.correctIndex]}. {question.options[result.correctIndex]}
                </strong>
              </p>
            )}

            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {result.explanation}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
