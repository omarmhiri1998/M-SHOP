import { tunisianSweets } from "../data/tunisianSweets";

import useUserStore from "../store/useUserStore";

import "./TunisianSweets.css";


function TunisianSweets() {

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
  // ADD TO CART
  // =========================

  function handleAdd(sweet) {
    if (!currentUser) {
      alert("Please login first");
      return;
    }


    const product = {
      ...sweet,

      id: `sweet-${sweet.id}`,

      price: Number(sweet.price),
    };


    addToCart(product);
  }


  return (
    <section className="sweets-page">

      {/* HEADER */}

      <div className="sweets-header">

        <p className="sweets-label">
          THE BOUTIQUE
        </p>


        <h1 className="sweets-title">
          Tunisian Delicacies
        </h1>


        <p className="sweets-intro">
          A sweet heritage passed down through
          generations, crafted with exquisite
          ingredients and timeless savoir-faire.
        </p>

      </div>


      {/* PRODUCTS */}

      <div className="sweets-grid">

        {tunisianSweets.map((sweet) => (

          <div
            className="sweet-card"
            key={sweet.id}
          >

            <div className="sweet-image">

              <img
                src={sweet.image}
                alt={sweet.name}
              />

            </div>


            <p className="sweet-category">
              {sweet.category}
            </p>


            <h3 className="sweet-name">
              {sweet.name}
            </h3>


            <p className="sweet-description">
              {sweet.description}
            </p>


            <div className="sweet-footer">

              <span className="sweet-price">
                {Number(sweet.price).toFixed(2)} €
              </span>


              <button
                className="sweet-add"
                onClick={() =>
                  handleAdd(sweet)
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


export default TunisianSweets;