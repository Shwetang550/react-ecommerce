import React from 'react';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    return (  
        <div className="checkoutProduct">
            <img
                src={image}
                alt={title}
                className="checkoutProduct__image"
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map( (_, i) => <p key={i}>⭐️</p>)
                    }
                </div>

                <button>Remove from Cart</button>
            </div>
        </div>
    );
}
 
export default CheckoutProduct;