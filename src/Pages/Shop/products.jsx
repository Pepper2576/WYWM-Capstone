import React, { useContext } from "react";
import { ShopContext } from "../../Context";
import { BsCartPlus } from "react-icons/bs";
import "./Shop.css";

export const Product = (props) => {
	// import product props from parent element.
	const { id, productName, price, productImage } = props.data;
	// importing functions from ShopContext.jsx file
	const { addToCart, cartItems } = useContext(ShopContext);
	// ID used to identify individual items
	const cartItemsAmount = cartItems[id];
	return (
		// build of how the products are displayed on the page.
		<section className='section-center'>
			<div className='single-product'>
				<img
					src={productImage}
					alt='Tech img'
					className='product-image'
				/>
				<footer>
					<p>
						<b>{productName}</b>
						<br></br>£{price}
					</p>

					<button
						className='add-btn'
						onClick={() => addToCart(id)}
						data-cy={id}
					>
						<BsCartPlus size={25} />
						{/* Allows users to see qty of individual products in cart */}
						{cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
					</button>
				</footer>
			</div>
		</section>
	);
};
