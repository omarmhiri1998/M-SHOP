import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUserStore from "../../store/useUserStore";

import "./Pay.css";


function Pay() {
  const navigate = useNavigate();


  const currentUser = useUserStore(
    (state) => state.currentUser
  );

  const increaseQuantity = useUserStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useUserStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useUserStore(
    (state) => state.removeFromCart
  );

  const clearCart = useUserStore(
    (state) => state.clearCart
  );


  const [deliveryType, setDeliveryType] =
    useState("pickup");

  const [paymentMethod, setPaymentMethod] =
    useState("card");


  if (!currentUser) {
    return (
      <div className="pay-message">
        Please login first.
      </div>
    );
  }


  const cart = currentUser.cart || [];


  // =========================
  // SUBTOTAL
  // =========================

  const subtotal = cart.reduce(
    (total, product) =>
      total +
      Number(product.price) *
        (product.quantity || 1),
    0
  );


  // =========================
  // DELIVERY PRICE
  // =========================

  const deliveryPrice =
    deliveryType === "delivery"
      ? 4.9
      : 0;


  // =========================
  // TOTAL
  // =========================

  const total =
    subtotal + deliveryPrice;


  // =========================
  // PAY
  // =========================

  function handlePay() {
    if (cart.length === 0) {
      return;
    }


    // نحفظ الطلب قبل حذف panier
    const order = {
      id: Date.now(),

      customer: currentUser.name,

      products: [...cart],

      subtotal: subtotal,

      deliveryType: deliveryType,

      deliveryPrice: deliveryPrice,

      paymentMethod: paymentMethod,

      total: total,

      date: new Date().toLocaleString(),
    };


    // نفرغ panier
    clearCart();


    // ننتقل إلى Receipt
    navigate("/receipt", {
      state: {
        order: order,
      },
    });
  }


  return (
    <section className="pay-page">

      {/* =========================
          LEFT SIDE
      ========================== */}

      <div className="pay-products">

        <h1>
          Your Cart
        </h1>


        {/* PAYMENT METHOD */}

        <div className="payment-method">

          <h3>
            Payment Method
          </h3>


          <div className="payment-options">

            <label
              className={`payment-option ${
                paymentMethod === "card"
                  ? "active-payment"
                  : ""
              }`}
            >

              <input
                type="radio"
                name="payment"
                value="card"
                checked={
                  paymentMethod === "card"
                }
                onChange={() =>
                  setPaymentMethod("card")
                }
              />

              <span className="payment-icon">
                💳
              </span>

              Card

            </label>


            <label
              className={`payment-option ${
                paymentMethod === "paypal"
                  ? "active-payment"
                  : ""
              }`}
            >

              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={
                  paymentMethod === "paypal"
                }
                onChange={() =>
                  setPaymentMethod("paypal")
                }
              />

              <span className="paypal-text">
                PayPal
              </span>

            </label>


            <label
              className={`payment-option ${
                paymentMethod === "cash"
                  ? "active-payment"
                  : ""
              }`}
            >

              <input
                type="radio"
                name="payment"
                value="cash"
                checked={
                  paymentMethod === "cash"
                }
                onChange={() =>
                  setPaymentMethod("cash")
                }
              />

              Cash

            </label>

          </div>

        </div>


        {/* CART PRODUCTS */}

        {cart.length === 0 ? (

          <div className="empty-cart">
            <h3>
              Your cart is empty
            </h3>
          </div>

        ) : (

          cart.map((product) => (

            <div
              className="pay-product"
              key={product.id}
            >

              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />


              <div className="product-info">

                <h3>
                  {product.name}
                </h3>


                <p className="product-price">

                  {Number(
                    product.price
                  ).toFixed(2)} €

                </p>


                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        product.id
                      )
                    }
                  >
                    −
                  </button>


                  <span>
                    {product.quantity || 1}
                  </span>


                  <button
                    onClick={() =>
                      increaseQuantity(
                        product.id
                      )
                    }
                  >
                    +
                  </button>

                </div>


                <button
                  className="delete-button"
                  onClick={() =>
                    removeFromCart(
                      product.id
                    )
                  }
                >
                  Remove
                </button>

              </div>


              <div className="product-total">

                {(
                  Number(product.price) *
                  (product.quantity || 1)
                ).toFixed(2)} €

              </div>

            </div>

          ))

        )}

      </div>


      {/* =========================
          ORDER SUMMARY
      ========================== */}

      <aside className="pay-summary">

        <h2>
          Order Summary
        </h2>


        <div className="summary-row">

          <span>
            Subtotal
          </span>

          <span>
            {subtotal.toFixed(2)} €
          </span>

        </div>


        {/* PICKUP */}

        <label className="delivery-option">

          <input
            type="radio"
            name="delivery"
            checked={
              deliveryType === "pickup"
            }
            onChange={() =>
              setDeliveryType("pickup")
            }
          />


          <div>

            <strong>
              Pickup
            </strong>

            <p>
              Pick up your order
              from our shop
            </p>

          </div>


          <span>
            Free
          </span>

        </label>


        {/* DELIVERY */}

        <label className="delivery-option">

          <input
            type="radio"
            name="delivery"
            checked={
              deliveryType === "delivery"
            }
            onChange={() =>
              setDeliveryType("delivery")
            }
          />


          <div>

            <strong>
              Delivery
            </strong>

            <p>
              Delivered to your address
            </p>

          </div>


          <span>
            4.90 €
          </span>

        </label>


        <div className="summary-line"></div>


        <div className="summary-total">

          <span>
            Total
          </span>

          <strong>
            {total.toFixed(2)} €
          </strong>

        </div>


        <button
          className="pay-button"
          onClick={handlePay}
          disabled={cart.length === 0}
        >
          PAY {total.toFixed(2)} €
        </button>

      </aside>

    </section>
  );
}


export default Pay;