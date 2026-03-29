import { getAuth } from '@clerk/express';
import type { NextFunction, Request, Response } from 'express';
import { AppError } from './error.middleware.js';

export const requireAuth = (req: Request, _res: Response, next: NextFunction): void => {
	const { userId } = getAuth(req);

	if (!userId) {
		next(new AppError(401, 'Unauthorized', 'UNAUTHORIZED'));
		return;
	}

	req.userId = userId;
	next();
};
