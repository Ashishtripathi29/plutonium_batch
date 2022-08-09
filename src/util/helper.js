// Problem 2
// Module 2 : src/util/helper.js

// 	- printDate() : prints the current date
// 	- printMonth() : prints the current month
// 	- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

// printing date
const printDate=function(){
    const todayDate=new Date;
    console.log("this is date",todayDate.getDate())
}


// printing months
const printMonth=function(){
    const thisMonth=new Date;
    console.log("This is month",thisMonth.getMonth()+1)
}


const getBatchInfo=function(){
    const date=new Date;
    console.log("",date.getDate(),"/", date.getMonth()+1,"/",date.getFullYear(),", the topic being taught today is nodejs module. For example - Radon, W3D3, the topic for today is Nodejs module system’")
}

module.exports.date=printDate;
module.exports.month=printMonth;
module.exports.batchInfo=getBatchInfo;