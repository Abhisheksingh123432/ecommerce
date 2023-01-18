import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
} from "react-bootstrap";
import { addToCart } from "../actions/dommyaction";
import { useDispatch, useSelector } from "react-redux";
import RatingComponent from "../components/rating";
import { getProductDetails } from "../actions/productAction";
import { addItemsToCart } from "../actions/cartAction";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("params id ",id)
  const [quantity, setQty] = useState(1);

  const {product,loading,error} = useSelector((state) => state.productDetails);
  
  
  const Product = product;
 
  

  const countstock =
    Product && Product.countinstock ? Product.countinstock : "";
  const addToCartHandler =()=>{
    dispatch(addItemsToCart(id,quantity))
    console.log("item add to carts")
  }
  //product jsx code started
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch,id]);
  return (
    <Container>
      <Link to={"/home"} className="btn btn-light">
        {" "}
        <i className="fas fa-arrow-left "></i> &nbsp;Go Back{" "}
      </Link>
      <Row>
        <Col md={6}>
          {" "}
          <Image
            src={Product && Product.image ? Product.image : ""}
            alt=""
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{Product && Product.name ? Product.name : ""}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <RatingComponent
                value={Product && Product.rating ? Product.rating : ""}
                text={`${
                  Product && Product.numreviews ? Product.numreviews : ""
                } reviews`}
              >
                {Product && Product.name ? Product.name : ""}
              </RatingComponent>
            </ListGroupItem>
            <ListGroupItem>
              price : ${Product && Product.price ? Product.price : ""}
            </ListGroupItem>
            <ListGroupItem>
              discription :{" "}
              {Product && Product.description ? Product.description : ""}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <ListGroupItem>
                  {" "}
                  <Col>
                    {" "}
                    <p>
                      status :{countstock > 0 ? <span style={{color:"green",fontWeight:"600"}}>  In Stock</span> :<span style={{color:"red",fontWeight:"600"}}>  Out of Stock</span>  }{" "}
                    </p>
                  </Col>{" "}
                </ListGroupItem>
                {countstock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Qyt </Col>
                      <Form.Control
                        as="select"
                        value={quantity}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(countstock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Row>
                  </ListGroupItem>
                )}
                <ListGroupItem>
                  {" "}
                  <Col key={`${Product && Product._id ? Product._id : ""}`}>
                    <Button
                      className="btn-block"
                      type="button"
                      onClick={addToCartHandler}
                    >
                      add to cart
                    </Button>
                  </Col>{" "}
                </ListGroupItem>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
