import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminProduct } from "../../actions/productAction";
import {  getOrderDetails } from "../../actions/orderAction";

import {  useParams } from "react-router-dom";

import { NEW_PRODUCT_RESET } from "../../constants/productConstants";

const NewOrder = () => {
    const { id } = useParams();
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const {  order } = useSelector((state) => state.orderDetails);
  console.log("order",order)
  console.log("order",id)
  const Navigate=useNavigate();
  const dispatch =useDispatch();
  const [product,setProduct]=useState({name:"", description:"", brand : "", category: "",price:"",countinstock:"",});
  let name,value ;
  console.log("user is set",product)
  const handleInputs= (e)=>{


   name= e.target.name;
   value=e.target.value;
   console.log("name is set",name)
   console.log("value is set",value)
   setProduct({ ...product,[name]:value});
  }


  useEffect(() => { 
    dispatch(getOrderDetails(id));
    },[dispatch,id ]);


 
  return (
    <><Container>
    <Row style={{margin:"auto"}} className=" justify-content-center  ">
      
      <Col md={12} style={{textAlign:"center",paddingBottom:"20px"}}><h3> Order </h3></Col>
       
   <Col md={3} className="headingorder"><strong> Order Id </strong>
   
     <p> {order && order._id?order._id:''}</p>
   </Col>  <Col md={3} className="headingorder"><strong> Total Price  </strong>
   
   <p> ${order && order.totalPrice?order.totalPrice:''}</p>

 </Col>
   <Col md={3} className="headingorder"><strong>Order Status </strong>
   
   <p> ${order && order.orderStatus?order.orderStatus:''}</p>
   
 </Col>

 
  
    </Row>
  </Container></>
  );
};

export default NewOrder;