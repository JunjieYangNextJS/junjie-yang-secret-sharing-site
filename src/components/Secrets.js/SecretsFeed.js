import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "../../axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

export default function SecretsFeed() {
  const [secrets, setSecrets] = useState([]);
  const [flip, setFlip] = useState([]);
  const [hide, setHide] = useState([]);

  // method to fetch 10 random secrets from the database
  async function fetchData() {
    const { data } = await axios.get(apiEndpoint);
    let tenSecrets = [];
    for (let i = 0; i < 10; i++) {
      let newSecret = data[Math.floor(Math.random() * data.length)];
      while (tenSecrets.includes(newSecret)) {
        newSecret = data[Math.floor(Math.random() * data.length)];
      }
      tenSecrets.push(newSecret);
    }
    setSecrets(tenSecrets);
  }

  // fetching 10 secrets on mount
  useEffect(() => {
    fetchData();
  }, []);

  // fetching another 10 secrets after all secrets are removed.
  useEffect(() => {
    if (hide.length !== 10) return;
    setHide([]);
    setFlip([]);
    fetchData();
  }, [hide]);

  // shows the secret and deletes it from the api
  const handleFlip = async (id) => {
    setFlip((flipArray) => [...flipArray, id]);

    await axios.delete(apiEndpoint + "/" + id);

    setTimeout(() => {
      setHide((hide) => [...hide, id]);
    }, 5000);
  };

  return (
    <SecretsContainer>
      <SecretsWrapper>
        {secrets.map(({ body, id }) => (
          <SecretWrapper
            key={id}
            flip={flip}
            hide={hide}
            id={id}
            onClick={flip.includes(id) ? undefined : () => handleFlip(id)}
          >
            <CardHolder>
              <CardBack flip={flip} />
              <CardFront>
                <SecretText>{body}</SecretText>
              </CardFront>
            </CardHolder>
          </SecretWrapper>
        ))}
      </SecretsWrapper>
    </SecretsContainer>
  );
}

const SecretsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px auto;
  max-width: 1300px;
  height: auto;
  /* border: 1px solid white; */
  padding: 50px;
`;

const SecretsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);

  gap: 200px;

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
`;
const SecretWrapper = styled.div`
  display: flex;
  position: relative;
  height: 270px;
  width: 370px;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px #8b0000;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: all 1s cubic-bezier(0.38, 0.02, 0.09, 1.66);
  ${({ flip, id }) =>
    flip.includes(id) &&
    css`
      transform: rotateY(180deg);
      cursor: default;
    `};

  ${({ hide, id }) =>
    hide.includes(id) &&
    css`
      opacity: 0;
    `}

  @media screen and (max-width: 725px) {
    width: 240px;
    height: 290px;
  }
`;
const CardHolder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.6s cubic-bezier(0.38, 0.02, 0.09, 1.66) all;
`;
const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* -webkit-backface-visibility: hidden;
  backface-visibility: hidden; */

  background-color: #630700;
  border-radius: 5px;
`;
const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const SecretText = styled.div`
  padding: 20px;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 1.5;
  text-overflow: ellipsis;
  font-size: 18px;
  @media screen and (max-width: 725px) {
    font-size: 16px;
  }
`;
