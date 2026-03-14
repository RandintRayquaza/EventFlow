import { pool } from "../../../config/db.js"

export const createUser = async ({ name, email, password }) => {
    const query = `
        INSERT INTO users (name, email, password, provider)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `

    const values = [name, email, password, "email"]
    const result = await pool.query(query, values)
    return result.rows[0]
}

export const createGoogleUser = async ({ name, email, avatar, providerId }) => {
    const query = `
        INSERT INTO users (name, email, avatar, provider, provider_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `

    const values = [name, email, avatar, "google", providerId]
    const result = await pool.query(query, values)
    return result.rows[0]
}

export const findUserByEmail = async (email) => {
    const query = `
        SELECT *
        FROM users
        WHERE email = $1
        LIMIT 1
    `

    const result = await pool.query(query, [email])
    return result.rows[0]
}

export const storeRefreshToken = async ({ userId, token, expiresAt }) => {
    const query = `
        INSERT INTO refresh_tokens (user_id, token, expires_at)
        VALUES ($1, $2, $3)
    `

    await pool.query(query, [userId, token, expiresAt])
}

export const deleteRefreshToken = async (token) => {
    await pool.query("DELETE FROM refresh_tokens WHERE token = $1", [token])
}

export const deleteRefreshTokensByUserId = async (userId) => {
    await pool.query("DELETE FROM refresh_tokens WHERE user_id = $1", [userId])
}

export const blacklistToken = async ({ token, expiresAt }) => {
    const query = `
        INSERT INTO token_blacklist (token, expires_at)
        SELECT $1, $2
        WHERE NOT EXISTS (
            SELECT 1
            FROM token_blacklist
            WHERE token = $1
        )
    `

    await pool.query(query, [token, expiresAt])
}

export const isTokenBlacklisted = async (token) => {
    const result = await pool.query(
        "SELECT 1 FROM token_blacklist WHERE token = $1 LIMIT 1",
        [token]
    )

    return result.rowCount > 0
}