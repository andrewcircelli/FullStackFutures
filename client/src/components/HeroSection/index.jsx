import React from "react";
import styled, { keyframes } from "styled-components";
import MockupAnimation from "../MockupAnimation";
import WaveBackground from "../WaveBackground";
import PurchaseButton from "../PurchaseButton";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <a href="/profiles/all">Profiles</a>
            <br />
            <a href="/profiles/student">Students</a>
            <br />
            <a href="/profiles/cadet">Cadets</a>
            <br />
            <a href="/profiles/athlete">Athletes</a>
            <br />
            <a href="/details/all">Details</a>
            <br />
          </Title>
          <Description>A Description About the Site Can Go Here</Description>
          {/* Pass in Props */}
          <PurchaseButton title="Welcome!" subtitle="Create An Account" />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  );
}

//NEED TO EXPORT COMPONENT TO USE IN THE WEBSITE
export default HeroSection;

// declaring all the styles
const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter:blur(10px);}
  /* 80% { opacity: 0.5; transform: translateY(-10px); filter:blur(10px);} */
 100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

// YOU CAN CHOOSE WHICH HTML TAG TO ADD A STYLE PROPERTY TO
// TO USE CSS STYLES IN PROPERTY YOU NEED TO USE THE `` BACK TICKS
// OPENING AND CLOSING BACK TICK YOU CAN SET CSS PROPERTY'S
const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid; //set grid display
  gap: 30px; //setting gapping "border-spacing"

  /* only select immediate children, we're using '>' */
  /* set different properties to specific elements, we're using ':nth-child(n)'. */
  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    /* TITTLE */
    :nth-child(1) {
      animation-delay: 0s;
    }
    /* DESCRIPTION */
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    /* BUTTON */
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;
const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;
const Description = styled(MediumText)``;
