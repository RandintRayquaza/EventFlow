import pkg from "pg"

const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

const ConnectDB = async () => {
  try {
    await pool.query("SELECT 1")
    console.log("Connected to PostgreSQL (Neon)")
  } catch (error) {
    console.error("Database connection error:", error)
    process.exit(1)
  }
}

export { pool }
export default ConnectDB