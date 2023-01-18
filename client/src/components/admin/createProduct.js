import React, {   useState } from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {  useDispatch } from "react-redux";
import {  createProduct } from "../../actions/productAction";

const NewProduct = () => {
  
 
  const Navigate=useNavigate();
  const dispatch =useDispatch();
  


  
  //  



 const  [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setbrand] = useState("");
  const [Stock, setStock] = useState(0);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
console.log('file',file)
  const saveFile = (e) => {
    console.log('file srt',e.target.files[0])
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };


  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("brand", brand);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("countinstock", Stock);
    myForm.append("image", file);
    myForm.append("image", `/images/${fileName}` );
    console.log ("data post ",myForm)
    dispatch(createProduct(myForm));
   
  };


  


 
  return (
    <Container>
        <Row style={{margin:"auto"}} className=" justify-content-center Register ">
          <Col md={12} >
            <h3> Create Product</h3>
            

            <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
             
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
            
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              
              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              
              <textarea
                placeholder="Product brand"
                value={brand}
                onChange={(e) => setbrand(e.target.value)}
               
              ></textarea>
            </div>

            <div>
              
              <select onChange={(e) => setCategory(e.target.value)}>
              <option>select category   </option>
                  <option>Electronics   </option>
                  <option>Mobiles   </option>
                  <option>Airpodes   </option> 
                  
              </select>
            </div>

            <div>
            
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="image"
                
                onChange={saveFile}
                multiple
              />
            </div>


            <Button
              id="createProductBtn"
              type="submit"
              
            >
              Create
            </Button>
          </form>
          </Col>
          
        </Row>
      </Container>
  );
};

export default NewProduct;