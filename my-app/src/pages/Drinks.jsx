import { useState } from "react";

import { drinks } from "../data/drinks";

import useUserStore from "../store/useUserStore";

import "./Drinks.css";


const filters = [
  "ALL",
  "COFFEE",
  "REFRESHING",
  "MOCKTAIL",
];


function Drinks() {
  const [activeFilter, setActiveFilter] =
    useState("ALL");


  // =========================
  // ZUSTAND
  // =========================

  const addToCart = useUserStore(
    (state) => state.addToCart
  );

  const currentUser = useUserStore(
    (state) => state.currentUser
  );


  // =========================
  // FILTER
  // =========================

  const filteredDrinks =
    activeFilter === "ALL"
      ? drinks
      : drinks.filter(
          (drink) =>
            drink.category === activeFilter
        );


  // =========================
  // ADD TO CART
  // =========================

  function handleAdd(drink) {
    if (!currentUser) {
      alert("Please login first");
      return;
    }


    const product = {
      ...drink,

      // unique id for cart
      id: `drink-${drink.id}`,

      // important: price becomes Number
      price: Number(drink.price),
    };


    addToCart(product);
  }


  return (
    <section className="drinks-page">

      {/* HEADER */}

      <div className="drinks-header">

        <p className="drinks-label">
          THE BOUTIQUE
        </p>

        <h1 className="drinks-title">
          Our Drinks
        </h1>

        <p className="drinks-intro">
          Freshly made coffees, teas and
          mocktails, crafted to pair perfectly
          with our sweets.
        </p>

      </div>


      {/* FILTERS */}

      <div className="drinks-filters">

        {filters.map((filter) => (

          <button
            key={filter}
            className={`filter-btn ${
              activeFilter === filter
                ? "filter-active"
                : ""
            }`}
            onClick={() =>
              setActiveFilter(filter)
            }
          >
            {filter}
          </button>

        ))}

      </div>


      {/* PRODUCTS */}

      <div className="drinks-grid">

        {filteredDrinks.map((drink) => (

          <div
            className="drink-card"
            key={drink.id}
          >

            <div className="drink-image">

              <img
                src={drink.image}
                alt={drink.name}
              />

            </div>


            <p className="drink-category">
              {drink.category}
            </p>


            <h3 className="drink-name">
              {drink.name}
            </h3>


            <p className="drink-description">
              {drink.description}
            </p>


            <div className="drink-footer">

              <span className="drink-price">
                {Number(drink.price).toFixed(2)} €
              </span>


              <button
                className="drink-add"
                onClick={() =>
                  handleAdd(drink)
                }
              >
                ADD
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


export default Drinks;