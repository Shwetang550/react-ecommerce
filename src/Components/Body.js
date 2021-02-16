import React from 'react';
import './Body.css';
import Home from '../images/img-home.jpg';
import Product from './Product';

const Body = () => {
    return ( 
        <div className="body">
            <div className="body__container">
                <img
                    src={Home}
                    alt="body-backgound"
                    className="body__image"
                />
            
            <div className="body__row">
                {/* Product */}
                    <Product />
                    <Product />
                    <Product />
                {/* Product */}
            </div>

            <div className="body__row">
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>

            <div className="body__row">
                {/* Product */}
            </div>
            
            </div>  
        </div>
    );
}
 
export default Body;