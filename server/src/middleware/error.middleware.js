export class ApiError extends Error {
  constructor(statusCode, message, details) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;
  }

  static badRequest(message = 'Bad request', details) {
    return new ApiError(400, message, details);
  }

  static notFound(message = 'Resource not found') {
    return new ApiError(404, message);
  }
}

export function notFound(req, _res, next) {
  next(ApiError.notFound(`Cannot ${req.method} ${req.originalUrl}`));
}

export function errorHandler(err, req, res, _next) {
  const status = Number.isInteger(err.statusCode) ? err.statusCode : 500;
  const isServerError = status >= 500;

  if (isServerError) {
    console.error(`[${new Date().toISOString()}]`, err);
  }

  const body = {
    success: false,
    error: {
      message:
        isServerError && process.env.NODE_ENV === 'production'
          ? 'Internal server error'
          : err.message || 'Something went wrong',
    },
  };

  if (err.details) body.error.details = err.details;

  res.status(status).json(body);
}
