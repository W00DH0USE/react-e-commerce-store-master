import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <div className="productWrapper">
        <div className="card">
          <div className="image-container" onClick={() => console.log("You clicked the image")}>
            <Link to="/details">
              <img src={img} alt="product" className="card-image" />
            </Link>
            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {console.log("Added to the cart")}}>
              {inCart ? 
                (<p className="text-capitalize mb-0" disabled>{" "}in cart</p>) 
                : 
                (<i className="fas fa-cart-plus"></i>)
              }
            </button>
          </div>
          <div className="card-info">
            <p className="card-title">
              {title}
            </p>
            <h5 className="text-blue card-price">
              <span>$</span>
              {price}
            </h5>
          </div>
        </div>
      </div>
    )
  }
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};