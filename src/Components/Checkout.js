import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (  
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbdQj6qh9vE5mb6zbNOOPUjYUp800cXAp5A&usqp=CAU"
                    alt="advertisment"
                    className="checkout__ad"
                />

            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
            </div>
            
            </div>

            <div className="checkout__right">
                <h2>Subtotal</h2>
            </div>
        </div>
    );
}
 
export default Checkout;