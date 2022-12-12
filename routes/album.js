const router = require("express").Router();
const album = require("../datas/albums")

 router.get("/",(req,res)=>{
    res.json(album);
 })


module.exports = router;