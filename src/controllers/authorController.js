const authorModel=require('../model/authorModel')
const jwt = require('jsonwebtoken')

// creating entries for author

const createAuthor=async function(req,res){
   try{
    let data=req.body
       if(!data ) return res.status(400).send({msg : "You have not entered any data"})
    let save=await authorModel.create(data)
    res.send(save)
   }
   catch(error){
    res.status(500).send({msg : error.message})
   }
}

const login = async function(req,res){

      let emailId  = req.body.email
      let password = req.body.password

      if(!emailId || !password) return res.send({msg : "Enter emailId and password"})

      let author = await authorModel.findOne({email :emailId}, {password : password})
      if(!author) return res.send({msg : "Invalid email or password"})

      let token = jwt.sign(
         {
            authorId : author._id.toString(),
            project : "Blogging site",
            teamNo :"32"

         },
         "Project -1 Blogging Project"
       )
       res.setHeader("x-api-key", token)
       res.send({status : true, msg : token})

     }





// exporting createAuthor-----
module.exports.createAuthor=createAuthor

module.exports.login=login


