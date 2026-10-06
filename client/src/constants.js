export const CATEGORY_ACCENTS = {
  dsa: {
    gradient: 'from-indigo-500 to-violet-500',
    soft: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300',
    ring: 'ring-indigo-500/40',
    bar: 'bg-indigo-500',
  },
  oop: {
    gradient: 'from-violet-500 to-fuchsia-500',
    soft: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300',
    ring: 'ring-violet-500/40',
    bar: 'bg-violet-500',
  },
  'web-frontend': {
    gradient: 'from-sky-500 to-cyan-500',
    soft: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300',
    ring: 'ring-sky-500/40',
    bar: 'bg-sky-500',
  },
  mern: {
    gradient: 'from-emerald-500 to-teal-500',
    soft: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300',
    ring: 'ring-emerald-500/40',
    bar: 'bg-emerald-500',
  },
  aspnet: {
    gradient: 'from-blue-500 to-indigo-500',
    soft: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300',
    ring: 'ring-blue-500/40',
    bar: 'bg-blue-500',
  },
  logical: {
    gradient: 'from-amber-500 to-orange-500',
    soft: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300',
    ring: 'ring-amber-500/40',
    bar: 'bg-amber-500',
  },
};

export const DIFFICULTY_STYLES = {
  easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  hard: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
};

export function accentFor(categoryId) {
  return CATEGORY_ACCENTS[categoryId] || CATEGORY_ACCENTS.dsa;
}
