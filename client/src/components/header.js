import React, { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import {useSelector} from 'react-redux'
import {  Form } from "react-bootstrap";
import {  Link, useNavigate } from "react-router-dom";
export const Navigation=()=> {
  const { cartItems } = useSelector((state) => state.cart);
  const Navigate = useNavigate();
  const token= localStorage.getItem("token");
 
console.log("")
 
  useEffect(()=>{
   
  },[5000])


if(token===null){
  return(
    <>
      
      
      <Form method="GET">
     
    
     
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/home"><h1>E-Comm</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
        <Nav >
       <Nav.Link as={Link}to="/home">Home</Nav.Link>
       <Nav.Link as={Link}to="/product">Product</Nav.Link>
          <Nav.Link as={Link}to="/about">Aboutme</Nav.Link>
          <Nav.Link as={Link}to="/contact">contact</Nav.Link>
          
          <Nav.Link as={Link}to="/register"> Register</Nav.Link>
          <Nav.Link as={Link}to="/login">Login</Nav.Link>
          
          <Nav.Link as={Link}to="/cart">  <span style={{color:"white" ,fontSize:"14px",position:"relative",top:"-15px",left:"16px",backgroundColor:"black",padding:"3px 4px",borderRadius:"9px" }}> {cartItems.length}</span>
          <i style={{fontSize:"24px"}} className="fa-sharp fa-solid fa-cart-shopping"></i></Nav.Link>
        </Nav>
       
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </Form>
    </>)}else{
       return(
        <>
          
          
          <Form method="GET">
          
        
         
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/home"><h1>E-Comm</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
            <Nav >
              <Nav.Link as={Link}to="/home">Home</Nav.Link>
              <Nav.Link as={Link}to="/about">Aboutme</Nav.Link>
              <Nav.Link as={Link}to="/product">Product</Nav.Link>
              <Nav.Link as={Link}to="/contact">contact</Nav.Link> 
              <Nav.Link as={Link}to="/admin/deshboard">Admin</Nav.Link>           
              <Nav.Link href="/logout">Logout</Nav.Link>
              <Nav.Link as={Link}to="/cart">  <span style={{color:"white" ,fontSize:"14px",position:"relative",top:"-15px",left:"16px",backgroundColor:"black",padding:"3px 4px",borderRadius:"9px" }}> {cartItems.length}</span><i style={{fontSize:"24px"}} className="fa-sharp fa-solid fa-cart-shopping"></i></Nav.Link>
            </Nav> 
           
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Form>
        </>)
    }
    





}
export default Navigation;

