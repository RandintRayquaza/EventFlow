import express from "express"
import cors from "cors"
import passport from "passport"
import session from "express-session"

import authRoutes from "./features/auth/routes/auth.route.js"
import errorHandler from "./middleware/error.middleware.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use(
    session({
        secret: process.env.SESSION_SECRET || process.env.JWT_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        },
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/api/auth", authRoutes)
app.use(errorHandler)

export default app