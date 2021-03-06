import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container className="hide-scrollbar">
      <Carousel {...settings}>
        <div>
          <Content>
            <Info>
              <div>
                <h1>The Falcon and the Winter Soldier</h1>
                <h4>Marvel . Superhero</h4>
                <h4>
                  Following the events of “Avengers: Endgame,” Sam Wilson and
                  Bucky Barnes team up in a global adventure that tests their
                  abilities and their patience.
                </h4>
              </div>
              <div></div>
            </Info>
            <ImageContainer>
              <Image
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h"
                alt=""
              />
            </ImageContainer>
          </Content>
        </div>

        <div>
          <Content>
            <Info>
              <div>
                <h1>The Falcon and the Winter Soldier</h1>
                <h4>Marvel . Superhero</h4>
                <h4>
                  Following the events of “Avengers: Endgame,” Sam Wilson and
                  Bucky Barnes team up in a global adventure that tests their
                  abilities and their patience.
                </h4>
              </div>
              <div></div>
            </Info>
            <ImageContainer>
              <Image
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h"
                alt=""
              />
            </ImageContainer>
          </Content>
        </div>

        <div>
          <Content>
            <Info>
              <div>
                <h1>The Falcon and the Winter Soldier</h1>
                <h4>Marvel . Superhero</h4>
                <h4>
                  Following the events of “Avengers: Endgame,” Sam Wilson and
                  Bucky Barnes team up in a global adventure that tests their
                  abilities and their patience.
                </h4>
              </div>
              <div></div>
            </Info>
            <ImageContainer>
              <Image
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2156/912156-h"
                alt=""
              />
            </ImageContainer>
          </Content>
        </div>
      </Carousel>
    </Container>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  cursor: pointer;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }
  &:hover button {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
  }

  ul li button {
    display: none;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -5vw;
  }

  .slick-next {
    right: -5vw;
  }
`;

const Container = styled.div`
  color: white;
`;

const Content = styled.div`
  display: flex;
  background-color: #090b13;
  justify-content: space-between;
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(0, 0, 0, 0.5);
  border-radius: 5px;
  margin: 0px 15px;
  padding-left: 30px;
  @media (max-width: 1000px) {
    padding: 0px;
    margin: 0px 8px;
    box-shadow: none;
  }
`;
const Info = styled.div`
  flex: 0.39;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    color: #b3b3b3;
    line-height: 1.6;
  }
  @media (max-width: 1000px) {
    flex: 0;
    display: none;
  }
`;

const ImageContainer = styled.div`
  flex: 0.55;
  @media (max-width: 1000px) {
    flex: 1;
  }
`;
const Image = styled.img`
  padding: 0px;
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media (max-width: 1000px) {
    border-radius: 5px;
  }
`;
