import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { createOrder } from "../actions/orderAction";
import "./orderconfirm.css";
import { useNavigate } from "react-router-dom";
import {  useSelector,useDispatch } from "react-redux";


const ConfirmOrder = () => {
  const Navigate = useNavigate();
  const  dispatch=useDispatch()
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { newOrder } = useSelector((state) => state.newOrder);
  
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 20;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  //

  const proceedToPayment = () => {
    const data = {
      subtotal:subtotal,
      shippingCharges: shippingCharges,
      tax:tax,
      totalPrice:totalPrice,
    };

    const order = {
      shippingInfo,
      orderItems: cartItems,
      itemsPrice: subtotal,
      taxPrice: tax,
      shippingPrice: shippingCharges,
      totalPrice: totalPrice,
    };
    localStorage.setItem("orderInfo", JSON.stringify(data));
    dispatch(createOrder(order))
    Navigate("/process/payment");
  };

  return (
    <div className="maindiv">
      <Container>
        <Row
          style={{ margin: "auto" }}
          className=" justify-content-center Register "
        >
          <Col md={10}>
          <h3>Shipping Info</h3>
            <div className="confirmshippingAreaBox">
                <Row>
                    <Col md={12} >
                    <div className="Name" >
                <p style={{fontSize:"16px",fontWeight:"600"}}>Name :</p>
                <span > {user.name}</span>
              </div> 
               </Col>
               <Col md={12} >
              <div className="Phone">
                <p  style={{fontSize:"16px",fontWeight:"600"}}>Phone :</p>
                <span > {shippingInfo.phoneNo}</span>
              </div></Col>
              <Col md={12} >
              <div className="address">
                <p style={{float:"left",fontSize:"16px",fontWeight:"600"}}>Address :</p>
                <span > {address}</span>
              </div></Col>
              </Row>
            </div>

            <div className="confirmCartItems">
            <h3>Your Cart Items:</h3>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img style={{width:"100px"}} src={item.image} alt="Product" />
                    <a href={`/product/${item.product}`} style={{paddingLeft:"10px",fontSize:"16px",fontWeight:"600"}}>
                      {item.name}
                    </a>{" "}
                    <span style={{paddingLeft:"10px",fontSize:"16px",fontWeight:"600"}}>
                      {item.quantity} X ${item.price} ={" "}
                      <b v>${item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        
       {/*  */}
       <div>
          <div className="orderSummary">
            <h3>Order Summery</h3>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>${shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>${tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>${totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ConfirmOrder;
