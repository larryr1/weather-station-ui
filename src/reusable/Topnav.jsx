import { NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LocalizedStrings from "react-localization";

function Topnav(props) {
  let strings = new LocalizedStrings({
    en: {
      home: "Home",
      histData: "Historical Data",
      sensor: {
        temperature: "Temperature",
        humidity: "Humidity",
        windSpeed: "Wind Speed"
      }
    }
  })

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand>SCPA Weather (WIP)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{strings.home}</Nav.Link>
            <Nav.Link href="#link">{strings.histData}</Nav.Link>
            <NavDropdown title="Sensors" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{strings.sensor.temperature}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">{strings.sensor.humidity}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{strings.sensor.windSpeed}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">...</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topnav;