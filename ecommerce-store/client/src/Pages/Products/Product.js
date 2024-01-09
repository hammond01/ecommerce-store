import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';
import BreadCrums from '../../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
const Product = () => {
	const { all_product } = useContext(HomeContext);
	const { productID } = useParams();
	const product = all_product.find((e) => e.id === Number(productID));
	return (
		<div>
			<NavBar />
			<BreadCrums product={product} />
			<ProductDisplay product={product} />
			<DescriptionBox />z
			<RelatedProducts />
			<Footer />
		</div>
	);
};

export default Product;
