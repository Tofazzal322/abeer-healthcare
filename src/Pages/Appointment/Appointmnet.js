import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import useData from "../../hooks/useData";
import loginImg from "../../Images/Login/LeftDoc.jpg";
import "./Appointment.css";

const Appointment = () => {
  // const { data } = useData([]);
  const [data, setData] = useState([]);
  const { bookId } = useParams();

  // console.log(data);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="px-3">
      <Row className="mt-5">
        <Col xs={12} md={6}>
          <img className="" src={loginImg} alt="" />
        </Col>
        <Col className=" appointment-from px-3 mb-5" xs={12} md={6}>
          <h3 className="appointment-header">  MAKE AN APPOINTMENT</h3>
          <p> Schedule your appointment with a specialist</p>
          {data
            ?.filter((item) => bookId == item.id)
            .map((newItem) => (
              <Form className="container login-from" key={newItem.id}>
                <Image className="w-25" src={newItem.photo} alt="" thumbnail/>
                <Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Location*</Form.Label>
                    <Form.Control type="text" placeholder={newItem.location} />
                  </Form.Group>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Specialty*</Form.Label>
                      <Form.Control type="text" placeholder={ newItem.doctorsTitle}/>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Doctor*</Form.Label>
                      <Form.Control type="text" placeholder={newItem.name} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Appointment Date*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Appointment Date"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Requested Time*</Form.Label>
                      <Form.Control type="text" placeholder="Time" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Salutation*</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Name:*</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender:*</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Nationality*</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Mobile*</Form.Label>
                      <Form.Control type="text" placeholder="Mobile no" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Email:*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row></Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Link to="/home">
                  <Button
                    className="request-btn btn-outline-info text-light mb-4 mt-2"
                    variant="primary"
                    type="submit"
                  >
                    REQUEST APPOINTMENT
                  </Button>
                </Link>

                <Button
                  className="reset-btn mb-4 fw-bold  "
                  variant="primary"
                  type="button"
                >
                  RESET
                </Button>
              </Form>
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default Appointment;
