import React from 'react';
import './Headre.css';


function Header() {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li className="logo"><a href="#">LOGO</a></li>
                    <li className="links">
                        <li><a href="/">Home</a></li>
                        <li><a href="products">Products</a></li>
                        <li><a href="order">Order Form</a></li>
                    </li>

                </ul>
            </nav>


        </div>
    );
}

export default Header;