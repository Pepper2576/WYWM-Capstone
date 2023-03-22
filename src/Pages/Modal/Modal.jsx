import React from "react";
import Cart from "../Cart/Cart";
import "./Modal.css";
import Button from "react-bootstrap/Button";
function Modal({ setOpenModal }) {
	return (
		// importing <Button> from react-bootstrap/Button. Also displays the Cart.jsx file to allow users to see what items are in the cart.
		<div className='modalBackground'>
			<div className='modalContainer'>
				<div className='closBtn'>
					<Button
						onClick={() => {
							setOpenModal(false);
						}}
						data-cy='modalCloseBtn'
						variant='light'
					>
						X
					</Button>
					<Cart />
				</div>
			</div>
		</div>
	);
}

export default Modal;
