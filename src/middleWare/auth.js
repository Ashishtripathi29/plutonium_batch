const jwt = require("jsonwebtoken");
const middle = function (req, res, next) {
    let token=req.headers["x-auth-token"]
    if(!token) token=req.headers['x-Auth-token']
    if(!token) return res.send({status:false,msg:"token must be in the header"})
    const decode=jwt.verify(token,"plutonium-very-very-secret-key")
    if(!decode) return res.send({status:false,msg:"token is invalid try with valid token"})
    next()
}
module.exports=middle