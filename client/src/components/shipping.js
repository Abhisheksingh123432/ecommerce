import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../actions/cartAction";
import { Country, State } from "country-state-city";
const Shipping = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
 
  const { shippingInfo } = useSelector((state) => state.cart);
  //console.log("isAuthenticated",isAuthenticated);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPincode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const shippingSubmit = (e) => {
    e.preventDefault();
    
    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    Navigate("/order/confirm");
  };

  return (
    <div className="maindiv">
      <Container>
        <Row
          style={{ margin: "auto" }}
          className=" justify-content-center Register "
        >
          <Col md={10}>
            <h3> shipping details</h3>
            <Form method="POST">
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="text"
                  value={address}
                  placeholder="Enter address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formGroupPassword">
                <Form.Control
                  className=" inputbox"
                  type="text"
                  value={city}
                  placeholder="city"
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </Form.Group>
           
              <Form.Group className="mb-3 " controlId="formGroupPassword">
                <Form.Select
                  className=" inputbox"
                  type="select"
                  value={country}
                  placeholder="country"
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  {" "}
                  <option> select country </option>{" "}
                  {Country &&
                    Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
              {country && (
              <Form.Group className="mb-3 " controlId="formGroupPassword">
                <Form.Select
                  className=" inputbox"
                  type="Select"
                  label="check me out"
                  value={state}
                  placeholder="state"
                  onChange={(e) => setState(e.target.value)}
                  required
                >
                  {" "}
                  <option> select state </option>{" "}
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>)}
              <Form.Group className="mb-3 " controlId="formGroupPassword">
                <Form.Control
                  className=" inputbox"
                  type="number"
                  value={pinCode}
                  placeholder="pincode"
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupPassword">
                <Form.Control
                  className=" inputbox"
                  type="number"
                  value={phoneNo}
                  placeholder="phoneNo"
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2 " controlId="formGroupPassword">
                <Button
                  style={{ color: "white", fontSize: "15px" }}
                  className=" buttonregister"
                  type="button"
                  onClick={shippingSubmit}
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );

}
export default Shipping;
