import prisma from '../../config/db.js';
import { cloudinaryUpload } from '../../utils/cloudinaryUpload.js';
import { AppError } from '../../middlewares/error.middleware.js';

interface SyncUserInput {
	clerkId: string;
	email?: string;
	username?: string;
	name?: string;
}

interface UpdateProfileInput {
	username?: string;
	name?: string;
	gender?: string;
	age?: number;
	skills?: string[];
	profile_image?: string;
	profile_image_base64?: string;
}

export const syncUser = async (input: SyncUserInput) => {
	const existingUser = await prisma.user.findUnique({
		where: { clerk_id: input.clerkId },
	});

	if (existingUser) {
		return existingUser;
	}

	const username = input.username?.trim() || `user_${input.clerkId.slice(-8)}`;
	const name = input.name?.trim() || 'New User';

	return prisma.user.create({
		data: {
			clerk_id: input.clerkId,
			email: input.email,
			username,
			name,
			skills: [],
		},
	});
};

export const updateProfile = async (clerkId: string, input: UpdateProfileInput) => {
	const user = await prisma.user.findUnique({
		where: { clerk_id: clerkId },
	});

	if (!user) {
		throw new AppError(404, 'User not found, sync user first', 'USER_NOT_FOUND');
	}

	if (input.age !== undefined && input.age <= 0) {
		throw new AppError(400, 'Age must be a positive number', 'INVALID_AGE');
	}

	let profileImage = input.profile_image;
	if (input.profile_image_base64) {
		profileImage = await cloudinaryUpload(input.profile_image_base64, 'eventflow/profiles');
	}

	return prisma.user.update({
		where: { clerk_id: clerkId },
		data: {
			username: input.username?.trim(),
			name: input.name?.trim(),
			gender: input.gender?.trim(),
			age: input.age,
			skills: input.skills,
			profile_image: profileImage,
		},
	});
};
