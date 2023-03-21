import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='links'>
				<Link
					className='index-link'
					to='/'
					data-cy='indexLink'
				>
					Home
				</Link>
				<Link
					className='shop-link'
					to='/shop'
					data-cy='shopLink'
				>
					Shop
				</Link>
				<Link
					className='cart-icon'
					to='/cart'
					data-cy='cartLink'
				>
					<FiShoppingCart size={32} />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
