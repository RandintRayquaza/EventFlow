import prisma from '../../config/db.js';
import { redis } from '../../config/redis.js';
import { AppError } from '../../middlewares/error.middleware.js';
import type { EventCreateInput, PaginationQuery } from '../../types/index.js';

const EVENT_CACHE_TTL_SECONDS = 60;

export const createEvent = async (input: EventCreateInput) => {
	if (!input.title?.trim()) {
		throw new AppError(400, 'Title is required', 'VALIDATION_ERROR');
	}

	const startsAt = new Date(input.starts_at);
	const endsAt = input.ends_at ? new Date(input.ends_at) : undefined;
	if (Number.isNaN(startsAt.getTime()) || (endsAt && Number.isNaN(endsAt.getTime()))) {
		throw new AppError(400, 'Invalid date format', 'VALIDATION_ERROR');
	}

	return prisma.event.create({
		data: {
			title: input.title.trim(),
			description: input.description?.trim(),
			starts_at: startsAt,
			ends_at: endsAt,
			location: input.location?.trim(),
			capacity: input.capacity,
		},
	});
};

export const getEventById = async (eventId: string) => {
	const cacheKey = `event:${eventId}`;
	const cachedEvent = await redis.get(cacheKey);
	if (cachedEvent) {
		return JSON.parse(cachedEvent);
	}

	const event = await prisma.event.findUnique({
		where: { id: eventId },
	});
	if (!event) {
		throw new AppError(404, 'Event not found', 'EVENT_NOT_FOUND');
	}

	await redis.set(cacheKey, JSON.stringify(event), 'EX', EVENT_CACHE_TTL_SECONDS);
	return event;
};

export const listEvents = async (query: PaginationQuery) => {
	const page = query.page && query.page > 0 ? query.page : 1;
	const limit = query.limit && query.limit > 0 ? Math.min(query.limit, 100) : 10;
	const skip = (page - 1) * limit;

	const [items, total] = await Promise.all([
		prisma.event.findMany({
			skip,
			take: limit,
			orderBy: { starts_at: 'asc' },
		}),
		prisma.event.count(),
	]);

	return {
		items,
		total,
		page,
		limit,
	};
};
