import React from "react";
import styled from "styled-components";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <HomeContainer>
      <Navbar />
      <Hero />
    </HomeContainer>
  );
}

export default Homepage;

const HomeContainer = styled.div``;
