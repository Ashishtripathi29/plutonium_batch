let axios = require("axios");
const { get } = require("mongoose");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//============================================== 1st assignment ==================================================

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

const vacci_list=async function(req,res){
    try{
    const district=req.query.district_id 
    const date=req.query.date
    console.log(district)
    console.log(date)
    const options={
        method:"get",
        url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
    }
    let result=await axios(options)
console.log(result.data)
res.send(result.data)
    }
    catch(error){
        res.status(500).send({error:error.message})
    }
}

//====================================================== 2nd assignment ===================================
// GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further.
// Create API's to do the following:
// Get weather of London from  http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  
// (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
// then change the above to get the temperature only( of London)
// Sort the cities     [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]   in order of their increasing temperature

const get_weather=async function(req,res){
    try{
    const q=req.query.q
    const appid=req.query.appid
    const options={
        method:"post",
        url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
    }
    const result=await axios(options)
    res.send({msg:result.data})
}catch(error){
    res.status(500).send({status:false,error:error})
}
}
// Sort the cities     [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]   in order of their increasing temperature
const cityArray=[]
const city=[ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
const sortCityByTemp=async function(req,res){
    try{
   for(let i=0;i<city.length;i++){
        const options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=526dc1b6a87deebeb897c85a1344cbbd`
        }
        let result=await axios(options)
       let newTamp=result.data.main.temp
        cityArray.push({city:city[i],temp:newTamp})
    };
     let sorted=cityArray.sort(function(element1,element2){return element1.temp-element2.temp})
    res.send({msg:sorted})
}
catch(error){
    res.status(500).send({status:false,error:error})
}
}


//======================================================= 3rd assignment ====================================
//3. Axios POST request assignment Statement:
// Step1: Get all the memes at Postman (https://api.imgflip.com/get_memes)
// Step 2 : Pick a memeId you want (Eg 129242436) for the POST request (from the result from  above )
// Assignment: Create a Post request API (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below OR incase you find error in using this username password due to too many people trying to access it, then create your own account and plz do share username password on your group so that others can use it too- be kind and helpful):

const get_memes=async function(req,res){
    try{
    const username=req.query.username
    const password=req.query.password
    const id=req.query.id
    const t0=req.query.text0
    const t1=req.query.text1
    
    const options={
        method:"post",
        url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${t0}&text1=${t1}&username=${username}&password=${password}`
    }
    const result=await axios(options)
    res.send({msg:result.data})
}
catch(error){
    res.status(5000).send({status:false,error:error})
}}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.vacci_list= vacci_list
module.exports.get_memes= get_memes
module.exports.get_weather= get_weather
module.exports.sortCityByTemp= sortCityByTemp