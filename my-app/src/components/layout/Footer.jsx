import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <a href="/contact">CONTACT</a>
        <a href="/faq">FAQ</a>
        <a href="/livraison">LIVRAISON &amp; RETOURS</a>
      </nav>

      <p className="footer-copyright">
        © 2026 Maison Sablé — Tous droits réservés
      </p>
    </footer>
  );
}

export default Footer;