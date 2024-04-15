import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <div style={{
            backgroundImage: 'url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)',
            backgroundColor: '#deedd6',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            padding: '20px' // Adjust padding as needed
        }}>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
                        alt="Instacart Logo"
                        style={{ height: '30px', width: 'auto' }}
                    />
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
        </div>
    );
}

export default MyNavbar;