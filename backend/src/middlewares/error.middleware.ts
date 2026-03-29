import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import type { NextFunction, Request, Response } from 'express';

export class AppError extends Error {
	public readonly statusCode: number;
	public readonly code: string;

	constructor(statusCode: number, message: string, code = 'APP_ERROR') {
		super(message);
		this.statusCode = statusCode;
		this.code = code;
	}
}

export const notFoundHandler = (req: Request, _res: Response, next: NextFunction): void => {
	next(new AppError(404, `Route ${req.originalUrl} not found`, 'NOT_FOUND'));
};

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction): void => {
	if (error instanceof AppError) {
		res.status(error.statusCode).json({
			success: false,
			error: {
				code: error.code,
				message: error.message,
			},
		});
		return;
	}

	if (error instanceof PrismaClientKnownRequestError) {
		res.status(400).json({
			success: false,
			error: {
				code: error.code,
				message: 'Database request failed',
			},
		});
		return;
	}

	console.error(error);
	res.status(500).json({
		success: false,
		error: {
			code: 'INTERNAL_SERVER_ERROR',
			message: 'Something went wrong',
		},
	});
};
