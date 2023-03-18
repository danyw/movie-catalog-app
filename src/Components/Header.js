import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/fav">Features</Nav.Link>
            <Nav.Link href="/about">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </Container>
  );
};

export default Header;
