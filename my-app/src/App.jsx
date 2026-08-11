import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import CartButton from "./components/cart/CartButton";

import "./App.css";

function App() {

  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="app">

      <Navbar />

      <Header />

      <Main />

      <Footer />

      <CartButton count={cartCount} />

    </div>
  );
}

export default App;