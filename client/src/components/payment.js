import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { createOrder } from "../actions/orderAction";


const Payment = () => {
  const { newOrder } = useSelector((state) => state.newOrder);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);
  const  dispatch=useDispatch()
  
  return (
    <div className="maindiv">
   
    <h1>payment complete</h1>
    </div>
  );
};
export default Payment;