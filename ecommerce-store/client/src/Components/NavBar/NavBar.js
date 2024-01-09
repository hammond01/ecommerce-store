import React, { useContext, useState } from 'react';
import logo from '../../Asset/Client/logo.png';
import cartIcon from '../../Asset/Client/cart_icon.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';
const NavBar = () => {
	const [menu, setMenu] = useState('shop');
	const { getTotalCartItem } = useContext(HomeContext);
	return (
		<div className="navbar">
			<div className="nav-logo">
				<img src={logo} alt="Logo" />
				<p>Ecommerce</p>
			</div>
			<ul className="nav-menu">
				<li
					onClick={() => {
						setMenu('shop');
					}}
				>
					<Link style={{ textDecoration: 'none', color: '#515151' }} to="/">
						Shop
					</Link>{' '}
					{menu === 'shop' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('mens');
					}}
				>
					<Link style={{ textDecoration: 'none', color: '#515151' }} to="/mens">
						Men
					</Link>{' '}
					{menu === 'mens' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('women');
					}}
				>
					<Link
						style={{ textDecoration: 'none', color: '#515151' }}
						to="/women"
					>
						Women
					</Link>
					{menu === 'women' ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu('kids');
					}}
				>
					<Link style={{ textDecoration: 'none', color: '#515151' }} to="/kids">
						Kids
					</Link>
					{menu === 'kids' ? <hr /> : <></>}
				</li>
			</ul>
			<div className="nav-login-cart">
				<Link style={{ textDecoration: 'none', color: '#515151' }} to="/login">
					<button>Login</button>
				</Link>
				<Link style={{ textDecoration: 'none', color: '#515151' }} to="/cart">
					<img src={cartIcon} alt="Logo" />
				</Link>
				<div className="nav-cart-count">{getTotalCartItem()}</div>
			</div>
		</div>
	);
};

export default NavBar;
