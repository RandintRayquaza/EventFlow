import { Redis } from 'ioredis';
import { env } from './env.js';

export const redis = new Redis(env.REDIS_URL, {
	enableReadyCheck: true,
	maxRetriesPerRequest: 2,
});

redis.on('error', (error) => {
	if (error instanceof Error) {
		console.error('Redis error:', error.message);
		return;
	}

	console.error('Redis error:', error);
});
