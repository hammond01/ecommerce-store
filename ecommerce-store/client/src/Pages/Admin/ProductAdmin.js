import React from 'react';
import NavBarAdmin from '../../Components/Admin/NavBarAdmin/NavBarAdmin';
import SideBarAdmin from '../../Components/Admin/SideBarAdmin/SideBarAdmin';
import AddProduct from '../../Components/Admin/ProductsAdmin/AddProduct';

const ProductAdmin = () => {
	return (
		<>
			<div className="bgColor">
				<NavBarAdmin />
				<div style={{ display: 'flex' }}>
					<SideBarAdmin />
					<main style={{ flexGrow: 1, padding: '3px', background: '#EEEEEE' }}>
						<AddProduct />
					</main>
				</div>
			</div>
		</>
	);
};

export default ProductAdmin;
