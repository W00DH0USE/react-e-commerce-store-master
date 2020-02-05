import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-ul">
          <li>
            <Link to="/" className="navbar-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="cart-link">
          <button className="buttonContainer">
            <span>
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </button>
        </Link>
      </nav>
    )
  }
}