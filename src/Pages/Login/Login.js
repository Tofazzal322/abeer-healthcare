import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, signUpWithPassword } = useAuth()
    
    return (
        <Form  className="container">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  variant="primary" type="submit">
    Submit
  </Button>
  <Button onClick={signInWithGoogle} variant="primary" type="button">
    Sign in with google
  </Button>
</Form>
    );
};

export default Login;