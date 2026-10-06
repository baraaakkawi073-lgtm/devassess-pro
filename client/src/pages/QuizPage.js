import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import CategoryCard from '../components/CategoryCard';
import QuizEngine from '../components/QuizEngine';
import { ArrowLeftIcon, XIcon } from '../components/icons';

function ErrorPanel({ message, onRetry, onBack }) {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-lg card p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400">
          <XIcon className="h-6 w-6" />
        </span>
        <h1 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Something went wrong</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{message}</p>
        <div className="mt-6 flex justify-center gap-3">
          {onRetry && (
            <button type="button" onClick={onRetry} className="btn btn-primary">
              Try again
            </button>
          )}
          <Link to="/quiz" className="btn btn-secondary">
            <ArrowLeftIcon className="h-4 w-4" />
            All categories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function QuizPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [quizError, setQuizError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    api
      .getCategories()
      .then((payload) => {
        if (active) setCategories(payload.categories);
      })
      .catch((err) => {
        if (active) setCategoryError(err.message);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!categoryId) {
      setQuiz(null);
      setQuizError(null);
      return;
    }

    let active = true;
    setQuiz(null);
    setQuizError(null);

    api
      .getQuestions(categoryId)
      .then((payload) => {
        if (active) setQuiz(payload);
      })
      .catch((err) => {
        if (active) setQuizError(err.message);
      });

    return () => {
      active = false;
    };
  }, [categoryId, reloadKey]);

  if (!categoryId) {
    if (categoryError) {
      return <ErrorPanel message={categoryError} onRetry={() => window.location.reload()} />;
    }

    return (
      <div className="container-page py-10 sm:py-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Choose a quiz track
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Each track contains multiple-choice questions with instant scoring and written
            explanations. Score 70% or more to pass.
          </p>
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
        </div>
      </div>
    );
  }

  if (quizError) {
    return (
      <ErrorPanel
        message={quizError}
        onRetry={() => setReloadKey((key) => key + 1)}
        onBack={() => navigate('/quiz')}
      />
    );
  }

  if (!quiz) {
    return (
      <div className="container-page py-10">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="skeleton h-16" />
          <div className="skeleton h-80" />
        </div>
      </div>
    );
  }

  return (
    <QuizEngine
      category={quiz.category}
      questions={quiz.questions}
      onExit={() => navigate('/quiz')}
    />
  );
}
