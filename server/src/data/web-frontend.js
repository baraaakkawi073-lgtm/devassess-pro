export default [
  {
    id: 'web-01',
    topic: 'Semantic HTML',
    difficulty: 'easy',
    question:
      'Which HTML5 element represents the dominant, unique content of a document, excluding headers, footers and sidebars?',
    options: ['<div>', '<main>', '<article>', '<span>'],
    answer: 1,
    explanation:
      '<main> marks the primary content of the page. Exactly one <main> is allowed per document, and it improves screen-reader navigation and SEO.',
  },
  {
    id: 'web-02',
    topic: 'CSS Box Model',
    difficulty: 'easy',
    question: 'With box-sizing: border-box, how is an element\'s declared width interpreted?',
    options: [
      'Content width only; padding and border add to it',
      'Content plus padding plus border fit inside the declared width',
      'Content plus margin fit inside the declared width',
      'The declared width applies only to the border box',
    ],
    answer: 1,
    explanation:
      'border-box makes padding and border part of the declared width, so a width: 300px element with 20px padding still occupies exactly 300px.',
  },
  {
    id: 'web-03',
    topic: 'JavaScript Fundamentals',
    difficulty: 'easy',
    question: 'What is the key difference between == and === in JavaScript?',
    options: [
      '=== compares values only, == also compares references',
      '== compares values with type coercion, === compares values without coercion',
      'They are identical; === is only a stylistic alias',
      '=== throws on mismatched types, == returns false',
    ],
    answer: 1,
    explanation:
      '== performs coercive comparison ("" == 0 is true), while === requires identical type and value, which prevents subtle coercion bugs.',
  },
  {
    id: 'web-04',
    topic: 'JavaScript Fundamentals',
    difficulty: 'easy',
    question: 'What is the block scope of a variable declared with let?',
    options: ['Function scope', 'Global scope', 'Block scope', 'File scope'],
    answer: 2,
    explanation:
      'let is scoped to the nearest enclosing { } block. Unlike var, it is not hoisted to function scope and cannot be redeclared in the same block.',
  },
  {
    id: 'web-05',
    topic: 'CSS Layout',
    difficulty: 'medium',
    question:
      'On a flex container, which property distributes space along the main axis?',
    options: ['align-items', 'justify-content', 'align-content', 'place-self'],
    answer: 1,
    explanation:
      'justify-content works on the main axis (start/end/space-between/center), while align-items positions items on the cross axis.',
  },
  {
    id: 'web-06',
    topic: 'JavaScript in the Browser',
    difficulty: 'medium',
    question: 'Which method stops an event from bubbling further up the DOM tree?',
    options: [
      'event.preventDefault()',
      'event.stopPropagation()',
      'event.stopImmediatePropagation() only',
      'returning false from the handler',
    ],
    answer: 1,
    explanation:
      'stopPropagation() halts bubbling. preventDefault() cancels the default browser action (like following a link) but does not stop propagation.',
  },
  {
    id: 'web-07',
    topic: 'CSS Specificity',
    difficulty: 'medium',
    question: 'Which selector has the highest specificity?',
    options: [
      'A class selector such as .card',
      'An element selector such as p',
      'An inline style attribute such as style="color:red"',
      'A universal selector such as *',
    ],
    answer: 2,
    explanation:
      'Specificity ranks inline styles above IDs, classes and elements. The universal selector contributes zero specificity.',
  },
  {
    id: 'web-08',
    topic: 'Browser APIs',
    difficulty: 'easy',
    question:
      'Which Web API stores string key-value pairs persistently in the browser, even after the tab is closed?',
    options: ['sessionStorage', 'localStorage', 'Cookies only', 'IndexedDB cache API'],
    answer: 1,
    explanation:
      'localStorage persists until explicitly cleared, has roughly a 5 MB quota and is not sent with HTTP requests, unlike cookies.',
  },
  {
    id: 'web-09',
    topic: 'Accessibility',
    difficulty: 'easy',
    question: 'Which attribute on <img> is essential for screen-reader users and broken-image fallbacks?',
    options: ['title', 'alt', 'aria-label only', 'data-desc'],
    answer: 1,
    explanation:
      'alt text conveys the image\'s meaning (or an empty alt="" for decorative images) and is required for WCAG conformance.',
  },
  {
    id: 'web-10',
    topic: 'Responsive Design',
    difficulty: 'medium',
    question: 'What is the primary purpose of a CSS media query?',
    options: [
      'To import a stylesheet conditionally at runtime',
      'To apply styles conditionally based on device or viewport characteristics',
      'To query the DOM for matching elements',
      'To resize images automatically on high-DPI screens',
    ],
    answer: 1,
    explanation:
      '@media rules let a stylesheet activate only when conditions such as min-width, prefers-color-scheme or orientation match, which is the foundation of responsive layouts.',
  },
];
