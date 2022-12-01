import { NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Topnav(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand>SCPA Weather</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">History</Nav.Link>
            <NavDropdown title="Sensors" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Temperature</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Humidity</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wind Speed</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">...</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topnav;