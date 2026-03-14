import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: resolve(__dirname, ".env"), quiet: true })

const PORT = process.env.PORT || 5000

const startServer = async () => {
  const [{ default: app }, { default: ConnectDB }] = await Promise.all([
    import("./src/app.js"),
    import("./src/config/db.js"),
  ])

  await ConnectDB()

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()