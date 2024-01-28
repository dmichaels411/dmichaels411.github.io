import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/'>01. Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/projects'>02. Projects</Nav.Link>
                    <Nav.Link as={NavLink} to='/about'>03. About</Nav.Link>
                    <Nav.Link as={NavLink} to='/resume'>04. Résumé</Nav.Link>
                    <Nav.Link as={NavLink} to='/contact'>05. Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}