require('colors');
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecommerce").then(()=>{
    console.log("connection successful database" .inverse);
}).catch((error)=>{
    console.log("error");
});
