import { createContext, useState } from "react";
import { PRODUCTS } from "./Products";

// Variables for tax rate and shipping
let tax = 1.1;
let shipping = 20;

export const ShopContext = createContext(null);
// for loop for cart items in the array, also sets the set a default for the cart
const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};
// function to set the cartItems
export const ShopContextProvider = (props) => {
	// function to set the cartItems via teh setCartItems
	const [cartItems, setCartItems] = useState(getDefaultCart());
	// function to work out the sum of the cart.
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
	// function to work out the sum of the cart + 10% tax
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
	// function to work out the sum of the cart + 10% tax + 20 shipping cost and if cart is empty to display the amount as zero for the shipping cost
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
	// Function to add items to cart
	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};
	// Function to remove items to cart
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};
	// Function to update items to cart via a manual input
	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};
	// Function to remove all items to cart
	const clearCart = () => {
		setCartItems(getDefaultCart());
	};
	// Function to display the total amount of items in the cart for the Modal
	const getCartItemCount = () => {
		let count = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				count += cartItems[item];
			}
		}
		return count;
	};
	// exports functions required for app to function correctly to child elements
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
	// Wraps the app pages in the ShopContext allowing Context.jsx to become the parent element
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
