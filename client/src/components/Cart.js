import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,

  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addItemsToCart, removeItemsFromCart } from "../actions/cartAction";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const qytcartdata = cartItems;
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity++ + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };
  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity-- - 1;
    if (0 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };


  console.log(
    "data in qytcartdata",
    qytcartdata && qytcartdata.qty ? qytcartdata.qty : ""
  );

  const checkout = () => {
    console.log("data in checkout");
    const tokenl = localStorage.getItem("token");
    if(tokenl!==null){
    Navigate("/shipping")
  }else{
    Navigate("/login")
  }
  }

  
  return (
    <div className="maindiv">
      <Container>
        <Row className="  ">
        <Link to="/home"> 
            <button type="button">Go Home</button>
            </Link> 
          <h1 style={{ textAlign: "center" }}>cart</h1>
          <Col md={8}>
          
              {cartItems.length===0 ? <h3>no items in cart</h3>:
              <Row>{cartItems.map((product, index) => {
                console.warn("index", index);

                return (
                  <Col md={5} key={product.product}>
                    {" "}
                    <Card className="my-3 p-3 rounded">
                      <Link to={`/product/${product.product}`}>
                        <Card.Img
                          src={product.image}
                          alt=""
                          width="70px"
                          height="165px"
                        />
                      </Link>
                      <Link to={`/product/${product.product}`}>
                        <Card.Title as="div">
                          {" "}
                          <strong>{product.name}</strong>{" "}
                        </Card.Title>
                      </Link>
                      <Card.Text as="div"></Card.Text>
                      <Card.Text as="div">$ {product.price}</Card.Text>
                      <ListGroupItem>
                        <Row>
                          <Button
                            onClick={() =>
                              decreaseQuantity(
                                product.product,
                                product.quantity
                              )
                            }
                            style={{
                              borderRadius: "0px",
                              width: "10%",
                              float: "left",
                            }}
                          >
                            -
                          </Button>
                          <input
                            type="Number"
                            value={product.quantity}
                            readOnly
                            style={{
                              borderRadius: "0px",
                              width: "30%",
                              float: "center",
                            }}
                          ></input>
                          <Button
                            style={{
                              borderRadius: "0px",
                              width: "10%",
                              float: "right",
                            }}
                            onClick={() =>
                              increaseQuantity(
                                product.product,
                                product.quantity,
                                product.stock
                              )
                            }
                          >
                            +
                          </Button>
                          <h5>
                            Total price : {product.price * product.quantity}
                          </h5>
                        </Row>
                      </ListGroupItem>
                      <div>
                        <button
                          onClick={() =>
                            dispatch(removeItemsFromCart(product.product))
                          }
                        >
                          Remove from Cart
                        </button>
                      </div>
                    </Card>
                  </Col>
                );
              })}</Row>}
              
          </Col>
          <Col md={4} classname="pricedetails">
            {" "}
            <Card className="my-3 p-3 ">
              <ListGroup variant="flush">
                
                <ListGroupItem>
                  {" "}
                  <div>
                    <span>Total Price:</span>{" "}
                    <span>${cartItems.reduce(
                      (acc,item)=>acc+ item.price *item.quantity ,0
                    )}</span>
                  </div>
                </ListGroupItem>
                <Button
                  style={{ borderRadius: "0px" }}
                  className="btn-block"
                  type="button"
                  onClick={checkout}
                >
                  Procced to Checkout
                </Button>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cart;
