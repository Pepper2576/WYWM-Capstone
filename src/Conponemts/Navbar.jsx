import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='links'>
				<Link
					className='shop-link'
					to='/'
				>
					Shop
				</Link>
				<Link
					className='cart-icon'
					to='/cart'
				>
					<FiShoppingCart size={32} />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
