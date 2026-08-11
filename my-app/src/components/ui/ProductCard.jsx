import './ProductCard.css';

function ProductCard({ image, category, name, description, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <p className="product-category">{category}</p>
      <h4 className="product-name">{name}</h4>
      <p className="product-description">{description}</p>

      <div className="product-footer">
        <span className="product-price">{price} €</span>
        <button className="product-button">AJOUTER</button>
      </div>
    </div>
  );
}

export default ProductCard;