import React, { useState } from 'react';
import './SignIn.css';
import Logo from '../../images/digiSell.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import userEvent from '@testing-library/user-event';

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => { 
        e.preventDefault();

        // User Authentication here...
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => {
                alert("New User!!!\nPlease create an account...")
            })
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Register Auth...
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created new user with email & password
                if (auth) {
                    history.push('/')
                }
            })
            .catch( error => alert(error.message))
    }

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
                    >
                        Sign-in
                    </button>

                    <br />
                    <br />
                    <h4>New User ?</h4>

                    <button
                        className="signIn__createBtn"
                        onClick={handleRegister}
                    >
                        Create an Account
                    </button>
                </form>
            </div>
        </div>
    );
}
 
export default SignIn;