import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container details-container">
              {/* Title */}
              <div className="row">
                <div className="details-title text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* Product Info */}
              <div className="row">
                <div className="details-image-container">
                  <img src={img} alt="product" className="details-image" />
                </div>
                <div className="details-info-container">
                  <h2>model : {title}</h2>
                  <h4 className="text-title details-made-by">
                    made by : <span>{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>{price}
                    </strong>
                  </h4>
                  <p className="details-product-info-title">
                    product information:
                  </p>
                  <p className="details-product-info">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <button className="buttonContainer">back to products</button>
                    </Link>
                    <button className="buttonContainer buttonContainer-orange" 
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
