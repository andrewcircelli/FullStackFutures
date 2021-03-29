import React from "react";
import styled from "styled-components";
import { CircleAnimation } from "../SVG";
import GetAuthenticated from "../GetAuthenticated";
// import logo from "../assets/logo.svg";

const Sidebar = ({ setLoginStatus }) => {
  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <CircleAnimation />
          <h3>
            K-12 <br />
            <span>Full Stack Futures</span>
          </h3>
        </LogoWrapper>
        <GetAuthenticated setLoginStatus={setLoginStatus} />
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20%;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  position: absolute;
  height: 95vh;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  z-index: 1000;
`;

const Container = styled.div`
  min-width: 400px;
  box-shadow: 50px 20px 20px -5px rgba(0, 0, 0, 0.181);
  background-color: rgba(255, 255, 255, 0.044);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
`;

const LogoWrapper = styled.div`
  padding: 0;
  margin: 0;
  top: 0;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
  h3 {
    color: #6d83f2;
    text-align: center;
    font-size: 50px;
    letter-spacing: 5px;
    font-weight: 900;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  span {
    color: #6d83f2;
    font-weight: 500;
    font-size: 40px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 20px;
  color: #6d83f2;
  font-weight: 300;
  letter-spacing: 4px;
`;

export default Sidebar;
