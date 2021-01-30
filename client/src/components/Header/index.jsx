import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <FaHome />
      </Link>
      <Nav />
    </header>
  );
}
