import { useState } from "react";

import { cookies } from "../data/cookies";

import useUserStore from "../store/useUserStore";

import "./Cookies.css";


const filters = [
  "ALL",
  "CLASSICS",
  "SEASONAL",
  "GIFTING",
];


function Cookies() {
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

  const filteredCookies =
    activeFilter === "ALL"
      ? cookies
      : cookies.filter(
          (cookie) =>
            cookie.category === activeFilter
        );


  // =========================
  // ADD TO CART
  // =========================

  function handleAdd(cookie) {
    if (!currentUser) {
      alert("Please login first");
      return;
    }


    const product = {
      ...cookie,

      // unique id for cart
      id: `cookie-${cookie.id}`,

      // important: price becomes Number
      price: Number(cookie.price),
    };


    addToCart(product);
  }


  return (
    <section className="cookies-page">

      {/* HEADER */}

      <div className="cookies-header">

        <p className="cookies-label">
          THE BOUTIQUE
        </p>

        <h1 className="cookies-title">
          Our Cookies
        </h1>

        <p className="cookies-intro">
          Handcrafted in small batches,
          using carefully selected ingredients
          for an exceptional taste.
        </p>

      </div>


      {/* FILTERS */}

      <div className="cookies-filters">

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

      <div className="cookies-grid">

        {filteredCookies.map((cookie) => (

          <div
            className="cookie-card"
            key={cookie.id}
          >

            <div className="cookie-image">

              <img
                src={cookie.image}
                alt={cookie.name}
              />

            </div>


            <p className="cookie-category">
              {cookie.category}
            </p>


            <h3 className="cookie-name">
              {cookie.name}
            </h3>


            <p className="cookie-description">
              {cookie.description}
            </p>


            <div className="cookie-footer">

              <span className="cookie-price">
                {Number(cookie.price).toFixed(2)} €
              </span>


              <button
                className="cookie-add"
                onClick={() =>
                  handleAdd(cookie)
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


export default Cookies;