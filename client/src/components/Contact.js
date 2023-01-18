
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import {FaPhoneAlt,FaMailBulk,FaSearchLocation} from 'react-icons/fa';
import "./contact.css";
function Contact() {
  return (
    <div className="maindivcontact">
      <Container>
        <Row className=" justify-content-center mt-1 mb-5  ">
        <Col md={3} className=" contactbox  ">
        <div className="icondiv" >
        <FaPhoneAlt className="iconm"/>
         </div>
        
        <div className="contentdivc" >
        <h4>phone</h4>
        <p>+123654789</p>
        </div>
       
         </Col>
         <Col md={3} className=" contactbox  ">
        <div className="icondiv" >
        <FaMailBulk className="iconm"/>
         </div>
        
        <div className="contentdivc" >
        <h4>email</h4>
        <p>abhi@gmail</p>
        </div>
       
         </Col>
         <Col md={3} className=" contactbox  ">
        <div className="icondiv" >
        <FaSearchLocation className="iconm"/>
         </div>
        
        <div className="contentdivc" >
        <h4>location</h4>
        <p>ambala,hr,india</p>
        </div>
       
         </Col>
           </Row>
        <Row className=" justify-content-center contactmain ">
          <Col >
            <h3>get in touch </h3>
            <Form>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className="contactinputbox"
                  type="string"
                  placeholder="Enter Name"
                  width="33%"
                />
            
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" contactinputbox"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" contactinputbox"
                  type="number"
                  placeholder="Enter number"
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" contactinputbox"
                  type="string"
                  placeholder="message"
                  rows={5}
                  as="textarea"
                />
              </Form.Group>
           
              
              <Form.Group className="mb-2 " controlId="formGroupPassword">
              <Form.Control
                  className=" buttoncontact"
                  type="submit"
                  placeholder="submit"
                  
                />
              </Form.Group>
            </Form>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default Contact;