import { Container } from "react-bootstrap";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
