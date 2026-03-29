import { Router } from 'express';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { createPaymentController } from './payment.controller.js';

const paymentRouter = Router();

paymentRouter.post('/', requireAuth, createPaymentController);

export default paymentRouter;
