import { useContext, useState } from 'react';
import logo from '../../../images/logo/logo.svg'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import signOutPhoto from '../../../images/logo/signout.svg';


const Header = () => {

    const { user, signOutHandle } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutHandle()
            .then()
            .catch((error) => {
                console.log(error);
            })
    }

    const [activeKey, setActiveKey] = useState('home');

    const handleSelect = selectedKey => {
        setActiveKey(selectedKey);
    }


    return (
        <>
            <Navbar className='d-flex justify-content-between navbar-bg' expand="lg">
                <Container>
                    <Navbar.Brand className='fs-1 fw-bold title color-primary' ><img className='logo me-2' src={logo} alt="" /> Zestful</Navbar.Brand>
                    <Navbar.Toggle className='color-primary' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={activeKey} className="mx-auto" onSelect={handleSelect}>
                            <Nav.Link as={Link} eventKey="home" to="/" className={activeKey === 'home' ? 'active active-nav-link' : 'nav-link'}>Home</Nav.Link>
                            <Nav.Link as={Link} eventKey="blog" to="/blog" className={activeKey === 'blog' ? 'active active-nav-link' : 'nav-link'}>Blog</Nav.Link>
                            <Nav.Link as={Link} eventKey="service" to="/service" className={activeKey === 'service' ? 'active active-nav-link' : 'nav-link'}>Service</Nav.Link>
                            <Nav.Link as={Link} eventKey="booking" to="/booking" className={activeKey === 'booking' ? 'active active-nav-link' : 'nav-link'}>Booking</Nav.Link>
                            <Nav.Link as={Link} eventKey="about" to="/about" className={activeKey === 'about' ? 'active active-nav-link' : 'nav-link'}>About</Nav.Link>
                        </Nav>

                        {
                            user?.email ? <div className="d-flex align-items-center">
                                <div className="profile">
                                    <img className='prof me-2 profile-img' src={user.photoURL && user.photoURL} alt="" />
                                    <p className="profile-name">{user.displayName && user.displayName}</p>
                                </div>
                                <Link onClick={handleSignOut} to={'/'}><img className='sign-out' src={signOutPhoto} alt="" /></Link>
                            </div> : <Link className='ms-auto' to="/sign-in"><button className='signin-btn-bg'>Sign In</button></Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
