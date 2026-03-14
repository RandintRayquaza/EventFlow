# EventFlow – Authentication API

This module handles authentication for the EventFlow platform.

It supports:

* Email & password registration
* Email login with JWT
* Google social login
* Access token authentication
* Logout with token blacklisting
* Refresh token support

The authentication system is designed for a **production-ready backend architecture** using Node.js and PostgreSQL.

---

# Tech Stack

Backend authentication uses:

* Node.js
* Express.js
* PostgreSQL (Neon)
* JWT (jsonwebtoken)
* bcrypt
* Passport.js
* Google OAuth 2.0

---

# Folder Structure

```
src
 └ features
    └ auth
        ├ controllers
        │   └ auth.controller.js
        ├ services
    │   └ auth.services.js
        ├ models
    │   └ auth.model.js
        ├ routes
    │   └ auth.route.js
    ├ middleware
    │   └ blacklisted.js
        └ strategies
            └ google.strategy.js
```

---

# Database Tables

## users

Stores all user accounts.

| column      | type      |
| ----------- | --------- |
| id          | uuid      |
| name        | varchar   |
| email       | varchar   |
| password    | text      |
| avatar      | text      |
| provider    | varchar   |
| provider_id | text      |
| created_at  | timestamp |

---

## refresh_tokens

Stores refresh tokens for session management.

| column     | type      |
| ---------- | --------- |
| id         | uuid      |
| user_id    | uuid      |
| token      | text      |
| expires_at | timestamp |
| created_at | timestamp |

---

## token_blacklist

Used to invalidate tokens after logout.

| column     | type      |
| ---------- | --------- |
| id         | uuid      |
| token      | text      |
| expires_at | timestamp |
| created_at | timestamp |

---

# Environment Variables

Create a `.env` file in the backend root.

```
PORT=3000

DATABASE_URL=your_neon_connection_string

JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret

GOOGLE_CLIENT_ID=google_client_id
GOOGLE_CLIENT_SECRET=google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback
```

---

# API Endpoints

Base URL

```
/api/auth
```

---

## Register User

```
POST /api/auth/register
```

Body

```json
{
  "name": "Aryan",
  "email": "aryan@email.com",
  "password": "123456"
}
```

Response

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "...",
      "name": "Aryan",
      "email": "aryan@email.com",
      "avatar": null,
      "provider": "email",
      "provider_id": null,
      "created_at": "..."
    },
    "accessToken": "jwt",
    "refreshToken": "jwt"
  }
}
```

---

## Login

```
POST /api/auth/login
```

Body

```json
{
  "email": "aryan@email.com",
  "password": "123456"
}
```

Response

```json
{
  "success": true,
  "message": "User logged in successfully",
  "data": {
    "user": {
      "id": "...",
      "name": "Aryan",
      "email": "aryan@email.com",
      "avatar": null,
      "provider": "email",
      "provider_id": null,
      "created_at": "..."
    },
    "accessToken": "jwt",
    "refreshToken": "jwt"
  }
}
```

---

## Logout

```
POST /api/auth/logout
```

Headers

```
Authorization: Bearer <access_token>
```

Optional body

```json
{
  "refreshToken": "jwt"
}
```

Response

```json
{
  "success": true,
  "message": "Logged out successfully",
  "data": {
    "loggedOut": true
  }
}
```

Behavior

* Token is added to blacklist
* Provided refresh token is removed
* If no refresh token is provided, all refresh tokens for the authenticated user are removed

---

## Google Login

Redirect user to:

```
GET /api/auth/google
```

Google OAuth flow:

```
User → Google Login → Callback → JWT generated
```

Callback route:

```
GET /api/auth/google/callback
```

Response

```json
{
  "success": true,
  "message": "Google login successful",
  "data": {
    "user": {
      "id": "...",
      "name": "Aryan",
      "email": "aryan@email.com",
      "avatar": "https://...",
      "provider": "google",
      "provider_id": "google-user-id",
      "created_at": "..."
    },
    "accessToken": "jwt",
    "refreshToken": "jwt"
  }
}
```

---

# Protected Routes

Protected APIs require a JWT token.

Example header:

```
Authorization: Bearer <access_token>
```

The middleware verifies:

* token validity
* blacklist status

Error response format:

```json
{
  "success": false,
  "message": "Authorization token is required"
}
```

---

# Testing APIs

You can test endpoints using:

* Postman
* Thunder Client (VSCode)
* Insomnia

Test order:

1. Register user
2. Login
3. Access protected route
4. Logout
5. Test Google login

---

# Next Development Steps

After authentication is completed:

1. Build frontend landing page
2. Implement login & register UI
3. Connect frontend to auth API
4. Implement event management system

Upcoming backend modules:

* events
* registrations
* invitations
* roles
* QR event check-in
