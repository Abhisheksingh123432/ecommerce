import "bootstrap/dist/css/bootstrap.min.css";

import React ,{useEffect} from "react";
import { Container, Row,Col } from "react-bootstrap";

import "./Register.css";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {myOrders} from "../actions/orderAction"
const MyOrder=()=> {
  const Navigate = useNavigate();
 
 
const dispatch =useDispatch();


useEffect(() => {
   
    dispatch(myOrders());
  }, [dispatch]);
  const  {  orders } = useSelector((state) => state.myOrders);
const { user } = useSelector((state) => state.user);
console.log("orders",orders)
const rows = [];

  orders &&
    orders.forEach((item, index) => {
     console.log("foreach",item._id)
    });
    console.log("orders rows",rows.id)
    return (
     
        <div className="maindiv">
        <Container>
            <Row style={{margin:"auto"}} className=" justify-content-center  ">
              
              <Col md={12} style={{textAlign:"center",paddingBottom:"20px"}}><h3>{user.name}`s order</h3></Col>
               
           <Col md={3} className="headingorder"><strong> Total Products </strong>
           {orders &&
            orders.map((product) => {
        return ( <p>{ product.orderItems.length}</p>)})} 
           </Col>
         
           <Col md={3}  className="headingorder"> <strong>Total Amount</strong>    {orders &&
            orders.map((product) => {
        return ( <p>${ product.totalPrice}</p>)})} 
           </Col>      
           <Col md={3}  className="headingorder"><strong> Status </strong>
           {orders &&
            orders.map((product) => {
        return ( <p>{ product.orderStatus}</p>)})} 
        </Col>
           <Col md={3}  className="headingorder"> <strong>order ids</strong>

           {orders &&
            orders.map((product) => {
        return ( <p>{ product._id}</p>)})}
   
    </Col>
            </Row>
          </Container>
        </div>
      );
}
export default MyOrder;