import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import { cartTotal } from '../../reducer';
import { db } from '../../firebase';

const Payment = () => {
    const history = useHistory();
    const [{ cart, user }, dispatch] = useStateValue();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => { 
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${cartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        
        getClientSecret();
    }, [cart]);

    const handleChange = (event) => { 
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async (event) => { 
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db.collection('users').doc(user.id).collection('orders').doc(paymentIntent.id).set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_CART'
            })

            history.replace('/orders');
        }) 
    };


    return (  
        <div className="payment">
            <div className="payment__container">
                
                <h1
                    style={{ cursor: 'pointer' }}
                    onClick={e => history.push('/checkout')}
                >
                    Checkout ({cart ? cart.length: ""} items)
                </h1>

                <div className="payment__section">
                    
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>H-616, Lane 6A</p>
                        <p>Subhash Nagar, Dehradun, Uk</p>
                    </div>

                </div>

                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>

                    <div className="payment__items">
                        {
                            cart.map( (item) => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    title={item.title}
                                />
                            ))
                        }
                    </div>

                </div>

                <div className="payment__section payment__card">

                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe code for accepting payments */}
                        <form onSubmit={handleSubmit}>

                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total : {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={cartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹ "}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>

                            </div>

                            {error && <div>{error}</div>}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Payment;