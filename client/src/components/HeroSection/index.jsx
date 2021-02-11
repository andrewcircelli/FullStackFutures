import React from "react";
import styled, { keyframes } from "styled-components";
import MockupAnimation from "../MockupAnimation";
import WaveBackground from "../WaveBackground";
// import PurchaseButton from "../PurchaseButton";
import ImageContent from "../ImageContent/index";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";
import SideBar from "../SideBar";
import Footer from "../Footer/";

function HeroSection({ setLoginStatus }) {
  return (
    <>
      <Wrapper>
        {/* <ImageContent /> */}
        <WaveBackground />
        <SideBar setLoginStatus={setLoginStatus} />
        <ContentWrapper>
          {/* <MockupAnimation /> */}
          <TextWrapper>
            <Title>
              <Description>YOU DREAM CAREER, OUR GOALS </Description>
            </Title>
            {/* <PurchaseButton title="Welcome!" subtitle="Create An Account" /> */}
            <TextContainer>
              <Text1>
                Just like in our team, being motivated at work is crucial for
                your performance.
                <br />
                This rings especially true when you have a looming deadline, an
                important meeting, or colleagues or customers depending on your
                performance.
              </Text1>
              <br />
              <Text2>
                “It’s a lie to think you’re not good enough. It’s a lie to think
                you’re not worth anything.”
                <br />
                <span> – nick Vujicic </span>
              </Text2>
            </TextContainer>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter:blur(10px);}
  80% { opacity: 0.5; transform: translateY(-10px); filter:blur(10px);}
 100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
  font-family: "Ubuntu", sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 30px;

  @media (max-width: 450px) {
    padding: 150px 20px 250px;
    gap: 60px;
  }
`;

const Description = styled(MediumText)`
  left: 0;
  margin-top: 300px;
  font-size: 55px;
  font-weight: 500;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 0px;
  gap: 30px;
`;

const TextWrapper = styled.div`
  transform: filter(blur(20px));
  max-width: 360px;
  display: grid;
  gap: 30px;
  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;
    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const TextContainer = styled.div`
  position: flex;
  perspective-origin: bottom;
  perspective: 5000;
  box-shadow: 50px 50px 5px -10px rgba(0, 0, 0, 0.181);
  border: 2px solid rgba(255, 255, 255, 0.098);
  background-color: rgba(255, 255, 255, 0.016);
  height: 100%;
  min-width: 900px;
  padding: 0;
  margin: 0;
  transition: all 0.5s ease-in-out;
  div {
    transform-origin: left;
    transition-delay: 0.5s;
  }
  p {
    color: rgb(255, 255, 255);
    text-align: center;
    align-items: center;
  }
  span {
    display: center;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: 40px;
  }
`;
const Text1 = styled.p`
  padding: 20px;
  font-size: 22px;
  letter-spacing: 0px;
  letter-spacing: 0px;
  font-weight: 900;
  opacity: 1;
`;
const Text2 = styled.p`
  font-size: 20px;
  letter-spacing: 0px;
  letter-spacing: 0px;
  font-weight: 200;
  opacity: 1;
  p {
    font-size: 15px;
  }
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #efe8ef 0%, rgb(199, 208, 255) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #efe8ef 0%, rgb(199, 208, 255) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;
