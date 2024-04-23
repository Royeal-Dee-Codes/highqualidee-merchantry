import { BrowserRouter, Route, Switch } from "react-router-dom";

import CartProvider from "./context/CartProvider";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Products from "./components/pages/Products";
import IndividualProduct from "./components/pages/IndividualProduct";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import icons from "./helpers/icons";

import "../src/styles/app.scss";

icons();

export default function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={IndividualProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
