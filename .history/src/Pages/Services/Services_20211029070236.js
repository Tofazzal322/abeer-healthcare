import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import Doctors from "../Doctors/Doctors";
import "./Service.css";

const Services = () => {
  const { data } = useData();
  return (
    <div id="Services" className="container mt-2 mb-5">
      <div className="bookAppointmentBtn pb-4">
        <h1>Our Services </h1>
        <h3>We offer multi-specialists healthcare services under one roof</h3>
      </div>
      <div className="mt-5 mb-5 ">
        {data
          ?.filter((item) => "services" === item.categories)
          .map((item) => (
            <Row  id="Services" key={item.id} className="bg-light mt-5 p-3">
              <Col xs={12} md={6}>
                <div className="col-md-5 me-4">
                  <Image
                    className="service-img"
                    src={item.servicesImg}
                    alt=""
                  />
                </div>
              </Col>

              <Col className="mb-5" xs={12} md={6}>
                <div className="services-text">
                  <h3 className="mb-3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <Link to={`/servicedetails/${item.id}`}>
                    <Button className="bookAppointmentBtn" variant="primary">
                      Service Details
                    </Button>
                  </Link>
                  <Link to={`/appointment/${item.id}`}>
                    <Button className="bookAppointmentBtn mt-3" variant="primary">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          ))}
      </div>
      <Doctors></Doctors>
    </div>
  );
};

export default Services;
