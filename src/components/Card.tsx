import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
`;

const Content = styled.div`
  background-color: black;
`;

const Card = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Content></Content>
      <p>{title}</p>
    </Wrapper>
  );
};

export default Card;
