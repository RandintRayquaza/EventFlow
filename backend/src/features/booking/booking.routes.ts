import { Router } from 'express';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { createBookingController, listMyBookingsController } from './booking.controller.js';

const bookingRouter = Router();

bookingRouter.post('/', requireAuth, createBookingController);
bookingRouter.get('/mine', requireAuth, listMyBookingsController);

export default bookingRouter;
