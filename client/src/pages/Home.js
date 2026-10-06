import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import CategoryCard from '../components/CategoryCard';
import { ArrowRightIcon, BoltIcon, ChartIcon, CodeIcon, DocumentIcon, PuzzleIcon } from '../components/icons';

const features = [
  {
    icon: BoltIcon,
    title: 'Instant scoring engine',
    text: 'Every answer is verified server-side the moment you pick it, with a full explanation before you move on.',
  },
  {
    icon: CodeIcon,
    title: 'Six technical tracks',
    text: 'DSA, OOP, HTML/CSS/JS, MERN, ASP.NET Core & C#, plus a dedicated logical analysis puzzle set.',
  },
  {
    icon: DocumentIcon,
    title: 'Technical case study',
    text: 'A full engineering report covering a real-world architecture, ADRs, security, scaling and CI/CD.',
  },
  {
    icon: PuzzleIcon,
    title: 'Logical analysis drills',
    text: 'Number series, syllogisms, spatial reasoning and coding puzzles that train structured thinking.',
  },
];

const steps = [
  { title: '1. Pick a track', text: 'Choose from six curated question banks, each with weighted difficulty levels.' },
  { title: '2. Answer with feedback', text: 'The API grades each selection instantly and explains the reasoning behind it.' },
  { title: '3. Review your report', text: 'Get a scored breakdown, a full answer review and a pass/fail verdict at 70%.' },
];

export default function Home() {
  const [categories, setCategories] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(null);

  useEffect(() => {
    let active = true;
    api
      .getCategories()
      .then((payload) => {
        if (!active) return;
        setCategories(payload.categories);
        setTotalQuestions(payload.categories.reduce((sum, item) => sum + item.questionCount, 0));
      })
      .catch(() => {
        if (active) setCategories([]);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.14),transparent_55%)]" />
        <div className="container-page relative py-16 sm:py-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Open source &middot; MIT licensed &middot; 100% self-hostable
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl sm:leading-[1.1]">
              Assess. Analyze.
              <span className="bg-gradient-to-r from-brand-500 to-violet-500 bg-clip-text text-transparent">
                {' '}
                Advance.
              </span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              DevAssess Pro is a production-ready assessment platform combining a QCM quiz engine,
              a logical analysis lab and a full technical case study - built with React, Tailwind
              CSS and a Node.js REST API.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quiz" className="btn btn-primary px-5 py-3 text-base">
                Start a quiz
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/report" className="btn btn-secondary px-5 py-3 text-base">
                Read the case study
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: 'Quiz tracks', value: categories ? categories.length : '-' },
                { label: 'Questions', value: totalQuestions !== null ? totalQuestions : '-' },
                { label: 'Pass mark', value: '70%' },
                { label: 'Feedback', value: 'Instant' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Quiz tracks
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Curated question banks with instant, server-side scoring and written explanations.
            </p>
          </div>
          <Link to="/quiz" className="btn btn-secondary">
            View all
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories === null &&
            Array.from({ length: 6 }).map((_, position) => (
              <div key={position} className="skeleton h-64" />
            ))}

          {categories &&
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}

          {categories && categories.length === 0 && (
            <div className="card col-span-full p-8 text-center text-sm text-slate-500">
              The API is unreachable right now. Start the server with{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-800">
                npm run dev
              </code>{' '}
              and refresh this page.
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
        <div className="container-page py-14">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Why DevAssess Pro
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              How it works
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              The React client never sees correct answers. Questions are served without solutions,
              each pick is verified by the API, and the final grade is computed server-side.
            </p>
            <Link to="/report" className="btn btn-secondary mt-6">
              <ChartIcon className="h-4 w-4" />
              Architecture deep-dive
            </Link>
          </div>

          <ol className="space-y-4">
            {steps.map((step) => (
              <li key={step.title} className="card flex items-start gap-4 p-5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 text-xs font-black text-white">
                  {step.title.split('.')[0]}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {step.title.split('. ')[1]}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
