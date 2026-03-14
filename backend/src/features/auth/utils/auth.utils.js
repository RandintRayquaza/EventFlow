import jwt from "jsonwebtoken"

import AppError from "../../../utils/app-error.js"

const requireSecret = (value, envName) => {
  if (!value) {
    throw new AppError(`${envName} is not configured`, 500)
  }

  return value
}

export const sanitizeUser = (user) => {
  if (!user) {
    return null
  }

  const { password, ...safeUser } = user
  return safeUser
}

export const normalizeEmail = (email) => {
  return email?.trim().toLowerCase()
}

export const generateAccessToken = (userId) => {
  return jwt.sign(
    { id: userId },
    requireSecret(process.env.JWT_SECRET, "JWT_SECRET"),
    { expiresIn: "15m" }
  )
}

export const generateRefreshToken = (userId) => {
  return jwt.sign(
    { id: userId },
    requireSecret(process.env.JWT_REFRESH_SECRET, "JWT_REFRESH_SECRET"),
    { expiresIn: "7d" }
  )
}

export const getTokenExpiryDate = (token) => {
  const decoded = jwt.decode(token)

  if (!decoded || typeof decoded !== "object" || !decoded.exp) {
    throw new AppError("Invalid token", 401)
  }

  return new Date(decoded.exp * 1000)
}

export const getBearerToken = (authorizationHeader) => {
  if (!authorizationHeader) {
    return null
  }

  const [scheme, token] = authorizationHeader.split(" ")

  if (scheme !== "Bearer" || !token) {
    return null
  }

  return token
}