const API_BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/+$/, '');

async function request(path, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
  } catch {
    throw new Error('Unable to reach the DevAssess Pro API. Is the server running?');
  }

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const message =
      (payload && payload.error && payload.error.message) ||
      `Request failed with status ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return payload;
}

export const api = {
  health: () => request('/health'),
  getCategories: () => request('/quiz/categories'),
  getQuestions: (categoryId) => request(`/quiz/${encodeURIComponent(categoryId)}`),
  checkAnswer: (categoryId, questionId, selected) =>
    request(`/quiz/${encodeURIComponent(categoryId)}/check`, {
      method: 'POST',
      body: JSON.stringify({ questionId, selected }),
    }),
  evaluate: (categoryId, answers) =>
    request(`/quiz/${encodeURIComponent(categoryId)}/evaluate`, {
      method: 'POST',
      body: JSON.stringify({ answers }),
    }),
  getReport: () => request('/report'),
};
