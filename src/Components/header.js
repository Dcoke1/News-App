import React from "react";
import "../Assets/globaljs.js";
import { Navbar, Nav } from "react-bootstrap";


class Header extends React.Component {
		constructor(props, context) {
	    super(props, context);
	    this.state = {
	      userName: null
	    }
	}

	 timeOfDay = () => {

		let time = new Date().getHours();
		let greeting;

		switch (true) {
			case time < 4:
				return (greeting = "Sup ");
				break;
			case time > 3 && time < 12:
				return (greeting = "Morning ");
				break;
			case time > 11 && time < 17:
				return (greeting = "Afternoon ");
				break;
			case time > 16 && time < 21:
				return (greeting = "Evening ");
				break;
			case time > 20 && time < 25:
				return (greeting = "GoodNight ");
				break;
			default:
				break;
		}
	};


	updateName = () => {

		let user = localStorage.getItem("visted");
		let { userName } = this.state;
		
		user = prompt("Whats your name?");
		localStorage.setItem("visted", user);

		this.setState({
			userName: user
		})

		return userName
	};


	render () {

		let { userName } = this.state;
		let user = localStorage.getItem("visted");

		return (
			<Navbar bg="dark" variant="dark" sticky="top">
				<Nav>
					<aside className="greeting">
						<div>
							<span>
								{this.timeOfDay()}
							</span>
								<span className="userName">
									{userName === null && user === 'null' || user === null || user === '' ? 
									<button className='btn-warning updateBtn' 
											onClick={this.updateName}>Update name
									</button> : user}
								</span>
						</div>
					</aside>

					<aside className="nav-search">
						<input type="text" placeHolder="Search coming soon!" />
					</aside>
				</Nav>
			</Navbar>
		)
	};
}
export default Header;
