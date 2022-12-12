const express = require("express");
const app = express();
require("dotenv").config();
require("dotenv").config({path:"./config.env"});


app.get("/", (req,res)=>{
    res.json({msg:"It is working", envs:process.env});
    res.send("hai");
})

// app.listen(4000,()=>{
//     console.log("multi router project runing on port 4000");
// });
