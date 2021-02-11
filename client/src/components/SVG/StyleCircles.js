import React from "react";
import styled from "styled-components";
import { SC, SIC } from "../../../styles/KeyFrames.jsx";

export function StyleCircles() {
  return (
    <Wrapper primaryColor="#61DAFB" secondaryColor="violet">
      <div style={{ width: "200px", margin: "auto" }}>
        <StyledCircle colorOne="red" colorTwo="green" height="100" width="100">
          <StyledInnerCircle
            colorOne="tomato"
            colorTwo="hotpink"
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="3"
          />
        </StyledCircle>

        <StyledCircle colorOne="red" colorTwo="green" height="100" width="100">
          <StyledInnerCircle
            colorOne="palevioletred"
            colorTwo="mediumslateblue"
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="3"
          />
        </StyledCircle>

        <StyledCircle colorOne="red" colorTwo="green" height="100" width="100">
          <StyledInnerCircle
            colorOne="palevioletred"
            colorTwo="mediumslateblue"
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="3"
          />
        </StyledCircle>

        <StyledCircle colorOne="red" colorTwo="green" height="100" width="100">
          <StyledInnerCircle
            colorOne="tomato"
            colorTwo="hotpink"
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="3"
          />
        </StyledCircle>
      </div>
    </Wrapper>
  );
}

const StyledInnerCircle = styled(SIC)``;
const StyledCircle = styled(SC)`

`;
const Wrapper = styled.div``;
