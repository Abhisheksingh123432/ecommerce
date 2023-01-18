const mongoose = require("mongoose");

const Reviewschema = mongoose.Schema({}, { timestamps: true });

const product = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  image:{
    type:String,
    require:true,
},

  description: {
    type: String,
    required: true,
  },

  reviews: [

  ],
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countinstock: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    
  },
  rating: {
    type: Number,
    
  },
  numreviews: {
    type: Number,
    
  },
  qty: {
    type: Number,
    required: true,
    default: 1,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  },
});
const Product = mongoose.model("Product", product);
module.exports = Product;
