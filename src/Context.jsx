import { createContext, useContext, useState } from "react";
import { PRODUCTS } from "./Products";

const ShopContex = createContext();

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

const ShopContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState();

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const contextValue = { cartItems, addToCart, removeFromCart };
	return (
		<ShopContex.Provider value={{ contextValue }}>
			{children}
		</ShopContex.Provider>
	);
};

export const useAppContext = () => {
	return useContext(ShopContex);
};

export { ShopContex, ShopContextProvider };
