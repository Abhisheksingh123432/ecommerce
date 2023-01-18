import React, { useState, useEffect } from "react";
import "./home.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Slider from '@mui/material/Slider';

import { addItemsToCart, removeItemsFromCart } from "../actions/cartAction";
import { Link } from "react-router-dom";
import RatingComponent from "../components/rating";
import  Pagination  from "react-js-pagination";
// dataimport

import {getProduct} from "../actions/productAction"
function Product() {
 
const categories=[
    "air","electronics"
  ];
  
  //funtion to get  category data
  


  
  // category only data
const  {products,productsCount,resultPerPage,filteredProductsCount,}=useSelector(state=>state.products)
console.log("products in home",products)
  const dispatch = useDispatch();
  //end redux
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0,100]);
  const [category, setCategory] = useState("");
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event,newPrice) => {
    setPrice(newPrice);
  };  
  const keyword=""
  useEffect(() => {
    dispatch(getProduct(keyword,currentPage,price,category))
  }, [dispatch,keyword,currentPage,price,category]);
  let count =filteredProductsCount
  return (
    <div className="backgrounddivmain">
      <Container>
        <Row>

          
          {/*  search data */}
          <div width="70px" style={{ padding: "20px 0px" }}>
            {" "}
            <input
              type="text"
              placeholder="Search Product"
              onChange={(event) => dispatch(getProduct(event.target.value))}
            />
          </div>
              {/* category filter data */}
           <Col md={3} className="hovercls">
           <h5>price</h5>
            <Slider
            value={price} 
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={100} />
            {/* categories filter */}
            <h5>category</h5>         
              {categories.map((category) => (<div className="hovercls">
               <p  
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </p></div>
              ))}
            
           </Col>
          
          <Col md={9}>
            <Row>
              {products.map((product) => {
                return (
                  <Col md={4} key={`${product._id}`}>
                    {" "}
                    <Card className="my-3 p-3 rounded">
                      <Link to={`/product/${product._id}`}>
                        <Card.Img
                        type="file"
                          src={product.image}
                          alt=""
                          width="70px"
                          height="165px"
                        />
                      </Link>
                      <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                          {" "}
                          <b style={{textDecoration:"none"}}>{product.name}</b>{" "}
                        </Card.Title>
                      </Link>
                      <Card.Text as="div">
                        <RatingComponent
                          value={product.rating}
                          text={`${product.numreviews}reviews`}
                        />
                      </Card.Text>
                      <Card.Text as="div">$ {product.price}</Card.Text>
                      <div style={{ paddingTop: "10px" }}>
                        <Button
                          style={{ fontSize: "12px",marginTop:"5px", marginRight: "4px",padding:"3px 5px 3px 5px" }}
                          onClick={() => dispatch(addItemsToCart(product._id,1))}
                        >
                          Add To Cart
                        </Button>
                        <Button
                          style={{ fontSize: "12px ",marginTop:"5px",padding:"3px 5px 3px 5px" }}
                          onClick={() => dispatch(removeItemsFromCart(product._id))}
                        >
                          Remove from Cart
                        </Button>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            
            {resultPerPage < count && (
           
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
           
          )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
