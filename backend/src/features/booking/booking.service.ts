import prisma from '../../config/db.js';
import { AppError } from '../../middlewares/error.middleware.js';

interface CreateBookingInput {
	event_id: string;
}

export const createBooking = async (clerkId: string, input: CreateBookingInput) => {
	if (!input.event_id) {
		throw new AppError(400, 'event_id is required', 'VALIDATION_ERROR');
	}

	const user = await prisma.user.findUnique({
		where: { clerk_id: clerkId },
		select: { id: true },
	});
	if (!user) {
		throw new AppError(404, 'User not found', 'USER_NOT_FOUND');
	}

	const event = await prisma.event.findUnique({
		where: { id: input.event_id },
		select: { id: true },
	});
	if (!event) {
		throw new AppError(404, 'Event not found', 'EVENT_NOT_FOUND');
	}

	return prisma.booking.create({
		data: {
			user_id: user.id,
			event_id: input.event_id,
			status: 'CONFIRMED',
		},
	});
};

export const listMyBookings = async (clerkId: string) => {
	const user = await prisma.user.findUnique({
		where: { clerk_id: clerkId },
		select: { id: true },
	});
	if (!user) {
		throw new AppError(404, 'User not found', 'USER_NOT_FOUND');
	}

	return prisma.booking.findMany({
		where: { user_id: user.id },
		include: {
			event: true,
			payment: true,
		},
		orderBy: { created_at: 'desc' },
	});
};
