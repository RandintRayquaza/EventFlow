import type { NextFunction, Request, Response } from 'express';
import { createBooking, listMyBookings } from './booking.service.js';
import { getUserIdFromRequest } from '../../utils/getUser.js';

export const createBookingController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const clerkId = getUserIdFromRequest(req);
		const booking = await createBooking(clerkId, req.body);
		res.status(201).json({ success: true, data: booking });
	} catch (error) {
		next(error);
	}
};

export const listMyBookingsController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const clerkId = getUserIdFromRequest(req);
		const bookings = await listMyBookings(clerkId);
		res.status(200).json({ success: true, data: bookings });
	} catch (error) {
		next(error);
	}
};
