export const sendSuccess = (res, { statusCode = 200, message, data } = {}) => {
  const payload = {
    success: true,
    message,
  }

  if (data !== undefined) {
    payload.data = data
  }

  return res.status(statusCode).json(payload)
}

export const sendError = (res, { statusCode = 500, message = "Internal server error" } = {}) => {
  return res.status(statusCode).json({
    success: false,
    message,
  })
}