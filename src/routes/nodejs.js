const express=require('express');
const myrouter=express.Router();
const myfun=require("../logger/logger")
const time=require("../util/helper")
const strCase=require("../validator/formatter")

// problem 1
myrouter.get('/test-me1',function(req,res){
myfun()
res.send('Done')
})

// problem 2
myrouter.get("/print-date",function(req,res){
time.date()
time.month()
time.batchInfo()
res.send('done execution')
})


// problem 3

myrouter.get("/test-case",function(req,res){
    strCase.trm();
    strCase.lowercase();
    strCase.upercase();
    res.send('program excuted..')
})
module.exports=myrouter;