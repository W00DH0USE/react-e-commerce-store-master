import React from 'react'

export default function CartColumns() {
  return (
    <div className="cartColumns-container">
      <div className="row">
        <div className="cart-column">
          <p>products</p>
        </div>
        <div className="cart-column">
          <p>name of product</p>
        </div>
        <div className="cart-column">
          <p>price</p>
        </div>
        <div className="cart-column">
          <p>quantity</p>
        </div>
        <div className="cart-column">
          <p>remove</p>
        </div>
        <div className="cart-column">
          <p>total</p>
        </div>
      </div>
    </div>
  )
}
