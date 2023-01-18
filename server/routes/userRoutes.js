
const User=require("../model/schema");

const sendToken = require("../utils/jwtToken");
// Register a User
 const registerUser = async (req, res, next) => {
    
  
    const { name, email, password } = req.body;
    if (!name ||!email || !password) {
      return  console.log("Please Enter Email & Passwordl in register" );
    }
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "myCloud.public_id",
        url: "myCloud.secure_url",
      }
    });
  
    sendToken(user, 201, res);
  };

  // Login User
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return  console.log("Please Enter Email & Passwordl in email" );
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return console.log("Invalid email or password" );
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return  res.status(404).send("Invalid  or password"); 
    }
  
    sendToken(user, 200, res);
  };

// Logout User
const logout = async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  };
  // Get User Detail
 const getUserDetails = async (req, res, next) => {
  console.log("data afer get request",)
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
};

// Get all users(admin)
const getAllUser = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};
// Get single user (admin)
const getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return (
      console.log(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
};
// update User Role -- Admin
const updateUserRole = async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
};
// Delete User --Admin
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(`User does not exist with Id: `, req.params.id)
  if (!user) {
    return console.log(`User does not exist with Id: ${req.params.id}`, 400)
    ;
  }



  await user.remove();

  res.status(200).json(
   console.log("User Deleted Successfully")
  );
};
  module.exports={registerUser,loginUser,logout,getUserDetails,getAllUser,getSingleUser,updateUserRole,deleteUser}