import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API);

// const handleSubmit = (stripe, elements) => async () => {
//   const cardElement = elements.getElement(CardElement);

//   const { error, paymentMethod } = await stripe.createPaymentMethod({
//     type: "card",
//     card: cardElement,
//   });

//   if (error) {
//     console.log("[error]", error);
//   } else {
//     console.log("[PaymentMethod]", paymentMethod);
//     // ... SEND to your API server to process payment intent

//   }
// };

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   return (
//     <>
//       <CardElement className="my-3"/>
//       <button className="btn btn-primary" onClick={handleSubmit(stripe, elements)}>Pay Now</button>
//     </>
//   );
// };

const StripePaymentForm = ({student}) => {

  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  return (
    <StripeCheckout
  name="Peter Strasser Music" // the pop-in header title
  description="Lessons Payment" // the pop-in header subtitle
  image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
  ComponentClass="div"
  panelLabel="Give Money" // prepended to the amount in the bottom pay button
  amount={student.balance*100} // cents
  currency="USD"
  stripeKey={process.env.REACT_APP_STRIPE_API}
  locale="zh"
  email="info@vidhub.co"
  // Note: Enabling either address option will give the user the ability to
  // fill out both. Addresses are sent as a second parameter in the token callback.
  shippingAddress
  billingAddress={false}
  // Note: enabling both zipCode checks and billing or shipping address will
  // cause zipCheck to be pulled from billing address (set to shipping if none provided).
  zipCode={false}

  allowRememberMe // "Remember Me" option (default true)
  token={onToken} // submit callback
  // opened={onOpened} // called when the checkout popin is opened (no IE6/7)
  // closed={onClosed} // called when the checkout popin is closed (no IE6/7)
  // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
  // you are using multiple stripe keys
  reconfigureOnUpdate={false}
  // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
  // useful if you're using React-Tap-Event-Plugin
  triggerEvent="onTouchTap"
  >
  <button className="btn btn-primary">
    Pay ${student.balance} Now
  </button>
</StripeCheckout>
  );
};

export default StripePaymentForm;
