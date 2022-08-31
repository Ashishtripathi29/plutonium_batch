const userSchema=require("../models/userData")
const jwt=require("jsonwebtoken")


// =========================================== SignUP ======================================================
//- Write a POST api to register a user from the user details in request body. 
const singUp=async function(req,res){
    const data=req.body
    const saved=await userSchema.create(data)
    res.send({status:true, msg:saved})
}

// ========================================== LogIn ==========================================================
// Write a POST api to login a user that takes user details like email and password from the request body. If the credentials don't match with any user's data return a suitable error.
//On successful login, generate a JWT token and return it both in response body.

const logIn=async function(req,res){
    const email=req.body.emailId
    const password=req.body.password
    const getData=await userSchema.findOne({emailId:email,password:password})
    if(!getData) return res.send({status:false,msg:"no any user exist with this email or password"})
    else if(getData.isDeleted===true) return res.send({statue:false,msg:"user not exist"})    
    // JWT token create from here
    const token=jwt.sign({
        userId:getData._id,
        batch:"Plutonium",
        orgnigation:"FunctionUp"
    },
    "FunctionUp,Plutonium")
    res.setHeader("x-Auth-token",token)
    res.send({status:true,msg:getData})
}


//=============================================== authorisation ===========================================
// You have to implement authorisation for fetch user details, update user and delete user apis

//============================================ fetch user details ==========================================
const fetchInfo=async function(req,res){
    const userId=req.params.userId
    const data=await userSchema.findById(userId)
    res.send({status:true,msg:data})
}
//============================================= update user ====================================
const updateData=async function(req,res){
    const userId=req.params.userId
    const upData=await userSchema.findOneAndUpdate({_id:userId},req.body,{new:true})
    res.send({status:true,msg:upData})
}
//================================================= Delete user =====================================
const deleteUser=async function(req,res){
    const userId=req.params.userId
    const deleteData=await userSchema.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
    res.send({status:true,msg:deleteData})
}

// Write a GET api to fetch user details. Pass the userId as path param in the url. Check that request must contain x-auth-token header. If absent, return a suitable error.
//If present, check that the token is valid.
module.exports.singUp=singUp
module.exports.logIn=logIn
module.exports.fetchInfo=fetchInfo
module.exports.updateData=updateData
module.exports.deleteUser=deleteUser