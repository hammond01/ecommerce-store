import React, { createContext, useState } from "react";
import all_product from '../Components/Data/all_product'
export const HomeContext = createContext(null);
const getDefaultCart = () => {
    var cart = {};
    for (let i = 0; i <= all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
const HomeContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart);

    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev, [itemId]: prev[itemId] + 1
        }))
    }
    const removeToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev, [itemId]: prev[itemId] - 1
        }))
    }
    const contextValue = { all_product, cartItem, addToCart, removeToCart };

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeContextProvider;