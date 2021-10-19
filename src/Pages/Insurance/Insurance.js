import React from "react";
import { Carousel, CarouselItem, Col, Image, Row } from "react-bootstrap";
import insurance1 from "../../Images/insurance/Insurance(1).jpg";
import insurance2 from "../../Images/insurance/Insurance(2).jpg";
import insurance3 from "../../Images/insurance/Insurance(3).jpg";
import insurance4 from "../../Images/insurance/Insurance(4).jpg";
import insurance5 from "../../Images/insurance/Insurance(9).jpg";
import insurance6 from "../../Images/insurance/Insurance(6).jpg";
import insurance7 from "../../Images/insurance/Insurance(7).jpg";
import insurance8 from "../../Images/insurance/Insurance(8).jpg";
import "./Insurance.css";

const Insurance = () => {
  return (
    <div className="mt-5 mb-5">
      <h2 className="insurance-header">INSURANCE PARTNERS</h2>
      <Row className=" mt-5">
        <Col xs={12} md={3}>
          <Image className="h-75 single-col" src={insurance1} alt="" fluid />
        </Col>
        <Col xs={12} md={3}>
          <Image className="h-75 single-col" src={insurance2} alt="" fluid />
        </Col>
        <Col xs={12} md={3}>
          <Image className="h-75 single-col" src={insurance3} alt="" fluid />
        </Col>
        <Col xs={12} md={3}>
          <Image className="h-75 single-col " src={insurance4} alt="" fluid />
        </Col>
      </Row>
      <Row>
        <Carousel>
          <CarouselItem interval={500}>
            <img src={insurance1} alt="" />
          </CarouselItem>
          <CarouselItem interval={500}>
            <img src={insurance2} alt="" />
          </CarouselItem>
          <CarouselItem interval={500}>
            <img src={insurance3} alt="" />
          </CarouselItem>
          <CarouselItem interval={500}>
            <img src={insurance4} alt="" />
          </CarouselItem>
          <CarouselItem interval={500}>
            <img src={insurance5} alt="" />
          </CarouselItem>
          <CarouselItem interval={500}>
            <img src={insurance6} alt="" />
          </CarouselItem>
          <CarouselItem interval={500}>
            <img src={insurance7} alt="" />
          </CarouselItem>
          <CarouselItem interval={500}>
            <img src={insurance8} alt="" />
          </CarouselItem>
        </Carousel>
      </Row>
    </div>
  );
};

export default Insurance;
