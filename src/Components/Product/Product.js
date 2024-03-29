import React from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider';

const Product = ({ id, title, image, price, rating }) => {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => { 
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return ( 
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => <p key={i}>⭐️</p>)
                    }
                </div>
            
            </div>

            <img
                src={image}
                alt={title}
                className="product__image"
            />

            <button
                style={{ cursor: 'pointer' }}
                onClick={addToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}
 
export default Product;