import React, { useState } from "react";
import logo from "../../img/logo.png";
import product1 from "../../img/product1.png";
import product3 from "../../img/product3.png";
import product5 from "../../img/product5.png";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";

const Index = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div className='container'>
			<div className='container carousel-container'>
				<Carousel
					activeIndex={index}
					onSelect={handleSelect}
					variant='dark'
				>
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
			</div>
			<div className='WYWM-intro'>
				<h5>
					Who are we? We are{" "}
					<a href='https://withyouwithme.com/'>With You With Me</a>!
				</h5>
				<p>
					A company that is solving unemployment by helping people find jobs in
					the technology industry.
					<br /> Based on <b>POTENTIAL</b> and not what they can put on a CV.
					<br />
					We have created a few products to support this dream. <br /> Have a
					look at our{" "}
					<b>
						<a href='http://localhost:3000/shop'>shop</a>
					</b>
					, and feel free to purchase anything that takes your fancy.
				</p>
			</div>
		</div>
	);
};

export default Index;
