import React from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';

const Payment = () => {
    const history = useHistory();
    const [{ cart, user }, dispatch] = useStateValue();

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

                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe code for accepting payments */}
                    </div>

                </div>

            </div>
        </div>
    );
}
 
export default Payment;