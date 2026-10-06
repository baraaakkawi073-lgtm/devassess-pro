import test from 'node:test';
import assert from 'node:assert/strict';
import { PASS_THRESHOLD, gradeAnswer, gradeSubmission, toPublicQuestion } from './scoring.service.js';

const questions = [
  {
    id: 'q-1',
    topic: 'Arrays',
    difficulty: 'easy',
    question: 'What is 2 + 2?',
    options: ['3', '4', '5'],
    answer: 1,
    explanation: 'Basic arithmetic.',
  },
  {
    id: 'q-2',
    topic: 'Graphs',
    difficulty: 'medium',
    question: 'BFS uses which structure?',
    options: ['Stack', 'Queue'],
    answer: 1,
    explanation: 'BFS explores level by level using a queue.',
  },
];

test('toPublicQuestion strips answer and explanation', () => {
  const publicQuestion = toPublicQuestion(questions[0]);
  assert.equal(publicQuestion.id, 'q-1');
  assert.deepEqual(Object.keys(publicQuestion).sort(), [
    'difficulty',
    'id',
    'options',
    'question',
    'topic',
  ]);
  assert.equal('answer' in publicQuestion, false);
  assert.equal('explanation' in publicQuestion, false);
});

test('gradeAnswer scores a correct option', () => {
  const result = gradeAnswer(questions[0], 1);
  assert.equal(result.correct, true);
  assert.equal(result.points, 1);
  assert.equal(result.correctIndex, 1);
  assert.equal(result.explanation, 'Basic arithmetic.');
});

test('gradeAnswer scores an incorrect option', () => {
  const result = gradeAnswer(questions[0], 0);
  assert.equal(result.correct, false);
  assert.equal(result.points, 0);
});

test('gradeSubmission computes score, percentage and pass state', () => {
  const result = gradeSubmission(questions, { 'q-1': 1, 'q-2': 0 });
  assert.equal(result.score, 1);
  assert.equal(result.total, 2);
  assert.equal(result.percentage, 50);
  assert.equal(result.passed, false);
  assert.equal(result.threshold, PASS_THRESHOLD);
  assert.equal(result.breakdown.length, 2);
  assert.deepEqual(result.unanswered, []);
});

test('gradeSubmission treats missing answers as incorrect and reports them', () => {
  const result = gradeSubmission(questions, { 'q-1': 1 });
  assert.equal(result.score, 1);
  assert.deepEqual(result.unanswered, ['q-2']);
  const missing = result.breakdown.find((entry) => entry.id === 'q-2');
  assert.equal(missing.selected, null);
  assert.equal(missing.correct, false);
});

test('gradeSubmission passes at or above the threshold', () => {
  const result = gradeSubmission(questions, { 'q-1': 1, 'q-2': 1 });
  assert.equal(result.percentage, 100);
  assert.equal(result.passed, true);
});

test('gradeSubmission coerces numeric strings', () => {
  const result = gradeSubmission(questions, { 'q-1': '1', 'q-2': '1' });
  assert.equal(result.score, 2);
});

test('gradeSubmission handles an empty question bank', () => {
  const result = gradeSubmission([], {});
  assert.equal(result.percentage, 0);
  assert.equal(result.passed, false);
  assert.equal(result.total, 0);
});
