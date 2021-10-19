import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import loginImg from "../../Images/Login/doctor-indicate.png";
// import useAuth from '../../hooks/useAuth';

const auth = getAuth();

const SignUp = () => {
  // const { signInWithGoogle, user } = useAuth();
  // const { signUpWithPassword } = useAuth()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  /////////////////////////////////////////////////////////
  const handleEmail = (event) => {
    setEmail(event.target.value);
    
  };

  /////////////////////////////////////////////
  const handlePassword = (event) => {
    setPassword(event.target.value);
    
  };

  const handleUserName = (event) => {
    setName(event.target.value);
    
  };

  ///////////////////////////////////////////////
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
      // event.target.value = "";
    })
      .catch(error => {
      
    })
  };

  //////////////////////////////////////////////////
  return (
    <Row>
      <Col xs={12} md={6}>
        <img src={loginImg} alt="" />
      </Col>
      <Col className=" pt-5 mb-5" xs={12} md={6}>
        <h1 className="login-header"> Please Register</h1>
        <Form className="container login-from">
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onBlur={handleUserName}
              type="text"
              placeholder="Enter Your Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            className="login-btn  btn-outline-info text-light mb-4 mt-2"
            variant="primary"
            onClick={handleRegister}
            type="submit"
          >
            Register
          </Button>

          <br />
          <Button
            className="google-btn mb-4 btn fw-bold w-100 btn-outline-danger"
            variant="primary"
            type="button"
          >
            <span className="mt-5">
              {" "}
              Already have an account? <Link to="/login"> Login </Link>{" "}
            </span>
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;