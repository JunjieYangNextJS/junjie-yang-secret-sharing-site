import React from "react";
import styled from "styled-components";
import SecretsFeed from "./SecretsFeed";

export default function SecretsHero() {
  return (
    <SecretBody>
      <SecretHeading>Unravel the Darkest Secrets</SecretHeading>
      <SecretsFeed />
    </SecretBody>
  );
}

const SecretBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SecretHeading = styled.h1`
  font-size: 40px;

  @media screen and (max-width: 725px) {
    font-size: 26px;
  }
`;
