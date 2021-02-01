import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const activeStyle = {
  color: "blue",
};

function NavBar() {
  return (
    <Navbar className="mb-2" bg="light">
      <Nav>
        <Nav.Link href="/profiles" activeStyle={activeStyle}>
          Profiles
        </Nav.Link>
        <Nav.Link href="/profiles/student" activeStyle={activeStyle}>
          Student Admin
        </Nav.Link>
        <Nav.Link href="/profiles/athlete" activeStyle={activeStyle}>
          Athlete Admin
        </Nav.Link>
        <Nav.Link href="/profiles/cadet" activeStyle={activeStyle}>
          Cadet Admin
        </Nav.Link>
        <Nav.Link href="/aboutus" activeStyle={activeStyle}>
          About Us
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
