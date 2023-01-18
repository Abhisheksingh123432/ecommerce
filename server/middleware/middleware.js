const express = require("express");
const app=express();
const jwt =require("jsonwebtoken");
const user =require("../model/schema");

const config =require("../session/config")

        
    const Middleware= async(req,resp,next)=>{
       let token=  req.headers['authorization']
       
       if (token) {
        
        jwt.verify(token,config.sessionsecret,(error,valid)=>{
            if (error) {
                resp.send("provide valid  token");
            } else {
                console.warn("middleware called in home")
                next();
            }
        });
      
        
       } else {
        resp.send("no miidleware token");
       }
         
    }

    
    
    module.exports={Middleware}