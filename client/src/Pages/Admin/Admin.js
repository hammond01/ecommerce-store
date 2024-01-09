import React from 'react';
import NavBarAdmin from '../../Components/Admin/NavBarAdmin/NavBarAdmin';
import SideBarAdmin from '../../Components/Admin/SideBarAdmin/SideBarAdmin';
import ListProducts from '../../Components/Admin/ProductsAdmin/ListProducts';

const Admin = () => {
	return (
		<>
			<div className="bgColor">
				<NavBarAdmin />
				<div style={{ display: 'flex' }}>
					<SideBarAdmin />
					<main style={{ flexGrow: 1, padding: '3px' }}>
						<ListProducts />
					</main>
				</div>
			</div>
		</>
	);
};

export default Admin;
