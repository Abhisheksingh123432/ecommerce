import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
 
import {CChart} from "@coreui/react-chartjs"

import { Form } from "react-bootstrap";

import {
  
   getAdminProduct,
 } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction";
function Deshboard() {
   const dispatch = useDispatch();
  
    
  
   const {  products } = useSelector((state) => state.products);
 
   const {  orders } = useSelector((state) => state.allOrders);
 
   console.log(products)
   let totalAmount = 0;
   orders &&
     orders.forEach((item) => {
       totalAmount += item.totalPrice;
     });
   useEffect(() => {
    
 
    dispatch(getAllOrders());
 
     dispatch(getAdminProduct());
   }, [dispatch]);

  
    
  return (
    <div className="maindivdeshboard">
      <Container>
        <Form method="GET">
          <Row style={{ margin: "auto" }} className=" justify-content-center  ">
            <Col md={3} className="sidebar">
              <Link to="/admin/deshboard"> <p>Deshboard</p> </Link> 
              <Link to="/admin/products"><p>All products</p></Link> 
              <Link to="/admin/createproduct"> <p>Create product</p> </Link>
              <Link to="/admin/orders"> <p>Orders</p></Link>
              <Link to="/admin/users"> <p>Users</p></Link>
            </Col>
            <Col md={9} className="content">
              <h3>Deshboard</h3>
              <div className="totalPrice">
                <strong> Products</strong>
                <p>  ${totalAmount} </p></div>
             <Row className=" justify-content-center  " style={{ paddingTop: "20px" }} >
             <Col md={3}> 
                <div className="totaldata">
                <h5> Products</h5>
                  <p> {products.length}</p> 
                </div></Col>
                <Col md={3}>   <div className="totaldata">
                  <h5> Orders</h5>
                  <p>  {orders&&orders.length}</p> 
                </div></Col>
                <Col md={3}>  <div className="totaldata">
                  <h5> Users</h5>
                  <p> 30</p>
                </div> </Col > 
                </Row>
           <Row> <Col style={{ paddingTop: "40px" }} >
<CChart
  type="line" 
  data={{
    labels: ["january", "february"],
    datasets: [
      {
        label: "Total Amount",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [0, totalAmount]
      }
    ],
  }}
 />
 </Col></Row>

       
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Deshboard;
