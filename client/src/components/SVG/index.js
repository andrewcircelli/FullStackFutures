import React from "react";
import styled from "styled-components";
import { SL } from "../../styles/KeyFrames";
// import { StyleCircles } from "./StyleCircles";

// import logo from "../../../static/images/logos/logo.svg";
// import { ReactComponent as Logo } from "../../../static/images/logos/logo.sv";

export function CircleAnimation() {
  return (
    <Wrapper>
      <Logo />
      {/* <img src={logo} alt="Logo" /> */}
      <CircleWrapper>{/* <StyleCircles /> */}</CircleWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: "flex";
`;

const Logo = styled(SL)`
  mix-blend-mode: multiply;
  z-index: 1;
`;

const CircleWrapper = styled.div``;
