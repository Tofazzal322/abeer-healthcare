// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
      <div className=" footer-main p-5 fixed">
          <Row >
         
        <Col xs={12} md={4}>
        <div>
          <h4 className="text-light fw-bold mb-3">CONTACT DETAILS</h4>
          <p className="text-light">
            PB No: 719, PC114, Opp. OK Centre, Ruwi, Muscat, Sultanate of Oman
          </p>

          <p className="text-light"> +968 2477 0800</p>
          <p className="text-light">info@abeergroup.om</p>
        </div>
      </Col>
        <Col  xs={12} md={2}>
              <h4 className="text-light fw-bold mb-3">QUICK LINKS</h4>
              <p ><Link className=" text-light footer-link" to="/home"> Home</Link></p>
              <p><Link className="text-light footer-link" to="/about">About Us</Link></p>
              <p ><Link className="footer-link text-light" to="/home"> Abeer Oman</Link></p>
              <span ><Link className=" footer-link text-light" to="/home"> President's Message</Link></span>
      </Col>
        <Col className="mt-5" xs={12} md={2}>  
              <p><Link className="text-light footer-link" to="/mission"> Mission & Vision</Link></p>
              <p><Link className="text-light footer-link" to="/home">Departments</Link></p>
              <p><Link className="text-light footer-link" to="/home"> Facilities</Link></p>
        </Col>
              <Col className="mt-5" xs={12} md={2}>       
              <p><Link className="text-light footer-link" to="/home"> Insurance Partners</Link></p>
              <p><Link className="text-light footer-link" to="/home">Doctors</Link></p>
              <p><Link className="text-light footer-link" to="/home"> Packages</Link></p>
              <span><Link className="text-light footer-link" to="/home"> News</Link></span>
        </Col>
              <Col className="mt-5" xs={12} md={2}>
            <p><Link className="text-light footer-link" to="/home">Health Blog</Link></p>
            <p><Link className="text-light footer-link" to="/home">Career</Link></p>
            <p><Link className="text-light footer-link" to="/contact"> Contact</Link></p>
            <span><Link className="text-light footer-link" to="/home"> Sitemap</Link></span>
        </Col>
     
          </Row>
          <hr className="mt-5" />
          <Row className="mt-3">
              <Col   sx={12} md={6}>
                  <p>© Abeer Medical Group | Designed and developed By <span className="text-warning fw-bold">Programming Hero Student</span> </p>
              </Col>
              <Col sx={12} md={6}>

              </Col>

          </Row>
    </div>
  );
};

export default Footer;
