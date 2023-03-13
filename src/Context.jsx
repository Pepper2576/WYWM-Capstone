import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ShopContex = createContext();
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const ShopContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState;
	const [meals, setMeals] = useState([]);

	const fetchMeals = async (url) => {
		try {
			const { data } = await axios(url);
			setMeals(data.meals);
			console.log(data);
		} catch (e) {
			console.log(e.responce);
		}
	};

	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);
	// eslint-disable-next-line
	const defaultCart = () => {
		let cart = {};
		for (let i = 1; i < meals.length + 1; i++) {
			cart[i] = 0;
		}
		return cart;
	};

	const addToCart = (idMeal) => {
		setCartItems((prev) => ({ ...prev, [idMeal]: prev[idMeal] + 1 }));
	};

	const removeFromCart = (idMeal) => {
		setCartItems((prev) => ({ ...prev, [idMeal]: prev[idMeal] - 1 }));
	};

	const contextValue = { cartItems, addToCart, removeFromCart, meals };
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
