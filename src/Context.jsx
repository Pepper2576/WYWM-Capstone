import { createContext, useState } from "react";
import { PRODUCTS } from "./Products";

let tax = 1.1;
let shipping = 20;

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}
		return totalAmount;
	};

	const getTotalCartAmountTax = () => {
		let totalAmountTax = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				totalAmountTax += cartItems[item] * itemInfo.price;
			}
		}
		let totalAmountTaxWithTax = totalAmountTax * tax;
		return totalAmountTaxWithTax.toFixed(2);
	};
	const getTotalCartAmountWithShipping = () => {
		let totalAmountTax = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				totalAmountTax += cartItems[item] * itemInfo.price;
				let totalAmountTaxWithShipping = totalAmountTax * tax + shipping;
				return totalAmountTaxWithShipping.toFixed(2);
			} else {
				return "0";
			}
		}
	};

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const clearCart = () => {
		setCartItems(getDefaultCart());
	};

	const getCartItemCount = () => {
		let count = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				count += cartItems[item];
			}
		}
		return count;
	};

	const contextValue = {
		cartItems,
		addToCart,
		removeFromCart,
		updateCartItemCount,
		getTotalCartAmount,
		clearCart,
		getTotalCartAmountTax,
		getTotalCartAmountWithShipping,
		getCartItemCount,
	};
	console.log(cartItems);

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
