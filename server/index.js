const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer= require("multer");
const app = express();
require("./config/config");
require('colors');
const path=require("path");
const routes=require("./routes/ProductRoute")
const userRoutes=require("./routes/userRoutes")
const Order =require("./routes/orderRoutes")
dotenv.config();
const Middleware =require("./middleware/middleware") ;
const cookieParser= require("cookie-parser")
const middlewaref= require("./middleware/auth")
// muter to save iamge


app.use(express.json());

const storage = multer.diskStorage({
  destination:"../client/public/images",
  filename: function(req, file, cb) {
    cb(null, file.originalname + '-' + Date.now() );
  }

}); 
const upload=multer({storage:storage}); 

//cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);     

//routes are here
app.get("/homesearch",  routes.searchproduct);
app.get("/category/:key",  routes.searchproductcat);
app.get("/home", routes.searchproduct);
app.get("/product/:id",routes.Singleproduct );
app.post("/login",userRoutes.loginUser );
app.get("/logout",userRoutes.logout ) 
app.post("/register",userRoutes.registerUser );
app.get("/about",middlewaref.isAuthenticatedUser,userRoutes.getUserDetails )
app.post("/createproduct",routes.CreateProduct ); 
app.put("/admin/product/:id",routes.updateProduct ); 
app.delete("/admin/product/:id",routes.deleteProduct );  
app.post("/oderroute",middlewaref.isAuthenticatedUser,Order.newOrder );
app.get("/orders/me",middlewaref.isAuthenticatedUser,Order.myOrders );
app.get("/admin/order/:id",middlewaref.isAuthenticatedUser,Order.getSingleOrder );
app.get("/admin/orders",middlewaref.isAuthenticatedUser,middlewaref.authorizeRoles("admin"),Order.getAllOrders );
app.put("/admin/order/:id",middlewaref.isAuthenticatedUser,middlewaref.authorizeRoles("admin"),Order.updateOrder );
app.delete("/admin/order/:id",middlewaref.isAuthenticatedUser,Order.deleteOrder );
app.get("/admin/products",middlewaref.isAuthenticatedUser,routes.adminproduct );
app.post("/admin/product/new", upload.single('image'),middlewaref.isAuthenticatedUser,routes.CreateProduct );
app.get("/admin/users",middlewaref.isAuthenticatedUser,userRoutes.getAllUser ); 
app.delete("/admin/user/:id",middlewaref.isAuthenticatedUser,userRoutes.deleteUser ); 
app.put("/admin/user/:id",middlewaref.isAuthenticatedUser,userRoutes.updateUserRole ); 
app.get("/admin/user/:id",middlewaref.isAuthenticatedUser,userRoutes.getSingleUser );
app.listen(5000 ,()=>{ console.log(process.env.CONNECT)})    

    