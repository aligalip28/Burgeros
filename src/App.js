import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Page404 from "./components/Page404";
import Menu from "./components/Menu";
import About from "./components/About";
import Cart from "./components/Cart";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <div>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/menu"
            exact
            element={<Menu cart={cart} setCart={setCart} />}
          />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route
            path="/cart"
            exact
            element={<Cart cart={cart} emptyCart={emptyCart} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
