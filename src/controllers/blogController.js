const blogModel = require('../model/blogModel')
const authorModel = require('../model/authorModel')
const mongoose = require('mongoose')

const createBlog = async function (req, res) {
    try {
        let data = req.body
        let authorId = req.body.authorId
        let isValid = mongoose.Types.ObjectId.isValid(authorId)
        if (isValid == false) return res.send({ msg: "Invalid length of authorId" })

        let result = await authorModel.findById(authorId)

        if (!result) return res.send({ msg: "Enter Vaild AuthorId" })

        let finalData = await blogModel.create(data)
        res.status(201).send({ data: finalData })

    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}


const blogDelete = async function (req, res) {
    //     ### DELETE /blogs?queryParams
    // - Delete blog documents by category, authorid, tag name, subcategory name, unpublished
    // - If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure)
    try {

        const data = req.query
        const deleteData = await blogModel.updateMany(data, { isDeleted: true}, { new: true })
        if (deleteData.matchedCount == 0) return res.status(404).send({ status: 404, msg: "data not found" })
        res.send(deleteData)
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}


const getBlog = async function (req, res) {
    try {
        let data = req.query;
        const { category, subcategory, tags, authorId } = data

        if (category) {
            let verifyCategory = await blogModel.findOne({ category: category })
            if (!verifyCategory) {
                return res.status(400).send({ status: false, msg: 'No blogs in this category exist' })
            }
        }

        if (authorId) {
            let isValid = mongoose.Types.ObjectId.isValid(authorId)
            if (isValid == false) return res.send({ msg: "Invalid length of authorId" })

            let verifyauthorId = await blogModel.findOne({ authorId: authorId })
            if (!verifyauthorId) {
                return res.status(400).send({ status: false, msg: 'No blogs with this authorId exist' })
            }
        }

        if (tags) {
            let verifyTags = await blogModel.findOne({ tags: tags })
            if (!verifyTags) {
                return res.status(400).send({ status: false, msg: 'No blogs in this tag exist' })
            }
        }

        if (subcategory) {
            let verifysubcategory = await blogModel.findOne({ subcategory: subcategory })
            if (!verifysubcategory) {
                return res.status(400).send({ status: false, msg: 'No blogs in this subcategory exist' })
            }
        }
        console.log(data)

        data.isDeleted=false
        data.isPublished=true
        console.log(data)
        let getSpecificBlogs = await blogModel.find(data);

        if (getSpecificBlogs.length == 0) {
            return res.status(400).send({ status: false, data: "No blogs can be found" });
        }
        else {
            console.log(getSpecificBlogs.length)
            return res.status(200).send({ status: true, data: getSpecificBlogs });
        }
    }
    catch (error) {
        res.status(500).send({ status: false, err: error.message });
    }
};


const getUpdated=async function(req,res){
    try{
        let data=req.body
        let blogId=req.params.blogId
       let user=await blogModel.findById({_id:blogId})
        // if(user.isDeleted==false)
        if(!user&&user.isDeleted==true) {
        return res.status(404).send({status:false,msg:"error"})
        }
        let Confirm= await blogModel.findOneAndUpdate( {_id:blogId},{$push:{subcategory:data.subcategory,tags:data.tags}},{new:true,upsert:true})
        
        console.log(data.tags)
    
    
        res.status(200).send({status:true,msg:Confirm})
    
     
    }catch(error){
        res.status(500).send({status:false,error:error.message})
    }
    
    
    }
<<<<<<< HEAD
=======
}


// --------------------------------------------mygetself---------------------------------
// ### PUT /blogs/:blogId
// - Updates a blog by changing the its title, body, adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
// - Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
// - Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
// - Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure) 
// - Also make sure in the response you return the updated blog document. 


const getUpdated=async function(req,res){
    try{
        let data=req.body
        let blogId=req.params.blogId
       let user=await blogModel.findById({_id:blogId})
      if(!user||user.isDeleted==true) {
        return res.status(404).send({status:false,msg:"error"})
        }
        let Confirm= await blogModel.findOneAndUpdate( {_id:blogId},{$set:{publishedAt:new Date(),isPublished:true},$push:{subcategory:data.subcategory,tags:data.tags}},{new:true,upsert:true})
        res.status(200).send({status:true,msg:Confirm})
      }catch(error){
        res.status(500).send({status:false,error:error.message})
    }
    
    
    }



// ------------------------------------------------------------








module.exports.createBlog = createBlog
module.exports.getUpdated = getUpdated
>>>>>>> 6f9c68a5c4b309fb91badda6e29f08971e133e39
module.exports.createBlog = createBlog
module.exports.getBlog = getBlog
module.exports.getUpdated = getUpdated
module.exports.blogDelete = blogDelete
<<<<<<< HEAD
// module.exports.getUpdated = getUpdated
=======
module.exports.deleteBlog = deleteBlog 
>>>>>>> 6f9c68a5c4b309fb91badda6e29f08971e133e39

