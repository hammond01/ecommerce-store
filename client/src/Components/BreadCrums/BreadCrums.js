import React from 'react'
import arrow_icon from "../../Asset/Client/breadcrum_arrow.png";
import "./BreadCrums.css"
const BreadCrums = (props) => {
    const { product } = props;
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="arr" />
            SHOP <img src={arrow_icon} alt="" />
            {product.category}
            <img src={arrow_icon} alt="" />
            {product.name}
        </div>
    )
}

export default BreadCrums;
