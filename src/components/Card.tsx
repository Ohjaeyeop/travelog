import React, { useEffect } from "react";
import styled from "styled-components";
import { getStorageData } from "../apis/getStorageData";

const Wrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  margin: 20px 0 10px 0;
  text-align: left;
`;

const Card = ({ title }: { title: string }) => {
  useEffect(() => {
    getStorageData(title).then((res) => {
      res.prefixes.forEach((a) => console.log(a.name));
    });
  }, [title]);

  return (
    <Wrapper>
      <img src="https://via.placeholder.com/300.jpg" />
      <Description>
        <p>{title}</p>
      </Description>
    </Wrapper>
  );
};

export default Card;
