import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCards from '../../hooks/useCards';
import useProviderContext from '../../hooks/useProviderContext';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientsecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const [cardData] = useCards()
    const { user } = useProviderContext()
    const totalAmount = cardData.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { totalAmount })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientsecret(res.data.clientSecret)
            })
            .then(err => {
                console.log(err);
            })
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('error', error);
        } else {
            console.log('PaymentMethod', paymentMethod);
        }

        const { paymentIntent, error: confirmErro } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmErro){
            console.log('confirm err',confirmErro);
        }
        else{
            console.log('paymentInetent',paymentIntent);
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
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
                }}
            />
            <button className='btn btn-primary' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;