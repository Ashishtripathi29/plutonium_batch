// assingment 
// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

const mongoose=require('mongoose');
const bookModel=new mongoose.Schema({

    bookName:{
        type:String,
        required:true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    yeare:{
        type:Number,
        default:2021
    },
    tags:[String],
    authorName:String,
    totalPages:Number,
    isStackAvailable:Boolean
})




module.exports = mongoose.model('newBookW5D2', bookModel) 