
const jwt = require("jsonwebtoken");
const User = require("../model/schema");

const isAuthenticatedUser = async (req, res, next) => { 
    console.log("in middleware");
    console.log("header authorization",req.headers['authorization']);
  const token  = req.headers['authorization']

  if (!token) {
    return (console.log("plz login first")) 
  }

  const decodedData = jwt.verify(token, "myseacreatkeyisthis");

  req.user = await User.findById(decodedData.id); 
 
  next();
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
       return( res.json(`Role: you RE not allowed to access this resouce ` ),
        console.log(
          `Role: ${req.user.role} is not allowed to access this resouce `          
        )
      )
    
    }

    next();
  };
};
module.exports={isAuthenticatedUser,authorizeRoles}