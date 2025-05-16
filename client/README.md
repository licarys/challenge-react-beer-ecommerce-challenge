# Frontend – React Beer Ecommerce Challenge

This is the frontend for the Beer Ecommerce Challenge, built with React, Vite, and Sass.

## Clone the repository

   ```bash
   git clone https://github.com/licarys/challenge-react-beer-ecommerce-challenge.git
   ```

## 🔧 Requirements

- Node.js (v18+)
- npm (v9+)

## 🌱 Environment Variables

Create a `.env` file in the `/client` folder with the following variable:

```
VITE_API_BASE_URL=http://localhost:3000
```

This variable tells the frontend where to fetch product and stock data from.

## 📦 Installation

```bash
cd client
npm install
```

## ▶️ Running the App

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

## 🧪 Running Tests

```bash
npm run test
```

Unit tests are configured with Vitest and React Testing Library.

## 📁 Folder Structure

```
client/
├── components/       # Reusable UI components
├── layouts/          # Layout wrappers (e.g., DefaultLayout)
├── pages/            # Route pages (PLP, PDP)
├── services/         # API call helpers
├── styles/           # Global and component-level Sass styles
├── App.jsx           # Main app structure and routes
├── main.jsx          # Entry point
└── README.md
```

## 💡 Features

- Mobile-first responsive layout using only Sass
- Product Listing Page (`/products`) with clickable product cards
- Product Detail Page (`/product/:slug`) with:
  - SKU variant selector
  - Real-time stock & price refresh (every 5 seconds)
  - "Add to Cart" simulation using `window.alert()`
- Error handling via `window.alert()`
- Uses semantic colors and layout styling to match the design mocks

## 📸 Assets

- Product images should be placed in `public/products`
- Icon assets used by buttons and headers should be placed in `public/icons`