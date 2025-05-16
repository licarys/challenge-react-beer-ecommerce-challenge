import { Router } from 'express';
import { getStockBySkuController } from '../controllers/stock.controller.js';

const router = Router();

router.get('/:sku', getStockBySkuController);

export default router;