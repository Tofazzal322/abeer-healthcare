import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import loginImg from "../../Images/Login/doctor-indicate.png";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle, signInWithPassword } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <Row>
      <Col xs={12} md={6}>
        <img src={loginImg} alt="" />
      </Col>
      <Col className=" pt-5 mb-5" xs={12} md={6}>
        <h1 className="login-header"> Please Login</h1>
        <Form className="container login-from">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            <div className="forget-pass">
              {" "}
              Forget password? <Link to="/signUp"> </Link>{" "}
            </div>
          </Form.Group>
          <Button
            className="login-btn  btn-outline-warning text-light mb-4 mt-2"
            variant="primary"
            type="submit"
            onClick={signInWithPassword}
          >
            Login
          </Button>
          <br />
          <Button
            className="google-btn mb-4 btn fw-bold w-100 btn-outline-danger"
            onClick={handleGoogleLogin}
            variant="primary"
            type="button"
          >
            Sign in with google
          </Button>
          <span className="mt-5">
            {" "}
            Not a member? <Link to="/signUp"> Sign Up</Link>{" "}
          </span>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;