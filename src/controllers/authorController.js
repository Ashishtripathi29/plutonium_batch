const authorModel=require('../model/authorModel')

const createAuthor=async function(req,res){
   try{
    let data=req.body
    let save=await authorModel.create(data)
    res.send(save)
   }
   catch(error){
    res.status(500).send({msg : error.message})
   }
}

<<<<<<< HEAD
// exporting createAuthor-----
module.exports.createAuthor=createAuthor
=======
>>>>>>> 6f9c68a5c4b309fb91badda6e29f08971e133e39






<<<<<<< HEAD
=======















//------------------------------------------- exporting createAuthor--------------------------------------------
module.exports.createAuthor=createAuthor
>>>>>>> 6f9c68a5c4b309fb91badda6e29f08971e133e39
