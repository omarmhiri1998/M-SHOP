import { useState } from 'react';
import { drinks } from '../data/drinks';
import './Drinks.css';

const filters = ['ALL', 'COFFEE', 'REFRESHING', 'MOCKTAIL'];

function Drinks() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredDrinks =
    activeFilter === 'ALL'
      ? drinks
      : drinks.filter((d) => d.category === activeFilter);

  return (
    <section className="drinks-page">
      <div className="drinks-header">
        <p className="drinks-label">THE BOUTIQUE</p>
        <h1 className="drinks-title">Our Drinks</h1>
        <p className="drinks-intro">
          Freshly made coffees, teas and mocktails, crafted to pair
          perfectly with our sweets.
        </p>
      </div>

      <div className="drinks-filters">
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

      <div className="drinks-grid">
        {filteredDrinks.map((drink) => (
          <div className="drink-card" key={drink.id}>
            <div className="drink-image">
              <img src={drink.image} alt={drink.name} />
            </div>

            <p className="drink-category">{drink.category}</p>
            <h3 className="drink-name">{drink.name}</h3>
            <p className="drink-description">{drink.description}</p>

            <div className="drink-footer">
              <span className="drink-price">{drink.price} €</span>
              <button className="drink-add">ADD</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Drinks;