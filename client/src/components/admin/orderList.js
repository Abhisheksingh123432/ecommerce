import React, {  useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { Col,Container,Row ,Button} from "react-bootstrap";

import { deleteOrder, getAllOrders } from "../../actions/orderAction";


const OrderList = () => {
    const dispatch = useDispatch();
    const Navigate=useNavigate();
    
  
    const {  orders } = useSelector((state) => state.allOrders);
   
    
  console.log("oder",orders)
    const deleteOrderHandler = (id) => {
      dispatch(deleteOrder(id));
      dispatch(getAllOrders());
    };
     const editOrderHandler = async(id) => {
     
      
  console.log('id inedit handlers main',id) 
  Navigate(`/admin/order/${id}`)
      
     
      
    };
  
    useEffect(() => { 
    dispatch(getAllOrders());
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
          
          <th>Order Id</th>
          <th>Items</th>
          <th>Total Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      { orders&&orders.map((order) => { return ( <tr>
          <td>{order._id}</td>
          <td>{order.orderItems.length}</td>
          <td>{order.totalPrice}</td>
          <td>{order.orderStatus}</td>
          <td>
          <Button
              onClick={
                async() =>{  const id=order._id
                  console.log("id in click",id)      
                 
                await editOrderHandler(id)
               
              } }
            > 
            <i style={{fontSize:"24px",paddingRight:"8px"}} class="fa-sharp fa-solid fa-pen-to-square"></i>  
            </Button> 
          
          <Button
              onClick={() =>{
                
                const id=order._id
                console.log("id in click",id)  
                   deleteOrderHandler(id)  
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
  
  export default OrderList;