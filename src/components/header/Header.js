import React from "react";
import logo from '../../logo.png';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="EthioSouth Mini Market" height="100px;" /> online shopping
                    </Navbar.Brand>
                    <div class="flex-container">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/" > Home</Link>
                                <NavDropdown title="Logout" id="basic-nav-dropdown">
                                    <Nav.Link href="" >Logout</Nav.Link>
                                </NavDropdown>
                                <Link className="nav-link" to="/" > Cart</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;