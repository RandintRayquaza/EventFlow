import cloudinary from '../config/cloudinary.js';

export const cloudinaryUpload = async (file: string, folder = 'eventflow'): Promise<string> => {
	const result = await cloudinary.uploader.upload(file, {
		folder,
		resource_type: 'image',
	});

	return result.secure_url;
};
