import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

const Checkout = () => {
    const [{ cart, user }, dispatch] = useStateValue();

    return (  
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbdQj6qh9vE5mb6zbNOOPUjYUp800cXAp5A&usqp=CAU"
                    alt="advertisment"
                    className="checkout__ad"
                    style={{ cursor: 'pointer' }}
                />

            <div>
                <h3>Hey, { user ? user.email: "Guest"}</h3>        
                <h2 className="checkout__title">
                        Your Shopping Basket
                </h2>
                    
                {
                    cart.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))   
                }
            </div>
            
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}
 
export default Checkout;