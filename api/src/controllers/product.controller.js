import products from '../data/products.js';

export const getProductsController = function (req, res) {
  try {
    res.status(200).json(products);
  } catch (error) {
    throw new Error('Failed to get products');
  }
};