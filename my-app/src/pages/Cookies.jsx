import React from 'react'
import { useState } from 'react';
import { cookies } from '../data/cookies';
import './Cookies.css';

const filters = ['ALL', 'CLASSICS', 'SEASONAL', 'GIFTING'];

function Cookies() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredCookies =
    activeFilter === 'ALL'
      ? cookies
      : cookies.filter((c) => c.category === activeFilter);

  return (
    <section className="cookies-page">
      <div className="cookies-header">
        <p className="cookies-label">LA BOUTIQUE</p>
        <h1 className="cookies-title">Nos Cookies</h1>
        <p className="cookies-intro">
          Façonnés à la main, en petites fournées, avec des ingrédients
          sélectionnés pour leur qualité.
        </p>
      </div>

      <div className="cookies-filters">
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

      <div className="cookies-grid">
        {filteredCookies.map((cookie) => (
          <div className="cookie-card" key={cookie.id}>
            <div className="cookie-image">
              <img src={cookie.image} alt={cookie.name} />
            </div>

            <p className="cookie-category">{cookie.category}</p>
            <h3 className="cookie-name">{cookie.name}</h3>
            <p className="cookie-description">{cookie.description}</p>

            <div className="cookie-footer">
              <span className="cookie-price">{cookie.price} €</span>
              <button className="cookie-add">ADD</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cookies;



