import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { getStorageData } from "../apis/getStorageData";
import { getDownloadURL, ref } from "firebase/storage";
import { travelPeriod } from "../data/travelPeriod";
import { storage } from "../firebase";

const Wrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const Text = styled.p`
  margin-bottom: 4px;
`;

const Card = ({ title }: { title: string }) => {
  const [imageUrl, setImageUrl] = useState("");

  const getPaths = async (title: string) => {
    const result = await getStorageData(title);
    return result.prefixes.map((ref) => `${title}/${ref.name}`);
  };

  const handleOnClick = () => {};

  const handleImgError = (e: ChangeEvent<HTMLImageElement>) => {
    e.target.src = "img/loading.gif";
  };

  useEffect(() => {
    getPaths(title).then((paths) => {
      const randomIndex = Math.floor(Math.random() * paths.length);
      getStorageData(paths[randomIndex]).then((res) => {
        const randomImageIndex = Math.floor(Math.random() * res.items.length);
        getDownloadURL(
          ref(
            storage,
            `gs://travelog-6afc5.appspot.com/${res.items[randomImageIndex].fullPath}`
          )
        ).then((url) => {
          console.log(url);
          setImageUrl(url);
        });
      });
    });
  }, [title]);

  return (
    <Wrapper onClick={handleOnClick}>
      <img src={imageUrl} width={300} height={300} onError={handleImgError} />
      <Description>
        <Text>{title}</Text>
        <Text>{travelPeriod[title]}</Text>
      </Description>
    </Wrapper>
  );
};

export default Card;
