import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const NavbarComponent = (props) => {
            const handleClick = () => {
              document.body.style.background = "pink";
              window.setTimeout(handleClick(), 1000);  
        }
    return (
        <Navbar expand="md" className="menu">
        <Container>
        <Navbar.Brand className="logo-text" onClick={handleClick}>Niklas Sendelbach</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/Home">Hem</Nav.Link>
              <Nav.Link as={NavLink} to="/AboutMe">Om mig</Nav.Link>
              <Nav.Link as={NavLink} to="/Cv">Arbete & Utbildning</Nav.Link>
              <Nav.Link as={NavLink} to="/Portfolio">Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}