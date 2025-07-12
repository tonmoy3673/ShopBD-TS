import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

const Navbar = () => {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
           <Container>
            <Nav>
                Home
            </Nav>
           </Container>
        </NavbarBs>
    );
};

export default Navbar;