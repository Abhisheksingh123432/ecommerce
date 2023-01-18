import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/header";
import Footer from "./components/footer";
import Home from "./screens/home";
import About from "./components/Aboutme";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/logout";
import MyOrder from "./components/myOrder";
import Cart from "./components/Cart";
import Shipping from "./components/shipping";
import ConfirmOrder from "./components/orderconfirm";
import ProductDetails from "./screens/productdetail";
import Payment from "./components/payment";
import store from "./store/dommystore"
import { Provider } from "react-redux";
import TestScreen from"./App";
import "./bootstrap.min.css";
import Deshboard from "./components/admin/deshboard";
import NewProduct from "./components/admin/createProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import Productlist from "./components/admin/productlist";
import OrderList from "./components/admin/orderList"; 
import NewOrder from "./components/admin/processOrder";
import Users from "./components/admin/Userslist";
import UpdateUser from "./components/admin/uddateUser";
import Product from "./screens/product";
ReactDOM.render(
  <Provider store={store}> 
  <Router>
  
    <Navigation />
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/home" element={< Home/>} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/test" element={<TestScreen />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/order/confirm" element={<ConfirmOrder />} />
      <Route path="/orders/me" element={<MyOrder />} />
      <Route path="/process/payment" element={<Payment />} />ProductList
      <Route path="/admin/deshboard" element={<Deshboard />} />
      <Route path="/admin/products" element={<Productlist />} />
      <Route path="/admin/createproduct" element={<NewProduct />} />
      <Route path="/admin/product/:id" element={<UpdateProduct />} />
      <Route path="/admin/orders" element={<OrderList />} /> 
      <Route path="/admin/order/:id" element={<NewOrder />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/users/:id" element={<UpdateUser />} />
    </Routes>
    <Footer/>
    
  </Router>
  </Provider>,

  document.getElementById("root")
);