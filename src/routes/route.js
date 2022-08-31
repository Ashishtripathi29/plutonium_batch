const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const usercon=require("../controllers/usercon")
const auth=require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
// router.delete("/users/:userId", userController.deleteUser)



// ===========================================my assignment auth 2======================================

router.post("/users/signup",usercon.singUp)
router.post("/users/login",usercon.logIn)
router.get("/users/auth/:userId",auth.authorise,usercon.fetchInfo)
router.put("/users/update/:userId",auth.authorise,usercon.updateData)
router.delete("/users/deleteuser/:userId",auth.authorise,usercon.deleteUser)
module.exports = router;