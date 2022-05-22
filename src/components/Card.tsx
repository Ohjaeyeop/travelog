import React, { useEffect } from "react";
import styled from "styled-components";
import { listAll, ref } from "firebase/storage";
import { storage } from "../firebase";
import { getStorageData } from "../apis/getStorageData";

const Wrapper = styled.div`
  background-color: white;
`;

const Content = styled.div`
  background-color: black;
`;

const Card = ({ title }: { title: string }) => {
  useEffect(() => {
    getStorageData(title).then((res) => {
      res.prefixes.forEach((a) => console.log(a.name));
    });
  }, [title]);

  return (
    <Wrapper>
      <Content></Content>
      <p>{title}</p>
    </Wrapper>
  );
};

export default Card;
