import type { Request } from 'express';

declare global {
	namespace Express {
		interface Request {
			userId?: string;
		}
	}
}

export interface ApiSuccess<T> {
	success: true;
	data: T;
	message?: string;
}

export interface ApiFailure {
	success: false;
	error: {
		message: string;
		code: string;
	};
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export type AuthenticatedRequest = Request & { userId: string };

export interface PaginationQuery {
	page?: number;
	limit?: number;
}

export interface EventCreateInput {
	title: string;
	description?: string;
	starts_at: string;
	ends_at?: string;
	location?: string;
	capacity?: number;
}

export interface BookingCreateInput {
	event_id: string;
}

export interface PaymentCreateInput {
	booking_id: string;
	amount: number;
	currency?: string;
}

export {};
