const moduleProduct=require("../models/product")

const productConto= async function(req,res){
    const data=req.body
    const saveData=await moduleProduct.create(data)
    res.send({msg:saveData})
}
module.exports.productConto=productConto