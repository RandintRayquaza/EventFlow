import AppError from "../../../utils/app-error.js"
import { sendSuccess } from "../../../utils/api-response.js"
import {
    createAuthSession,
    loginUser,
    logoutUser,
    registerUser,
} from "../services/auth.services.js"
import { getBearerToken } from "../utils/auth.utils.js"

export const register = async (req, res) => {
    const data = await registerUser(req.body)

    return sendSuccess(res, {
        statusCode: 201,
        message: "User registered successfully",
        data,
    })
}

export const login = async (req, res) => {
    const data = await loginUser(req.body)

    return sendSuccess(res, {
        message: "User logged in successfully",
        data,
    })
}

export const logout = async (req, res) => {
    const accessToken = req.token ?? getBearerToken(req.headers.authorization)

    if (!accessToken) {
        throw new AppError("Authorization token is required", 401)
    }

    const data = await logoutUser({
        accessToken,
        refreshToken: req.body?.refreshToken,
        userId: req.user?.id,
    })

    return sendSuccess(res, {
        message: "Logged out successfully",
        data,
    })
}

export const googleCallback = async (req, res) => {
    if (!req.user) {
        throw new AppError("Google authentication failed", 401)
    }

    const data = await createAuthSession(req.user)

    return sendSuccess(res, {
        message: "Google login successful",
        data,
    })
}