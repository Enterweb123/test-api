const router = require("express").Router();
const users = require("../datas/users");

router.get("/", (req,res) => {
    res.json(users);
});

router.get("/:id", (req,res) => {
    const user = users.find((userData) => {
        return userData.id == (req.params.id);
    })
    if(user) {
    return res.json(user);
    }
    res.json( {msg:"Sorry no user Found"});
});

module.exports = router; 