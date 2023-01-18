import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
//import imageregister from "../images/Register.jpg";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import {register} from "../actions/userAction"
import { Link } from "react-router-dom";
const Register = () => {
  const Navigate=useNavigate();
  const dispatch =useDispatch();
  const [user,setUser]=useState({name:"", email:"", password : "", role: ""});
  let name,value ;
  console.log("user is set",user)
  const handleInputs= (e)=>{
   name= e.target.name;
   value=e.target.value;
   console.log("name is set",name)
   console.log("value is set",value)
   setUser({ ...user,[name]:value});
  }
  
  const  {isAuthenticated}=useSelector(state=>state.user)
  console.log("isAuthenticated",isAuthenticated);
  
  
  if(isAuthenticated===true){
    Navigate("/about")
  }
 
  return (
    <div className="maindiv">
      <Container>
        <Row style={{margin:"auto"}} className=" justify-content-center Register ">
          <Col md={6} >
            <h3> sign up</h3>
            <Form method="POST">
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className="inputbox"
                  type="string"
                  name="name"
                  placeholder="Enter Name"  value={user.name} onChange={handleInputs}
                  
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="email"
                  name="email"
                  placeholder="Enter email"  value={user.email} onChange={handleInputs}
               
                />
              </Form.Group>
             
            
              
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="password"
                  name="password"
                  value={user.password} onChange={handleInputs}
                  placeholder="Password"  
                />
                </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="string"
                  name="role"
                  value={user.role} onChange={handleInputs}
                  placeholder="role"   
                />
              </Form.Group>
              
              
              <Form.Group className="mb-2 " controlId="formGroupPassword">
              <Button style={{color:"white" ,fontSize:"15px"}}
                  className=" buttonregister"
                  type="button"
                  placeholder="submit"
                  onClick={()=>dispatch(register(user))   
                  
                  }
                  >Submit</Button>
              </Form.Group>
            </Form>
          </Col>
          <Col md={6} className='imagediv'>
        
          
          <Link to="/login"><p> I am already register</p> </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Register;
