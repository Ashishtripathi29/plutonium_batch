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
    "dob":"1/2/2000",
    "gender":"mail",
    "city":"prayagraj",
    "sports":["cricket"]

},
{
    "name":"Rajesh",
    "dob":"1/2/2001",
    "gender":"mail",
    "city":"prayagraj",
    "sports":["hocky"]

},
{
    "name":"Ramesh",
    "dob":"1/2/2002",
    "gender":"mail",
    "city":"varanshi",
    "sports":["kabaddi"]

},
{
    "name":"Raman",
    "dob":"1/2/2003",
    "gender":"mail",
    "city":"mathura",
    "sports":["batmintal"]

}

 ]
// router.post("/get_player_info",function(req,res){
// // logic start from here
// let getPlayerFromUser=req.body
// console.log(getPlayerFromUser.name)

// for (let index = 0; index < playerArr.length; index++) {
//     // checking the name is equal or not
//    if(playerArr[index].name==getPlayerFromUser.name){
//     // if value is true than return the response
//    return res.send("this player is alraday exist")
//    }
// }

// // pushing the new player value in the existin array
// playerArr.push(getPlayerFromUser)
//  res.send(playerArr)
 
// })



//=======================NEXT QUESTION==========================
// Problem Statement 2 :
// Add the below part to the previous question:- 
// Follow the following structure for a booking resource
// {
//  “bookingNumber”: 1
//   “sportId": “”,
//   “centerId: “”,
//  “type”: “private”,
//  “slot”: ‘16286598000000’,
//  “bookedOn”: ’31/08/2021',
//  “bookedFor”: ’01/09/2021’
// }

// Write an api that books a slot for a player with relevant details. The api looks like POST /players/playerName/bookings/bookingId
 
// Ensure the below conditions:
// 1. PlayerName and bookingId are path params You have to ensure the playerName received must exist in the players collection. If the playerName doesn’t exist in the players collection return an error message that says something relevant about player not being found.	
// 2. For a valid playerName check if the bookingId is already present in the player’s booking. Again, for a repeated bookingId send an error message conveying the booking was already processed. For a relevant bookingId(which is new), add the booking object from request body to bookings array

//solve 

let forId=[
    {
        "bookingNumber": 1,
        "sportId": "51",
        "centerId": "71",
       "type": "private",
       "slot": "16286598000000",
       "bookedOn": "31/08/2021",
       "bookedFor": "01/09/2021"
      },
      {
        "bookingNumber": 2,
        "sportId": "52",
        "centerId": "72",
       "type": "private",
       "slot": "16286598000000",
       "bookedOn": "31/08/2021",
       "bookedFor": "01/09/2021"
      },
      {
        "bookingNumber": 3,
        "sportId": "53",
        "centerId": "73",
       "type": "private",
       "slot": "16286598000000",
       "bookedOn": "31/08/2021",
       "bookedFor": "01/09/2021"
      },
      {
        "bookingNumber": 4,
        "sportId": "54",
        "centerId": "74",
       "type": "private",
       "slot": "16286598000000",
       "bookedOn": "31/08/2021",
       "bookedFor": "01/09/2021"
      }
]
// start logic from the here
const storeId=[0]
router.post("/players/playerName/bookings/bookingId",function(req,res){
let playerId=req.query.id
console.log(playerId)
let playerName=req.query.name
if(playerId in  storeId){   
    return res.send("id is bookd try again")
}
else{
    let isNameMatch=false;
    // to  check name is already exists in my array or not
    for (let index = 0; index < playerArr.length; index++) {
        if(playerArr[index].name==playerName){
            isNameMatch=true
            for (let index = 0; index < forId.length; index++) {
                if(forId[index].bookingNumber==playerId){
                    storeId.push(playerId) 
                     res.send(forId[index])
                }
                
            }
        }

    }
    if(!isNameMatch){
        res.send("this name player is not exist")
    }
    
}

})


module.exports = router;