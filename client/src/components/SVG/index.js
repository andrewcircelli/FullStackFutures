import React from "react";
import styled from "styled-components";
import { GiGrowth } from "react-icons/gi";

export function CircleAnimation() {
  return (
    <Wrapper>
      <Logo />
      <CircleWrapper />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: "flex";
`;

const Logo = styled(GiGrowth)`
  width: 100px;
  height: 100px;
  mix-blend-mode: multiply;
  z-index: 1;
  color: #6d83f2;
  margin-bottom: 20px;
`;

const CircleWrapper = styled.div``;
