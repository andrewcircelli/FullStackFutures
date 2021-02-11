import styled, { keyframes } from "styled-components";
import { ReactComponent as ReactLogo } from "../static/images/logos/logo.svg";





const rotate = keyframes`
  from {
    transform: rotate(0deg);
    transition: delay(5s)
  }
  to {
    transform: rotate(-360deg);
    transition: delay(5s)
  }
`;


const fade = (primaryColor, secondaryColor) => keyframes`
0% {
fill:${primaryColor};
}
50% {
 fill:${secondaryColor};
}
100%{
  fill:${primaryColor};
}
`;
const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;
const circlePulse = (colorOne, colorTwo) => keyframes`
0% {
  fill:${colorOne};
  stroke-width:10px
}
50% {
  fill:${colorTwo};
  stroke-width:2px
}
100%{
  fill:${colorOne};
  stroke-width:10px
}
`;


export const SL = styled(ReactLogo)`
  animation: ${rotate} infinite 50s linear;
  height: 25rem;
  width: 25rem;
  display: flex;
  margin: auto;
 
`;


export const SIC = styled.circle`
  animation: ${(props) => circlePulse(props.colorOne, props.colorTwo)} infinite
    4s linear;
`;

export const SC = styled.svg`
  margin: auto;
  display: inline-block;
  width: 200px;
  margin: auto;
  display: flex;
`;

