import React from "react";
import logo from "../../img/logo.png";
import product1 from "../../img/product1.png";
import product3 from "../../img/product3.png";
import product5 from "../../img/product5.png";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";

const Index = () => {
	return (
		<div className='container'>
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={logo}
						alt='product'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={product1}
						alt='product'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={product3}
						alt='product'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={product5}
						alt='product'
					/>
				</Carousel.Item>
			</Carousel>
			<div>
				<h5>
					Who are we?
					<a href='https://withyouwithme.com/'> We are With You With Me</a>!
				</h5>
				<p>
					A company that is solving unemployment by helping people find jobs in
					the technology industry.
					<br /> Based on <b>POTENTIAL</b> and not what they can put on a CV.
					<br />
					We have created a few products to help use fulfil this dream. <br />{" "}
					Have a look at our <a href='http://localhost:3000/shop'>shop</a> and
					feel free to purchase anything that takes your fancy.
				</p>
			</div>
		</div>
	);
};

export default Index;
