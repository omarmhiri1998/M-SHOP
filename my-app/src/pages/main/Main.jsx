import { useRef } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

import cookie from "../../assets/cookie-dark-chocolate.jpg";
import mocha from "../../assets/iced-coffee-mocha.jpg";
import macaronv from "../../assets/macaron-vanille.jpg";
import cookiep from "../../assets/cookie-praline-noisette.jpg";
import cookiecit from "../../assets/cookie-citron.png";
import cookiepisfram from "../../assets/cookie-pis-fram.png";
import macaronfram from "../../assets/macaron-framboise.jpg";
import macaronstr from "../../assets/cookie-macaron-str.jpg";
function Main({ onAdd }) {
  const seasonalRef = useRef(null);

  function scrollSeasonal(direction) {
    if (direction === "left") {
      seasonalRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    } else {
      seasonalRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  }

  return (
    <main className="main">

      {/* =========================
          SHOP CATEGORIES
      ========================== */}

      <section className="shop-categories">

        <span className="section-label">
          DISCOVER
        </span>

        <h2>Explore our shop</h2>

        <div className="section-line"></div>

        <div className="categories-grid">

       


          <div className="category-item">
            <span className="category-number">01</span>

            <h3>Cookies</h3>

            <p>
              Handmade cookies with soft centers,
              crisp edges and rich flavors.
            </p>

            <Link to="/boutique/cookies" >
            Explor
              </Link>
          </div>


          <div className="category-item">
            <span className="category-number">02</span>

            <h3>Macarons</h3>

            <p>
              Delicate macarons filled with elegant
              and colorful flavors.
            </p>

            <Link to="/boutique/macarons" >
                Explor
              </Link>
          </div>


          <div className="category-item">
            <span className="category-number">03</span>

            <h3>Tunisian Sweets</h3>

            <p>
              Traditional recipes inspired by
              authentic Tunisian pastry.
            </p>


              <Link to="/boutique/tunisian-sweets">
              Explor
              </Link>

              
          </div>
          <div className="category-item">
            <span className="category-number">04</span>

            <h3>Drinks</h3>

            <p>
              Refreshing drinks selected to accompany
              your favorite sweets.
            </p>

            <Link to="/boutique/drinks" >
            Explor
              </Link>
          </div>

        </div>

      </section>


      {/* =========================
          FAVORITES
      ========================== */}

      <section className="favorites">

        <div className="favorites-header">

          <div>
            <span className="section-label">
              OUR SELECTION
            </span>

            <h2>Our Favorites</h2>
          </div>

          <Link to="/boutique" className="view-all">View all products</Link>

        </div>


        <div className="products-grid">

          {/* PRODUCT 1 */}

          <article className="product">

            <div className="product-image">
              <img
                src={cookie}
                alt="Double Chocolate Cookie"
              />
            </div>

            <span className="product-category">
              Cookies
            </span>

            <h3>
              Double Chocolate
            </h3>

            <div className="product-bottom">

              <span className="price">
                3.50 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>


          {/* PRODUCT 2 */}

          <article className="product">

            <div className="product-image">
              <img
                src={mocha}
                alt="Iced Coffee Mocha"
              />
            </div>

            <span className="product-category">
              Drinks
            </span>

            <h3>
              Iced Coffee Mocha
            </h3>

            <div className="product-bottom">

              <span className="price">
                4.20 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>


          {/* PRODUCT 3 */}

          <article className="product">

            <div className="product-image">
              <img
                src={macaronv}
                alt="Vanilla Macaron"
              />
            </div>

            <span className="product-category">
              Macarons
            </span>

            <h3>
              Vanilla Macaron
            </h3>

            <div className="product-bottom">

              <span className="price">
                5.00 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>


          {/* PRODUCT 4 */}

          <article className="product">

            <div className="product-image">
              <img
                src={cookiep}
                alt="Hazelnut Praline Cookie"
              />
            </div>

            <span className="product-category">
              Cookies
            </span>

            <h3>
              Hazelnut Praline
            </h3>

            <div className="product-bottom">

              <span className="price">
                3.00 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>

        </div>

      </section>


      {/* =========================
          SEASONAL
      ========================== */}

      <section className="seasonal">

        <div className="seasonal-header">

          <div>

            <span className="section-label">
              LIMITED EDITION
            </span>

            <h2>
              Seasonal Selection
            </h2>

          </div>


          <div className="seasonal-controls">

            <button
              className="seasonal-arrow"
              onClick={() => scrollSeasonal("left")}
              aria-label="Previous seasonal products"
            >
              ←
            </button>

            <button
              className="seasonal-arrow"
              onClick={() => scrollSeasonal("right")}
              aria-label="Next seasonal products"
            >
              →
            </button>

          </div>

        </div>


        <div
          className="seasonal-slider"
          ref={seasonalRef}
        >

          {/* SEASONAL 1 */}

          <article className="seasonal-product">

            <div className="product-image">
              <img
                src={cookiecit}
                alt="Lemon Cookie"
              />
            </div>

            <span className="product-category">
              Seasonal
            </span>

            <h3>
              Lemon Cookie
            </h3>

            <div className="product-bottom">

              <span className="price">
                4.50 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>


          {/* SEASONAL 2 */}

          <article className="seasonal-product">

            <div className="product-image">
              <img
                src={cookiepisfram}
                alt="Pistachio Raspberry Cookie"
              />
            </div>

            <span className="product-category">
              Seasonal
            </span>

            <h3>
              Pistachio Raspberry Cookie
            </h3>

            <div className="product-bottom">

              <span className="price">
                4.80 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>


          {/* SEASONAL 3 */}

          <article className="seasonal-product">

            <div className="product-image">
              <img
                src={macaronv}
                alt="Vanilla Macaron"
              />
            </div>

            <span className="product-category">
              Seasonal
            </span>

            <h3>
              Vanilla Macaron
            </h3>

            <div className="product-bottom">

              <span className="price">
                6.00 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>


     


        





          {/* SEASONAL 7 */}

          <article className="seasonal-product">

            <div className="product-image">
              <img
                src={macaronfram}
                alt="Raspberry Macaron"
              />
            </div>

            <span className="product-category">
              Seasonal
            </span>

            <h3>
              Raspberry Macaron
            </h3>

            <div className="product-bottom">

              <span className="price">
                5.80 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>


          {/* SEASONAL 8 */}

          <article className="seasonal-product">

            <div className="product-image">
              <img
                src={macaronstr}
                alt="Strawberry Cookie Macaron"
              />
            </div>

            <span className="product-category">
              Seasonal
            </span>

            <h3>
              Strawberry Cookie Macaron
            </h3>

            <div className="product-bottom">

              <span className="price">
                4.00 €
              </span>

              <button
                className="add-button"
                onClick={onAdd}
              >
                Add
              </button>

            </div>

          </article>

        </div>

      </section>


      {/* =========================
          TRADITION
      ========================== */}

      <section className="tradition">

        <span className="section-label">
          OUR VALUES
        </span>

        <h2>
          Made with tradition
        </h2>

        <div className="section-line"></div>


        <div className="tradition-grid">

          <div className="tradition-item">

            <span>
              01
            </span>

            <h3>
              Handmade
            </h3>

            <p>
              Carefully prepared in small batches.
            </p>

          </div>


          <div className="tradition-item">

            <span>
              02
            </span>

            <h3>
              Fresh
            </h3>

            <p>
              Made fresh for better taste and texture.
            </p>

          </div>


          <div className="tradition-item">

            <span>
              03
            </span>

            <h3>
              Quality
            </h3>

            <p>
              Carefully selected ingredients in every recipe.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          OUR STORY
      ========================== */}

      <section className="our-story">

        <h2>
          Our Story
        </h2>

        <p>
          Born from a passion for handmade sweets,
          Sweet Surrender brings together classic recipes,
          carefully selected ingredients and Tunisian tradition.
          Every creation is prepared in small batches with
          attention to flavor, freshness and simplicity.
        </p>

      </section>

    </main>
  );
}

export default Main;