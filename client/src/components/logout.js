import React, { useEffect,useState } from "react";
import {  Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {Navigation} from "../components/header";
const Logout=()=> {
   
    const Navigate = useNavigate();
  const logoutcall= async()=>{
    try {
   
 
   localStorage.clear();//this clears the localStorage completely
   Navigate("/login")
   
   
  
    } catch (error) { console.log(error);
       Navigate("/login")
      console.log("there is error in logout")
    }

  }
  useEffect(()=>{
    logoutcall();
  },[])
return (
    <>
     <Form method="GET"> {console.log("success in logout data navigation") }{Navigation()}
       {console.log("success in logout data processing")}  </Form>
    </>
  

)
}
export default Logout;

