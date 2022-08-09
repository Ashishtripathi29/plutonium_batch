// Problem 3
// Module 3: src/validator/formatter.js
// 	- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// 	- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// 	- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler

const myTrim=function(){
    let str="     Ashish  Tripathi     ";
    console.log("Trim: ",str.trim())
}

const uperString=function(){
    let uper="Ashish Tripathi";
    console.log("Uper Case: ",uper.toUpperCase());
}
const lowrString=function(){
    let lower="Ashish Tripathi"
    console.log("Lower Case: ",lower.toLowerCase());
}

module.exports.trm=myTrim
module.exports.lowercase=lowrString
module.exports.upercase=uperString