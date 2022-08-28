const mongoose=require("mongoose")

const userinfo=new mongoose.Schema({
    
        
        firstName : {
            type:String,
            required:true
        },
        lastName :String,
        mobile : String,
        emailId : {
            type:String,
            required:true
        },
        password : {
            type:String,
            required:true
        },
        gender : {
            type:String,
            enum:["male","female","other"]
        },
        isDeleted: {
            type:Boolean,
            default:false
        }, //default value is false 
        age : {
            type:Number,
            required:true
        },
},{
    timestamps:true
})

module.exports=mongoose.model("singUp",userinfo)