import { AppError } from '../middlewares/error.middleware.js';
import type { Request } from 'express';

export const getUserIdFromRequest = (req: Request): string => {
	if (!req.userId) {
		throw new AppError(401, 'Unauthorized', 'UNAUTHORIZED');
	}

	return req.userId;
};
