export default [
  {
    id: 'dsa-01',
    topic: 'Complexity Analysis',
    difficulty: 'medium',
    question: 'What is the worst-case time complexity of binary search on a sorted array of n elements?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    answer: 1,
    explanation:
      'Binary search halves the remaining interval after every comparison, so at most log2(n) comparisons are needed.',
  },
  {
    id: 'dsa-02',
    topic: 'Linear Data Structures',
    difficulty: 'easy',
    question: 'Which data structure follows the First-In-First-Out (FIFO) principle?',
    options: ['Stack', 'Queue', 'Heap', 'Binary search tree'],
    answer: 1,
    explanation:
      'A queue enqueues elements at the rear and dequeues from the front, so the first element in is the first out. A stack is LIFO.',
  },
  {
    id: 'dsa-03',
    topic: 'Sorting Algorithms',
    difficulty: 'medium',
    question: 'What is the worst-case time complexity of Quicksort?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
    answer: 2,
    explanation:
      'When the pivot repeatedly leaves an empty partition (for example a sorted array with a first-element pivot), Quicksort degrades to O(n²).',
  },
  {
    id: 'dsa-04',
    topic: 'Trees',
    difficulty: 'easy',
    question: 'Which traversal of a Binary Search Tree visits the keys in ascending sorted order?',
    options: ['Pre-order', 'Post-order', 'In-order', 'Level-order'],
    answer: 2,
    explanation:
      'In-order visits left subtree, then node, then right subtree. Because every BST node is greater than its left subtree and smaller than its right subtree, this yields sorted output.',
  },
  {
    id: 'dsa-05',
    topic: 'Caching & Hashing',
    difficulty: 'medium',
    question:
      'Which combination is commonly used to implement an LRU (Least Recently Used) cache with O(1) operations?',
    options: [
      'Two stacks and an array',
      'A hash map plus a doubly linked list',
      'A min-heap plus a stack',
      'A dynamic array with linear search',
    ],
    answer: 1,
    explanation:
      'The hash map provides O(1) key lookup while the doubly linked list maintains recency order, allowing O(1) promotion and eviction of the tail node.',
  },
  {
    id: 'dsa-06',
    topic: 'Graphs',
    difficulty: 'easy',
    question: 'Which graph traversal algorithm uses a queue to explore vertices level by level?',
    options: [
      'Depth-First Search',
      'Breadth-First Search',
      "Dijkstra's algorithm",
      'Topological sort',
    ],
    answer: 1,
    explanation:
      'Breadth-First Search enqueues a vertex when first discovered, so all vertices at distance k are visited before any vertex at distance k + 1.',
  },
  {
    id: 'dsa-07',
    topic: 'Divide & Conquer',
    difficulty: 'medium',
    question: 'What is the auxiliary space complexity of standard Merge Sort?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    answer: 2,
    explanation:
      'Merging requires a temporary buffer holding all n elements. The recursion stack only accounts for O(log n), but the merge buffer dominates at O(n).',
  },
  {
    id: 'dsa-08',
    topic: 'Linked Lists',
    difficulty: 'easy',
    question:
      'Given only a reference to the head node, what is the time complexity of inserting a node at the head of a singly linked list?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    answer: 0,
    explanation:
      'Head insertion only updates two pointers: the new node points to the current head and the head reference points to the new node.',
  },
  {
    id: 'dsa-09',
    topic: 'Data Structure Fundamentals',
    difficulty: 'easy',
    question: 'Which of the following is NOT a linear data structure?',
    options: ['Array', 'Stack', 'Linked list', 'Tree'],
    answer: 3,
    explanation:
      'Arrays, stacks and linked lists arrange elements in a sequential, linear order. A tree arranges elements in a hierarchy of parents and children, making it non-linear.',
  },
  {
    id: 'dsa-10',
    topic: 'Algorithm Design',
    difficulty: 'hard',
    question:
      'Which technique applies when a problem exhibits both overlapping subproblems and optimal substructure?',
    options: ['Greedy algorithms', 'Dynamic programming', 'Brute force', 'Backtracking'],
    answer: 1,
    explanation:
      'Dynamic programming solves each overlapping subproblem once and memoises the result, which is valid precisely when optimal solutions are built from optimal sub-solutions.',
  },
];
