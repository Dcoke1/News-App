import React from 'react';
import "../Assets/globaljs.js";
import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {

	const timeOfDay = () => {
		let time = new Date().getHours();
		let greeting;
			switch (true) {
			case (time < 4):
			    return greeting = "Sup"
			    break;
			case (time > 3 && time < 12):
			    return greeting = "Morning"
			    break;
			case (time > 11 && time < 17):
			    return greeting = "Afternoon"
			    break;
			case (time > 16 && time < 21):
			    return greeting = "Evening"
			    break;
			case (time > 20 && time < 25):
			    return greeting = "GoodNight"
			    break;
			default:
			    return greeting = "Welcome"
			    break;
		}
	};

	return(
		<Navbar bg="dark" variant="dark" sticky="top">
				<Nav>
					<aside className="greeting">
						<span>{timeOfDay()}, {props.name}</span>
					</aside>

					<aside className="nav-search">
						<input type='text' placeHolder='Search' />
					</aside>
				</Nav>
		</Navbar>
	)
}

export default Header;