import jwt from "jsonwebtoken"
import { pool } from "../config/db.js"

export const verifyToken = async (req, res, next) => {

  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ error: "No token provided" })
  }

  const blacklisted = await pool.query(
    "SELECT * FROM token_blacklist WHERE token=$1",
    [token]
  )

  if (blacklisted.rows.length) {
    return res.status(401).json({ error: "Token invalidated" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ error: "Invalid token" })
  }

}