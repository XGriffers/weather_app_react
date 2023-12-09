import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, InputGroup, FormControl,FormCheck, Image } from 'react-bootstrap';
import './NavBar.css'; // Import a CSS file for custom styles
import logo192 from '../../pictures/logo192.png'

function NavBar() {
  const searchIconUnicode = '\u{2315}'; // Unicode for Font Awesome search icon
  const [isCelsius, setIsCelsius] = useState(true);

  const handleToggleChange = () => {
    setIsCelsius(!isCelsius);
    // Add logic here to handle the change in temperature units
  };

  return (
    <Navbar expand="md" className="weather-navbar">
      <Container fluid>
        <Navbar.Brand href="/home-page">
        <Image src={logo192} alt="Logo" className="weather-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link href="/radar">Radar</Nav.Link>
            <Nav.Link href="/maps">Maps</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>

            <NavDropdown title="More" id="navbarScrollingDropdown">
            <FormCheck
              type="switch"
              id="temperatureSwitch"
              label={isCelsius ? 'C°' : 'F°'}
              onChange={handleToggleChange}
              className="ms-3"
            />
              <NavDropdown.Item href="/weather-news">Weather News</NavDropdown.Item>
              <NavDropdown.Item href="/health">Health</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
          
            <InputGroup>
              <FormControl
                type="search"
                placeholder={`${searchIconUnicode} City or Zip Code`}
                className="rounded-pill border-2"
                style={{ backgroundColor: '#f5f5f5' }}
                aria-label="Search"
              />
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
