import React, { useState, useEffect } from "react";
import "./home.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Slider from "@mui/material/Slider";

import { addItemsToCart, removeItemsFromCart } from "../actions/cartAction";
import { Link } from "react-router-dom";
import RatingComponent from "../components/rating";
import Pagination from "react-js-pagination";
// dataimport

import { getProduct } from "../actions/productAction";
function Home() {
  const categories = ["air", "electronics"];

  //funtion to get  category data

  // category only data
  const { products, productsCount, resultPerPage, filteredProductsCount } =
    useSelector((state) => state.products);
  console.log("products in home", products);
  const dispatch = useDispatch();
  //end redux
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100]);
  const [category, setCategory] = useState("");
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const keyword = "";
  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, keyword, currentPage, price, category]);
  let count = filteredProductsCount;
  return (
    <>
      <section className="mainbanner">
        <Container>
          <Row className="justify-content-center">
            <Col className="internaldiv">
            <h5>Welcome To Ecommerce</h5>
            <h1><b>FIND AMAZING PRODUCTS BELOW</b></h1>
             </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div className="backgrounddivmain">
          <Container>
            <Row className="justify-content-center">
              <Col md={12}>
                <Row className="justify-content-center">
                  <h3 >Featured products</h3>
                  <div style={{textAlign:"center" }}><div className="underline" style={{marginBottom:"20px"}}></div></div>
                  

                  {products.map((product) => {
                    return (
                      <Col md={3} key={`${product._id}`}>
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
                              <b style={{ textDecoration: "none" }}>
                                {product.name}
                              </b>{" "}
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
                              style={{
                                fontSize: "12px",
                                marginTop: "5px",
                                marginRight: "4px",
                                padding: "3px 5px 3px 5px",
                              }}
                              onClick={() =>
                                dispatch(addItemsToCart(product._id, 1))
                              }
                            >
                              Add To Cart
                            </Button>
                            <Button
                              style={{
                                fontSize: "12px ",
                                marginTop: "5px",
                                padding: "3px 5px 3px 5px",
                              }}
                              onClick={() =>
                                dispatch(removeItemsFromCart(product._id))
                              }
                            >
                              Remove from Cart
                            </Button>
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>

                
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Home;
