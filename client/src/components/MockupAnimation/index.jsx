import React from "react";
import styled from "styled-components";
// import mockup1 from "../../static/images/animations/mockup1.svg";
// import mockup2 from "../../static/images/animations/mockup2.svg";
import mockup3 from "../../static/images/animations/mockup3.svg";
import mockup4 from "../../static/images/animations/mockup4.svg";
import mockup5 from "../../static/images/animations/mockup5.svg";

export default function MockupAnimation() {
  return (
    <Wrapper>
      {/* <div className="mockup1" /> */}
      {/* <div className="mockup2" /> */}
      <div className="mockup3" />
      <div className="mockup4" />
      <div className="mockup5" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  perspective-origin: bottom;
  perspective: 5000;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.4);
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg) translate(100px, 200px);

    transform-origin: left;
    transition-delay: 0.5s;
  }
  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover div {
    &.mockup3 {
      transform: translate(-100px, 100px);
      transition-delay: 0.2s; 
    }
    &.mockup4 {
      transform: translate(500px, 150px) rotateX(0deg) rotateY(200deg);
      transition-delay: 0.1s;
    }
    &.mockup5 {
      transform: translate(-340px, -200px) rotateX(0deg) rotateY(200deg);
      transition-delay: 0.2s;
    }
    :hover {
      filter: brightness(130%) saturate(120%);
    }
  
  }

  .mockup3 {
    position: absolute;
    width: 701px;
    height: 428px;
    left: 0px;
    top: 500px;
    background: url(${mockup3}), rgba(255, 255, 255, 0.2);
    border: 0.342305px solid rgba(255, 255, 255, 0.2);
    border-radius: 6.8461px;
  }

  .mockup4 {
    position: absolute;
    width: 399px;
    height: 274px;
    right: 0px;
    top: 680px;
    background: url(${mockup4}), rgba(39, 28, 53, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 14px;
  }

  .mockup5 {
    position: absolute;
    width: 412px;
    height: 274px;
    left: 400px;
    top: 700px;
    background: url(${mockup5}), rgba(39, 20, 62, 0.2);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 14px;
  }
`;
