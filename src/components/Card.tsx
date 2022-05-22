import React, { useEffect } from "react";
import styled from "styled-components";
import { getStorageData } from "../apis/getStorageData";
import { travelPeriod } from "../data/travelPeriod";

const Wrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const Text = styled.p`
  margin-bottom: 4px;
`;

const Card = ({ title }: { title: string }) => {
  const getPaths = async (title: string) => {
    const result = await getStorageData(title);
    return result.prefixes.map((ref) => `${title}/${ref.name}`);
  };

  useEffect(() => {
    const paths = getPaths(title);
  }, [title]);

  return (
    <Wrapper>
      <img src="https://via.placeholder.com/300.jpg" />
      <Description>
        <Text>{title}</Text>
        <Text>{travelPeriod[title]}</Text>
      </Description>
    </Wrapper>
  );
};

export default Card;
