import React, { useState } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { cartTotal } from '../../reducer';

const Subtotal = () => {
    const [{ cart }, dispatch] = useStateValue();

    return ( 
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ( {cart.length} items ) : {" "}
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" style={{ cursor: 'pointer' }} />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={cartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹ "}
            />

            <button
                style={{ cursor: 'pointer' }}
            >
                Proceed to Checkout
            </button>
        </div>
    );
}
 
export default Subtotal;