import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context";
import { CartItem } from "./CartItem";
import "./Cart.css";

const Cart = () => {
	const {
		cartItems,
		getTotalCartAmount,
		clearCart,
		getTotalCartAmountTax,
		getTotalCartAmountWithShipping,
	} = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();
	const totalAmountTax = getTotalCartAmountTax();
	const totalCartAmountWithShipping = getTotalCartAmountWithShipping();

	return (
		<div className='cart'>
			<div>
				<h1> Your cart items </h1>
			</div>
			<div className='cartItems'>
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem data={product} />;
					}
				})}
			</div>
			<div className='total'>
				<p>Subtotal: £{totalAmount}</p>
				<p>Total with 10% tax: £{totalAmountTax}</p>
				<p>Total with shipping: £{totalCartAmountWithShipping}</p>
				<button onClick={() => clearCart()}>Remove All</button>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default Cart;
