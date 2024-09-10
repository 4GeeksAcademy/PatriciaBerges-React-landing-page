import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";



//create your first component
const Home = () => {
	let cardInfo = [{title: "Card 1", text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor cubilia aptent ac commodo turpis ornare sed.", button: "Go somewhere", image: "https://placehold.co/500x325"}, 
		{title: "Card 2", text: "Primis lacus etiam nisi, augue tempor suscipit volutpat. Ultrices mi tempor ad dignissim sociosqu porttitor nunc.", button: "Go somewhere else", image: "https://placehold.co/500x325"}, 
		{title: "Card 3", text: "Euismod amet turpis primis suspendisse odio platea placerat. Nascetur feugiat lacus massa condimentum hac imperdiet mattis dignissim efficitur.", button: "Go farther", image: "https://placehold.co/500x325"}, 
		{title: "Card 4", text: "Orci nunc iaculis scelerisque ridiculus fermentum vitae montes dui.", button: "Go the farthest", image: "https://placehold.co/500x325"}]
	const Cards = cardInfo.map((info, index) => {
		return <Card key={index} title={info.title} text={info.text} button={info.button} image={info.image} />
	})	
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="d-flex row justify-content-center">{Cards}</div>
			<Footer />
		</div>			
	);
};

export default Home;
