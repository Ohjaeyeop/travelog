import React, { useEffect } from "react";
import styled from "styled-components";
import countryCodes from "../data/countryCodes";

const MainContainer = styled.div`
  background-color: #212021;
  height: 100vh;
  position: relative;
  padding: 30px;
`;

const Header = styled.header`
  overflow: hidden;
`;

const Title = styled.h1`
  float: left;
  color: lightgray;
  font-weight: bold;
  font-size: 3em;
`;

const Home = () => {
  return (
    <MainContainer>
      <Header>
        <Title>Travelog</Title>
      </Header>
    </MainContainer>
  );
};

export default Home;
