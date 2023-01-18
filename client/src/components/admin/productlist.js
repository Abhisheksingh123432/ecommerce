import React, {  useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import {
  
  getAdminProduct,
  deleteProduct
} from "../../actions/productAction";
import { Link } from "react-router-dom";
import { Col,Container,Row ,Button} from "react-bootstrap";



const ProductList = () => {
    const dispatch = useDispatch();
    const Navigate=useNavigate();
    
  
    const {  products } = useSelector((state) => state.products);
    
  
    const deleteProductHandler = (id) => {
      dispatch(deleteProduct(id));
      dispatch(getAdminProduct());
    };
     const editProductHandler = async(id) => {
     
      
  console.log('id inedit handlers main',id) 
  Navigate(`/admin/product/${id}`)
      
     
      
    };
  
    useEffect(() => { 


    dispatch(getAdminProduct());
    },[dispatch]);
  
    return(<Container>
         <Row style={{ paddingTop: "40px" }} className=" justify-content-center  ">
         <Col md={3} className="sidebar">
              <Link to="/admin/deshboard"> <p>Deshboard</p> </Link> 
              <Link to="/admin/products"><p>All products</p></Link> 
              <Link to="/admin/createproduct"> <p>Create product</p> </Link>
              <Link to="/admin/orders"> <p>Orders</p></Link>
              <Link to="/admin/users"> <p>Users</p></Link>
            </Col>
            <Col md={9}>
                <h3>All Products</h3>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th>Product Id</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {products.map((product) => { return ( <tr>
          <td>{product._id}</td>
          <td>{product.name}</td>
          <td>{product.countinstock}</td>
          <td>{product.price}</td>
          <td>
          <Button
              onClick={
                async() =>{  const id=product._id
                  console.log("id in click",id)      
                 if(id===product._id)
                { console.log('id in edit handlers',id) 
                await editProductHandler(id)
               }else{ await editProductHandler()}
               
              } }
            > 
            <i style={{fontSize:"24px",paddingRight:"8px"}} class="fa-sharp fa-solid fa-pen-to-square"></i>  
            </Button> 
          
          <Button
              onClick={() =>{
                
                const id=product._id
                console.log("id in click",id)  
                   deleteProductHandler(id)  
              } 
              }
            >
              <i style={{fontSize:"24px"}} class="fa-solid fa-trash"></i>
            </Button> </td>
        </tr>)})}
        
      </tbody>
      </Table>
      </Col>
      </Row>
      </Container>
    )
  };
  
  export default ProductList;