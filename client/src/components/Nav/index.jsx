import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "blue",
};

function Nav() {
  return (
    <nav>
      <NavLink to="/profiles" activeStyle={activeStyle}>
        Profiles
      </NavLink>
      <NavLink to="/profiles/student" activeStyle={activeStyle}>
        Student Admin
      </NavLink>
      <NavLink to="/profiles/athlete" activeStyle={activeStyle}>
        Athlete Admin
      </NavLink>
      <NavLink to="/profiles/cadet" activeStyle={activeStyle}>
        Cadet Admin
      </NavLink>
      <NavLink to="/aboutus" activeStyle={activeStyle}>
        About Us
      </NavLink>
      <NavLink to="/other" activeStyle={activeStyle}>
        Other Link
      </NavLink>
    </nav>
  );
}

export default Nav;
