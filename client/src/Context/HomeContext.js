import React, { createContext, useState } from 'react';
import all_product from '../Asset/Client/all_product';
export const HomeContext = createContext(null);
const getDefaultCart = () => {
	var cart = {};
	for (let i = 0; i <= all_product.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};
const HomeContextProvider = (props) => {
	const [cartItems, setCartItem] = useState(getDefaultCart);

	const addToCart = (itemId) => {
		setCartItem((prev) => ({
			...prev,
			[itemId]: prev[itemId] + 1,
		}));
	};
	const removeToCart = (itemId) => {
		setCartItem((prev) => ({
			...prev,
			[itemId]: prev[itemId] - 1,
		}));
	};

	const getTotalCartAmount = () => {
		var totalAmount = 0;
		for (const i in cartItems) {
			if (cartItems[i] > 0) {
				var itemInfo = all_product.find((product) => product.id === Number(i));
				totalAmount += itemInfo.new_price * cartItems[i];
			}
		}
		return totalAmount;
	};

	const getTotalCartItem = () => {
		var totalItem = 0;
		for (const i in cartItems) {
			if (cartItems[i] > 0) {
				totalItem = cartItems[i];
			}
		}
		return totalItem;
	};
	const contextValue = {
		getTotalCartAmount,
		all_product,
		cartItems,
		addToCart,
		removeToCart,
		getTotalCartItem,
	};

	return (
		<HomeContext.Provider value={contextValue}>
			{props.children}
		</HomeContext.Provider>
	);
};
export default HomeContextProvider;
