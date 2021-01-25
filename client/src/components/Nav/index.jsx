import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "blue",
};

function Nav() {
  return (
    <nav>
      <NavLink to="/api/profiles" activeStyle={activeStyle}>Profiles</NavLink>
      <NavLink to="/api/aboutus" activeStyle={activeStyle}>About Us</NavLink>
      <NavLink to="/api/other" activeStyle={activeStyle}>Other Link</NavLink>
    </nav>
  );
}

export default Nav;
