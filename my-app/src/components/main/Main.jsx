import "./Main.css";

import cookie from "../../assets/double.jpg";
import macaron from "../../assets/makaron.jpg";
import baklava from "../../assets/baklawa.png";
import drink from "../../assets/drinks.jpeg";

function Main({ onAdd }) {
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

            <h3>Drinks</h3>

            <p>
              Refreshing drinks selected to accompany
              your favorite sweets.
            </p>

            <button>Explore</button>
          </div>


          <div className="category-item">
            <span className="category-number">02</span>

            <h3>Cookies</h3>

            <p>
              Handmade cookies with soft centers,
              crisp edges and rich flavors.
            </p>

            <button>Explore</button>
          </div>


          <div className="category-item">
            <span className="category-number">03</span>

            <h3>Macarons</h3>

            <p>
              Delicate macarons filled with elegant
              and colorful flavors.
            </p>

            <button>Explore</button>
          </div>


          <div className="category-item">
            <span className="category-number">04</span>

            <h3>Tunisian Sweets</h3>

            <p>
              Traditional recipes inspired by
              authentic Tunisian pastry.
            </p>

            <button>Explore</button>
          </div>

        </div>

      </section>


      {/* =========================
          FAVORITE PRODUCTS
      ========================== */}

      <section className="favorites">

        <div className="favorites-header">

          <div>
            <span className="section-label">
              OUR SELECTION
            </span>

            <h2>Our Favorites</h2>
          </div>

          <button className="view-all">
            View all products
          </button>

        </div>


        <div className="products-grid">

          {/* Cookie */}

          <article className="product">

            <div className="product-image">
              <img
                src={cookie}
                alt="Chocolate Cookie"
              />
            </div>

            <span className="product-category">
              Cookies
            </span>

            <h3>Double Chocolate</h3>

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


          {/* Macaron */}

          <article className="product">

            <div className="product-image">
              <img
                src={macaron}
                alt="Macaron"
              />
            </div>

            <span className="product-category">
              Macarons
            </span>

            <h3>Rose Macaron</h3>

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


          {/* Tunisian sweet */}

          <article className="product">

            <div className="product-image">
              <img
                src={baklava}
                alt="Tunisian Baklava"
              />
            </div>

            <span className="product-category">
              Tunisian Sweets
            </span>

            <h3>Traditional Baklava</h3>

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


          {/* Drink */}

          <article className="product">

            <div className="product-image">
              <img
                src={drink}
                alt="Fresh Drink"
              />
            </div>

            <span className="product-category">
              Drinks
            </span>

            <h3>Fresh Lemonade</h3>

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
          TRADITION
      ========================== */}

      <section className="tradition">

        <span className="section-label">
          OUR VALUES
        </span>

        <h2>Made with tradition</h2>

        <div className="section-line"></div>


        <div className="tradition-grid">

          <div className="tradition-item">
            <span>01</span>

            <h3>Handmade</h3>

            <p>
              Carefully prepared in small batches.
            </p>
          </div>


          <div className="tradition-item">
            <span>02</span>

            <h3>Fresh</h3>

            <p>
              Made fresh for better taste and texture.
            </p>
          </div>


          <div className="tradition-item">
            <span>03</span>

            <h3>Quality</h3>

            <p>
              Carefully selected ingredients in every recipe.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Main;