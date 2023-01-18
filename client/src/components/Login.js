import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";
import { Container, Row,Col,Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Register.css";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../actions/userAction"
const Login=()=> {
  const Navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  console.log({email,password})
const dispatch =useDispatch();
const  {isAuthenticated,user}=useSelector(state=>state.user)
console.log("isAuthenticated",isAuthenticated);


if(isAuthenticated===true){
 console.log("user in login pge",user)
  localStorage.setItem("token",user.token);
  
  Navigate("/about")
}

    return (
     
        <div className="maindiv">
        <Container>
            <Row style={{margin:"auto"}} className=" justify-content-center Register ">
            
              <Col md={9} >
                <h3> login</h3>
                <Form method="POST">
                 
                  <Form.Group className="mb-3 " controlId="formGroupEmail">
                    <Form.Control
                      className=" inputbox"
                      type="email"
                      value={email} 
                      required
                      placeholder="Enter email"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </Form.Group>
                
                 
                
                  <Form.Group className="mb-3 " controlId="formGroupPassword">
                    <Form.Control
                      className=" inputbox"
                      type="password"
                      required
                      value={password} 
                      placeholder="Password"
                      
                      onChange={(e)=>setPassword(e.target.value)
                        
                     }
                    />
                  </Form.Group>
                  <Form.Group className="mb-2 " controlId="formGroupPassword">
                    <Row><Col md={6}><Button style={{color:"white" ,fontSize:"15px",padding:"7px 10px 7px 10px"}}
                       className=" buttonregister"
                       type="button"
                      
                       onClick={()=>dispatch(login(email,password))}
                    >Submit</Button></Col><Col md={6}> <Link to="/register">  <p>Create account </p></Link></Col></Row>
                  
                   
                  </Form.Group>
                  
                </Form>
                
              </Col>
              
            </Row>
          </Container>
        </div>
      );
}
export default Login;