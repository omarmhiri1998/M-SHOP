import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header-left">
        <Link to="/collections">COLLECTIONS</Link>
        <Link to="/boutique">BOUTIQUE</Link>
      </nav>

      <div className="header-logo">
        <Link to="/"><h1>MAISON SABLÉ</h1></Link>
      </div>

      <nav className="header-right">
        <Link to="/contact">CONTACT</Link>
        <button className="cart-button">PANIER (0)</button>
      </nav>
    </header>
  );
}

export default Header;