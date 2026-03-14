import { sendError } from "../utils/api-response.js"

const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error)
  }

  const statusCode = error.statusCode || 500

  if (statusCode >= 500) {
    console.error(error)
  }

  const message = statusCode >= 500 ? "Internal server error" : error.message

  return sendError(res, {
    statusCode,
    message,
  })
}

export default errorHandler