import React, {useEffect, useState} from "react";
import logo from '../../logo.png';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartIcon from "../cart-icon/cart-icon.component";
import getTokenUser from "../../shared/lib/Util";


const Header = (props) => {

    const onLogoutHandler = (event) => {
        localStorage.removeItem("token");
        window.location.href = '/signin';
      };

    return (
        <div className="header">
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
                                { getTokenUser.hasPermission('productadd') && getTokenUser.isLoggedInSellerApproved() && <Link className="nav-link" to="/product/create" > Add Product</Link> }
                                { getTokenUser.hasPermission('sellerapprove') && <Link className="nav-link" to="/approve/seller" > Approve Seller</Link> }
                                { getTokenUser.hasPermission('reviewapprove') && <Link className="nav-link" to="/approve/review" > Approve Review</Link> }
                                { getTokenUser.hasPermission('followseller') && <Link className="nav-link" to="/follow" > Follow Seller</Link> }
                                <Link className="nav-link" to="/orders">View Orders</Link>
                                <Nav.Link href="" onClick={onLogoutHandler}>Logout</Nav.Link>
                                <Link  to="/cart" ><CartIcon onAdd={props.onAdd} cartItems={props.cartItems}/></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;