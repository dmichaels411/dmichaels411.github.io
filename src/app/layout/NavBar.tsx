import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar style={{marginTop: "1em", marginBottom: "5em", fontWeight: "600"}} expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link style={{paddingRight: "5em"}} as={NavLink} to='/'>01. Home</Nav.Link>
                    <Nav.Link style={{paddingRight: "5em"}} as={NavLink} to='/projects'>02. Projects</Nav.Link>
                    <Nav.Link style={{paddingRight: "5em"}} as={NavLink} to='/about'>03. About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}