import React, { useState } from 'react';
import './css/AddProduct.css';
import upload_area from '../../../Asset/Admin/upload_area.svg';
import axios from 'axios';

const AddProduct = () => {
	const [image, setImage] = useState(false);
	const [productDetail, setProductDetail] = useState({
		name: '',
		image: '',
		category: '',
		new_price: '',
		old_price: '',
	});
	const imageHandler = (e) => {
		const file = e.target.files[0];
		setImage(file);
	};
	const saveProduct = () => {
		const formData = new FormData();
		formData.append('file', image);
		formData.append('upload_preset', 'mctthwsx');

		axios
			.post('https://api.cloudinary.com/v1_1/dabdclkhv/image/upload', formData)
			.then((response) => {
				console.log('Upload successful:', response.data);
			})
			.catch((error) => {
				console.log('Upload failed:', error);
			});
	};
	return (
		<div className="add-product">
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
				<select name="category" className="add-product-selector">
					<option value="women">Women</option>
					<option value="men">Men</option>
					<option value="kid">Kid</option>
				</select>
			</div>
			<div className="add-product-item">
				<label htmlFor="file-input">
					<img
						src={image ? URL.createObjectURL(image) : upload_area}
						alt=""
						className="add-product-thumb"
					/>
				</label>
				<input
					onChange={imageHandler}
					type="file"
					name="image"
					id="file-input"
					hidden
				/>
			</div>
			<button onClick={saveProduct} className="add-product-btn">
				Add
			</button>
		</div>
	);
};

export default AddProduct;
