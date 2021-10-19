import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { data } = useData();
    console.log(data.length);
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is service details: {serviceId}</h2>
            
            <Row className="bg-light mt-5 p-3">
              <Col xs={12} md={6}>
                <div className="col-md-5 me-4">
                  <Image
                    className="service-img"
                    src={"item.servicesImg"}
                    alt=""
                  />
                </div>
              </Col>

              <Col className="mb-5" xs={12} md={6}>
                <div className="services-text">
                  <h3 className="mb-3">{"item.title"}</h3>
                  <p>{"item.description"}</p>
                </div>
                <div>
                  {/* <Link to={`/servicedetails/${item.id}`}>
                    <Button className="bookAppointmentBtn" variant="primary">
                      Service Details
                    </Button>
                  </Link> */}
                  <Link to={`/appointment/${"item.id"}`}>
                    <Button className="bookAppointmentBtn mt-3" variant="primary">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
        </div>
    );
};

export default ServiceDetails;