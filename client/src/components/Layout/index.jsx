import React from "react";
// does this need to be an object destructure?
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "./Header";
import "./style.css";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}

export default Layout;
