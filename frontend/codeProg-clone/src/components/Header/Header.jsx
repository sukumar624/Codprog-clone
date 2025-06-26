import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="courses">Course</NavLink>
                        <NavLink to="login">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header