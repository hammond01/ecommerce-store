import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';
import BreadCrums from '../../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox';
const Product = () => {
    const { all_product } = useContext(HomeContext);
    const { productID } = useParams();
    const product = all_product.find((e) => e.id === Number(productID));
    console.log(product);
    return (
        <div>
            <BreadCrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
        </div>
    )
}

export default Product
