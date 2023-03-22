import React from "react";
import Cart from "../Cart/Cart";
import "./Modal.css";
import Button from "react-bootstrap/Button";
function Modal({ setOpenModal }) {
	return (
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
