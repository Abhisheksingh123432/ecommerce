import React from "react";
import {useSelector} from 'react-redux'
function Footer() {
  const result = useSelector((state)=>state.cartData);
  console.warn("data in header", result);
  return (
    <div className="header" style={{background:"black",color:"white" ,paddingTop:"10px",height:"60px",textAlign:"center"}}>
  <h3>Footer</h3>
</div>
  );
}

export default Footer;