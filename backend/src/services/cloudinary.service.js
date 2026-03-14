import cloudinary from "../config/cloudinary.js"

export const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "eventflow",
        })
        return result.secure_url
    } catch (error) {
        console.error("Cloudinary upload error:", error)
        throw new Error("Failed to upload image")
    }
}