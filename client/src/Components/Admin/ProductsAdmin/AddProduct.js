import React from 'react';
import upload_area from '../../../Asset/Admin/upload_area.svg';
const AddProduct = () => {
	return (
		<div className="mx-5 my-[30px] box-border w-full max-w-[800px] px-[30px] py-[50px] rounded-md bg-white">
			<div className="add-product-item">
				<p>Product Title</p>
				<input type="text" name="name" placeholder="Type here" />
			</div>
			<div className="add-product-price">
				<div className="add-product-item">
					<p>Price</p>
					<input type="text" name="old_price" placeholder="Type here" />
				</div>
				<div className="add-product-item">
					<p>Offer Price</p>
					<input type="text" name="new_price" placeholder="Type here" />
				</div>
			</div>
			<div className="add-product-item">
				<p>Product category</p>
				<select name="category" className="">
					<option value="women">Women</option>
					<option value="men">Men</option>
					<option value="kid">Kid</option>
				</select>
			</div>
			<div className="add-product-item">
				<label htmlFor="file-input">
					<img src={upload_area} alt="" className="add-pro-thum" />
				</label>
				<input type="file" name="image" id="file-input" hidden />
			</div>
			<button className="add-pro-btn">Add</button>
		</div>
	);
};

export default AddProduct;
