import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context";
import { CartItem } from "./CartItem";
import "./Cart.css";
import Button from "react-bootstrap/Button";

const Cart = () => {
	// imports the required functions from ShopContext
	const {
		cartItems,
		getTotalCartAmount,
		clearCart,
		getTotalCartAmountTax,
		getTotalCartAmountWithShipping,
	} = useContext(ShopContext);
	// Assigning ShopContext functions to variable names for use on page all functions can be found in Context.jsx script file
	const totalAmount = getTotalCartAmount();
	const totalAmountTax = getTotalCartAmountTax();
	const totalCartAmountWithShipping = getTotalCartAmountWithShipping();

	return (
		<div className='cart'>
			<div>
				<h1> Your cart items </h1>
			</div>
			{/* Uses .map() to lay out all product cards product card layout can be found in the ./Pages/Cart/CartItem file and infomation from the PRODUCTS.js (mock API data) */}
			<div className='cartItems'>
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem data={product} />;
					}
				})}
			</div>
			{/* Displays cart totals including the total + tax and Shipping, functions can be found in the Context.jsx file */}
			<div className='total'>
				<p data-cy='cartSubtotal'>Subtotal: £{totalAmount}</p>
				<p data-cy='cartSubtotalTax'>Total with 10% tax: £{totalAmountTax}</p>
				<p data-cy='totalPlusShipping'>
					Total with shipping: £{totalCartAmountWithShipping}
				</p>
				{/* <Button> is a aspect of the react-bootstrap button import */}
				<Button
					onClick={() => clearCart()}
					data-cy='removeAllBtn'
					className='removeAllBtn '
					variant='danger'
				>
					Remove All
				</Button>
				<Button
					variant='primary'
					data-cy='checkoutBtn'
					className='checkoutBtn '
				>
					Checkout
				</Button>
			</div>
		</div>
	);
};

export default Cart;
