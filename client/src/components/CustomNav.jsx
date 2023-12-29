import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import {LOGOUT} from "../Store/types/UserTypes";


const CustomNav = () => {

  const {user} = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem('myToken');
    dispatch({type: LOGOUT});
  }
  const Links = user ?
  <div style={{display:"flex"}}>
    <b style={{padding:"10px"}}>Welcome!{user.name}</b>
  <Button onClick={logout} href="/logout" variant="danger" style={{width:"100px", marginLeft:"20px"}}>Logout</Button>
  </div>
  : 
  <div style={{display:"flex"}}>
    <Button href="/login" variant="outline-secondary" style={{marginRight:"15px", marginLeft:"20px", width:"100px"}}>Login</Button>
    <Button href="/signin" variant="outline-secondary" style={{width:"100px"}}>Signin</Button>
  </div>;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{borderBottom:"1px solid black"}}>
        <Container>
              <Navbar.Brand>
                  <Nav.Link to="/">Doctors<b>Online</b></Nav.Link>
              </Navbar.Brand>


          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{margin:"0px", width:"60px"}}/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{width:"100%", fontWeight:"normal"}}>
              <Nav.Link href='/' exact >Home</Nav.Link>
              <Nav.Link href='/doctors'>Doctors</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>
              <Nav.Link href="/mission">Mission</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>     
            {Links}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNav