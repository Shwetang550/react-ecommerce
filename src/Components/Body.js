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
                    <Product
                        id="1"
                        title="Dummy Product 1" 
                        image="https://media.npr.org/assets/img/2019/12/19/_d6a4310_sq-d258dd7e3714e2311c6aaaeaa692183219ef08e0-s800-c85.jpg" 
                        price="150"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title="Dummy Product 2" 
                        image="https://media.npr.org/assets/img/2019/12/19/_d6a4310_sq-d258dd7e3714e2311c6aaaeaa692183219ef08e0-s800-c85.jpg" 
                        price="175"
                        rating={3}
                    />
            </div>

            <div className="body__row">
                    <Product
                        id="3"
                        title="Dummy Product 3" 
                        image="https://media.npr.org/assets/img/2019/12/19/_d6a4310_sq-d258dd7e3714e2311c6aaaeaa692183219ef08e0-s800-c85.jpg" 
                        price="250"
                        rating={5}
                    />
                    <Product
                        id="4"
                        title="Dummy Product 4" 
                        image="https://media.npr.org/assets/img/2019/12/19/_d6a4310_sq-d258dd7e3714e2311c6aaaeaa692183219ef08e0-s800-c85.jpg" 
                        price="175"
                        rating={1}
                    />
                    <Product
                        id="5"
                        title="Dummy Product 5" 
                        image="https://media.npr.org/assets/img/2019/12/19/_d6a4310_sq-d258dd7e3714e2311c6aaaeaa692183219ef08e0-s800-c85.jpg" 
                        price="450"
                        rating={2}
                    />
            </div>

            <div className="body__row">
                    <Product
                        id="6"
                        title="Dummy Product 6" 
                        image="https://media.npr.org/assets/img/2019/12/19/_d6a4310_sq-d258dd7e3714e2311c6aaaeaa692183219ef08e0-s800-c85.jpg" 
                        price="990"
                        rating={4}
                    />
            </div>
            
            </div>  
        </div>
    );
}
 
export default Body;