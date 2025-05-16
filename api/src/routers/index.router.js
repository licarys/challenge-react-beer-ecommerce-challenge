import { Router } from "express";
import productRoutes from "./product.router.js";
import stockRoutes from "./stock.router.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "API is running" });
});
router.use("/products", productRoutes);
router.use("/stock-price", stockRoutes);

export default router;
