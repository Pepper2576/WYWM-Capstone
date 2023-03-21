import React, { useContext } from "react";
import { ShopContext } from "../../Context";
import { BsCartPlus } from "react-icons/bs";

export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { addToCart, cartItems } = useContext(ShopContext);
	const cartItemsAmount = cartItems[id];
	return (
		<section className='section-center'>
			<div className='single-product'>
				<img
					src={productImage}
					alt='Tech img'
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
						{cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
					</button>
				</footer>
			</div>
		</section>
	);
};
