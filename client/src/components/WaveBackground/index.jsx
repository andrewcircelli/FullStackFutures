import React from "react";
import styled from "styled-components";
import wave1 from "../../static/images/waves/wave1.png";
import wave2 from "../../static/images/waves/hero-wave2.svg";
import wave3 from "../../static/images/waves/hero-wave3.svg";
import wave3dark from "../../static/images/waves/hero-wave3-dark.svg";

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src={wave1} style={{ top: "-0px" }} />
      <Wave src={wave2} style={{ top: "200px" }} />
      <Wave src={wave1} style={{ top: "500px" }} />
      <Wave src={wave2} style={{ top: "300px" }} />
      <BottomWave2 src={wave3} style={{ top: "550px" }} />
      <BottomWave src={wave3} style={{ top: "550px" }} />
      <BottomWave src={wave3} style={{ top: "700px" }} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  transform: filter(brightness(180%) saturate(120%));
  transition: all ease;
`;

const Wave = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
  mix-blend-mode: multiply;
  transform: filter(brightness(880%) saturate(120%));

  @media (min-width: 1440px) {
    width: 100%;
    mix-blend-mode: multiply;
  }
`;
const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url(${wave3dark});
    mix-blend-mode: multiply;
    transform: filter(brightness(180%) saturate(120%));
  }
`;
const BottomWave2 = styled(Wave)`
  @media (prefers-color-scheme: light) {
    content: url(${wave3dark});
    mix-blend-mode: multiply;
  }
`;

const Background = styled.div`
  transform: filter(brightness(180%) saturate(120%));
  position: absolute;
  width: 100%;
  height: 800px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.393) 0%,
    rgb(85, 204, 255) 100%
  );
  z-index: -1;
  opacity: 0.9;
`;
