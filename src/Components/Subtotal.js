import React, { useState } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

const Subtotal = () => {
    const [{ cart }, dispatch] = useStateValue();
    const [sum, setSum] = useState(0);

    return ( 
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ( {cart.length} ) : {" "}
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" style={{ cursor: 'pointer' }} />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={10}
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