import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
	return(
	<Navbar bg="dark" variant="dark" sticky="top">
			<Nav className="mr-auto">
				<Nav.Link className="link" href="#us"><i className="fas fa-flag-usa"></i>&nbsp;US</Nav.Link>
				<Nav.Link className="link" href="#business"><i className="fas fa-briefcase"></i>&nbsp;Business</Nav.Link>
				<Nav.Link className="link" href="#technology"><i className="fas fa-laptop-code"></i>&nbsp;Technology</Nav.Link>
				<Nav.Link className="link" href="#sports"><i className="fas fa-basketball-ball"></i>&nbsp;Sports</Nav.Link>
				<Nav.Link className="link" href="#entertainment"><i className="fas fa-theater-masks"></i>&nbsp;Entertainment</Nav.Link>
				<Nav.Link className="link" href="#health"><i className="fas fa-heartbeat"></i>&nbsp;Health</Nav.Link>
				<Nav.Link className="linkEnd" href="#science"><i className="fas fa-microscope"></i>&nbsp;Science</Nav.Link>&nbsp;
			</Nav>
	</Navbar>
	)
}

export default Header;