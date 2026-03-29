import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
	NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
	PORT: z.coerce.number().int().positive().default(5000),
	DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
	CLERK_SECRET_KEY: z.string().min(1, 'CLERK_SECRET_KEY is required'),
	REDIS_URL: z.string().min(1, 'REDIS_URL is required'),
	CLOUDINARY_CLOUD_NAME: z.string().min(1, 'CLOUDINARY_CLOUD_NAME is required'),
	CLOUDINARY_API_KEY: z.string().min(1, 'CLOUDINARY_API_KEY is required'),
	CLOUDINARY_API_SECRET: z.string().min(1, 'CLOUDINARY_API_SECRET is required'),
});

export const env = envSchema.parse(process.env);
