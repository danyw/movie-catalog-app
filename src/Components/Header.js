import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginButton from "../Auth/Login";
import LogoutButton from "../Auth/Logout";
import Profile from "../Auth/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../Assets/Logo.png";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="30" height="30" alt="Our Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/fav">Favourites</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>

          <Nav className="justify-content-end" activeKey="/home">
            {!isAuthenticated && (
              <Nav.Item>
                <Nav.Link href="/home">
                  <LoginButton />
                </Nav.Link>
              </Nav.Item>
            )}

            {isAuthenticated && (
              <>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    <Profile />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    <LogoutButton />
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
