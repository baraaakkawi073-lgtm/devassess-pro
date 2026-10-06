export default [
  {
    id: 'log-01',
    topic: 'Number Series',
    difficulty: 'medium',
    question: 'What comes next in the series: 2, 6, 12, 20, 30, ... ?',
    options: ['36', '40', '42', '44'],
    answer: 2,
    explanation:
      'The terms are n(n+1): 1x2, 2x3, 3x4, 4x5, 5x6. The next term is 6x7 = 42 (equivalently, differences grow as 4, 6, 8, 10, 12).',
  },
  {
    id: 'log-02',
    topic: 'Number Series',
    difficulty: 'easy',
    question: 'What comes next in the series: 1, 1, 2, 3, 5, 8, ... ?',
    options: ['11', '12', '13', '15'],
    answer: 2,
    explanation:
      'Each term is the sum of the two preceding terms (Fibonacci). 5 + 8 = 13.',
  },
  {
    id: 'log-03',
    topic: 'Pattern Recognition',
    difficulty: 'easy',
    question: 'Complete the pattern: AZ, BY, CX, ... ?',
    options: ['DV', 'DW', 'EW', 'DX'],
    answer: 1,
    explanation:
      'The first letters descend from the end of the alphabet (Z, Y, X, W) while the second letters ascend from the start (A, B, C, D): DW.',
  },
  {
    id: 'log-04',
    topic: 'Age Problems',
    difficulty: 'medium',
    question:
      'A father is currently 3 times as old as his son. In 15 years he will be twice as old as his son. How old is the son now?',
    options: ['10 years', '12 years', '15 years', '18 years'],
    answer: 2,
    explanation:
      "Let the son's age be s and the father's 3s. Then 3s + 15 = 2(s + 15), giving 3s + 15 = 2s + 30, so s = 15.",
  },
  {
    id: 'log-05',
    topic: 'Spatial Reasoning',
    difficulty: 'easy',
    question:
      'You walk 5 km north, then 3 km east, then 5 km south. Where are you relative to your starting point?',
    options: ['At the starting point', '3 km east', '3 km west', '10 km north'],
    answer: 1,
    explanation:
      'The 5 km north and 5 km south cancel out, leaving only the 3 km eastward displacement.',
  },
  {
    id: 'log-06',
    topic: 'Syllogisms',
    difficulty: 'medium',
    question:
      'Statements: (1) All bloops are razzies. (2) All razzies are pings. Which conclusion must be true?',
    options: [
      'All pings are bloops',
      'All bloops are pings',
      'Some razzies are not pings',
      'No bloops are pings',
    ],
    answer: 1,
    explanation:
      'The predicates chain: bloops are a subset of razzies, and razzies are a subset of pings, so bloops must be a subset of pings. The converse need not hold.',
  },
  {
    id: 'log-07',
    topic: 'Classification',
    difficulty: 'easy',
    question: 'Which of these is NOT an alloy?',
    options: ['Brass', 'Bronze', 'Steel', 'Iron'],
    answer: 3,
    explanation:
      'Brass (copper + zinc), bronze (copper + tin) and steel (iron + carbon) are all alloys. Iron is a pure metallic element.',
  },
  {
    id: 'log-08',
    topic: 'Work & Rate',
    difficulty: 'medium',
    question:
      'If 5 machines take 5 minutes to make 5 widgets, how long do 100 machines take to make 100 widgets?',
    options: ['5 minutes', '100 minutes', '20 minutes', '1 minute'],
    answer: 0,
    explanation:
      'Each machine produces 1 widget in 5 minutes. 100 machines therefore produce 100 widgets in the same 5 minutes.',
  },
  {
    id: 'log-09',
    topic: 'Coding-Decoding',
    difficulty: 'medium',
    question:
      'In a certain code, letters are replaced by their position in the alphabet (A=1, B=2 ... Z=26) and concatenated. How is DOG coded?',
    options: ['4157', '4175', '4517', '40-15-07'],
    answer: 0,
    explanation: 'D = 4, O = 15, G = 7, so the concatenated code is 4157.',
  },
  {
    id: 'log-10',
    topic: 'Time & Clocks',
    difficulty: 'hard',
    question:
      'A faulty clock gains exactly 5 minutes every 24 hours. It is set correctly at noon. What is the real time when the clock first shows 12:00 noon again?',
    options: ['11:55 AM', '12:05 PM', '11:55 PM', '12:00 noon (no change)'],
    answer: 0,
    explanation:
      'After 24 real hours the clock has advanced 24h + 5min, so it shows 12:05 while real time is noon. It reaches 12:00 five minutes early - at 11:55 AM real time.',
  },
];
