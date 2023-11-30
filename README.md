# Authentication

## Introduction

Welcome to the Authentication API documentation. This documentation provides details on how to register, authenticate, and use the secure endpoint. Additionally, it outlines the rate-limiting strategy implemented for enhanced security.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Base URL](#base-url)
   - [Authentication](#authentication)
2. [User Registration](#user-registration)
   - [Endpoint](#endpoint)
   - [Request](#request)
   - [Response](#response)
3. [User Authentication](#user-authentication)
   - [Endpoint](#endpoint-1)
   - [Request](#request-1)
   - [Response](#response-1)
4. [Secure Endpoint](#secure-endpoint)
   - [Endpoint](#endpoint-2)
   - [Request](#request-2)
   - [Response](#response-2)
5. [Rate Limiting](#rate-limiting)
   - [Strategy](#strategy)
   - [Response](#response-3)
6. [Local Setup](#Local_Setup)
   - [Local Testing](#local-testing)
7. [Deployement](#deployement)

## 1. Getting Started

### Base URL

The base URL for the API is https://authentication-2ov9.onrender.com

### Authentication

To access protected endpoints, you need to include an authentication token in the header of your request. The token is obtained during the authentication process.

## 2. User Registration

### Endpoint

- `POST https://authentication-2ov9.onrender.com/auth/register`

### Request

```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Response

```json
{
  "message": "User registered successfully"
}
```

## 3. User Authentication

### Endpoint

- `POST https://authentication-2ov9.onrender.com/auth/login`

### Request

```json
{
  "username": "example_user",
  "password": "securepassword"
}
```

### Response

```json
{
  "token": "your_auth_token"
}
```

## 4. Secure Endpoint

### Endpoint

- `GET https://authentication-2ov9.onrender.com/secure/secure-endpoint`

### Request

Include the authentication token obtained during login in the header.

### Response

```json
{
  "data": "Secure data from the endpoint"
}
```

## 5. Rate Limiting

### Strategy

The API implements rate limiting to prevent abuse. The strategy is as follows:

- **Window Time:** 15 minutes
- **Maximum Requests:** 10 requests per IP

### Response

When the rate limit is exceeded, the response will include the following message:

```json
{
  "error": "Too many requests from this IP, please try again later."
}
```

## 6. Local Setup

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Setup

1. Clone the repository:

   ```bash
   https://github.com/Subhrajit-Dutta/authentication.git
   
2. Navigate to the project:
   ```bash
   cd authentication

3. Install dependencies:
   ```bash
   npm install

4. Create a `.env` file in the root directory of the project to store sensitive information and configuration settings. Add the following variables to the `.env` file:
   ```plaintext
   JWT_SECRET=
   DATABASE_URL=
   NODE_ENV=production
5. Start the server:
   ```bash
   npm run start

The server will be accessible at http://localhost:3000/
### Local Testing

### Endpoints

When testing the API locally, you can use the following endpoints:

- **User Registration (Sign Up):**
  - Endpoint: `POST http://localhost:3000/auth/register`
  - Description: Create a new user account.

- **User Authentication (Login):**
  - Endpoint: `POST http://localhost:3000/auth/login`
  - Description: Authenticate and obtain a JWT token for accessing secure endpoints.

- **Secure API Endpoint:**
  - Endpoint: `GET http://localhost:3000/secure/secure-endpoint`
  - Description: Access a secure endpoint that requires authentication.

## 7. Deployment on Render

Follow these steps to deploy the backend on Render:

### 1. Create a Render Account

If you don't have a Render account, sign up at [Render](https://render.com/).

### 2. Configure Environment Variables

On Render, you can configure environment variables in the Render dashboard. Set the following environment variables:

- `JWT_SECRET`: Your secret key for JWT token generation.
- `DATABASE_URL`: Connection URL for your PostgreSQL database.
- `NODE_ENV`: Set to `production`.

### 3. Deploy on Render

1. Create a new web service on Render.
2. Connect your GitHub repository containing the backend code.
3. Set the build command to `npm install && npm run build`.
4. Set the start command to `npm start`.

Render will automatically deploy your backend.

### 4. Access the Deployed Backend

Once deployed, you can access your backend API at the provided Render URL.
