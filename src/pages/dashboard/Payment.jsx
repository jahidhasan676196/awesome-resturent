import React from 'react';
import Title from '../../sharedComponent/Title';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
// TODP : 
const stripePromise = loadStripe(import.meta.env.VITE_Stipe_secret_key);
const Payment = () => {
    return (
        <div>
            <Title
                Heading='PAYMENT'
            ></Title>
            <div className='mx-20 mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;