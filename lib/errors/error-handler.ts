import { AppError } from './custom-errors';

interface ErrorResponse {
  message: string;
  code: string;
  details?: unknown;
}

export function handleError(error: unknown): ErrorResponse {
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
    };
  }

  if (error instanceof Error) {
    return {
      message: 'An unexpected error occurred',
      code: 'INTERNAL_ERROR',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    };
  }

  return {
    message: 'An unknown error occurred',
    code: 'UNKNOWN_ERROR',
  };
}

export function sanitizeErrorMessage(message: string): string {
  // Remove sensitive information from error messages
  return message.replace(/\b(?:password|token|key)\b/gi, '***');
}