import {
  Link,
  useLocation,
} from "react-router-dom";

import "./Receipt.css";


function Receipt() {
  const location = useLocation();

  const order =
    location.state?.order;


  if (!order) {
    return (
      <section className="receipt-page">

        <div className="receipt-box">

          <h1>
            No receipt available
          </h1>

          <Link
            to="/"
            className="receipt-home"
          >
            BACK HOME
          </Link>

        </div>

      </section>
    );
  }


  return (
    <section className="receipt-page">

      <div className="receipt-box">

        {/* SUCCESS */}

        <div className="receipt-success">
          ✓
        </div>


        <p className="receipt-label">
          PAYMENT SUCCESSFUL
        </p>


        <h1>
          Thank You!
        </h1>


        <p className="receipt-message">
          Your order has been successfully
          placed.
        </p>


        {/* ORDER INFO */}

        <div className="receipt-info">

          <div>
            <span>
              Order Number
            </span>

            <strong>
              #{order.id}
            </strong>
          </div>


          <div>
            <span>
              Customer
            </span>

            <strong>
              {order.customer}
            </strong>
          </div>


          <div>
            <span>
              Date
            </span>

            <strong>
              {order.date}
            </strong>
          </div>


          <div>
            <span>
              Payment
            </span>

            <strong>
              {order.paymentMethod}
            </strong>
          </div>

        </div>


        {/* PRODUCTS */}

        <div className="receipt-products">

          <h2>
            Receipt
          </h2>


          {order.products.map(
            (product) => (

              <div
                className="receipt-product"
                key={product.id}
              >

                <div>

                  <strong>
                    {product.name}
                  </strong>

                  <span>
                    × {product.quantity || 1}
                  </span>

                </div>


                <span>

                  {(
                    Number(product.price) *
                    (product.quantity || 1)
                  ).toFixed(2)} €

                </span>

              </div>

            )
          )}

        </div>


        {/* PRICE */}

        <div className="receipt-prices">

          <div>

            <span>
              Subtotal
            </span>

            <span>
              {order.subtotal.toFixed(2)} €
            </span>

          </div>


          <div>

            <span>
              Delivery
            </span>

            <span>
              {order.deliveryPrice === 0
                ? "Free"
                : `${order.deliveryPrice.toFixed(
                    2
                  )} €`}
            </span>

          </div>


          <div className="receipt-total">

            <strong>
              Total
            </strong>

            <strong>
              {order.total.toFixed(2)} €
            </strong>

          </div>

        </div>


        <Link
          to="/"
          className="receipt-home"
        >
          CONTINUE SHOPPING
        </Link>

      </div>

    </section>
  );
}


export default Receipt;