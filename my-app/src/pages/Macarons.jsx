import { useState } from "react";

import { macarons } from "../data/macarons";

import useUserStore from "../store/useUserStore";

import "./Macarons.css";


const filters = [
  "ALL",
  "CLASSICS",
  "SEASONAL",
  "GIFTING",
];


function Macarons() {
  const [activeFilter, setActiveFilter] =
    useState("ALL");


  const addToCart = useUserStore(
    (state) => state.addToCart
  );

  const currentUser = useUserStore(
    (state) => state.currentUser
  );


  const filteredMacarons =
    activeFilter === "ALL"
      ? macarons
      : macarons.filter(
          (macaron) =>
            macaron.category === activeFilter
        );


  function handleAdd(macaron) {
    if (!currentUser) {
      alert("Please login first");
      return;
    }

    const product = {
      ...macaron,

      id: `macaron-${macaron.id}`,

      price: Number(macaron.price),
    };

    addToCart(product);
  }


  return (
    <section className="macarons-page">

      <div className="macarons-header">

        <p className="macarons-label">
          THE BOUTIQUE
        </p>

        <h1 className="macarons-title">
          Our Macarons
        </h1>

        <p className="macarons-intro">
          Crisp on the outside, irresistibly delicate
          inside — our handcrafted macarons are made
          fresh every morning, bringing a little taste
          of luxury to every bite.
        </p>

      </div>


      <div className="macarons-filters">

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


      <div className="macarons-grid">

        {filteredMacarons.map((macaron) => (

          <div
            className="macaron-card"
            key={macaron.id}
          >

            <div className="macaron-image">

              <img
                src={macaron.image}
                alt={macaron.name}
              />

            </div>


            <p className="macaron-category">
              {macaron.category}
            </p>


            <h3 className="macaron-name">
              {macaron.name}
            </h3>


            <p className="macaron-description">
              {macaron.description}
            </p>


            <div className="macaron-footer">

              <span className="macaron-price">
                {Number(macaron.price).toFixed(2)} €
              </span>


              <button
                className="macaron-add"
                onClick={() =>
                  handleAdd(macaron)
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


export default Macarons;