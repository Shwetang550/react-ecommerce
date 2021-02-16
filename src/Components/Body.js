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
                    <Product rating={4} />
                    <Product rating={3} />
            </div>

            <div className="body__row">
                    <Product rating={5} />
                    <Product rating={1} />
                    <Product rating={2} />
            </div>

            <div className="body__row">
                <Product rating={4} />
            </div>
            
            </div>  
        </div>
    );
}
 
export default Body;