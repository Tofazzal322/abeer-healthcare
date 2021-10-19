import React from 'react';
import { Col, Row } from "react-bootstrap";
// import { Map, GoogleApiWrapper } from "google-maps-react";

// export default GoogleApiWrapper({
//   apiKey: 'TOKEN HERE'
// })(MapContainer);

// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };

const Contact = () => {
  return (
    <div>
      <h1>This is Contact section</h1>

      <Row>
        <h3>Abeer Healthcare</h3>
        <Col>
          <h4>Address</h4>
          <p>
            PO Box 719, PC114, Opp. OK Centre, Ruwi, Muscat, Sultanate of Oman
          </p>
          <h4>For Doctor Appointments & General Enquiries</h4>
          <p>+968 2477 0800 / +968 9099 9335</p>
          <h4>Email</h4>
          <p>info@abeergroup.om</p>
        </Col>
        <Col>
          {/* <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
          /> */}
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