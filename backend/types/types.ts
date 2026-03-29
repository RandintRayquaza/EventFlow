import type { Request } from 'express';

export type ISODateString = string;

export type Environment = 'development' | 'test' | 'production' | string;

export interface HealthCheckResponse {
	status: 'ok' | 'error';
	timestamp: ISODateString;
	uptime: number;
	environment: Environment;
}

export interface EventBase {
	title: string;
	description?: string;
	startsAt: ISODateString;
	endsAt?: ISODateString;
	location?: string;
	capacity?: number;
	tags?: string[];
}

export interface Event extends EventBase {
	id: string;
	createdAt: ISODateString;
	updatedAt: ISODateString;
}

export type CreateEventRequest = EventBase;

export type UpdateEventRequest = Partial<EventBase>;

export interface PaginationQuery {
	page?: number;
	limit?: number;
}

export interface PaginatedResult<T> {
	items: T[];
	total: number;
	page: number;
	limit: number;
}

export interface ApiSuccess<T> {
	success: true;
	data: T;
	message?: string;
}

export interface ApiError {
	success: false;
	error: {
		code: string;
		message: string;
		details?: unknown;
	};
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export interface AuthUser {
	id: string;
	email: string;
	role?: 'user' | 'admin';
}

export interface AuthenticatedRequest extends Request {
	user?: AuthUser;
}
