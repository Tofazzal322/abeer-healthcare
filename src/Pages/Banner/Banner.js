import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from "../../Images/Banner/01.jpg"
import bannerImg2 from "../../Images/Banner/02.jpg"
import bannerImg3 from "../../Images/Banner/04.jpg"

const Banner = () => {
    return (
      <Carousel variant="dark" fade>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;