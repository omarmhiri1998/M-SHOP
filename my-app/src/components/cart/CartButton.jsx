import "./CartButton.css";

function CartButton({ count }) {
  return (
    <button className="cart-button">

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