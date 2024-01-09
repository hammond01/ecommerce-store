import React from 'react';
import './NavBarAdmin.css';
import NavLogo from '../../../Asset/Admin/logo.png';
import NavProfile from '../../../Asset/Admin/nav-profile.svg';
const NavBarAdmin = () => {
	return (
		<div className="navbar-admin flex">
			<img src={NavLogo} alt="" className="nav-admin-logo" />
			<p>Ecommerce Admin Panel</p>
			<img src={NavProfile} alt="" className="nav-admin-profile" />
		</div>
	);
};

export default NavBarAdmin;
