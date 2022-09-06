const blogModel = require('../model/blogModel')
const authorModel = require('../model/authorModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

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
    catch(error){
        res.status(500).send({msg :error.message})
    }
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


