import React from 'react';
import './Header.css';
import Logo from '../images/digiSell.png';

const Header = () => {
    return (
        <div className="header">
            {/* Logo */}
            <img
                className="header__logo"
                src={Logo}
            />
            
            {/* Search (bar + icon) */}
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                {/* search logo */}
                <button>Search</button>
            </div>
            
            {/* navIcons */}
            <div className="header__nav">
                <div className="header__navIcon">
                    Sign In
                </div>
                <div className="header__navIcon">
                    Orders
                </div>
                <div className="header__navIcon">
                    Bucket
                </div>
            </div>
        </div>
    )
}

export default Header;