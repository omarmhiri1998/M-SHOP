import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';
import './FourneeDuJour.css';

function FourneeDuJour() {
  return (
    <section className="fournee">
      <p className="fournee-label">LA BOUTIQUE</p>
      <h2 className="fournee-title">Fournée du jour</h2>

      <div className="fournee-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            category={product.category}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default FourneeDuJour;