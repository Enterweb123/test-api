const router = require('express').Router();

const todos = require("../datas/todos");

router.get("/",(req,res)=>{
    res.json(todos);
});

router.get("/:id", (req,res) => {
    const todo = todos.find((todosData) => {
        return todosData.id == (req.params.id);
    })
    if(todo) {
    return res.json(todo);
    }
    res.json( {msg:"Sorry no todo Found"});
});

module.exports = router; 