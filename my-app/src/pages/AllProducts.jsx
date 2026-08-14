import { useState } from 'react';
import { cookies } from '../data/cookies';
import { macarons } from '../data/macarons';
import { tunisianSweets } from '../data/tunisianSweets';
import { drinks } from '../data/drinks';
import { giftingItems } from '../data/gifting';
import './AllProducts.css';


const allProducts = [
  ...cookies.map((item) => ({ ...item, type: 'Cookies' })),
  ...macarons.map((item) => ({ ...item, type: 'Macarons' })),
  ...tunisianSweets.map((item) => ({ ...item, type: 'Tunisian Sweets' })),
  ...drinks.map((item) => ({ ...item, type: 'Drinks' })),
  ...giftingItems.map((item) => ({ ...item, type: 'Gifting' })),
];

const filters = ['ALL', 'Cookies', 'Macarons', 'Tunisian Sweets', 'Drinks', 'Gifting'];

function AllProducts() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProducts =
    activeFilter === 'ALL'
      ? allProducts
      : allProducts.filter((p) => p.type === activeFilter);

  return (
    <section className="all-products-page">
      <div className="all-products-header">
        <p className="all-products-label">THE BOUTIQUE</p>
        <h1 className="all-products-title">All Products</h1>
        <p className="all-products-intro">
          Every cookie, macaron, sweet and drink we make, handcrafted in
          small batches with care.
        </p>
      </div>

      <div className="all-products-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'filter-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="results-count">
        {filteredProducts.length} product{filteredProducts.length > 1 ? 's' : ''}
      </p>

      <div className="all-products-grid">
        {filteredProducts.map((product) => (
          <div className="all-product-card" key={`${product.type}-${product.id}`}>
            <div className="all-product-image">
              <img src={product.image} alt={product.name} />
              <span className="all-product-type">{product.type}</span>
            </div>

            <p className="all-product-category">{product.category}</p>
            <h3 className="all-product-name">{product.name}</h3>
            <p className="all-product-description">{product.description}</p>

            <div className="all-product-footer">
              <span className="all-product-price">{product.price} €</span>
              <button className="all-product-add">ADD</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllProducts;