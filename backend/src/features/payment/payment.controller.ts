import type { NextFunction, Request, Response } from 'express';
import { createPayment } from './payment.service.js';
import { getUserIdFromRequest } from '../../utils/getUser.js';

export const createPaymentController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const clerkId = getUserIdFromRequest(req);
		const payment = await createPayment(clerkId, req.body);
		res.status(201).json({ success: true, data: payment });
	} catch (error) {
		next(error);
	}
};
