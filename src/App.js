import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { useState } from "react";

import "../src/styles/Main.scss";
import CartProvider from "./context/CartProvider";
import Navbar from "../src/components/navigation/Navbar";
import Footer from "../src/components/navigation/Footer";
import Products from "../src/components/pages/IndividualProduct";
import IndividualProduct from "../src/components/pages/IndividualProduct";
import Login from "../src/components/Login";
import Cart from "../src/components/pages/Cart";
import Contact from "../src/components/pages/Contact";
import About from "../src/components/pages/About";
import Home from "../src/components/pages/Home";
import icons from "../src/helpers/icons";

icons();

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <div className="navbar">
            <Navbar setToken={setToken} />
            {token ? <Products /> : <Login token={token} setToken={setToken} />}
            <NavLink className="navlink" to="/Products">
              Products
            </NavLink>
            <NavLink className="navlink" to="/Cart">
              Cart
            </NavLink>
            <NavLink className="navlink" to="/Contact">
              Contact
            </NavLink>
            <NavLink className="navlink" to="/About">
              About
            </NavLink>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={IndividualProduct} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
