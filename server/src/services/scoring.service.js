export const PASS_THRESHOLD = 70;

export function toPublicQuestion({ id, topic, difficulty, question, options }) {
  return { id, topic, difficulty, question, options };
}

export function gradeAnswer(question, selectedIndex) {
  const correct = selectedIndex === question.answer;
  return {
    questionId: question.id,
    selected: selectedIndex,
    correct,
    correctIndex: question.answer,
    explanation: question.explanation,
    points: correct ? 1 : 0,
  };
}

function normalizeAnswers(answers) {
  const normalized = {};
  for (const [questionId, value] of Object.entries(answers || {})) {
    if (value === null || value === undefined) continue;
    normalized[questionId] = Number(value);
  }
  return normalized;
}

export function gradeSubmission(questions, answers) {
  const normalized = normalizeAnswers(answers);
  const breakdown = [];
  const unanswered = [];
  let score = 0;

  for (const question of questions) {
    const hasAnswer = Object.prototype.hasOwnProperty.call(normalized, question.id);
    if (!hasAnswer) {
      unanswered.push(question.id);
      breakdown.push({
        id: question.id,
        topic: question.topic,
        difficulty: question.difficulty,
        question: question.question,
        options: question.options,
        selected: null,
        correctIndex: question.answer,
        correct: false,
        explanation: question.explanation,
        points: 0,
      });
      continue;
    }

    const selected = normalized[question.id];
    const correct = selected === question.answer;
    if (correct) score += 1;

    breakdown.push({
      id: question.id,
      topic: question.topic,
      difficulty: question.difficulty,
      question: question.question,
      options: question.options,
      selected,
      correctIndex: question.answer,
      correct,
      explanation: question.explanation,
      points: correct ? 1 : 0,
    });
  }

  const total = questions.length;
  const percentage = total === 0 ? 0 : Math.round((score / total) * 1000) / 10;

  return {
    score,
    total,
    percentage,
    passed: total > 0 && percentage >= PASS_THRESHOLD,
    threshold: PASS_THRESHOLD,
    unanswered,
    breakdown,
  };
}
