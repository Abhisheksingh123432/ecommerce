
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col  } from "react-bootstrap";
import {  useSelector } from "react-redux";
import "./about.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {  Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../actions/userAction";
import store from "../store/dommystore";
function About() {
  
  const Navigate = useNavigate();
  let  {isAuthenticated,user}=useSelector(state=>state.user)
  console.log("isAuthenticated",isAuthenticated)
  console.log("user in about us page",user)
  const tokenl= localStorage.getItem("token");
 
  useEffect(()=>{ 
    store.dispatch(loadUser())
  },[])
 if(tokenl!==null){


  return (
    <div className="maindivabout">
      <Container>
      <Form method="GET">
        <Row style={{margin:"auto"}} className=" justify-content-center aboutme ">
          <Col md={4} >
          
          </Col>
          <Col md={6} className='imagedivabout'>
          {user && user.name?console.log( "there user",user.name):''}
             <h4> {user && user.name?user.name:''}</h4>
            <h5>developer</h5>
            <p> Rankings: <span>1/10</span></p>
            <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 tabsmain"
    >
      <Tab eventKey="profile" title="About" className="tabscls">
       <Row>
       <Col md={6}>
        <label> Userid</label><br></br>
        <label> Name</label><br></br>
        <label> Email</label><br></br>
        
        </Col>
        <Col md={6}>  
        <p> {user && user._id?user._id:''}</p>
        <p> {user && user.name?user.name:''} </p>
   
        <p> {user && user.email?user.email:''}</p>
        </Col>
       </Row>
      </Tab>
      <Tab eventKey="home" title="Timeline" className="tabscls">
      <Row>
        <Col md={6}>
        <label> Experience</label><br></br>
        <label> Hourly Rate</label><br></br>
        <label> Total Projcts</label><br></br>
        <label> English Level</label><br></br>
        </Col>
        <Col md={6}>  
        <p> 2 Years</p>
        <p> 10$</p>
        <p>40</p>
        <p> 4/5</p>
        </Col>
       </Row>
      </Tab>
     
    </Tabs>
          </Col>
          <Col md={2} className='imagedivaboutbutton'>
         
          
        <button type="button">Edit</button>
       </Col>
        </Row>
        </Form>
      </Container>
    </div>
  );
}else{
  Navigate("/login")
}
}


export default About;