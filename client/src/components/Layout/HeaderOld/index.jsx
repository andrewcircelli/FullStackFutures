import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavOld";
import { FaHome } from "react-icons/fa";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <Link to="/">
        <FaHome />
      </Link>
      <NavBar />
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="hover:text-blue-500 font-semibold py-1 px-2 rounded focus:outline"
      >
        ToggleTheme
      </button>
    </header>
  );
}
