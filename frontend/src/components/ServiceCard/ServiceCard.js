import React from "react";
import "./ServiceCard.css";
import buyCardImg from "../../assets/images/ServiceCard/Buy_a_home.webp";
import rentCardImg from "../../assets/images/ServiceCard/Rent_a_home.webp";
import sellCardImg from "../../assets/images/ServiceCard/Sell_a_home.webp";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

function ServiceCard() {
	return (
		<div className="serviceCard">
            <Row>
			<div className="cards">
				<img src={rentCardImg} alt="rent home" className="cardsImg" />
                <h3 className = "cardtitle">Rent a home</h3>
                <p className="cardbody">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                <Link to='/rent'>

				<button className="cardButton">Find Rentals</button>
				</Link>
			</div>
			<div className="cards">
				<img src={sellCardImg} alt="sell home" className="cardsImg"/>
                <h3 className = "cardtitle">Sell a home</h3>
                <p className="cardbody">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                <Link to= '/sell' >

					<button className="cardButton">See your Options</button>
				</Link>
			</div>
			<div className="cards">
				<img src={buyCardImg} alt="buy home" className="cardsImg"/>
                <h3 className = "cardtitle">Buy a home</h3>
                <p className="cardbody">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <Link to = '/buy'>
				    <button className="cardButton">Search Homes</button>
				</Link>
				
			</div>
            </Row>
		</div>
	);
}

export default ServiceCard;
