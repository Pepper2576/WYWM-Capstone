import { useAppContext } from "../../Context";

export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { addToCart } = useAppContext();

	return (
		<div className='product'>
			<img
				src={productImage}
				alt='Tech img'
			/>
			<div className='description'>
				<p>
					<b>{productName}</b>
				</p>
				<p> ${price}</p>
			</div>
			<button
				className='addToCartBttn'
				onClick={() => addToCart(id)}
			>
				Add To Cart
			</button>
		</div>
	);
};
