import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import CartButton from "./components/cart/CartButton";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cookies from "./pages/Cookies";
import Macarons from "./pages/Macarons";
import "./App.css";


function App() {

  const [cartCount, setCartCount] = useState(0);
  return (
  <BrowserRouter>
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/boutique/cookies" element={<Cookies />} />
        <Route path="/boutique/macarons" element={<Macarons />} />
      </Routes>

      <Footer />

      <CartButton count={cartCount} />
    </div>
  </BrowserRouter>
);
}

export default App;