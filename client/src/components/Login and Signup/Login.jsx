import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import toast, {Toaster} from 'react-hot-toast';
import {postLogin} from "../../Store/asyncMethods/AuthMethods"

import './Login.css'

const Login = () => {
  const {loading, loginErrors, user} = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const handleInputs = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(()=>{
  
    if(loginErrors.length > 0){
      loginErrors.map((error) => toast.error(error.msg));
    }
  }, [loginErrors, user])


  const userLogin = async (e) => {
    e.preventDefault();
    dispatch(postLogin(state));
  }


  return (
    <div className="backPage">
	  <div className="all" mx-auto>
        <Row>
          <Col>
            <div className="bgImage"></div>
          </Col>
          <Col >
            <form method="POST" id="signinform" onSubmit={userLogin}>
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
              value={loading ? "..." : 'Login'}
              >LOGIN</Button>
            </form>
          </Col>
        </Row>
	</div>
  </div>
  );
}

export default Login