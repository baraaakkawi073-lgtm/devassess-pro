import dsa from './dsa.js';
import oop from './oop.js';
import webFrontend from './web-frontend.js';
import mern from './mern.js';
import aspnet from './aspnet.js';
import logical from './logical.js';

const banks = {
  dsa: {
    meta: {
      id: 'dsa',
      code: 'DSA',
      title: 'Data Structures & Algorithms',
      description:
        'Complexity analysis, linear structures, trees, graphs and classic algorithm-design techniques.',
    },
    questions: dsa,
  },
  oop: {
    meta: {
      id: 'oop',
      code: 'OOP',
      title: 'Object-Oriented Programming',
      description:
        'The four pillars, SOLID principles, inheritance vs. composition and compile-time vs. runtime polymorphism.',
    },
    questions: oop,
  },
  'web-frontend': {
    meta: {
      id: 'web-frontend',
      code: 'WEB',
      title: 'HTML, CSS & JavaScript',
      description:
        'Semantic markup, the box model, flexbox, scoping, events and modern browser APIs.',
    },
    questions: webFrontend,
  },
  mern: {
    meta: {
      id: 'mern',
      code: 'MERN',
      title: 'MERN Stack Development',
      description:
        'MongoDB, Express, React and Node.js - data modelling, REST APIs, hooks and production auth.',
    },
    questions: mern,
  },
  aspnet: {
    meta: {
      id: 'aspnet',
      code: 'ASPX',
      title: 'ASP.NET Core & C#',
      description:
        'Middleware pipeline, dependency injection, routing, EF Core and modern C# language features.',
    },
    questions: aspnet,
  },
  logical: {
    meta: {
      id: 'logical',
      code: 'LOG',
      title: 'Logical Analysis & Puzzles',
      description:
        'Number series, syllogisms, spatial reasoning and coding puzzles with instant scoring.',
    },
    questions: logical,
  },
};

export function listCategories() {
  return Object.values(banks).map(({ meta, questions }) => ({
    ...meta,
    questionCount: questions.length,
    topics: [...new Set(questions.map((question) => question.topic))],
  }));
}

export function getCategory(categoryId) {
  return banks[categoryId] || null;
}

export function getQuestion(category, questionId) {
  return category.questions.find((question) => question.id === questionId) || null;
}
