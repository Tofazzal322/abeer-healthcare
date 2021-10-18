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
            <Link className="nav-brand" to="/home">Abeer Healthcare</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <HashLink className="nav-items" to="/home#banner">Home</HashLink>
            </Nav.Link>
            <Nav.Link>
              <HashLink className="nav-items" to="/home#services">Services</HashLink>
            </Nav.Link>
            <Nav.Link>
              {/* <HashLink className="nav-items" to="/home#doctors"> Doctors </HashLink> */}
              <HashLink className="nav-items" to="/doctors"> Doctors </HashLink>
            </Nav.Link>
            
            <Nav.Link>
              {user?.email ? <Button onClick={logOut} variant="outline-light">Logout</Button> :
              <Button variant="outline-light"> <Link className="nav-items" to="/login">Login</Link></Button>}
            </Nav.Link>
            <Navbar.Text>
              {/* Signed in as: <a href="#login"> {user?.displayName} </a> */}
              Signed in as :
               <Link className="ps-2" to="/login">{user?.displayName}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default MenuBar;