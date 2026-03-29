import prisma from '../../config/db.js';
import { AppError } from '../../middlewares/error.middleware.js';

interface CreatePaymentInput {
	booking_id: string;
	amount: number;
	currency?: string;
}

export const createPayment = async (clerkId: string, input: CreatePaymentInput) => {
	if (!input.booking_id || !input.amount || input.amount <= 0) {
		throw new AppError(400, 'booking_id and valid amount are required', 'VALIDATION_ERROR');
	}

	const user = await prisma.user.findUnique({
		where: { clerk_id: clerkId },
		select: { id: true },
	});
	if (!user) {
		throw new AppError(404, 'User not found', 'USER_NOT_FOUND');
	}

	const booking = await prisma.booking.findFirst({
		where: {
			id: input.booking_id,
			user_id: user.id,
		},
	});
	if (!booking) {
		throw new AppError(404, 'Booking not found', 'BOOKING_NOT_FOUND');
	}

	return prisma.payment.create({
		data: {
			booking_id: booking.id,
			amount: input.amount,
			currency: input.currency || 'USD',
			status: 'PENDING',
		},
	});
};
