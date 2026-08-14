import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
import TunisianSweets from "./pages/TunisianSweets";
import Gifting from "./pages/Gifting";
import Drinks from "./pages/Drinks";
import AllProducts from "./pages/AllProducts";

import Pay from "./components/Pay/Pay";
import Receipt from "./components/Pay/Receipt";

import "./App.css";


function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />


        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />


          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* LOGIN */}
          <Route
            path="/login"
            element={<Login />}
          />


          {/* REGISTER */}
          <Route
            path="/inscription"
            element={<Register />}
          />


          {/* ALL PRODUCTS */}
          <Route
            path="/boutique"
            element={<AllProducts />}
          />


          {/* COOKIES */}
          <Route
            path="/boutique/cookies"
            element={<Cookies />}
          />


          {/* MACARONS */}
          <Route
            path="/boutique/macarons"
            element={<Macarons />}
          />


          {/* TUNISIAN SWEETS */}
          <Route
            path="/boutique/tunisian-sweets"
            element={<TunisianSweets />}
          />


          {/* DRINKS */}
          <Route
            path="/boutique/drinks"
            element={<Drinks />}
          />


          {/* GIFTING */}
          <Route
            path="/gifting"
            element={<Gifting />}
          />


          {/* CART / PAY */}
          <Route
            path="/pay"
            element={<Pay />}
          />


          {/* RECEIPT */}
          <Route
            path="/receipt"
            element={<Receipt />}
          />

        </Routes>


        <Footer />


        <CartButton />

      </div>

    </BrowserRouter>
  );
}


export default App;