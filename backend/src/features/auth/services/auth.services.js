import bcrypt from "bcrypt"
import AppError from "../../../utils/app-error.js"
import {
  blacklistToken,
  createGoogleUser,
  createUser,
  deleteRefreshToken,
  deleteRefreshTokensByUserId,
  findUserByEmail,
  storeRefreshToken,
} from "../models/auth.model.js"
import {
  generateAccessToken,
  generateRefreshToken,
  getTokenExpiryDate,
  normalizeEmail,
  sanitizeUser,
} from "../utils/auth.utils.js"

const createAuthSession = async (user) => {
  const accessToken = generateAccessToken(user.id)
  const refreshToken = generateRefreshToken(user.id)

  await storeRefreshToken({
    userId: user.id,
    token: refreshToken,
    expiresAt: getTokenExpiryDate(refreshToken),
  })

  return {
    user: sanitizeUser(user),
    accessToken,
    refreshToken,
  }
}

const ensureRegisterPayload = ({ name, email, password }) => {
  if (!name?.trim() || !email?.trim() || !password) {
    throw new AppError("Name, email, and password are required", 400)
  }
}

const ensureLoginPayload = ({ email, password }) => {
  if (!email?.trim() || !password) {
    throw new AppError("Email and password are required", 400)
  }
}

export const registerUser = async ({ name, email, password }) => {
  ensureRegisterPayload({ name, email, password })

  const normalizedEmail = normalizeEmail(email)

  const existingUser = await findUserByEmail(normalizedEmail)

  if (existingUser) {
    throw new AppError("User already exists", 409)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await createUser({
    name: name.trim(),
    email: normalizedEmail,
    password: hashedPassword,
  })

  return createAuthSession(user)
}

export const loginUser = async ({ email, password }) => {
  ensureLoginPayload({ email, password })

  const normalizedEmail = normalizeEmail(email)

  const user = await findUserByEmail(normalizedEmail)

  if (!user) {
    throw new AppError("Invalid email or password", 401)
  }

  if (!user.password) {
    throw new AppError("Use Google sign-in for this account", 400)
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw new AppError("Invalid email or password", 401)
  }

  return createAuthSession(user)
}

export const logoutUser = async ({ accessToken, refreshToken, userId }) => {
  if (!accessToken) {
    throw new AppError("Access token is required", 401)
  }

  await blacklistToken({
    token: accessToken,
    expiresAt: getTokenExpiryDate(accessToken),
  })

  if (refreshToken) {
    await deleteRefreshToken(refreshToken)
  } else if (userId) {
    await deleteRefreshTokensByUserId(userId)
  }

  return { loggedOut: true }
}

export const findOrCreateGoogleAuthUser = async (profile) => {
  const email = normalizeEmail(profile.emails?.[0]?.value)

  if (!email) {
    throw new AppError("Google account email is unavailable", 400)
  }

  const existingUser = await findUserByEmail(email)

  if (existingUser) {
    return existingUser
  }

  return createGoogleUser({
    name: profile.displayName?.trim() || "Google User",
    email,
    avatar: profile.photos?.[0]?.value ?? null,
    providerId: profile.id,
  })
}

export { createAuthSession }