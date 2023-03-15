import React from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./products";
import "./Shop.css";

const Shop = () => {
	return (
		<div
			className='shop'
			key={"itemId"}
		>
			<div className='shopTitle'>
				<h1>WYWM Shop</h1>
			</div>

			<div className='products'>
				{PRODUCTS.map((product) => (
					<Product data={product} />
				))}
			</div>
		</div>
	);
};

export default Shop;
