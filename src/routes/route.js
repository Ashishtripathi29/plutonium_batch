const express = require('express');
const router = express.Router();
const authorController=require('../controllers/authorController')
const blogController = require('../controllers/blogController')

// dummy 
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//-------------------create author------------------
router.post('/authers',authorController.createAuthor)

//-------------------create blog--------------------
router.post('/createBlog', blogController.createBlog)

//----------------------get-blog-------------------
router.get('/getBlog', blogController.getBlog)

// ------------------- update blog --------------
router.put('/blogs/:blogId', blogController.getUpdated)


//--------------------Delete-Blog--------------

router.delete('/deleteBlog/:blogId' , blogController.deleteBlog)


//==================== blogDetet based on category, authorid, tag name, subcategory name, unpublished =============
router.post('/blogs/delete', blogController.blogDelete)
<<<<<<< HEAD
module.exports = router
=======


// ------------------------------------------------put api-------------------------------------------------------------------------
router.put('/blogs/:blogId',blogController.getUpdated)












    module.exports=router;
>>>>>>> 6f9c68a5c4b309fb91badda6e29f08971e133e39
