import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Link } from 'react-router-dom';


const cardOptions = {
    style: {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

function PaymentCard() {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            try {
                const { id } = paymentMethod;
                const response = await axios.post(`http://localhost:5000`, {
                    amount: 1000,
                    id,
                });
                if (response.status === 200) {
                    console.log(response);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };
    const alertFunction = () => {
        alert("Payment successful, Please continue shopping")
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <CardElement options={cardOptions} />
                <Link to={"/"}>
                    <button onClick={() => alertFunction()} type="submit" className="btn btn-primary mt-3" disabled={!stripe}>Pay</button>
                </Link>
            </form>
        </div>
    )
}

export default PaymentCard
