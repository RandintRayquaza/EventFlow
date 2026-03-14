import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import "../strategies/google.strategy.js"


const router = express.Router();



router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
)

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {

    const token = jwt.sign(
      { id: req.user.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    )

    res.json({
      user: req.user,
      token
    })

  }
)


router.post('/register', register);
router.post('/login', login);

export default router;