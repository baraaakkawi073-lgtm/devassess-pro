import { getCategory, getQuestion, listCategories } from '../data/index.js';
import { gradeAnswer, gradeSubmission, toPublicQuestion } from '../services/scoring.service.js';
import { ApiError } from '../middleware/error.middleware.js';

function requireCategory(categoryId) {
  const category = getCategory(categoryId);
  if (!category) {
    throw ApiError.notFound(`Unknown quiz category "${categoryId}"`);
  }
  return category;
}

export function getCategories(_req, res) {
  const categories = listCategories();
  res.json({ success: true, count: categories.length, categories });
}

export function getQuestions(req, res) {
  const category = requireCategory(req.params.categoryId);
  res.json({
    success: true,
    category: { ...category.meta, questionCount: category.questions.length },
    questions: category.questions.map(toPublicQuestion),
  });
}

export function checkAnswer(req, res) {
  const { questionId, selected } = req.body || {};
  const category = requireCategory(req.params.categoryId);

  if (typeof questionId !== 'string' || questionId.trim() === '') {
    throw ApiError.badRequest('Field "questionId" (string) is required');
  }
  if (!Number.isInteger(selected)) {
    throw ApiError.badRequest('Field "selected" must be an integer option index');
  }

  const question = getQuestion(category, questionId);
  if (!question) {
    throw ApiError.notFound(`Question "${questionId}" does not exist in category "${category.meta.id}"`);
  }
  if (selected < 0 || selected >= question.options.length) {
    throw ApiError.badRequest(
      `Option index must be between 0 and ${question.options.length - 1}`,
    );
  }

  res.json({ success: true, ...gradeAnswer(question, selected) });
}

export function evaluate(req, res) {
  const { answers } = req.body || {};
  const category = requireCategory(req.params.categoryId);

  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    throw ApiError.badRequest('Field "answers" must be an object keyed by questionId');
  }

  for (const [questionId, value] of Object.entries(answers)) {
    if (!getQuestion(category, questionId)) {
      throw ApiError.badRequest(`Unknown questionId "${questionId}" in submitted answers`);
    }
    if (!Number.isInteger(value)) {
      throw ApiError.badRequest(`Answer for "${questionId}" must be an integer option index`);
    }
  }

  const result = gradeSubmission(category.questions, answers);
  res.json({ success: true, category: { ...category.meta, questionCount: category.questions.length }, ...result });
}
