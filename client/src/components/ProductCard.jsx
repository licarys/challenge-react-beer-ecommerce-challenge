import './ProductCard.scss';

function ProductCard({ data }) {
  const { brand, image, skus } = data;
  const price = skus?.[0]?.price || data.price || '$0.00';

  const handleAddToCart = () => {
    window.alert(`Add to cart: ${brand}, SKU: ${skus?.[0]?.code}`);
  };

  return (
    <div className="product-card">
      <h4 className="product-name">{brand}</h4>
      <img src={image} alt={brand} className="product-image" />
      <div className="product-footer">
        <span className="product-price">{price}</span>
        <button className="add-button" onClick={handleAddToCart}>
          <img src="/icons/primary-button.png" alt="Add to cart" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
