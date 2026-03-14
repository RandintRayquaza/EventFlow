import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createUser, findUserByEmail } from "../models/auth.model.js"

export const registerUser = async ({ name, email, password }) => {

  const existingUser = await findUserByEmail(email)

  if (existingUser) {
    throw new Error("User already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await createUser({
    name,
    email,
    password: hashedPassword
  })

  return user
}



export const loginUser = async ({ email, password }) => {

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  )

  const user = result.rows[0]

  if (!user) {
    throw new Error("User not found")
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw new Error("Invalid password")
  }

  const accessToken = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  )

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  )

  return { user, accessToken, refreshToken }
}

export const logoutUser = async (token) => {

  await pool.query(
    `INSERT INTO token_blacklist(token)
     VALUES($1)`,
    [token]
  )

  return { message: "Logged out successfully" }
}