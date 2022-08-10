const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})



// Problem Statement 1 :
// NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits )
// Your player collection should be an ARRAY of player objects. Each player object should have the following attributes:
// {
// "name": "manish",
// "dob": "1/1/1995",
// "gender": "male",
// "city": "jalandhar",
// "sports": [
// "swimming"
// ]
// }

// solve 
// playerArr is a array of player info
const playerArr=[
{
    "name":"Raju",
    "dob":"1//2000",
    "gender":"mail",
    "city":"prayagraj",
    "sports":["cricket"]

},
{
    "name":"Rajesh",
    "dob":"1//2001",
    "gender":"mail",
    "city":"prayagraj",
    "sports":["hocky"]

},
{
    "name":"Ramesh",
    "dob":"1//2002",
    "gender":"mail",
    "city":"varanshi",
    "sports":["kabaddi"]

},
{
    "name":"Raman",
    "dob":"1//2003",
    "gender":"mail",
    "city":"mathura",
    "sports":["batmintal"]

}

]
router.post("/get_player_info",function(req,res){
// logic start from here
let getPlayerFromUser=req.body
let isUserMatch=false;
// for (let index = 0; index < playerArr.length; index++) {
//    if(playerArr[index].name==getPlayerFromUser.name){
//     isUserMatch=true;
//    return res.send(getPlayerFromUser," that name of user already , try again....")

//    }
    
// }
//  res.send(playerArr.push(getPlayerFromUser))
 res.send("playerArr.push(getPlayerFromUser)")
})






module.exports = router;