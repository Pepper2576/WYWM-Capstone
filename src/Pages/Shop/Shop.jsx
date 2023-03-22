import React, { useState, useContext } from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./products";
import "./Shop.css";
import { FiShoppingCart } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { ShopContext } from "../../Context";

const Shop = (props) => {
	const [modalOpen, setModalOpen] = useState(false);
	const { cartItems, getCartItemCount } = useContext(ShopContext);

	return (
		<div
			className='shop'
			key={"itemId"}
		>
			<div className='shopTitle'>
				<h1>WYWM Shop</h1>
			</div>
			<div className='modal-container'>
				<button
					className='openModalBtn'
					onClick={() => {
						setModalOpen(true);
					}}
					data-cy='modalBtn'
				>
					<FiShoppingCart size={32} />
					<span className='itemCount'>
						{getCartItemCount()} {cartItems.length > 0}
					</span>
				</button>
				{modalOpen && <Modal setOpenModal={setModalOpen} />}
			</div>

			<div className='products'>
				{PRODUCTS.map((product) => (
					<Product
						data={product}
						key={product.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Shop;
