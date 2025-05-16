import stockData from '../data/stock-price.js';

export const getStockBySkuController = function (req, res) {
  try {
    const { sku } = req.params;
    const item = stockData[sku];

    if (!item) {
      return res.status(404).json({ message: `SKU ${sku} not found.` });
    }

    res.json({ sku: item.sku, price: item.price, stock: item.stock });

  } catch (error) {
    throw new Error('Failed to get stock');
  }
};