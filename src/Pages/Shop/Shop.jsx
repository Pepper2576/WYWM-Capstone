import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Shop.css";

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Shop = () => {
	const [meals, setMeals] = useState([]);

	const fetchMeals = async (url) => {
		try {
			const { data } = await axios(url);
			setMeals(data.meals);
		} catch (e) {
			console.log(e.responce);
		}
	};

	useEffect(() => {
		fetchMeals(allMealsUrl);
	}, []);

	return (
		<section className='section-center'>
			{meals.map((singleMeal) => {
				const { idMeal, strMeal: title, strMealThumb: img } = singleMeal;
				return (
					<div
						key={idMeal}
						className='single-meal-el'
					>
						<img
							src={img}
							alt='food'
						/>
						<footer>
							<h5>{title}</h5>
							<button className='add-to-cart-btn'>Add to cart</button>
						</footer>
					</div>
				);
			})}
		</section>
	);
};

export default Shop;
