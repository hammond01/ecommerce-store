import React, { useState } from 'react'
import logo from '../Data/logo.png';
import cartIcon from '../Data/cart_icon.png';
import './NavBar.css';
const NavBar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='Logo' />
                <p>Ecommerce</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>Shop {menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}>Men {menu === 'mens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}>Women {menu === 'women' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}>Kids {menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cartIcon} alt='Logo' />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default NavBar;
