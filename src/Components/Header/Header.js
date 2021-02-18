import React from 'react';
import './Header.css';
import Logo from '../../images/digiSell.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const Header = () => {
    const [{ cart }, dispatch] = useStateValue();

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
                <Link to="/sign-in">
                    <div className="header__navIcon">
                        Sign In
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