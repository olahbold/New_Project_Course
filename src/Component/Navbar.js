import { CgProfile } from "react-icons/cg";
import { Button, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile_app from "./Images/mobile_app.png";

export default function Navbars() {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="black">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="Logo.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Chat" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Support </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Plan Your Day
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/join">
              <Button style={{ background: "#50347f" }}>Join Now</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <CgProfile
                style={{ width: "24px", height: "27px", color: "#50347f" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
