import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import "./Doctors.css";

const Doctors = () => {
  const { data } = useData();
  return (
    <div className="container mb-5">
      <h1 className="bookAppointmentBtn pb-4">OUR SPECIALISTS</h1>
      <Row>
        {data
          .filter((doctor) => "doctors" === doctor.categories)
          .map((doctor) => (
            <Col className="mt-5" md={4} lg={3} xs={12}>
              <Card>
                <Card.Img
                  className="doctor-img"
                  variant="top"
                  src={doctor.photo}
                />
                <Card.Body className="doctor-cart-bg">
                  <Card.Title>{doctor.name}</Card.Title>
                  <Card.Text>{doctor.doctorsTitle}</Card.Text>
                  <Card.Text>{doctor.qualification}</Card.Text>
                  <Link to={`/services/${doctor.id}`}>
                    <Button className="bookAppointmentBtn" variant="primary">View Full Profile</Button>
                  </Link>
                  <Link to={`/Appointment/${doctor.id}`}>
                    <Button className="bookAppointmentBtn mt-3" variant="primary">Book Appointment</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Doctors;
