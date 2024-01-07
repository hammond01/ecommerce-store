import React from 'react';
// import './SideBarAdmin.css';
import { Link } from 'react-router-dom';
import addProduct_icon from "../../../Asset/Admin/Product_Cart.svg";
import listProduct_icon from "../../../Asset/Admin/Product_list_icon.svg";

const SideBarAdmin = () => {
    return (
        <div className='sidebar-admin flex flex-col pt-[30px] gap-5 w-full max-w-[250px] h-[100vh] bg-white'>
            <Link to={'/addProduct'} style={{ textDecoration: 'none' }}>
                <div className="sidebar-item">
                    <img src={addProduct_icon} alt="Product Icon" />
                    <p>Add product</p>
                </div>
            </Link>
            <Link to={'/listProduct'} style={{ textDecoration: 'none' }}>
                <div className="sidebar-item">
                    <img src={listProduct_icon} alt="Product Icon" />
                    <p>List product</p>
                </div>
            </Link>
        </div>
    )
}

export default SideBarAdmin
