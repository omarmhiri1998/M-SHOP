import { useNavigate } from "react-router-dom";

import useUserStore from "../../store/useUserStore";

import "./CartButton.css";


function CartButton() {
  const navigate = useNavigate();


  const currentUser = useUserStore(
    (state) => state.currentUser
  );


  const cart =
    currentUser?.cart || [];


  const count = cart.reduce(
    (total, product) =>
      total + product.quantity,
    0
  );


  function openCart() {

    if (count === 0) {
      return;
    }

    navigate("/pay");
  }


  return (
    <button
      className="cart-button"
      onClick={openCart}
      disabled={count === 0}
    >

      <span className="cart-icon">
        🛒
      </span>


      <span className="cart-count">
        {count}
      </span>

    </button>
  );
}


export default CartButton;