import React from "react";
import CheckoutItem from "../checkout-item/checkout-item.component";
import CustomButton from "../custom-button/custom-button.component";

import './checkout.styles.scss';

const CartPage = ({ cartItems, total, onAdd, onRemove, onClearCartItem }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id}
                    cartItem={cartItem}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onClearCartItem={onClearCartItem} />
            ))}
            <div className='total'>TOTAL: ${total}</div>
           <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

export default CartPage;