import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from "../../Images/Banner/01.jpg"
import bannerImg2 from "../../Images/Banner/02.jpg"
import bannerImg3 from "../../Images/Banner/04.jpg"

const Banner = () => {
    return (
        <Carousel variant="dark" fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerImg1}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerImg2}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
    src={bannerImg3}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;