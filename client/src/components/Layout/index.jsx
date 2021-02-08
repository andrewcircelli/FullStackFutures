import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "./Header";
import "./style.css";

const Wrapper = styled.main`
  margin: auto;
  width: 80%;
`;

const RootWrapper = styled(Wrapper)`
  margin-top: 125px;
  margin-bottom: 50px;
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RootWrapper>{children}</RootWrapper>
    </>
  );
}

export default Layout;
