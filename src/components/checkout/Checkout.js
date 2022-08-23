import React from "react";
import "./checkout.css"
import constants from "../../utils/constants"

const Checkout = ({ student }) => {

    return (
        <>
            <form action={`${constants.baseUrl}/api/users/${student.id}/create-checkout-session`} method="POST">
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
