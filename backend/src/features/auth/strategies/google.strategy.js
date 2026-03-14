import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { pool } from "../../../config/db.js"

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {

      try {

        const email = profile.emails[0].value
        const name = profile.displayName
        const avatar = profile.photos[0].value
        const providerId = profile.id

        const existingUser = await pool.query(
          "SELECT * FROM users WHERE email=$1",
          [email]
        )

        let user

        if (existingUser.rows.length) {

          user = existingUser.rows[0]

        } else {

          const newUser = await pool.query(
            `INSERT INTO users(name,email,avatar,provider,provider_id)
             VALUES($1,$2,$3,$4,$5)
             RETURNING *`,
            [name, email, avatar, "google", providerId]
          )

          user = newUser.rows[0]

        }

        done(null, user)

      } catch (error) {

        done(error, null)

      }

    }
  )
)

export default passport