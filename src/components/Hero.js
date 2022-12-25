import React from "react";
import { HeroStyled, HeroImage, Title, Subtitle } from "./styles/Hero.styled";

export const Hero = () => {
  return (
    <HeroStyled>
      <HeroImage>
        <img
          src="./images/hero-airbnb.webp"
          alt=""
          srcset=""
        />
      </HeroImage>
      <Title>Online Experiences</Title>
      <Subtitle>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </Subtitle>
    </HeroStyled>
  );
};
