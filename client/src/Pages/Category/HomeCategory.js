import React, { useContext } from 'react'
import { HomeContext } from '../../Context/HomeContext'
import "./HomeCategory.css";
import dropdownIcon from "../../Components/Data/dropdown_icon.png";
import Item from '../../Components/Item/Item';
const HomeCategory = (props) => {
    const { all_product } = useContext(HomeContext);
    return (
        <div className='home-category'>
            <img className='homeCategory-banner' src={props.banner} alt="" />
            <div className="homeCategory-indexSort">
                <p>
                    <span>Showing 1-22</span> out off 36 products
                </p>
                <div className="homeCategory-sort">
                    Sort by <img src={dropdownIcon} alt="" />
                </div>
            </div>
            <div className="homeCategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } else
                        return null;
                })}
            </div>
            <div className="homeCategory-loadMore">
                Explore More
            </div>
        </div>
    )
}

export default HomeCategory
