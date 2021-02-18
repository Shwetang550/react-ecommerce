import React, { useState } from 'react';
import './SignIn.css';
import Logo from '../../images/digiSell.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => { 
        e.preventDefault();

        // User Authentication here...
    };

    return ( 
        <div className="signIn">
            <Link to="/">
                <img
                    src={Logo}
                    slt="digi-sell-logo"
                    className="signIn__image"
                />
            </Link>

            <div className="signIn__container">
                <h1>Sign-in</h1>
                <br />

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        className="signIn__Input"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <h5>Password</h5>
                    <input
                        type="password"
                        className="signIn__Input"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button
                        className="signIn__btn"
                        onClick={handleSignIn}
                    >Sign-in</button>
                </form>
            </div>
        </div>
    );
}
 
export default SignIn;