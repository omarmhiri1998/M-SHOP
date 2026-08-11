import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="nav-left">
        <a href="#">Home</a>
        <a href="#">Drinks</a>
        <a href="#">Cookies</a>
      </div>

      <a href="#" className="logo">
        <span>YOUR LOGO</span>
      </a>

      <div className="nav-right">
        <a href="#">Macarons</a>
        <a href="#">Tunisian Sweets</a>

        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>⌕</button>
        </div>

        <button className="login">
          Login
        </button>
      </div>

    </nav>
  );
}

export default Navbar;