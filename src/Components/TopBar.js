import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                <img src="[Instacart logo src]" alt="Instacart Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* Add any nav items here if needed */}
                </Nav>
                <Nav>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
