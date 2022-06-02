import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function Navigation () {
    return (
        <Navbar>
            <Container>
                <Nav>
                    <NavLink as={Link} to='/'>Home</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
