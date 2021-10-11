import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SecretsHero from "../components/Secrets.js/SecretsHero";

export default function SecretsPage() {
  return (
    <SecretsContainer>
      <Navbar />
      <SecretsHero />
    </SecretsContainer>
  );
}

const SecretsContainer = styled.div``;
