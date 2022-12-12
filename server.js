const express = require("express");
const app = express();

const apiRouter = require("./routes/index");

app.use("/api", apiRouter);


app.get("/", (req,res)=>{
    res.send({msg:" it's working "});
});

app.get("*", (req,res)=>{
    res.json({msg:"Router Not Found"});
});


app.listen(4000,()=>{
    console.log("multi router project runing on port 4000");
});
