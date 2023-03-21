import React, { useState } from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./products";
import "./Shop.css";
import { FiShoppingCart } from "react-icons/fi";
import Modal from "../Modal/Modal";
const Shop = () => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<div
			className='shop'
			key={"itemId"}
		>
			<div className='shopTitle'>
				<h1>WYWM Shop</h1>
			</div>
			<div>
				<button
					className='openModalBtn'
					onClick={() => {
						setModalOpen(true);
					}}
					data-cy='modalBtn'
				>
					<FiShoppingCart size={32} />
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
