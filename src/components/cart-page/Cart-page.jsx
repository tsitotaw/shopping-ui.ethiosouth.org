import React from "react";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useNavigate } from "react-router";
import StripeCheckoutButton from "../stripe-button/stripe-button.component";

import './checkout.styles.scss';

const CartPage = ({ cartItems, total, onAdd, onRemove, onClearCartItem, onClearCart }) => {


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
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id}
                        cartItem={cartItem}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onClearCartItem={onClearCartItem} />
                ))
            }
            <div className='total'>TOTAL: ${total}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            <StripeCheckoutButton price={total}
                onClearCart={onClearCart} />
        </div>
    )
}

export default CartPage;