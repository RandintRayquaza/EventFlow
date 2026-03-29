import type { NextFunction, Request, Response } from 'express';
import { createEvent, getEventById, listEvents } from './event.service.js';

export const createEventController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const event = await createEvent(req.body);
		res.status(201).json({ success: true, data: event });
	} catch (error) {
		next(error);
	}
};

export const getEventByIdController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const eventId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
		if (!eventId) {
			res.status(400).json({ success: false, error: { code: 'VALIDATION_ERROR', message: 'Event id is required' } });
			return;
		}

		const event = await getEventById(eventId);
		res.status(200).json({ success: true, data: event });
	} catch (error) {
		next(error);
	}
};

export const listEventsController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const result = await listEvents({
			page: req.query.page ? Number(req.query.page) : undefined,
			limit: req.query.limit ? Number(req.query.limit) : undefined,
		});
		res.status(200).json({ success: true, data: result });
	} catch (error) {
		next(error);
	}
};
