import React from 'react';
import './Header.css';
import Logo from '../images/digiSell.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div className="header">
            <img
                className="header__logo"
                src={Logo}
                alt="digi-sell logo"
            />
            
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
                <div className="header__navIcon">
                    Sign In
                </div>
                <div className="header__navIcon">
                    About Us
                </div>
                <div className="header__navIcon">
                    Orders
                </div>
                <div className="header__navIcon">
                    <ShoppingCartOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Header;