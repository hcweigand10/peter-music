import React from "react";
import "./checkout.css"

const Checkout = ({ student }) => {
    const PAYMENT_SERVER_URL = `https://peter-music-backend.herokuapp.com/api/users/${student.id}/create-checkout-session`;
    // const PAYMENT_SERVER_URL = `http://localhost:3001/api/users/${student.id}/create-checkout-session`;

    console.log(student)

    return (
        <>
            <form action={`${PAYMENT_SERVER_URL}`} method="POST">
                <button
                    className="btn"
                    type="submit"
                    id="stripe-checkout-btn"
                >
                    Checkout with Stripe
                </button>
            </form>
        </>
    );
};

export default Checkout;
