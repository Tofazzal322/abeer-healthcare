import Button from '@restart/ui/esm/Button';
import React, { useEffect } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import './DoctorsFullProfile.css'

const DoctorsFullProfile = () => {
    const { bookId } = useParams();
    const  {data,setData} = useData();

    // console.log(bookId, data);
    useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [set]);

    return (
      <div>
        <h1 className="doctor-full-header">DOCTORS FULL PROFILE</h1>
        {data
          .filter((newData) => bookId == newData.id)
          .map((doctor) => (
            <Row key={doctor.id}>
              <Col className="mb-5 mt-5">
                <Image src={doctor.photo} alt="" />
              </Col>
              <Col className="doctor-full">
                <h4 className="doctor-full-name">{doctor.name}</h4>
                <h3 className="doctor-full-title">{doctor.doctorsTitle}</h3>
                <h6 className="doctor-consulting">CONSULTING TIME</h6>
                <p className="doctor-consulting-time">
                  {doctor.consultingTime}
                </p>
                <Link to={`/Appointment/${doctor.id}`}>
                  <Button className="doctor-full-btn"> BOOK APPOINTMENT</Button>
                </Link>
                <h6 className="doctor-qualification-title">
                  PROFESSIONAL QUALIFICATION
                </h6>
                <p className="doctor-full-qualification">
                  {doctor.qualification}
                </p>
              </Col>
            </Row>
          ))}
      </div>
    );
};

export default DoctorsFullProfile;