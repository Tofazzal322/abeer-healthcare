import React from 'react';
import { Col, Row } from "react-bootstrap";
// import { Map, GoogleApiWrapper } from "google-maps-react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Contact.css'

const containerStyle = {
  width: '650px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Contact = () => {
  return (
    <div>
      <h1>This is Contact section</h1>

      <Row className="contact-section">
        <h3>Abeer Healthcare</h3>
        <Col className="mt-3">
          <h4 className="text-left mb-3">Address</h4>
          <p>
            PO Box 719, PC114, Opp. OK Centre, Ruwi, Muscat, Sultanate of Oman
          </p>
          <h4>For Doctor Appointments & General Enquiries</h4>
          <p>+968 2477 0800 / +968 9099 9335</p>
          <h4>Email</h4>
          <p>info@abeergroup.om</p>
        </Col>
              <Col className="mb-5">
                  <h2>My Location</h2>
          <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
        </Col>
      </Row>

      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Contact;