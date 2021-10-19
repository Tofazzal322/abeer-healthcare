import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './MenuBar.css'

const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
      <Navbar collapseOnSelect expand="lg" className="menu-bg"  variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link className="nav-brand text-light" to="/home">Abeer Healthcare</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <HashLink className="nav-items text-light" to="/home#banner">Home</HashLink>
            </Nav.Link>
            <Nav.Link>
              <HashLink className="nav-items text-light" to="/Services">Services</HashLink>
            </Nav.Link>
            <Nav.Link>
              {/* <HashLink className="nav-items" to="/home#doctors"> Doctors </HashLink> */}
              <HashLink className="nav-items text-light" to="/doctors"> Doctors </HashLink>
            </Nav.Link>
            <Nav.Link>
              {/* <HashLink className="nav-items" to="/home#doctors"> Doctors </HashLink> */}
              <HashLink className="nav-items text-light "  to="/signUp"> Sign up </HashLink>
            </Nav.Link>
            
            <Nav.Link>
              {user?.email ? <Button className="nav-items-btn btn btn-dark " onClick={logOut} variant="button">Logout</Button> :
              <Button className=" btn btn-dark"  variant="button "> <Link className="nav-items-btn text-light" to="/login">Login</Link></Button>}
            </Nav.Link>
            <Navbar.Text>
              {/* Signed in as: <a href="#login"> {user?.displayName} </a> */}
              Signed in as :
               <Link className="ps-2" to="/home">{user?.displayName}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default MenuBar;