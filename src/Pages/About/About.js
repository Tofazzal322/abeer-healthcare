import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            {/* <h1>This is About section</h1> */}

            <Row >
                <Col>
                    <img src="https://www.abeergroup.om/images/background/Abeer.jpg" alt="" />
                </Col>
                <Col className="about-col mt-5">
                    <span className="flaticon-nature-4"></span>
                    <h2 className="about-title mt-4">ABOUT ABEER MEDICAL GROUP</h2>
                    <p className="about-paragraph mt-4 pe-5">Abeer Medical Group is a healthcare organization owning and operating high-end medical centers and hospitals across major cities in Saudi Arabia and in other nations such as UAE, Oman, Kuwait and India. Ever since a modest but an impressive inception in the year 1999, Abeer, with innovative explorations has been in the forefront of Saudi Arabia’s healthcare domain. A relentless striving for service excellence and an all-important focus on quality perfection often drives us with new vigor and vitality. This enthusiasm is Abeer’s motive power to ensure premium care-giving with dedication, drive and touch.</p>
                    <p className="about-paragraph pe-5" >In this very short span of time, we have been fortunate running 15 healthcare facilities in the Kingdom which include high-end medical centers and hospitals. We cater to the healthcare needs of more than 3 million people every year. “Finest healthcare in best affordability” has always been our slogan. It is undeniably the warm reception by the various populaces, particularly the native and expatriate communities in Saudi Arabia that transfigured Abeer as their favorite healthcare destination. The chain of Abeer’s Pharmacies, Optical and Health & Wellness Centers also is turning out as their prime preference.</p>
                    <p className="about-paragraph  pe-5">Abeer’s paramount objective is to achieve the status of the globally trusted caregiver by refining and redefining our healthcare interventions.</p>
                </Col>
            </Row>
        </div>
    );
};

export default About;