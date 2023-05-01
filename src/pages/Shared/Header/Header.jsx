import logo from '../../../images/logo/logo.svg'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <Navbar className='d-flex justify-content-between navbar-bg mb-5' expand="lg">
                <Container>
                    <Navbar.Brand className='fs-1 fw-bold title color-primary' href="/"><img className='logo me-2' src={logo} alt="" /> Zestful</Navbar.Brand>
                    <Navbar.Toggle className='color-primary' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/blog">Blog</Link>
                            <Link className='nav-link' to="/service">Service</Link>
                            <Link className='nav-link' to="/about">About</Link>
                        </Nav>
                        <Link className='ms-auto' to="/sign-in"><button className='signin-btn-bg'>Sign In</button></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;