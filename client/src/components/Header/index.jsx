import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "blue",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="" src="" />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/link">
              Link
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
