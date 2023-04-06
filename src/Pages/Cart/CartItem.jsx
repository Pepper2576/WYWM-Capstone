import React, { useContext } from "react";
import { ShopContext } from "../../Context";
import { IoIosRemove } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";

export const CartItem = (props) => {
	// props imported from the Cart.jsx parent element
	const { id, productName, price, productImage } = props.data;
	// functions required for the page imported from the Context.jsx
	const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
		useContext(ShopContext);

	return (
		// Layout of the individual products on the Cart.jsx page with functions added from the Context.jsx file. Individual buttons imported from react-items.
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
						data-cy='qty'
					/>
					<button onClick={() => addToCart(id)}>
						<GrFormAdd />
					</button>
				</div>
			</div>
		</div>
	);
};
