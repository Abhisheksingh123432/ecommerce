import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateProduct,getProductDetails } from "../../actions/productAction";

import {  useParams } from "react-router-dom";


import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";

const UpdateProduct = () => {
    const { id } = useParams();
    const { error, product } = useSelector((state) => state.productDetails);
    console.log("id",product );
    const {
        loading,
        error: updateError,
        isUpdated,
      } = useSelector((state) => state.product);
    
  const Navigate=useNavigate();
  const dispatch =useDispatch();
  const [Product,setProduct]=useState({name:product.name, description:product.description, brand : product.brand, category: product.category,price:product.price,countinstock:product.countinstock,});
  let name,value ;
  console.log("user is set",Product)
  const handleInputs= (e)=>{


   name= e.target.name;
   value=e.target.value;
   console.log("name is set",name)
   console.log("value is set",value)
   setProduct({ ...Product,[name]:value});
  }

  console.log("value is isUpdated",isUpdated)
  useEffect(() => {
    
      dispatch(getProductDetails(id));
   

    

    if (isUpdated) {
      
      Navigate("/admin/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    dispatch,
    alert,
    
    Navigate,
    isUpdated,
   id
    
  ]);


 
  return (
    <Container>
        <Row style={{margin:"auto"}} className=" justify-content-center Register ">
          <Col md={12} >
            <h3> Edit Product</h3>
            <Form method="POST" enctype="multipart/form-data">
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className="inputbox"
                  type="string"
                  name="name"
                  placeholder="Enter Name"  value={Product.name} onChange={handleInputs}
                  
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className="inputbox"
                  type="file"
                  name="image"
                  placeholder="Enter image"  value={Product.image} onChange={handleInputs}
                  
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="string"
                  name="description"
                  placeholder="Enter description"  value={Product.description} onChange={handleInputs}
               
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="string"
                  name="brand"
                  placeholder="Enter brand"  value={Product.brand} onChange={handleInputs}
               
                />
              </Form.Group>
             
            
              
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="string"
                  name="category"
                  value={Product.category} onChange={handleInputs}
                  placeholder="category"  
                />
                </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="number"
                  name="price"
                  value={Product.price} onChange={handleInputs}
                  placeholder="price"   
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Control
                  className=" inputbox"
                  type="number"
                  name="countinstock"
                  value={Product.countinstock} onChange={handleInputs}
                  placeholder="stock"   
                />
              </Form.Group>
              
              
              <Form.Group className="mb-2 " controlId="formGroupPassword">
              <Button style={{color:"white" ,fontSize:"15px"}}
                  className=" buttonregister"
                  type="button"
                  placeholder="submit"
                  onClick={()=> {dispatch(updateProduct(id,Product))
                           Navigate(`/admin/products`)}
                }
                  >Update</Button>
              </Form.Group>
            </Form>
          </Col>
          
        </Row>
      </Container>
  );
};

export default UpdateProduct;