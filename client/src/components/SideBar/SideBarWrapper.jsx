import React from "react";
import styled from "styled-components";
import Sidebar from "./index";

const SideBarWrapper = () => {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
};

const Container = styled.div``;

export default SideBarWrapper;
