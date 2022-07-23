import { Navbar, Nav, Container } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid="true">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home">
          <img
            src="/logo.png"
            height="30"
            className="d-inline-block align-top"
            alt="Capaciti"
          />
        </Navbar.Brand>
          
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}