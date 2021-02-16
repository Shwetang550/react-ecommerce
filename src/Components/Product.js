import React from 'react';
import './Product.css';

const Product = ({ rating }) => {
    return ( 
        <div className="product">
            <div className="product__info">
                <p>Dummy Product</p>
                <p className="product__price">
                    <small>&#8377;</small>
                    <strong>150</strong>
                </p>
                
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) => <p>⭐️</p>)
                    }
                </div>
            
            </div>

            <img
                src="https://media.npr.org/assets/img/2019/12/19/_d6a4310_sq-d258dd7e3714e2311c6aaaeaa692183219ef08e0-s800-c85.jpg"
                alt="dummy product"
                className="product__image"
            />

            <button>Add to Cart</button>
        </div>
    );
}
 
export default Product;