import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../../../static/data/menuData";
import MenuButton from "../../MenuButton";
import MenuTooltip from "../../MenuTooltip";
import hamburger from "../../../static/images/icons/hamburger.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();
  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
    console.log(event);
  }
  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      console.log("Document is clicked");
      setIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <LinkWrapper>
        <Link to="/"></Link>
      </LinkWrapper>
      <NavBarWrapper>
        <MenuWrapper count={menuData.length} ref={ref}>
          {menuData.map((item, index) =>
            item.link === "/tool-tip" ? (
              <MenuButton
                key={index}
                item={item}
                onClick={(event) => handleClick(event)}
              />
            ) : (
              <MenuButton item={item} key={index} />
            )
          )}
          <HamburgerWrapper>
            <MenuButton
              item={{
                title: "",
                icon: hamburger,
                link: "/",
              }}
              onClick={(event) => handleClick(event)}
            />
          </HamburgerWrapper>
        </MenuWrapper>

        <div ref={tooltipRef}>
          <MenuTooltip isOpen={isOpen} />
        </div>
      </NavBarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  top: 0;
  padding: 30px;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: flex-end;
  display: flex;
  position: fixed;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.8s ease-in-out;
  z-index: 1000;
  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const LinkWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  position: fixed;
  display: grid;
`;
const NavBarWrapper = styled.div`
  transition: all ease-in-out;
  /* :hover div{
  color: #e980e9;
}
 :hover {
    transform: scale(2);
  } */
`;
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  margin-top: 20px;

  grid-template-columns: repeat(${(props) => props.count}, auto);
  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;
const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
