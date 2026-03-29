import { Router } from 'express';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import {
	createEventController,
	getEventByIdController,
	listEventsController,
} from './event.controller.js';

const eventRouter = Router();

eventRouter.get('/', listEventsController);
eventRouter.get('/:id', getEventByIdController);
eventRouter.post('/', requireAuth, createEventController);

export default eventRouter;
