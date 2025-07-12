import { Container } from "react-bootstrap";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";


const RootLayout = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </ShoppingCartProvider>
  );
};

export default RootLayout;
