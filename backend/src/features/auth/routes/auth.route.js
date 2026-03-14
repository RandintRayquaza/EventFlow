import express from "express"
import passport from "passport"

import {
  googleCallback,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js"
import { verifyToken } from "../middleware/blacklisted.js"
import "../strategies/google.strategy.js"

const router = express.Router()

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
)

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
)

router.post("/register", register)
router.post("/login", login)
router.post("/logout", verifyToken, logout)

export default router