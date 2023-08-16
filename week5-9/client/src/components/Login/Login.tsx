import React from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { base_url } from '../../config';


const Login = ({ }): JSX.Element =>
{ 
  const [hasError, setHasError] = useState<boolean>(false);
  const FormHandler = (event: React.FormEvent)=>
  {
    event.preventDefault();
    axios.post("http://172.19.48.1:4000/api/auth/login", {
      username: 'Abdulsalam3',
      lastName: 'Muhsin'
    }).then((res) =>
    {
      console.log(res.data)
    }).catch((err) =>
    {
      console.log(err);
     })
    
  }
   
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
       <React.Fragment>
            <div className="misc-wrapper pt-5">
                <div className="misc-content">
                    <Container>
                    <Row className="justify-content-center">
                        <Col sm="12" md="5" lg="4"  className="col-4">
                        <div className="misc-header text-center">
                          {/* <Link to="/">
                            <Image alt="" src="/assets/img/icon.png" className="logo-icon margin-r-10" /> 
                             <Image alt="" src="/assets/img/logo-dark.png" className="toggle-none hidden-xs" /> 
                          </Link> */}
                        </div>
                        <div className="misc-box">   
                            <Form onSubmit={(event)=>{FormHandler(event)}}>
                            <Form.Group>                                      
                                <label htmlFor="exampleuser1">Username</label>
                                <div className="group-icon">
                                <input id="exampleuser1" type="text" placeholder="Username" className="form-control" />
                                <span className="icon-user text-muted icon-input" />
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <div className="group-icon">
                                <input id="exampleInputPassword1" type="password" placeholder="Password" className="form-control" />
                                <span className="icon-lock text-muted icon-input" />
                                </div>
                            </Form.Group>
                            <div className="clearfix">
                                <div className="float-left">
                                <div className="checkbox checkbox-primary margin-r-5">
                                    <input id="checkbox2" type="checkbox" defaultChecked />
                                    <label htmlFor="checkbox2"> Remember Me </label>
                                </div>
                                </div>
                                <div className="float-right">
                                <input type="submit" className="btn btn-block btn-primary btn-rounded box-shadow" value="Login" />
                                </div>
                            </div>
                            <hr />
                            <p className="text-center">Need to Signup?</p>
                            {/* <Link to={`/auth/register`} className="btn btn-block btn-success btn-rounded box-shadow">Register Now</Link> */}
                            
                            </Form>
                        </div>
                        
                        </Col>
                    </Row>
                    </Container>
                </div>
            </div>

       </React.Fragment>
    );
  }


export default Login;