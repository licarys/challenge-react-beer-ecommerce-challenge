# React Beer Ecommerce Challenge

This project contains two parts:

- `/api`: Node.js backend with Express
- `/client`: React frontend using Vite + Sass

## 🔧 Requirements

- Node.js (v18+)
- npm (v9+)

## 📁 Folder structure

```
react-beer-ecommerce-challenge/
├── api/       ← Backend (Express API)
├── client/    ← Frontend (React app)
└── README.md
```

## ▶️ How to run the project

### Clone the repository

   ```bash
   git clone https://github.com/licarys/challenge-react-beer-ecommerce-challenge.git
   ```

### 📡 Backend (`/api`)

1. Navigate to the `api` directory:

   ```bash
   cd api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.sample`:

   ```env
   PORT=3000
   API_BASE_URL=http://localhost
   NODE_ENV=development
   LOG_DIRECTORY=logs
   ```

4. Run the server:

   ```bash
   npm run dev
   ```

5. Run tests:

   ```bash
   npm run test
   ```

📌 The API is served at: `http://localhost:3000/api`

### 💻 Frontend (`/client`)

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

5. Open in browser:

   ```
   http://localhost:5173/products
   ```

📌 The frontend communicates with the backend using the `VITE_API_BASE_URL` defined above.

## 🧪 Features

- Mobile-first UI with Product Listing (PLP) and Product Detail Page (PDP)
- PDP auto-refreshes price & stock every 5 seconds
- Add to Cart simulation via `window.alert`
- Styled using Sass (no CSS frameworks)