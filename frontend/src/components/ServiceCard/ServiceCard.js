import React from "react";
import "./ServiceCard.css";
import buyCardImg from "../../assets/images/ServiceCard/Buy_a_home.webp";
import rentCardImg from "../../assets/images/ServiceCard/Rent_a_home.webp";
import sellCardImg from "../../assets/images/ServiceCard/Sell_a_home.webp";

function ServiceCard() {
	return (
		<div className="serviceCard">
            <section>
			<div className="cards">
				<img src={rentCardImg} alt="rent home" className="cardsImg" />
                <h3 className = "cardtitle">Rent a home</h3>
                <p className="cardbody">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                <button className="cardButton">Find Rentals</button>
			</div>
			<div className="cards">
				<img src={sellCardImg} alt="rent home" className="cardsImg"/>
                <h3 className = "cardtitle">Sell a home</h3>
                <p className="cardbody">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                <button className="cardButton">See your Options</button>
			</div>
			<div className="cards">
				<img src={buyCardImg} alt="rent home" className="cardsImg"/>
                <h3 className = "cardtitle">Buy a home</h3>
                <p className="cardbody">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <button className="cardButton">Search Homes</button>
			</div>
            </section>
		</div>
	);
}

export default ServiceCard;
