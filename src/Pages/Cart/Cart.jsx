import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context";
import { CartItem } from "./CartItem";
import "./Cart.css";
import Button from "react-bootstrap/Button";

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
				<p data-cy='cartSubtotal'>Subtotal: £{totalAmount}</p>
				<p data-cy='cartSubtotalTax'>Total with 10% tax: £{totalAmountTax}</p>
				<p data-cy='totalPlusShipping'>
					Total with shipping: £{totalCartAmountWithShipping}
				</p>
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
