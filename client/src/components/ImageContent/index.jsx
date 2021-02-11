import React from "react";
import styled from "styled-components";
import Picture1 from "../../static/images/pictures/Picture1.svg";

export default function ImageContent() {
  return (
    <Wrapper>
      <div className="Picture1" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: auto !important;
  perspective-origin: bottom right;
  display: flex;

  .Picture1 {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: url(${Picture1}) no-repeat bottom right;
    opacity: 0.7;
    background-color: none;
    z-index: 0;
    padding: 0;
    margin: 0;
    left: 0;
    overflow: hidden;

    @media (max-width: 2500px) and( max-height:900 ) {
      left: 200px;
      top: 200;
      height: 100vh;
      transform-origin: right;

      @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
        top: 0;
        left: 200px;
        height: 100vh;
        transform-origin: scale(0.8) right;
      }
      @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
        height: 100vh;
        top: 200;
        left: 200px;
        transform: scale(1.2);
        transform: height 100vh;
        transform-origin: scale(0.8) right;
      }

      @media screen and (min-device-width: 1100px) and (max-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 1) {
        height: 100vh;
        top: 130px;
        left: 1660px;
        transform: scale(1.2);
        transform-origin: right;
        display: none;
        height: 100vh;
      }
      @media screen and (min-device-width: 1100px) and (max-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
        height: 100vh;
        top: 130px;
        left: 160px;
        transform: scale(1.2);
        transform-origin: right;
        display: none;
      }
      @media screen and (max-device-width: 1100px) and (max-device-height: 1250px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
        height: 100vh;
        top: 130px;
        left: 0px;
        transform: scale(1.2);
        transform-origin: right;
      }

      @media screen and (min-device-width: 800px) and (max-device-width: 1100px) and (-webkit-min-device-pixel-ratio: 1) {
        height: 100vh;
        top: 0;
        transform: scale(1);
        transform-origin: bottom;
      }
      @media screen and (min-device-width: 800px) and (max-device-width: 1100px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
        height: 100vh;
        top: 0;
        transform: scale(1);
        transform-origin: bottom;
      }

      @media screen and (min-device-width: 650px) and (max-device-width: 800px) and (-webkit-min-device-pixel-ratio: 1) {
        height: 100vh;
        top: 0;
        transform: scale(1);
        transform-origin: bottom;
      }
      @media screen and (min-device-width: 650px) and (max-device-width: 800px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
        height: 100vh;
        top: 0;
        transform: scale(1);
        transform-origin: bottom;
      }
      @media screen and (min-device-width: 400px) and (max-device-width: 650px) and (-webkit-min-device-pixel-ratio: 1) {
        height: 100vh;
        top: 0;
        transform: scale(1);
        transform-origin: bottom;
      }
      @media screen and (min-device-width: 400px) and (max-device-width: 650px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
        height: 100vh;
        top: 0;
        transform: scale(1.5);
        transform-origin: bottom;
      }

      @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
        height: 100vh;
        top: 0;
        transform: scale(1);
      }
      @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
        height: 100vh;
        top: 0;
        transform: scale(1);
      }
      @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
        height: 100vh;
        top: 0;
        transform: scale(1);
      }

      @media (max-device-width: 218px) and (max-device-height: 281px) {
        height: 135px;
        transform: scale(1);
      }
      @media (max-width: 140px), (max-height: 132px) {
        height: 95px;
        transform: scale(1);
      }
      @media (max-width: 90px), (max-height: 122px) {
        height: 80px;
        transform: scale(1);
      }
      @media (max-width: 80px), (max-height: 93px) {
        height: 50px;
        transform: scale(1);
      }
      @media (max-width: 55px), (max-height: 84px) {
        height: 40px;
        transform: scale(1);
      }
      @media (max-width: 50px), (max-height: 69px) {
        height: 30px;
        transform: scale(1);
      }
    }
  }
`;
