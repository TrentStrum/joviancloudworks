export class AppError extends Error {
	constructor(
		message: string,
		public statusCode: number = 500,
		public code: string = 'INTERNAL_ERROR'
	) {
		super(message);
		this.name = 'AppError';
	}
}

export class AuthenticationError extends AppError {
	constructor(message: string = 'Authentication required') {
		super(message, 401, 'AUTH_REQUIRED');
		this.name = 'AuthenticationError';
	}
}

export class ValidationError extends AppError {
	constructor(message: string) {
		super(message, 400, 'VALIDATION_ERROR');
		this.name = 'ValidationError';
	}
}

export class NotFoundError extends AppError {
	constructor(message: string = 'Resource not found') {
		super(message, 404, 'NOT_FOUND');
		this.name = 'NotFoundError';
	}
}
