import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>Sweet Surrender</h2>

          <p>
            Handmade sweets crafted with passion,
            tradition and a touch of elegance.
          </p>
        </div>


        <div className="footer-section">
          <h3>Explore</h3>

          <Link to="/boutique">All Products
              </Link>

              <Link to="/boutique/cookies">
                Cookies
              </Link>

              <Link to="/boutique/macarons">
                Macarons
              </Link>

              <Link to="/boutique/tunisian-sweets">
                Tunisian Sweets
              </Link>

              <Link to="/boutique/drinks">
                Drinks
              </Link>
        </div>


        <div className="footer-section">
          <h3>Our Sweets</h3>

          <a href="/">Tunisian Sweets</a>
          <a href="/">New Arrivals</a>
          <a href="/">Best Sellers</a>
          <a href="/">Gift Boxes</a>
        </div>


        <div className="footer-newsletter">
          <h3>Stay Sweet</h3>

          <p>
            Get new products and special offers.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Your email"
            />

            <button>
              Join
            </button>
          </div>
        </div>

      </div>


      <div className="footer-bottom">

        <p className="p">
          © 2026 Sweet Surrender. All rights reserved.
        </p>

        <div className="footer-social">
          <a href="/">Instagram</a>
          <a href="/">Facebook</a>
          <a href="/">Pinterest</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;