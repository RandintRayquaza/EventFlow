import  express  from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";

import authRoutes from "./features/auth/routes/auth.route.js";


const app = express()
app.use(cors())
app.use(express.json())

app.use(
    session({
        secret: process.env.SESSION_SECRET || "default_session_secret",
        resave: false,
        saveUninitialized: false,
    })
)

app.use(passport.initialize())
app.use(passport.session())




app.use("/api/auth", authRoutes)

export default app