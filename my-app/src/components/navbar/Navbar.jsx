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

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  const [
    mobileBoutiqueOpen,
    setMobileBoutiqueOpen,
  ] = useState(false);


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
  // CLOSE WHEN ROUTE CHANGES
  // =========================

  useEffect(() => {
    setCategoriesOpen(false);
    setSearchOpen(false);
    setMobileMenuOpen(false);
    setMobileBoutiqueOpen(false);
  }, [location.pathname]);


  // =========================
  // LOCK BODY ON MOBILE MENU
  // =========================

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);


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
    setMobileMenuOpen(false);
  }


  // =========================
  // MOBILE MENU
  // =========================

  function toggleMobileMenu() {
    setMobileMenuOpen(
      !mobileMenuOpen
    );

    setSearchOpen(false);
    setCategoriesOpen(false);
  }


  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileBoutiqueOpen(false);
  }


  function handleLogout() {
    logoutUser();

    closeMobileMenu();
  }


  // =========================
  // NAVBAR BACKGROUND
  // =========================

  const showSolid =
    !isHome ||
    scrolled ||
    mobileMenuOpen ||
    searchOpen;


  return (
    <nav
      className={`navbar ${
        showSolid
          ? "navbar-scrolled"
          : ""
      }`}
    >

      {/* =========================
          MOBILE HAMBURGER
      ========================== */}

      <button
        className={`mobile-menu-button ${
          mobileMenuOpen
            ? "mobile-menu-button-open"
            : ""
        }`}
        onClick={toggleMobileMenu}
        aria-label="Menu"
        aria-expanded={mobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* =========================
          DESKTOP LEFT
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

              <Link to="/boutique">
                All Products
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
        onClick={closeMobileMenu}
      >
        Sweet Surrender
      </Link>


      {/* =========================
          RIGHT
      ========================== */}

      <div className="nav-right">

        {/* DESKTOP USER */}

        <div className="desktop-user-area">

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

        </div>


        {/* SEARCH */}

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


      {/* =========================
          MOBILE MENU
      ========================== */}

      <div
        className={`mobile-menu ${
          mobileMenuOpen
            ? "mobile-menu-open"
            : ""
        }`}
      >

        <Link
          to="/"
          onClick={closeMobileMenu}
        >
          Home
        </Link>


        {/* MOBILE BOUTIQUE */}

        <button
          className="mobile-boutique-button"
          onClick={() =>
            setMobileBoutiqueOpen(
              !mobileBoutiqueOpen
            )
          }
        >
          <span>Boutique</span>

          <span
            className={`mobile-boutique-arrow ${
              mobileBoutiqueOpen
                ? "mobile-boutique-arrow-open"
                : ""
            }`}
          >
            ▾
          </span>
        </button>


        {mobileBoutiqueOpen && (

          <div className="mobile-boutique-menu">

            <Link
              to="/boutique"
              onClick={closeMobileMenu}
            >
              All Products
            </Link>

            <Link
              to="/boutique/cookies"
              onClick={closeMobileMenu}
            >
              Cookies
            </Link>

            <Link
              to="/boutique/macarons"
              onClick={closeMobileMenu}
            >
              Macarons
            </Link>

            <Link
              to="/boutique/tunisian-sweets"
              onClick={closeMobileMenu}
            >
              Tunisian Sweets
            </Link>

            <Link
              to="/boutique/drinks"
              onClick={closeMobileMenu}
            >
              Drinks
            </Link>

          </div>

        )}


        <Link
          to="/gifting"
          onClick={closeMobileMenu}
        >
          Gifting
        </Link>


        <Link
          to="/contact"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>


        {/* LOGIN / USER */}

        <div className="mobile-account">

          {!currentUser ? (

            <Link
              to="/login"
              onClick={closeMobileMenu}
            >
              Login
            </Link>

          ) : (

            <>
              <div className="mobile-profile">

                <div className="profile-icon">
                  {currentUser.name
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <span>
                  {currentUser.name}
                </span>

              </div>


              <button
                className="mobile-logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>

          )}

        </div>

      </div>

    </nav>
  );
}


export default Navbar;