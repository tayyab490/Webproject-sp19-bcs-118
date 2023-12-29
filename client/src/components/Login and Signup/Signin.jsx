import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDispatch, useSelector} from 'react-redux';
import { postRegister } from "../../Store/asyncMethods/AuthMethods";
import toast, {Toaster} from 'react-hot-toast';
import { Helmet } from "react-helmet";
import './Signin.css';

const Signin = (props) => {  

  const navigate = useNavigate();

  const [state, setState] = useState({
    name:"",email:"",password:""
  });

  const {loading, registerErrors, user} = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const handleInputs = (e) => {
    console.log(e);
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    dispatch(postRegister(state));
    console.log('account created');
  };

useEffect(()=>{
  
  if(registerErrors.length > 0){
    registerErrors.map((error) => toast.error(error.msg));
  }
}, [registerErrors, user])
  return (
    <div className="backPage">
	  <div className="all" mx-auto>
        <Row>
          <Col>
            <div className="bgImage"></div>
          </Col>
          <Col >
            <form method="POST" id="signinform" onSubmit={PostData}>
            <div className="form-group">

              <Toaster 
                  position="top-right"
                  reverseOrder={true}
                  toastOptions={{
                    style: {
                      border: '1px solid black',
                      fontSize:"10px",
                      fontWeight:"bold"
                    }
                  }}
              />
                <label>Name</label>
                <input
                  autoComplete="new-name"
                  type="text"
                  className="form-control"
                  id="NameInput"
                  name="name"
                  aria-describedby="nameHelp"
                  placeholder="Enter Name"

                  value={state.name}
                  onChange={handleInputs}
                  // onChange={(event) => setName(event.target.value)}
                />
                <small id="nameHelp" className="text-danger form-text">
                  {/* {nameError} */}
                </small>
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  autoComplete="new-email"
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"

                  value={state.email}
                onChange={handleInputs}
                  // onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {/* {emailError} */}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  autoComplete="new-password"
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"

                  value={state.password}
                  onChange={handleInputs}
                  // onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {/* {passwordError} */}
                </small>
              </div>
              <Button variant="outline-dark" type="submit" 
              value={loading ? '...' : 'Register'}
              >Submit</Button>
            </form>
          </Col>
        </Row>
	</div>
  </div>
  );
}

export default Signin