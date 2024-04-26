import React from "react";
import "../../styles/app.scss";

import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink exact to="/">
        HighQualiDee Merchantry
      </NavLink>
      <NavLink className="navlink" to="/products">
        Products
      </NavLink>
      <NavLink className="navlink" to="/cart">
        Cart
      </NavLink>
      <NavLink className="navlink" to="/contact">
        Contact
      </NavLink>
      <NavLink className="navlink" to="/about">
        About
      </NavLink>
    </nav>
  );
}
