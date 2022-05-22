import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { getStorageData } from "../apis/getStorageData";

const MainContainer = styled.div`
  background-color: #212021;
  height: 100vh;
  position: relative;
  padding: 30px;
`;

const Header = styled.header`
  overflow: hidden;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  float: left;
  color: lightgray;
  font-weight: bold;
  font-size: 3em;
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const [travelList, setTravelList] = useState<string[]>([]);

  useEffect(() => {
    getStorageData().then((res) => {
      setTravelList(res.prefixes.map((ref) => ref.name));
    });
  }, []);

  return (
    <MainContainer>
      <Header>
        <Title>Travelog</Title>
      </Header>
      <CardList>
        {travelList.map((title) => (
          <Card title={title} key={title} />
        ))}
      </CardList>
    </MainContainer>
  );
};

export default Home;
