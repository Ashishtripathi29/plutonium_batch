const newAuthor = require("../models/newAuthor")
const bookModel = require("../models/newBook")
const newPublisher = require("../models/newPublisher")


let newCreateBook = async function (req, res) {
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher
    const arrId = await newAuthor.find().select({ _id: 1 })
    const arrPublisher = await newPublisher.find().select({ _id: 1 })
    // a check the author id and b check the publisher id
    let a = false
    let b = false

    arrId.forEach(element => {
        let authorID2 = element._id
        if (authorID2 == authorId) {
            a = true
            arrPublisher.forEach(element2 => {
                let publisherId2 = element2._id
                if (publisherId == publisherId2) {
                    b = true
                    
                }
            });

        }
    });
    if(!a){
        res.send("author id is not valid")
    }
    if(!b) res.send("publisher id is not valid")
    let bookCreated = await bookModel.create(book)
    res.send(bookCreated)
}

const getAllBook=async function(req,res){
    const allBook=await bookModel.find().populate(['author_id', 'publisher'])
    res.send(allBook)
}
const updateValue=async function(req,res){
    const data=await bookModel.find().select({"publisher.publisher":1}).populate("publisher")//updateMany({}) //:{$eq:"Penguin"}},{"isHardCover":true},{new:true}).populate("publisher")
    
res.send(data);
}

module.exports.newCreateBook = newCreateBook
module.exports.getAllBook = getAllBook
module.exports.updateValue = updateValue


