import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


const PAYMENT_SERVER_URL = "https://peter-music-backend.herokuapp.com"

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => {
    return (
        <StripeCheckout
          name={name}
          description={description}
          amount={fromDollarToCent(amount)}
          token={onToken(amount, description)}
          currency={CURRENCY}
          stripeKey={process.env.REACT_APP_STRIPE_API}
        />
    )
}

export default Checkout;