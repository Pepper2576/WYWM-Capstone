import { useAppContext } from "../../Context";

export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
	const { addToCart } = useAppContext();

	return (
		<section className='section-center'>
			<div className='single-product'>
				<img
					src={productImage}
					alt='Tech img'
				/>
				<footer>
					<p>
						<b>{productName}</b>
						<br></br>£{price}
					</p>

					<button
						className='add-btn'
						onClick={() => addToCart(id)}
					>
						Add To Cart
					</button>
				</footer>
			</div>
		</section>
	);
};
