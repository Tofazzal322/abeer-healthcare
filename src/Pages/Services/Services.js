// import Button from "@restart/ui/esm/Button";
import React from "react";
import {  Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import Doctors from "../Doctors/Doctors";
import './Service.css'

const Services = () => {
  const { data } = useData();
  return (
    <div className="container mt-2 mb-5">
      <div className="bookAppointmentBtn pb-4"><h1 >Our Services </h1>
      <h3>We offer multi-specialists healthcare services under one roof</h3></div>
      <Row className="mt-5 mb-5 ">
        {data?.filter(item=>"services"===item.categories).map((item) => (
                <div className="d-flex mt-5">
                     <div className="col-md-5 me-4">
                    <img className="w-100 " src={item.servicesImg} alt="" />
                </div>
                <div className="services-text">
                    <h3 className="mb-3">{item.title}</h3>
                    <p>{item.description}</p>
                </div>
                {/* <div>
                    <Link>
                        <Link to={`/service/${item.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
                    </Link>
                </div> */}
               </div>
            /* <Card className="">
              <Card.Img className="service-icon" variant="top" src={item.icon} />
              <Card.Body className="bg-info">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description.slice(0, 50)}</Card.Text>
                <Link to={`/service/${item.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card> */

        ))}
          </Row>
          <Doctors></Doctors>
    </div>
  );
};

export default Services;
