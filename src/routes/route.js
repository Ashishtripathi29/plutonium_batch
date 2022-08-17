const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const newBookController= require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)


router.post("/newCreateBook", newBookController.newCreateBook  )

router.get("/newGetBooksData", newBookController.newGetBooksData)
router.get("/newbookList", newBookController.newbookList)
router.post("/newGetBooksInYear", newBookController.newGetBooksInYear)
router.post("/newgetParticularBooks", newBookController.newgetParticularBooks)
router.get("/newgetXINRBooks",  newBookController.newgetXINRBooks)
router.get("/newgetRandomBooks",  newBookController.newgetRandomBooks)


module.exports = router;