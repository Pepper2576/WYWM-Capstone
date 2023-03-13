import { useAppContext } from "../../Context";
import "./Shop.css";

const Shop = () => {
	const { meals, addToCart } = useAppContext();

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
							<button
								className='add-to-cart-btn'
								onClick={() => addToCart}
							>
								Add to cart
							</button>
						</footer>
					</div>
				);
			})}
		</section>
	);
};

export default Shop;
