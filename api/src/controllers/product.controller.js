import products from '../data/products.js';
import stockPrice from '../data/stock-price.js';
import { convertPrice } from '../utils/convert-price.js';

export const getProductsController = function (req, res) {
  try {
    const enhanced = products.map((product) => {4
      const firstSku = product.skus[0];
      const stockPriceItem = stockPrice[firstSku.code];
      
      return {
        ...product,
        stock: stockPriceItem.stock,
        price: convertPrice(stockPriceItem.price),
      };
    });


    res.status(200).json(enhanced);
  } catch (error) {
    throw new Error('Failed to get products');
  }
};
