import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
	return (
		<div className='navbar'>
			{/* Logo on Nav bar */}
			<div className='logo-container'>
				<img
					src={logo}
					alt='WYWM-logo'
					className='logo'
				/>
			</div>
			{/* Nav bar link */}
			<div className='links'>
				<NavLink
					className='index-link'
					exact
					to='/'
					data-cy='indexLink'
					activeClassName='active'
				>
					Home
				</NavLink>
				<NavLink
					className='shop-link'
					to='/shop'
					data-cy='shopLink'
					activeClassName='active'
				>
					Shop
				</NavLink>
				<NavLink
					className='cart-icon'
					to='/cart'
					data-cy='cartLink'
					activeClassName='active'
				>
					<FiShoppingCart size={32} />
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
