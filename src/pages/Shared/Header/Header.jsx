import React from 'react';
import logo from '../../../images/logo/logo.svg'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar className='d-flex justify-content-between navbar-bg' expand="lg">
                <Container>
                    <Navbar.Brand className='fs-1 fw-bold title color-primary' href="/"><img className='logo me-2' src={logo} alt="" /> Zestful</Navbar.Brand>
                    <Navbar.Toggle className='color-primary' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='nav-link' href="/home">Home</Nav.Link>
                            <Nav.Link className='nav-link' href="/blog">Blog</Nav.Link>
                            <Nav.Link className='nav-link' href="/service">Service</Nav.Link>
                            <Nav.Link className='nav-link' href="/about">About</Nav.Link>
                        </Nav>
                        <button className='signin-btn-bg ms-auto'>Sign In</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;