import React, { useMemo, useState } from 'react';
import { api } from '../api';
import { accentFor } from '../constants';
import QuestionCard from './QuestionCard';
import Results from './Results';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from './icons';

export default function QuizEngine({ category, questions, onExit }) {
  const accent = accentFor(category.id);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [checking, setChecking] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [finalResult, setFinalResult] = useState(null);

  const question = questions[index];
  const result = results[question.id];
  const answeredCount = Object.keys(results).length;
  const correctCount = useMemo(
    () => Object.values(results).filter((entry) => entry.correct).length,
    [results],
  );
  const allAnswered = answeredCount === questions.length;
  const isLast = index === questions.length - 1;
  const progress = Math.round((answeredCount / questions.length) * 100);

  async function handleSelect(optionIndex) {
    if (result || checking) return;

    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
    setChecking(true);
    setError(null);

    try {
      const payload = await api.checkAnswer(category.id, question.id, optionIndex);
      setResults((prev) => ({ ...prev, [question.id]: payload }));
    } catch (err) {
      setAnswers((prev) => {
        const next = { ...prev };
        delete next[question.id];
        return next;
      });
      setError(err.message || 'Could not verify the answer. Please try again.');
    } finally {
      setChecking(false);
    }
  }

  async function handleFinish() {
    setSubmitting(true);
    setError(null);
    try {
      const payload = await api.evaluate(category.id, answers);
      setFinalResult(payload);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err.message || 'Could not submit the quiz. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  function handleRetry() {
    setIndex(0);
    setAnswers({});
    setResults({});
    setFinalResult(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (finalResult) {
    return <Results category={category} result={finalResult} onRetry={handleRetry} onExit={onExit} />;
  }

  const canProceed = Boolean(result);

  return (
    <div className="container-page py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent.gradient} text-[11px] font-black text-white shadow`}
            >
              {category.code}
            </span>
            <div>
              <h1 className="text-base font-bold text-slate-900 dark:text-white">
                {category.title}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Instant scoring &middot; pass mark {70}%
              </p>
            </div>
          </div>

          <button type="button" onClick={onExit} className="btn btn-ghost text-xs">
            <ArrowLeftIcon className="h-4 w-4" />
            All categories
          </button>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
            <span>
              Progress: {answeredCount}/{questions.length} answered
            </span>
            <span>
              Correct: {correctCount}/{answeredCount || 0}
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${accent.gradient} transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {error && (
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300">
            <XIcon className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-6">
          <QuestionCard
            question={question}
            number={index + 1}
            total={questions.length}
            selected={answers[question.id]}
            result={result}
            checking={checking}
            onSelect={handleSelect}
          />
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
            disabled={index === 0}
            className="btn btn-secondary"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Previous
          </button>

          {isLast ? (
            <button
              type="button"
              onClick={handleFinish}
              disabled={!allAnswered || submitting}
              className="btn btn-primary"
            >
              {submitting ? 'Scoring...' : 'View results'}
              {!submitting && <ArrowRightIcon className="h-4 w-4" />}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIndex((current) => current + 1)}
              disabled={!canProceed}
              className="btn btn-primary"
            >
              Next question
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
