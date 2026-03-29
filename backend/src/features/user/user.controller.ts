import type { NextFunction, Request, Response } from 'express';
import { syncUser, updateProfile } from './user.service.js';
import { getUserIdFromRequest } from '../../utils/getUser.js';

export const syncUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const clerkId = getUserIdFromRequest(req);
		const user = await syncUser({
			clerkId,
			email: req.body.email,
			username: req.body.username,
			name: req.body.name,
		});

		res.status(200).json({
			success: true,
			data: user,
		});
	} catch (error) {
		next(error);
	}
};

export const updateProfileController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const clerkId = getUserIdFromRequest(req);
		const user = await updateProfile(clerkId, req.body);

		res.status(200).json({
			success: true,
			data: user,
		});
	} catch (error) {
		next(error);
	}
};
