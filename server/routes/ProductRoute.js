
const Products=require("../model/productmodel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const Users=require("../model/schema");
const User=require("../model/schema");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
// get all products
const searchproduct= async(req,resp)=>{
    try {      
        const resultPerPage=6;
        const productsCount= await Products.countDocuments()
     const  apiFeature=new    ApiFeatures(Products.find(),req.query).search().filter()
     
      let products = await apiFeature.query;
      
      let filteredProductsCount = products.length;
    
      apiFeature.pagination(resultPerPage);
      
     
      console.log('testing',);
      
        resp.status(200).json({products,productsCount,resultPerPage,filteredProductsCount,});
           
    } catch (Error) {
        console.log('data fetching err12',Error.message);
    }
}
// get all  admin products
const adminproduct= async(req,resp)=>{
    try {      
        const products = await Products.find()
      
     
      console.log('testing',);
      
        resp.status(200).json({products});
           
    } catch (Error) {
        console.log('data fetching err12',Error.message);
    }
}

// Create Product -- Admin
exports.createProduct = async (req, res) => {
    
    const productnew =new   Products({
        name:req.body.name,
        countinstock:req.body.countinstock,
        description:req.body.description,
        image:req.file.filename,
        category:req.body.category,
        is_admin:0
    } ); 

    req.body.user = req.user.id;
    const product=await productnew.save();

   
    res.status(201).json({
      success: true,
      product,
    });
  };
  



const searchproductcat= async(req,resp)=>{
    try {
        const { page=1,limit=8}= req.query

        const product = await Products.find({
            "$or":[{"category":{$regex:req.params.key}}]
        }).limit(limit*1)
        .skip((page-1)*limit)
        .exec()
        resp.send(product);
        console.log("data of product in server")
       
    } catch (Error) {
        console.log('data fetching',Error.message);
    }
}
const insertproduct= async(req,resp)=>{
    try {
        
        const product = await Products.find();
        resp.send(product);
        console.log("data of product in server")
       
    } catch (Error) {
        console.log('data fetching',Error.message);
    }
}
const Singleproduct= async(req,resp)=>{
    try {
        const product = await Products.findById({_id:req.params.id});
       

        resp.json({product});
        console.log("data of product in server")
       
    } catch (Error) {
        console.log('data fetching error in server',Error.message);
    }
}

const loginUser= async(req,resp)=>{
    const {email,password} =req.body;
    try {
        const userdataexist= await Users.findOne({email:email});
        
        const   id=userdataexist._id
        console.log("in login post",id);
       
        if (userdataexist) {
            
            const token =await userdataexist.generateAuthToken();
            const spass= await bcrypt.compare(password,userdataexist.password);
            if(spass){
                return   resp.status(201).json({status:201,userdataexist,id,token});
               
            }else {
                return resp.status(200).json({error:"password error"});
            }
        } else {
            return resp.status(200).json({error:"fullfill email dtails plz"});
        }
           
    } catch (Error) {
        console.log('data fetching error in login server',Error.message);
    }
}

const registerpost= async (req,resp)=>{ 
    
    console.log(req.body)
    const {name,email,mobileno,password,cpassword,is_admin} =req.body;
    if (!name||!email||!mobileno||!password||!cpassword) {
        return resp.status(200).json({error:"fullfill  every dtails plz"});
    }else if(password!=cpassword) {
        return resp.status(200).json({error:"fullfill  cpassword correctly  plz"});
    }else{ try {
        
        
        const  usersdata =new Users( { name,  email,  mobileno,   password,  cpassword,  is_admin:0 });
        
          const results=await usersdata.save();
          return resp.status(200).json("registerd");
         
      } catch (error) { 
          console.log("error inregister post"); 
      }}
    
   
}
const aboutload=async(req,resp)=>{
   
    resp.send({});
  

}
const CreateProduct=async(req,resp)=>{
    try {
        req.body.user = req.user.id;
   console.log(req.body)
   const product= await Products.create(req.body)  
  
   resp.status(201).json({product})
    } catch (error) {
        console.log("error in create product")
    }
   
  
}
const updateProduct=async(req,resp)=>{
   
    
    const product= await Products.findById(req.params.id);
    if (!product) {
        console.log("Error.message in update product");
    } else {
        const product= await Products.findByIdAndUpdate(req.params.id,req.body);
        resp.status(201).json({product})
        console.log("product updated")
    }
    
   
 }
 const deleteProduct=async(req,resp,next)=>{
   
    
    const product= await Products.findById(req.params.id);
    if (!product) {
        console.log("Error.message in update product");
    } else {
        await product.remove();
        console.log("product removed")
        resp.status(201).json("product removed")
        console.log("product removed product");
    }
    
   
 }
module.exports={adminproduct,searchproductcat,insertproduct,Singleproduct,searchproduct,loginUser,registerpost,aboutload,CreateProduct,updateProduct,deleteProduct}