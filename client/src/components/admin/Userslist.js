import React, {  useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { Col,Container,Row ,Button} from "react-bootstrap";


import { getAllUsers,deleteUser } from "../../actions/userAction";


const Userslist = () => {
    const dispatch = useDispatch();
    const Navigate=useNavigate();
    
    const {  users } = useSelector((state) => state.allUsers);
  
 
    const deleteUserHandler = (id) => {
      dispatch(deleteUser(id));
      dispatch(getAllUsers());
    };
     const editUserHandler = async(id) => {
     
      
  console.log('id inedit handlers main',id) 
  Navigate(`/admin/users/${id}`)
      
     
      
    };
  

   
   
  
    useEffect(() => { 
    dispatch(getAllUsers());
    },[dispatch]);
  
    return(<Container>
          <Row style={{ paddingTop: "40px" }} className=" justify-content-center  ">
          <Col md={3} className="sidebar">
              <Link to="/admin/deshboard"> <p>Deshboard</p> </Link> 
              <Link to="/admin/products"><p>All products</p></Link> 
              <Link to="/admin/createproduct"> <p>Create product</p> </Link>
              <Link to="/admin/orders"> <p>Orders</p></Link>
              <Link to="/admin/users"> <p>Users</p></Link>
            </Col>
            <Col md={9}>
                <h3>All Orders</h3>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th>User Id</th>
          <th>Role</th>
          <th>Email</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      { users&&users.map((order) => { return ( <tr>
          <td>{order._id}</td>
          <td>{order.role}</td>
          <td>{order.email}</td>
          <td>{order.name}</td>
          <td>
          <Button
              onClick={
                async() =>{  const id=order._id
                  console.log("id in click",id)      
                 
                await editUserHandler(id)
               
              } }
            > 
            <i style={{fontSize:"24px",paddingRight:"8px"}} class="fa-sharp fa-solid fa-pen-to-square"></i>  
            </Button> 
          
          <Button
              onClick={() =>{
                
                const id=order._id
                console.log("id in click",id)  
                   deleteUserHandler(id)  
              } 
              }
            >
              <i style={{fontSize:"24px"}} class="fa-solid fa-trash"></i>
            </Button> </td>
        </tr>)})}
        
      </tbody>
      </Table>
      </Col>
      </Row>
      
      </Container>
    )
  };
  
  export default Userslist;