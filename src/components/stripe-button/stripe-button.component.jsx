import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../logo.png';
import { useNavigate } from 'react-router';

const StripeCheckoutButton = ({ price, onClearCart }) => {

  const navigate = useNavigate();
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    alert('Payment Succesful!');
    onClearCart()
    navigate("/");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Online Shopping Ltd.'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
