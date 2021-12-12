import React from "react";
import logo from '../../logo.png';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartIcon from "../cart-icon/cart-icon.component";

const Header = () => {

    const onLogoutHandler = (event) => {
        localStorage.removeItem("token");
        window.location.href = '/signin';
      };

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
                                <Nav.Link href="" onClick={onLogoutHandler}>Logout</Nav.Link>
                            </Nav>
                            <CartIcon/>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;