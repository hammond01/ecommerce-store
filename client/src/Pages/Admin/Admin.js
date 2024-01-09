import React from 'react';
import NavBarAdmin from '../../Components/Admin/NavBarAdmin/NavBarAdmin';
import SideBarAdmin from '../../Components/Admin/SideBarAdmin/SideBarAdmin';
import ListProduct from '../../Components/Admin/ListProduct/ListProduct';

const Admin = () => {
	return (
		<>
			<div className="bgColor">
				<NavBarAdmin />
				<div style={{ display: 'flex' }}>
					<SideBarAdmin />
					<main style={{ flexGrow: 1, padding: '3px' }}>
						<ListProduct />
					</main>
				</div>
			</div>
		</>
	);
};

export default Admin;
