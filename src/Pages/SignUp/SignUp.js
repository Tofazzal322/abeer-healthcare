import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import useAuth from '../../hooks/useAuth';


const auth = getAuth();

const SignUp = () => {
    // const { signUpWithPassword } = useAuth()
     const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

  /////////////////////////////////////////////////////////  
    const handleEmail = (event) => {
    setEmail(event.target.value)
    }


   ///////////////////////////////////////////// 
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    ///////////////////////////////////////////////
    const handleRegister = (event) => {
        event.preventDefault();
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user= result.user
            console.log(user);
        })
        
    }

//////////////////////////////////////////////////
    return (
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={handleRegister} variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
};

export default SignUp;