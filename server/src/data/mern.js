export default [
  {
    id: 'mern-01',
    topic: 'Stack Fundamentals',
    difficulty: 'easy',
    question: 'What does the acronym MERN stand for?',
    options: [
      'MongoDB, Express, React, Node.js',
      'MySQL, Ember, Redux, nginx',
      'MongoDB, EJS, Rust, Node.js',
      'MariaDB, Express, React, .NET',
    ],
    answer: 0,
    explanation:
      'MERN is MongoDB (document database), Express (HTTP framework), React (UI library) and Node.js (JavaScript runtime).',
  },
  {
    id: 'mern-02',
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which format does MongoDB use to store documents on disk?',
    options: ['Plain XML', 'BSON (Binary JSON)', 'CSV', 'Protocol Buffers'],
    answer: 1,
    explanation:
      'MongoDB stores BSON, a binary-encoded JSON variant that adds types such as ObjectId, Date, Decimal128 and indexed binary data.',
  },
  {
    id: 'mern-03',
    topic: 'React',
    difficulty: 'easy',
    question: 'In React, what are props used for?',
    options: [
      'Mutating a parent component from a child',
      'Passing read-only data from a parent to a child',
      'Storing component-local mutable state',
      'Registering global event listeners',
    ],
    answer: 1,
    explanation:
      'Props flow one way (parent to child) and are treated as read-only, which keeps data flow predictable and easier to debug.',
  },
  {
    id: 'mern-04',
    topic: 'React',
    difficulty: 'medium',
    question: 'Which React hook runs side effects after a component renders?',
    options: ['useMemo', 'useCallback', 'useEffect', 'useReducer'],
    answer: 2,
    explanation:
      'useEffect schedules work (fetching, subscriptions, timers) after paint and its dependency array decides when it re-runs.',
  },
  {
    id: 'mern-05',
    topic: 'Express',
    difficulty: 'medium',
    question: 'What is an Express middleware function?',
    options: [
      'A function that executes during the request-response cycle and can modify req/res or end the response',
      'A function that only runs before the server boots',
      'A database migration utility',
      'A React higher-order component',
    ],
    answer: 0,
    explanation:
      'Middleware runs in a chain for every request, enabling logging, authentication, body parsing, error handling and more before a route responds.',
  },
  {
    id: 'mern-06',
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'In Mongoose, what does a Model get compiled from?',
    options: ['A JSON file', 'A Schema', 'A TypeScript interface', 'A REST route'],
    answer: 1,
    explanation:
      'You define a Schema (structure, validation, defaults, hooks) and Mongoose compiles it into a Model that exposes CRUD operations on a collection.',
  },
  {
    id: 'mern-07',
    topic: 'REST API Design',
    difficulty: 'easy',
    question: 'Which HTTP status code should a REST API return when it successfully creates a resource?',
    options: ['200 OK', '201 Created', '204 No Content', '302 Found'],
    answer: 1,
    explanation:
      '201 Created signals a new resource and conventionally includes a Location header pointing at the created entity.',
  },
  {
    id: 'mern-08',
    topic: 'React',
    difficulty: 'medium',
    question: 'Why does React require a stable, unique key prop when rendering list items?',
    options: [
      'Keys set CSS z-index ordering in the DOM',
      'Keys let React match items across renders so it can update efficiently instead of re-rendering the whole list',
      'Keys are only required for accessibility compliance',
      'Keys enforce TypeScript types at runtime',
    ],
    answer: 1,
    explanation:
      'Without stable keys React falls back to index-based reconciliation, which can reorder state incorrectly and force unnecessary DOM work.',
  },
  {
    id: 'mern-09',
    topic: 'Security',
    difficulty: 'medium',
    question:
      'In a production MERN application, where should the secret used to sign JSON Web Tokens be stored?',
    options: [
      'In a constant inside the React bundle',
      'In a public repository for reproducible builds',
      'In a server-side environment variable or secret manager',
      'In localStorage so the client can verify tokens',
    ],
    answer: 2,
    explanation:
      'Anything shipped to the browser is public. The signing secret must live only on the server, ideally injected through a secret manager or environment variable.',
  },
  {
    id: 'mern-10',
    topic: 'React',
    difficulty: 'medium',
    question: 'What problem does the React Virtual DOM solve?',
    options: [
      'It replaces the browser DOM entirely for better performance',
      'It computes a minimal set of real DOM updates by diffing an in-memory representation',
      'It prevents all re-renders caused by parent components',
      'It caches network responses for offline mode',
    ],
    answer: 1,
    explanation:
      'React renders a lightweight tree, diffs it against the previous one and applies only the changed nodes to the real DOM, which is far cheaper than re-rendering everything.',
  },
];
