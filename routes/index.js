const router = require("express").Router();

const userRoute = require("./user");
const todosRoute = require("./todos");
const albumRoute = require("./album");
const commentsRoute = require("./comments");
const photosRouter = require("./photos");

router.get("/",(req,res)=>{
  res.json({msg:"Router home"})
})

router.use("/users", userRoute);
router.use("/todos", todosRoute);
router.use("/album", albumRoute);
router.use("/comments", commentsRoute);
router.use("/photos",photosRouter)

module.exports = router;