import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({cartItems}) => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartItems}</span>
  </div>
);

export default CartIcon;
