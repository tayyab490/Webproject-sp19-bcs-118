import React from 'react'
import Button from 'react-bootstrap/Button'
import {NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import './Hero.css'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  return (
    <div className="Background" style={{padding:"0px"}}>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="top-text header-text">
                <h6>Categories with Simple Tabs</h6>
                <h2>We have a wide range of business categories for you</h2>
                  <div className='SigninLogin'>
                    <Button variant="dark"><Nav.Link as={NavLink} to='/signin' style={{textDecoration:"none"}}>Signup</Nav.Link></Button>
                    <Button variant="light"><Nav.Link as={NavLink} to='/login' style={{textDecoration:"none"}}>Login</Nav.Link></Button>
                  </div>   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero