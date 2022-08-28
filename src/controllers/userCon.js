const userData=require("../models/user")
const createUser= async function(req, res){
    let data = req.body
    let savedData = await userData.create(data)
    res.send({data : savedData})
}
module.exports.createUser=createUser