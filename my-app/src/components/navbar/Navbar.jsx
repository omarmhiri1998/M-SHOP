import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const categoriesRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setCategoriesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleCategories() {
    setCategoriesOpen(!categoriesOpen);
    setSearchOpen(false);
  }

  function toggleSearch() {
    setSearchOpen(!searchOpen);
    setCategoriesOpen(false);
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      {/* LEFT */}
      <div className="nav-left">

        <a href="#">
          Home
        </a>

        <div
          className="categories-wrapper"
          ref={categoriesRef}
        >

          <button
            className="categories-button"
            onClick={toggleCategories}
          >
            Categories

            <span
              className={`category-arrow ${
                categoriesOpen ? "arrow-open" : ""
              }`}
            >
              ▾
            </span>
          </button>

          {categoriesOpen && (
            <div className="categories-menu">

              <a href="#">
                Cookies
              </a>

              <a href="#">
                Macarons
              </a>

              <a href="#">
                Tunisian Sweets
              </a>

              <a href="#">
                Drinks
              </a>

            </div>
          )}

        </div>

        <a href="#">
          Gifting
        </a>

      </div>


      {/* LOGO */}
      <a
        href="#"
        className="logo"
      >
        Sweet Surrender
      </a>


      {/* RIGHT */}
      <div className="nav-right">

        <a
          href="#"
          className="login"
        >
          Login
        </a>


        <div className="search-wrapper">

          <div
            className={`search-box ${
              searchOpen ? "search-box-open" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
            />
          </div>


          <button
            className="search-icon"
            onClick={toggleSearch}
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
              />

              <line
                x1="16"
                y1="16"
                x2="21"
                y2="21"
              />
            </svg>
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;