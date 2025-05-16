# API – React Beer Ecommerce Challenge

This is the backend for the Beer Ecommerce Challenge, built with Node.js and Express.

## 🔧 Requirements

- Node.js (v18+)
- npm (v9+)

## 🌱 Environment Variables

Create a `.env` file in the `/api` folder based on the provided `.env.sample`:

| Variable        | Description               | Default        |
|----------------|---------------------------|----------------|
| PORT           | Port to run the server    | 3000           |
| API_BASE_URL   | Base URL for the API      | http://localhost |
| NODE_ENV       | Environment               | development    |
| LOG_DIRECTORY  | Directory to store logs   | logs           |

Example:

```
PORT=3000
API_BASE_URL=http://localhost
NODE_ENV=development
LOG_DIRECTORY=logs
```

## 📦 Installation

```bash
cd api
npm install
```

## ▶️ Running the Server

```bash
npm run dev
```

This will start the Express server at `http://localhost:3000/api`.

## 🧪 Running Tests

```bash
npm run test
```

Includes unit tests for routes, controllers, and middlewares.

## 📁 Folder Structure

```
api/
├── controllers/     # Route handlers
├── data/            # Static product & stock data
├── middlewares/     # Error handling, logging, etc.
├── routes/          # Route definitions
├── services/        # Business logic (optional)
├── utils/           # Utility functions like path helpers
├── app.js           # Express app setup
├── index.js         # Entry point
└── README.md
```

## 📝 Notes

- Stock and price info is simulated from a local file (`stock-price.js`) and refreshed every 5 seconds on the frontend.
- Logs are saved in `/logs/error.log`.