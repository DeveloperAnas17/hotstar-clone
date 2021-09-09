import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

function Home() {
  return (
    <HomeContainer>
      <ImgSlider />
      <Viewers />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &:-webkit-scrollbar {
    display: none;
  }

  /* &:after {
    background: url("./assets/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  } */
`;
