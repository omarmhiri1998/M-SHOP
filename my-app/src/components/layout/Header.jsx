import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header-left">
        <a href="/collections">COLLECTIONS</a>
        <a href="/boutique">BOUTIQUE</a>
      </nav>

      <div className="header-logo">
        <h1>MAISON SABLÉ</h1>
      </div>

      <nav className="header-right">
        <a href="/histoire">HISTOIRE</a>
        <button className="cart-button">PANIER (0)</button>
      </nav>
    </header>
  );
}

export default Header;