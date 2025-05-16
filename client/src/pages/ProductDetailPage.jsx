import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import PDPHeader from '../components/PDPHeader';
import SizeSelector from '../components/SizeSelector';
import { get } from '../services/api';
import './ProductDetailPage.scss';

function ProductDetailPage() {
  const { slug } = useParams();
  const id = slug.split('-')[0];

  const [expanded, setExpanded] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedSku, setSelectedSku] = useState(null);
  const [stockInfo, setStockInfo] = useState(null);

  useEffect(() => {
    get(`/api/products/${id}`)
      .then((data) => {
        setProduct(data);
        setSelectedSku(data.skus[0]);
      })
      .catch(() => window.alert(`Error loading product ${id}`));
  }, [id]);

  useEffect(() => {
    const fetchStock = () => {
      if (!selectedSku) return;

      get(`/api/stock-price/${selectedSku.code}`)
        .then((data) => {
          setStockInfo(data);
        })
        .catch(() => window.alert('Error loading stock'));
    };

    fetchStock();
    const interval = setInterval(fetchStock, 5000);
    return () => clearInterval(interval);
  }, [selectedSku]);

  if (!product) return null;

  const { brand, image, origin, information, skus } = product;

  return (
    <DefaultLayout>
      <div className="pdp-page">
        <PDPHeader />

        <img className="pdp-image" src={image} alt={brand} />

        <div className="pdp-content">
          <div className="pdp-title-price">
            <h3>{brand}</h3>
            <span className="pdp-price">
              {stockInfo ? `$${(stockInfo.price / 100).toFixed(2)}` : '—'}
            </span>
          </div>

          <div className="pdp-meta">
            Origin: {origin} &nbsp;|&nbsp; Stock: {stockInfo?.stock ?? '...'}
          </div>

          <h4 className="pdp-title-description">Description</h4>
          <p className="pdp-description">
            {expanded ? information : `${information?.slice(0, 180)}...`}{' '}
            <button className="read-more" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Show less' : 'Read more'}
            </button>
          </p>

          <h4 className='pdp-title-size'>Size</h4>
          <SizeSelector
            skus={skus}
            selected={selectedSku}
            onSelect={setSelectedSku}
          />

          <div className="pdp-actions">
            <button className="icon-button">
              <img src="/icons/add-to-bag.svg" alt="bag" />
            </button>
            <button
              className="primary-button"
              onClick={() =>
                window.alert(`Add to cart: ${brand}, SKU: ${selectedSku?.code}`)
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ProductDetailPage;