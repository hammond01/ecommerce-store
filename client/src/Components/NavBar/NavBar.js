import React from 'react'
import logo from '../Data/logo.png';
import cartIcon from '../Data/cart_icon.png';
import './NavBar.css';
const NavBar = () => {
    return (
        <div className='flex justify-around p-4'>
            <div className='nav-logo'>
                <img src={logo} alt='Logo' />
                <p>Ecommerce</p>
            </div>
            <ul className='nav-menu text-red-500'>
                <li>SHOP</li>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cartIcon} alt='Logo' />
            </div>
        </div>
    )
}

export default NavBar;
