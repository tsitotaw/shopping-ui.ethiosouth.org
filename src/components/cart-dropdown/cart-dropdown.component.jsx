import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      
    </div>
    <CustomButton
     //</div> onClick={() => {
       // history.push('/checkout');

        //dispatch(toggleCartHidden());
      //}}
    >
      CHECKOUT
    </CustomButton>
  </div>
);

export default CartDropdown;
