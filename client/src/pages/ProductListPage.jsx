import { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductCard from '../components/ProductCard';
import { get } from '../services/api';
import './ProductListPage.scss';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    get('/api/products')
      .then(setProducts)
      .catch(() => { });
  }, []);

  return (
    <DefaultLayout>
      <div className='product-page'>
        <h2 className='product-page-title'>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ProductListPage;
