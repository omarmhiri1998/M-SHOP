import React from 'react'
import { useState } from 'react';
import { macarons } from '../data/macarons';
import './Macarons.css';
const filters = ['ALL', 'CLASSICS', 'SEASONAL', 'GIFTING'];

function Macarons() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredMacarons =
    activeFilter === 'ALL'
      ? macarons
      : macarons.filter((m) => m.category === activeFilter);

  return (
    <section className="macarons-page">
      <div className="macarons-header">
        <p className="macarons-label">LA BOUTIQUE</p>
        <h1 className="macarons-title">Nos Macarons</h1>
        <p className="macarons-intro">
          Coque croustillante, cœur fondant — façonnés chaque matin dans
          notre atelier.
        </p>
      </div>

      <div className="macarons-filters">
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

      <div className="macarons-grid">
        {filteredMacarons.map((macaron) => (
          <div className="macaron-card" key={macaron.id}>
            <div className="macaron-image">
              <img src={macaron.image} alt={macaron.name} />
            </div>

            <p className="macaron-category">{macaron.category}</p>
            <h3 className="macaron-name">{macaron.name}</h3>
            <p className="macaron-description">{macaron.description}</p>

            <div className="macaron-footer">
              <span className="macaron-price">{macaron.price} €</span>
              <button className="macaron-add">ADD</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Macarons;