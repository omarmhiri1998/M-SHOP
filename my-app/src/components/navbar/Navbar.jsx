import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import useUserStore from "../../store/useUserStore";

import "./Navbar.css";


function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  const [
    categoriesOpen,
    setCategoriesOpen,
  ] = useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);


  const categoriesRef = useRef(null);


  // =========================
  // LOCATION
  // =========================

  const location = useLocation();

  const isHome =
    location.pathname === "/";


  // =========================
  // ZUSTAND
  // =========================

  const currentUser = useUserStore(
    (state) => state.currentUser
  );

  const logoutUser = useUserStore(
    (state) => state.logoutUser
  );


  // =========================
  // SCROLL
  // =========================

  useEffect(() => {
    function handleScroll() {
      setScrolled(
        window.scrollY > 30
      );
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  // =========================
  // CLICK OUTSIDE CATEGORIES
  // =========================

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(
          event.target
        )
      ) {
        setCategoriesOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);


  // =========================
  // CATEGORIES
  // =========================

  function toggleCategories() {
    setCategoriesOpen(
      !categoriesOpen
    );

    setSearchOpen(false);
  }


  // =========================
  // SEARCH
  // =========================

  function toggleSearch() {
    setSearchOpen(
      !searchOpen
    );

    setCategoriesOpen(false);
  }


  // Navbar solid:
  // - إذا لسنا في Home
  // - أو إذا عمل المستخدم Scroll
  const showSolid =
    !isHome || scrolled;


  return (
    <nav
      className={`navbar ${
        showSolid
          ? "navbar-scrolled"
          : ""
      }`}
    >

      {/* =========================
          LEFT
      ========================== */}

      <div className="nav-left">

        <Link to="/">
          Home
        </Link>


        <div
          className="categories-wrapper"
          ref={categoriesRef}
        >

          <button
            className="categories-button"
            onClick={toggleCategories}
          >
            Boutique

            <span
              className={`category-arrow ${
                categoriesOpen
                  ? "arrow-open"
                  : ""
              }`}
            >
              ▾
            </span>
          </button>


          {categoriesOpen && (

            <div className="categories-menu">

              <Link
                to="/boutique"
                onClick={() =>
                  setCategoriesOpen(false)
                }
              >
                All Products
              </Link>


              <Link
                to="/boutique/cookies"
                onClick={() =>
                  setCategoriesOpen(false)
                }
              >
                Cookies
              </Link>


              <Link
                to="/boutique/macarons"
                onClick={() =>
                  setCategoriesOpen(false)
                }
              >
                Macarons
              </Link>


              <Link
                to="/boutique/tunisian-sweets"
                onClick={() =>
                  setCategoriesOpen(false)
                }
              >
                Tunisian Sweets
              </Link>


              <Link
                to="/boutique/drinks"
                onClick={() =>
                  setCategoriesOpen(false)
                }
              >
                Drinks
              </Link>

            </div>

          )}

        </div>


        <Link to="/contact">
          Contact
        </Link>


        <Link to="/gifting">
          Gifting
        </Link>

      </div>


      {/* =========================
          LOGO
      ========================== */}

      <Link
        to="/"
        className="logo"
      >
        Sweet Surrender
      </Link>


      {/* =========================
          RIGHT
      ========================== */}

      <div className="nav-right">


        {/* =========================
            LOGIN / USER / LOGOUT
        ========================== */}

        {!currentUser ? (

          <Link
            to="/login"
            className="login"
          >
            Login
          </Link>

        ) : (

          <div className="user-area">

            <div className="profile-icon">
              {currentUser.name
                .charAt(0)
                .toUpperCase()}
            </div>


            <button
              className="logout-button"
              onClick={logoutUser}
            >
              Logout
            </button>

          </div>

        )}


        {/* =========================
            SEARCH
        ========================== */}

        <div className="search-wrapper">

          <div
            className={`search-box ${
              searchOpen
                ? "search-box-open"
                : ""
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