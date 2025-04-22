# FLOWVA API

The API allows users to register, and log in. It includes user authentication using JSON Web Tokens (JWT). The API documentation is provided using Docgen UI.

## Features

-   **User Authentication**

    -   Register a new user.
    -   Login an existing user.
    -   JWT-based authentication.
    -   Password hashing using bcryptjs.

-   **Security**

    -   Implements security best practices with Helmet, CORS, XSS protection, and rate limiting.

-   **Swagger Documentation**
    -   API documentation is available through Docgen UI.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Authentication**: JWT, bcryptjs
-   **Security**: Helmet, CORS, xss-clean, express-rate-limit

## Packages Used

-   [**bcryptjs**](https://www.npmjs.com/package/bcryptjs): For hashing passwords.
-   [**cors**](https://www.npmjs.com/package/cors): To enable CORS.
-   [**dotenv**](https://www.npmjs.com/package/dotenv): For environment variables.
-   [**express**](https://www.npmjs.com/package/express): Web framework for Node.js.
-   [**express-rate-limit**](https://www.npmjs.com/package/express-rate-limit): To limit repeated requests to public APIs.
-   [**helmet**](https://www.npmjs.com/package/helmet): For setting various HTTP headers to secure the app.
-   [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken): For generating and verifying JWTs.
-   [**mongoose**](https://www.npmjs.com/package/mongoose): For MongoDB object modeling.
-   [**hpp**](https://www.npmjs.com/package/hpp): For prevention against HTTP Parameter Pollution

## Database

-   **MongoDB**: A NoSQL database used to store user and job data.

## API Endpoints

### Auth Routes

-   **Register**
    -   `POST /api/v1/auth/register`
    -   Register a new user.
-   **Login**
    -   `POST /api/v1/auth/login`
    -   Login an existing user.
-   **Logged In user**
    -   `GET /api/v1/auth/me`
    -   Get currently logged in user.
-   **Logout**
    -   `GET /api/v1/auth/logout`
    -   Logout an existing user.
-   **Forgot Password**
    -   `POST /api/v1/auth/forgotpassword`
    -   Forgot user password.
-   **Reset password**
    -   `PUT /api/v1/auth/resetpassword/:resettoken`
    -   Reset forgot user's password via token.

## Models

### User Model

-   Validates name, email, and password using Mongoose.
-   Password is hashed using bcryptjs before saving.
-   Generates JWT for authentication.

## Error Handling

-   **Validation Errors**: Handled by Mongoose.
-   **Duplicate Email Errors**: Checked during registration.
-   **Cast Errors**: Handled when an invalid ID is passed.

## Security Features

-   **Helmet**: Secures HTTP headers.
-   **CORS**: Allows cross-origin requests from specific domains.
-   **Express-Rate-Limit**: Limits the number of requests to prevent DDoS attacks.
-   **HTTP Parameter Pollution**: Express middleware to protect against HTTP Parameter Pollution attacks.

## Documentation

Docgen UI is used to provide detailed API documentation. You can access the documentation by navigating to `/api-docs` in your browser once the server is running.

## Getting Started

1. Clone the repository.

    ```bash
    git clone https://github.com/olaide-hok/flowva-bed-auth
    ```

2. Install dependencies.

    ```bash
    npm install
    ```

3. Setup Environment Variables:

    - Create a config.env file in a config directory of your project.
    - Add the required environment variable MONGO_URI, JWT_SECRET, JWT_EXPIRE, JWT_COOKIE_EXPIRE, SMTP_HOST, SMTP_PORT, SMTP_EMAIL, SMTP_PASSWORD, FROM_EMAIL, FROM_NAME

4. Run the server

    ```bash
    npm run dev
    ```

5. Access the API documentation at http://localhost:5200/api-docs.

### Continous development/Improvements to be meade

-   Add security measures to prevent cross site scripting.
-   Add security measures to sanitize input data.
