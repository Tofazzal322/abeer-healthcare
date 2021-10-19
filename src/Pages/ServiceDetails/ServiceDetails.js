import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import useData from '../../hooks/useData';
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const [data, setData] = useState([]);
  // const [data] = useData([]);
  console.log(data);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // useEffect(() => {
  //     fetch('/data.json')
  //         .then(res => res.json())
  //         .then(data => setData(data))
  // }, []);

  return (
    <div>
      <h2>Service Details</h2>

      {data
        ?.filter((item) => serviceId == item.id)
        .map((newItem) => (
          <Row className="bg-light mt-5 mb-5 p-3">
            <Col xs={12} md={6}>
              <div className="col-md-5 me-4">
                <Image
                  className="service-img"
                  src={newItem.servicesImg}
                  alt=""
                />
              </div>
            </Col>

            <Col className="mb-5" xs={12} md={6}>
              <div className="services-text">
                <h3 className="mb-3">{newItem.title}</h3>
                <h4> Service Id: {newItem.id}</h4>
                <p>{newItem.description}</p>
              </div>
              <div>
                <Link to={`/appointment/${"item.id"}`}>
                  <Button className="bookAppointmentBtn mt-3" variant="primary">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default ServiceDetails;