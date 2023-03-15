import React, { useContext } from "react";
import { ShopContext } from "../../Context";
import { IoIosRemove } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";

export const CartItem = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
		useContext(ShopContext);

	return (
		<div className='cartItem'>
			<img
				src={productImage}
				alt='Product-img'
			/>
			<div className='discription'>
				<p>
					<b>{productName}</b>
				</p>
				<p>£ {price}</p>
				<div className='countHandler'>
					<button onClick={() => removeFromCart(id)}>
						<IoIosRemove />
					</button>
					<input
						value={cartItems[id]}
						onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
					/>
					<button onClick={() => addToCart(id)}>
						<GrFormAdd />
					</button>
				</div>
			</div>
		</div>
	);
};
