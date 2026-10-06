import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/quiz', label: 'Quiz' },
  { to: '/report', label: 'Case Study' },
];

function linkClasses(isActive) {
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition',
    isActive
      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white',
  ].join(' ');
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-xs font-black tracking-tight text-white shadow-lg shadow-brand-600/30">
            DA
          </span>
          <span className="text-[15px] font-bold tracking-tight text-slate-900 dark:text-white">
            DevAssess <span className="text-brand-500">Pro</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => linkClasses(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/quiz" className="btn btn-primary hidden sm:inline-flex">
            Start quiz
          </Link>
        </div>
      </div>

      <nav className="container-page flex items-center gap-1 overflow-x-auto pb-2 sm:hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => linkClasses(isActive)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
