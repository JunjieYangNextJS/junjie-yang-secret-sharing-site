import React from "react";
import styled from "styled-components";
import { Aiqfome } from "@icons-pack/react-simple-icons";

export default function Navbar() {
  return (
    <NavContainer>
      <LogoWrapper>
        <a href="/">
          <LogoElement />
        </a>
      </LogoWrapper>
      <NavWrapper>
        <NavElement>
          <NavLabel href="/">Home</NavLabel>
        </NavElement>
        <NavElement>
          <NavLabel href="/secrets">Secrets</NavLabel>
        </NavElement>
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;
  height: 90px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 80px;

  :hover {
    background-color: #14041a;
    box-shadow: 0 1px 1px 0 #4e4452;
    height: 120px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 725px) {
    padding: 0 20px;
  }
`;

const LogoWrapper = styled.div`
  display: grid;
  align-content: center;
`;

const LogoElement = styled(Aiqfome)`
  height: 37px;
  width: 37px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    height: 60px;
    width: 60px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
`;

const NavElement = styled.div`
  display: grid;
  align-content: center;
  height: 90px;
  padding: 0 80px;
  font-size: 22px;
  transition: all 0.5s ease-in-out;

  :hover {
    font-size: 50px;
    /* color: #630700; */
    /* padding: 0 74px; */
  }

  @media screen and (max-width: 725px) {
    padding: 0 20px;
  }
`;

const NavLabel = styled.a`
  cursor: pointer;
`;
