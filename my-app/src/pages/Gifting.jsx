import { giftingItems } from "../data/gifting";

import useUserStore from "../store/useUserStore";

import "./Gifting.css";


function Gifting() {

  const addToCart = useUserStore(
    (state) => state.addToCart
  );

  const currentUser = useUserStore(
    (state) => state.currentUser
  );


  function handleAdd(item) {
    if (!currentUser) {
      alert("Please login first");
      return;
    }


    const product = {
      ...item,

      id: `gift-${item.id}`,

      price: Number(item.price),
    };


    addToCart(product);
  }


  return (
    <section className="gifting-page">

      <div className="gifting-header">

        <p className="gifting-label">
          FOR GIFTING
        </p>


        <h1 className="gifting-title">
          Gift Boxes
        </h1>


        <p className="gifting-intro">
          Beautifully hand-wrapped gift boxes,
          ready to delight, with a personalized
          note available upon request.
        </p>

      </div>


      <div className="gifting-grid">

        {giftingItems.map((item) => (

          <div
            className="gift-card"
            key={item.id}
          >

            <div className="gift-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>


            <p className="gift-category">
              {item.category}
            </p>


            <h3 className="gift-name">
              {item.name}
            </h3>


            <p className="gift-description">
              {item.description}
            </p>


            <div className="gift-footer">

              <span className="gift-price">
                {Number(item.price).toFixed(2)} €
              </span>


              <button
                className="gift-add"
                onClick={() =>
                  handleAdd(item)
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


export default Gifting;