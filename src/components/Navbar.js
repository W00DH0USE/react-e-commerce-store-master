import React, { Component } from "react";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";

export default class Navbar extends Component {
  state = {
    mobileNav: false,
  };

  handleMobileNav = () => {
    this.setState((prevState) => {
      return {mobileNav: !prevState.mobileNav}
    });
  };

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {cart, cartSubTotal} = value;
          return (
          <nav className="navbar">
            <Link to="/" className="logo-container" >
              <img src="img/logo.png" alt="logo" className="brand-logo" />
            </Link>
            <button type="button" className="navbar-burger navbar-toggler" onClick={this.handleMobileNav}>
              <span className="toggler-icon">
                <i className="fas fa-chevron-down"></i>
                Menu
              </span>
            </button>
            <div className={"navbar-mobile collapse" + (this.state.mobileNav ? " show" : "")} id="myNavbar">
              <ul className="navbar-link-container">
                <li>
                  <Link to="/" className="navbar-link" onClick={this.handleMobileNav}>Home</Link>
                </li>
                <li>
                  <Link to="/#about" className="navbar-link" onClick={this.handleMobileNav}>About</Link>
                </li>
                <li>
                  <Link to="/products" className="navbar-link" onClick={this.handleMobileNav}>Products</Link>
                </li>
                <li>
                  <Link to="/sell" className="navbar-link" onClick={this.handleMobileNav}>sell phone</Link>
                </li>
              </ul>
              <div className="navbar-num-button-container">
                <div className="navbar-num navbar-info">
                  <span className="navbar-info-icon">
                    <i className="fas fa-phone"></i>
                  </span>
                  <p>+ 123 456 789</p>
                </div>
                <div className="navbar-info" id="cart-info">
                { cart.length > 0 ?
                  <Link to="/cart" className="navbar-info navbar-info-cart">
                    <span className="navbar-info-icon">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                    { cart.length === 1 ? 
                      <p>
                      <span id="item-count">{cart.length}</span>
                      {" "}item - $
                      <span className="item-total">
                        {cartSubTotal}
                      </span>
                    </p>
                    :
                    <p>
                      <span id="item-count">{cart.length}</span>
                      {" "}items - $
                      <span className="item-total">
                        {cartSubTotal}
                      </span>
                    </p>
                    }
                  </Link>
                  : 
                  <Link to="/cart" className="navbar-info navbar-info-cart">
                    <span className="navbar-info-icon">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                    <p>
                      <span className="item-total">
                        cart empty
                      </span>
                    </p>
                  </Link>
                }
                </div>
              </div>
            </div>
            <div className="navbar-info navbar-info-mobile" id="cart-info">
              { cart.length > 0 ?
                <Link to="/cart" className="navbar-info navbar-info-cart navbar-info-mobile" onClick={this.handleMobileNav}>
                  <span className="navbar-info-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  { cart.length === 1 ? 
                      <p>
                      <span id="item-count">{cart.length}</span>
                    {" "}item - $
                      <span className="item-total">
                        {cartSubTotal}
                      </span>
                    </p>
                    :
                    <p>
                      <span id="item-count">{cart.length}</span>
                      {" "}items - $
                      <span className="item-total">
                        {cartSubTotal}
                      </span>
                    </p>
                  }
                </Link>
                : 
                <Link to="/cart" className="navbar-info navbar-info-cart navbar-info-mobile" onClick={this.handleMobileNav}>
                  <span className="navbar-info-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  <p>
                    <span className="item-total">
                      cart empty
                    </span>
                  </p>
                </Link>
              }
            </div>
          </nav>
          )
        }}
      </ProductConsumer>
    )
  }
}