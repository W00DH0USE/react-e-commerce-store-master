import React from 'react'

export default function CartItem({item, value}) {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;

  return (
    <div className="cartItem-row row">
      <div className="cartItem-column">
        <img src={img} alt="product" />
      </div>
      <div className="cartItem-column">
        <span className="small-screen-title">product : </span>
        {title}
      </div>
      <div className="cartItem-column">
        <span className="small-screen-title">price : $</span>
        {price}
      </div>
      <div className="cartItem-column my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn-black" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn-black btn-count">{count}</span>
          <span className="btn-black" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      <div className="cartItem-column">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="cartItem-column">
        <strong className="small-screen-title">item total : </strong>
        <strong>${total}</strong>
      </div>
    </div>
  )
}
