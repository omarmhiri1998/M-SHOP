import "./Header.css";
import { Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="header-content">

        <h1>Sweet Surrender</h1>

        <p>
          Handmade sweets, crafted with passion
        </p>

        <Link to="/boutique" className="header-content-Link">Shop Now
          </Link>

      </div>

    </header>
  );
}

export default Header;