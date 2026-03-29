import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { apiRateLimiter } from './middlewares/rateLimiter.js';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js';
import userRouter from './features/user/user.routes.js';
import eventRouter from './features/event/event.routes.js';
import bookingRouter from './features/booking/booking.routes.js';
import paymentRouter from './features/payment/payment.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '2mb' }));
app.use(clerkMiddleware());
app.use('/api', apiRateLimiter);

app.get('/health', (_req, res) => {
	res.status(200).json({
		success: true,
		data: {
			status: 'ok',
			timestamp: new Date().toISOString(),
		},
	});
});

app.use('/api/user', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/payments', paymentRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export { app };