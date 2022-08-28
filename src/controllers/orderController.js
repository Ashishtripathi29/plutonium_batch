const orderModule=require("../models/order")
const productModule=require("../models/product")
const userModule=require("../models/user")

const getOrder=async function(req,res){
    const data=req.body
    const header=req.headers.isfreeappuser
    const userData=await userModule.findById(data.userId)
    const productData=await productModule.findById(data.productId)

    if(header==="true"){
        data.amount=0
        data.isFreeAppUser="true"
    }
    if(header==="false"){
        if(userData.balance>=productData.price){
            await userModule.findByIdAndUpdate(data.userId,{$inc:{balance:-(productData.price)},new:true})
        }else{
            return res.send("user haven't sufficieant Balance to buy product")
        }
    }
let orderCreated= await orderModule.create(data)
res.send({data:orderCreated});
 
}

const getAllOrderData=async function(req,res){
    let allData=await orderModule.find().populate(["userId",'productId'])
    res.send({data:allData});
}
module.exports.getOrder=getOrder
module.exports.getAllOrderData=getAllOrderData