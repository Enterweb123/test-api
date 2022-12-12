const router = require("express").Router();
const photos = require("../datas/photos");

router.get("/",(req,res)=>{
   res.json(photos);
});

module.exports = router;