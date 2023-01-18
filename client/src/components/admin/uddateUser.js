import React, {  useEffect, useState } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";


import {  useParams } from "react-router-dom";


import { UPDATE_USER_RESET } from "../../constants/userConstants";
import { getUserDetails, updateUser } from "../../actions/userAction";

const UpdateUser = () => { 
    const Navigate=useNavigate();
    const dispatch =useDispatch();
  
    const { isUpdated} = useSelector((state) => state.profile);
    const { id } = useParams();
    const {  user } = useSelector((state) => state.userDetails);
    console.log("id",user );
    useEffect(() => {
    
        dispatch(getUserDetails(id));
       
        
  
      if (isUpdated) {
        
        Navigate("/admin/products");
        dispatch({ type: UPDATE_USER_RESET });
      }
    }, [
      dispatch,
      
      
      Navigate,
      isUpdated,
     id
      
    ]);
   
    

  const [Product,setProduct]=useState({name:user.name, email:user.email, role:user.role});
  let name,value ;
  console.log("user is set" ,Product)

  const handleInputs= (e)=>{


   name= e.target.name;
   value=e.target.value;
   console.log("name is set",name)
   console.log("value is set",value)
   setProduct({ ...Product,[name]:value});
  }

  console.log("value is isUpdated",isUpdated)



 
  return (
    <Container>
        <Row style={{margin:"auto"}} className=" justify-content-center Register ">
          <Col md={12} >
            <h3> Edit User</h3>
            <Form method="POST" enctype="multipart/form-data">
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className="inputbox"
                  type="string"
                  name="name"
                  placeholder="Enter Name"  value={Product.name} onChange={handleInputs}
                  
                />
              </Form.Group>
             
              
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="email"
                  name="email"
                  placeholder="Enter email"  value={Product.email} onChange={handleInputs}
               
                />
              </Form.Group>
            
              
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  as="select"
                  name="role"
                  value={Product.role} onChange={handleInputs}
                  
                >
                   <option>user   </option><option>admin   </option> 
                </Form.Control>
                </Form.Group>
               
             
            
              <Form.Group className="mb-2 " controlId="formGroupPassword">
              <Button style={{color:"white" ,fontSize:"15px"}}
                  className=" buttonregister"
                  type="button"
                  placeholder="submit"
                  onClick={()=> {dispatch(updateUser(id,Product))
                           Navigate(`/admin/users`)}
                }
                  >Update</Button>
              </Form.Group>
            </Form>
          </Col>
          
        </Row>
      </Container>
  );
};

export default UpdateUser;