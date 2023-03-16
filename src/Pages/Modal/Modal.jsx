import React from "react";
import Cart from "../Cart/Cart";
import "./Modal.css";
function Modal({ setOpenModal }) {
	return (
		<div className='modalBackground'>
			<div className='modalContainer'>
				<div className='closBtn'>
					<button
						onClick={() => {
							setOpenModal(false);
						}}
					>
						X
					</button>
					<Cart />
				</div>
			</div>
		</div>
	);
}

export default Modal;
