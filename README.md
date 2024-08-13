# Setting Up Epic Eats

This guide will walk you through the process of setting up epic eats on your local machine.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system.

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Fredasante/food-ordering-app.git
cd food-ordering-app
```

## Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and create two files: `.env`. Add the following contents to it:

   ```plaintext
    MONGODB_CONNECTION_STRING=

    FRONTEND_URL=

    # Auth0 Configuration
    AUTH0_AUDIENCE=
    AUTH0_ISSUER_BASE_URL=

    # Cloudinary Variables
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    # Stripe
    STRIPE_API_KEY=

   ```

2. **MongoDB Setup**:

   - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new cluster and follow the instructions to set up a new database.
   - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env` files.

3. **Cloudinary Setup**:

   - Create an account at [Cloudinary](https://cloudinary.com/).
   - Navigate to your dashboard to find your cloud name, API key, and API secret.
   - Add these details to the respective `CLOUDINARY_*` variables in your `.env` files.

4. **Stripe Setup**:

   - Sign up for a Stripe account at [Stripe](https://stripe.com/).
   - Find your API keys in the Stripe dashboard.
   - Add your Stripe API key to the `STRIPE_API_KEY` variable in your `.env` files.

5. **Auth0 Setup**:

   - Sign up at [Auth0](https://auth0.com/).
   - Create a new application in the Auth0 dashboard.
   - Get your **Client ID**, **Client Secret**, and **Audience**.
   - Add the following to your `.env` file:

     ```bash
     AUTH0_AUDIENCE=your-audience-here
     AUTH0_ISSUER_BASE_URL=https://your-tenant-name.auth0.com/
     ```

6. **Frontend URL**:
   - The `FRONTEND_URL` should point to the URL where your frontend application is running (typically `http://localhost:5173` if you're running it locally).

## Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create a file: `.env`:

   ```plaintext
    VITE_API_BASE_URL=

    VITE_AUTH0_DOMAIN=
    VITE_AUTH0_CLIENT_ID=
    VITE_AUTH0_CALLBACK_URL=
    VITE_AUTH0_AUDIENCE=
   ```

2. **VITE_API_BASE_URL**:
   - The `VITE_API_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:7000` if you're running it locally).

## Running the Application

1. **Backend**:

   - Navigate to the `backend` directory.
   - Install dependencies: `npm install`.
   - Start the server: `npm start`.

2. **Frontend**:
   - Open a new terminal and navigate to the `frontend` directory.
   - Install dependencies: `npm install`.
   - Start the frontend application: `npm run dev`.
   - The application should now be running on `http://localhost:5173` but verify this in your command line terminal
