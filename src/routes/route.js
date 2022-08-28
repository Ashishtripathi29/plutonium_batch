const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userInfo=require("../controllers/userInfo")
const middle=require("../middleWare/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)


// assingment athontication 
router.post("/user/signUp",userInfo.singUP)
router.post("/user/logIn",userInfo.logIn)
router.get("/user/:userId",middle,userInfo.getUserData)
router.put("/user/update/:userId",middle,userInfo.updateData)
router.delete("/user/delete/:userId",middle,userInfo.isdelete)

module.exports = router;