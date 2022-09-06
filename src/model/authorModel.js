const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
     fname:{
        type : String ,
        required : true
     },
      lname: {
        type : String ,
        required : true
      }, 
      title: {
        type : String ,
        required : true,
        enum : ["Mr", "Mrs", "Miss"]
      }, 
      email: {
        type : String,
        unique: true,
<<<<<<< HEAD
        required: true,
        match: [/^(?:[]{3})\w+([\.-]?a-zA-Z\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
=======
        match: [/^(?:[a-zA-Z]{3})\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        required: true
>>>>>>> b470cc748ec85980cb84d48925f7a2584e3d48fa
      }, 
        password: {
            type : String,
            required : true
        }

} , {timestamps: true} )

module.exports = mongoose.model('author' , authorSchema)





// { fname: { mandatory}, lname: {mandatory}, title: {mandatory, enum[Mr, Mrs, Miss]}, email: {mandatory, valid email, unique}, password: {mandatory} }
