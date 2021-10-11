import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import axios from "../../axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

export default function Hero() {
  const [mySecret, setMySecret] = useState("");

  const handleSecretSubmit = (e) => {
    e.preventDefault();

    const sendSecret = async () => {
      const obj = { body: mySecret };
      await axios.post(apiEndpoint, obj);
    };

    const resetSecret = async () => {
      setMySecret("");
    };

    const submitActions = [sendSecret, resetSecret];

    for (const action of submitActions) {
      action();
    }
  };

  return (
    <HeroBody>
      <HeroIntro>
        <HeroTitle>Welcome to Secret Share</HeroTitle>
        <HeroContent>
          Secret Share is a platform where you can feel safe to share your
          darkest little secrets that you cannot share with anyone you know
          while needing to pour them out. Every secret will be viewed only by
          one person for only 5 seconds, then it will be forever gone. Feel safe
          and tell one of your little secrets!{" "}
        </HeroContent>
      </HeroIntro>
      <SecretForm>
        <SecretTextarea
          type="text"
          value={mySecret}
          onChange={(e) => setMySecret(e.target.value)}
          placeholder="your darkest secret?"
          maxLength="100"
        />
        <SecretSubmit onClick={(e) => handleSecretSubmit(e)}>Tell</SecretSubmit>
      </SecretForm>
    </HeroBody>
  );
}

const HeroBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 180px;
`;

const HeroIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 40px;

  @media screen and (max-width: 725px) {
    margin-top: -130px;
    font-size: 26px;
  }
`;

const HeroContent = styled.div`
  font-size: 17px;
  padding: 0 50px;
  line-height: 1.4;

  @media screen and (max-width: 725px) {
    margin-top: 30px;
    font-size: 16px;
  }
`;

const SecretForm = styled.form`
  display: flex;
  justify-content: flex-start;
  margin-top: 40px;
`;

const SecretTextarea = styled(TextareaAutosize)`
  border: none;
  outline: none;
  height: 45px;
  max-width: 500px;
  font-size: 16px;
  padding: 4px 5px 6px;
`;

const SecretSubmit = styled.button`
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
