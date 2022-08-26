import React from 'react';
import './Headre.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Logo from '../logo_img/logo.png';


function Header() {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li className="logo"><img src={Logo} alt="logo"/></li>
                    <div className="links">
                        <li><a href="/">Login</a></li>
                        <li><a href="products">Products</a></li>
                        <li><a href="order">Order Form</a></li>
                        <a href=""><ShoppingBasketIcon className="basket"></ShoppingBasketIcon></a>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Header;