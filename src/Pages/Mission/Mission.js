import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  faAmericanSignLanguageInterpreting,
} from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import "./Mission.css";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="m-5 p-5 bg-light rounded ">
      <h2 className="mission-header"> Our Mission & Vision</h2>
      <Row>
        <Col xs={12} md={4}>
          <span>
            <FontAwesomeIcon
              className="fontAwesome-icon"
              icon={faAmericanSignLanguageInterpreting}
              size="6x"
            />
          </span>
          <h4 className="mission-title">OUR MISSION</h4>
          <p className="mission-paragraph">
            {" "}
            To refine and redefine healthcare standards through consistent
            quality enhancement endeavors...
          </p>
          <Link to="/services">
            <button className="readMore-btn">Read More</button>
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <span>
            <FontAwesomeIcon
              className="fontAwesome-icon"
              icon={faPagelines}
              size="6x"
            />
          </span>
          <h4 className="mission-title">OUR VISION</h4>
          <p className="mission-paragraph">
            {" "}
            To achieve global preference in healthcare through our distinctive
            services based on excellence..
          </p>
          <Link to="/services">
            <button className="readMore-btn">Read More</button>
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <span>
            <FontAwesomeIcon
              className="fontAwesome-icon"
              icon={faHandshake}
              size="6x"
            />
          </span>
          <h4 className="mission-title">OUR VALUE</h4>
          <p className="mission-paragraph">
            {" "}
            Excellence, Diversity, Integrity, Compassion, Teamwork, Social
            Commitment..
          </p>
          <Link to="/services">
            <button className="readMore-btn">Read More</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Mission;
