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

  const user = await findUserByEmail(email)

  if (!user) {
    throw new Error("User not found")
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error("Invalid password")
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  )

  return { user, token }
}