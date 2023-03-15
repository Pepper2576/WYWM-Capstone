import React from "react";

export const CartItem = (props) => {
	const { productName, price, productImage } = props.data;
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
			</div>
		</div>
	);
};
