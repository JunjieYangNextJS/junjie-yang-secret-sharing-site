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
          <NavLabel href="/rules">Rules</NavLabel>
        </NavElement>
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  height: 90px;
  transition: all 0.3s ease-in-out;

  /* :hover { */
  background-color: #14041a;
  box-shadow: 0 1px 1px 0 #4e4452;
  /* } */
`;

const LogoWrapper = styled.div`
  display: grid;
  align-content: center;
`;

const LogoElement = styled(Aiqfome)`
  height: 37px;
  width: 37px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    height: 42px;
    width: 42px;
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
  transition: all 0.2s ease-in-out;

  :hover {
    font-size: 26px;
    /* box-shadow: 0 0 5px 1px #4e4452; */
    padding: 0 75px;
  }
`;

const NavLabel = styled.a`
  cursor: pointer;
`;
