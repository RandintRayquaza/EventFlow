import jwt from "jsonwebtoken"
import { sendError } from "../../../utils/api-response.js"
import { isTokenBlacklisted } from "../models/auth.model.js"
import { getBearerToken } from "../utils/auth.utils.js"

export const verifyToken = async (req, res, next) => {
  try {
    const token = getBearerToken(req.headers.authorization)

    if (!token) {
      return sendError(res, {
        statusCode: 401,
        message: "Authorization token is required",
      })
    }

    const blacklisted = await isTokenBlacklisted(token)

    if (blacklisted) {
      return sendError(res, {
        statusCode: 401,
        message: "Token has been invalidated",
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    req.token = token

    next()
  } catch (error) {
    return sendError(res, {
      statusCode: 401,
      message: "Invalid token",
    })
  }
}