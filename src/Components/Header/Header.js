import React from 'react';
import './Header.css';
import Logo from '../../images/digiSell.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Header = () => {
    const [{ cart, user }, dispatch] = useStateValue();
    // console.log(user);

    const handleSignIn = () => { 
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src={Logo}
                    alt="digi-sell logo"
                />
            </Link>
            
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />

                <Button variant="contained" className="header__searchIcon">
                    <SearchIcon />
                </Button>
            </div>
            
            <div className="header__nav">
                <div className="header__navIcon" style={{ cursor: 'default'}}>
                        <span>Hello {user ? user.email : 'Guest'}</span>
                    </div>
                <Link to={!user && "/sign-in"}>
                    
                    <div className="header__navIcon" onClick={handleSignIn} >
                        {user ? 'Sign Out' : 'Sign In'}
                    </div>
                </Link>
                <div className="header__navIcon">
                    About Us
                </div>
                <div className="header__navIcon">
                    Orders
                </div>

                <Link to="/checkout">
                    <div className="header__navIcon header__cart">
                            <ShoppingCartOutlinedIcon fontSize="large" />
                            <span className="header__cartCount">{cart ? cart.length: ""}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;