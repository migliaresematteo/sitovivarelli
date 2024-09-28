import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faFile, faMusic, faHands } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomNavbar() {
const navbarItems = [
    { label: 'Curriculum', url: '/curriculum', icon: faFile },
    { label: 'Concerti', url: '/concerti', icon: faMusic },
    { label: 'Lezioni', url: '/lezioni', icon: faHands },
];

    return (
        <>
            <Navbar fixed="top" expand="lg" className="bg-light py-4">
                <Container>
                    <Navbar.Brand href="/">
                        <lead>Caterina Vivarelli</lead>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navbarItems.map((item, index) => (
                                <span className='container d-flex justify-content-start align-items-center ps-lg-3 py-3 py-lg-0'>
                                    <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                                    <Nav.Link className='textc-black ps-2 no-string-break' key={index} href={item.url}>{item.label}</Nav.Link>
                                </span>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;