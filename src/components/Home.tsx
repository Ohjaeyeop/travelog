import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #404e4b;
`;

const Home = () => {
  return (
    <MainContainer>
      <header>
        <h1>Travelog</h1>
      </header>
    </MainContainer>
  );
};

export default Home;
