import './ProductCard.scss';
import { useNavigate } from 'react-router-dom';

function ProductCard({ data }) {
  const { id, brand, image, skus, price } = data;
  const navigate = useNavigate();

  const handleClick = () => {
    const brandSlug = brand.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${id}-${brandSlug}`);
  };

  return (
    <div className="product-card" onClick={handleClick} role="button">
      <h4 className="product-name">{brand}</h4>
      <img src={image} alt={brand} className="product-image" />
      <div className="product-footer">
        <span className="product-price">{price}</span>
        <button
          className="add-button"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          <img src="/icons/primary-button.png" alt="Add to cart" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
