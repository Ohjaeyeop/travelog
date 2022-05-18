import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ref, listAll } from "firebase/storage";
import { storage } from "../firebase";
import Card from "./Card";

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
  const [travelList, setTravelList] = useState<string[]>([]);

  useEffect(() => {
    listAll(ref(storage, "gs://travelog-6afc5.appspot.com")).then((res) => {
      setTravelList(res.prefixes.map((ref) => ref.name));
    });
  }, []);

  const cards = travelList.map((title) => <Card title={title} key={title} />);

  return (
    <MainContainer>
      <Header>
        <Title>Travelog</Title>
      </Header>
      {cards}
    </MainContainer>
  );
};

export default Home;
