import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
// import Doctors from '../Doctors/Doctors';
import "./Service.css";

const Service = () => {
  const { data } = useData();
  return (
    <div className="container mt-5 mb-5">
      <h1 className="mt-5 services-title">SERVICES </h1>
      <p>We offer multi-specialists healthcare services under one roof</p>

      <Row>
        {data.slice(0, 4)?.map((item) => (
          <Col className="mt-5" md={4} lg={3} xs={12}>
            <div className="mb-3">
              <img src={item.icon} alt="" />
            </div>
            <div>
              <h3 className="services-title">{item.title}</h3>
              <p>{item.description.slice(0, 100)}</p>
            </div>
            <div>
              <Link>
                {/* <Link to={`/services/${item.id}`}> */}
                <Link to="/services">
                  <Button
                    cursor="pointer"
                    className=" readMore-btn  "
                    // variant="outline-dark"
                  >
                    Read More
                  </Button>
                </Link>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Service;