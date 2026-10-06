import React from 'react';
import { Link } from 'react-router-dom';
import { accentFor } from '../constants';
import { ArrowRightIcon } from './icons';

export default function CategoryCard({ category }) {
  const accent = accentFor(category.id);
  const visibleTopics = category.topics.slice(0, 3);
  const remaining = category.topics.length - visibleTopics.length;

  return (
    <Link
      to={`/quiz/${category.id}`}
      className="group card relative flex flex-col overflow-hidden p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-lg hover:shadow-brand-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.gradient}`} />

      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent.gradient} text-[11px] font-black tracking-tight text-white shadow-md`}
        >
          {category.code}
        </span>
        <span className="chip">{category.questionCount} questions</span>
      </div>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">{category.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {category.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {visibleTopics.map((topic) => (
          <span
            key={topic}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"
          >
            {topic}
          </span>
        ))}
        {remaining > 0 && (
          <span className="rounded-md px-2 py-0.5 text-[11px] font-medium text-slate-400 dark:text-slate-500">
            +{remaining} more
          </span>
        )}
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
        Start quiz
        <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
