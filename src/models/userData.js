const mongoose=require("mongoose")

const userData=new mongoose.Schema(
{
    
    "firstName" :{
        type:String,
        required:true},
    "lastName" : String,
    "mobile" : String,
    "emailId" : {
        type:String,
        required:true},
    "password" : {type:String,
    required:true},
    "gender" : {
        type:String,
        enum:["Male","Female","Other"]
    },
	"isDeleted": {type:Boolean,default:false},  
    "age" : Number
},{timestamps:true}
)

module.exports=mongoose.model("userInfoAuth2",userData)