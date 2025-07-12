import { Container } from "react-bootstrap";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";


const RootLayout = () => {
    return (
        <Container>
            <Navbar/>
            <Outlet/>
        </Container>
    );
};

export default RootLayout;