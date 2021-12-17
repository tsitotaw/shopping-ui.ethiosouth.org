import React from 'react';


import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, onClearCartItem, onAdd, onRemove }) => {
  const { name, img, price, qty} = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={img} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => onRemove(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={() => onAdd(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => onClearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
