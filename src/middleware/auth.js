const jwt=require("jsonwebtoken")
const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token=req.headers["x-Auth-token"]
    if(!token) token=req.headers["x-auth-token"]
    if(!token) return res.send({status:false,msg:"token is must be in header"})
    const verified=jwt.verify(token,"FunctionUp,Plutonium")
    if(!verified) return res.send({status:false,msg:"token doesn't match"})
    next()
}
const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    const userId=req.params.userId
    let token=req.headers["x-Auth-token"]
    if(!token) token=req.headers["x-auth-token"]
    if(!token) return res.send({status:false,msg:"token is must be in header"})
    const tId=jwt.verify(token,"FunctionUp,Plutonium").userId
    if(userId!=tId) return res.send({status:false,msg:"only admin can do it"})
    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise