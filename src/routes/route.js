const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

    res.send('Dummy response')
})



router.get('/GET/films', function (req, res) {
    let myfilm = [{
        id: 0,
        name: "phool aur kate"
    },
    {
        id: 1,
        name: "shahanshah"
    },
    {
        id: 2,
        name: "dirshaym"
    },
    {
        id: 3,
        name: "uri"
    },
    {
        id: 4,
        name: "parmanu"
    },
    {
        id: 5,
        name: "mangalyan"
    }]
    res.send(myfilm)
})


router.get('/GET/films/:filmId', function (req, res) {
    let myUserInput=req.params;
    let myFilmId = [{
        id: 0,
        name: "phool aur kate"
    },
    {
        id: 1,
        name: "shahanshah"
    },
    {
        id: 2,
        name: "dirshaym"
    },
    {
        id: 3,
        name: "uri"
    },
    {
        id: 4,
        name: "parmanu"
    },
    {
        id: 5,
        name: "mangalyan"
    }]
    a="no such id of movie";
    for (let index = 0; index < myFilmId.length; index++) {
       let myid=myFilmId[index].id
       if(myUserInput.filmId==myid){
         a=myFilmId[index]
         console.log(myFilmId[index])
         break;
       }
        
    }
     res.send(a)
})

//Q1.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this

//  // mathod 1
//  router.get("/sol1", function (req, res) {
//     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//     let arr= [1,2,3,4,6,7]
//     let missingNumber

//     let sum=0;
//     let arrSum=0;
//     ///LOGIC WILL GO HERE 
//     for(let i=1;i<=arr.length+1;i++){
//      sum=sum+i;
//      if(i<arr.length+1){
//      arrSum=arrSum+arr[i-1];
//      }
//     }
    
//     missingNumber=sum-arrSum;
//     if(arrSum==sum-(arr.length+1)){
//         missingNumber="no any number is missing";
//     }

//     res.send(  { data: missingNumber  }  );
// });


// mathod 2
router.get("/sol1", function (req, res) {
//     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber
    
    let sumArr=0;
    ///LOGIC WILL GO HERE 
    let lastNumber=arr[arr.length-1]
    for (let index = 0; index < arr.length; index++) {
        sumArr = sumArr+arr[index]; 
    }
    missingNumber=(lastNumber*(lastNumber+1))/2-sumArr

    if(missingNumber==0){
        missingNumber="no any number is missing";
    }
    res.send(  { data: missingNumber  }  );
});




//Q2. 
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
router.get("/sol2", function (req, res) {
        //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
        let arr= [33, 34, 35,37, 38]
        let missingNumber1
        ///LOGIC WILL GO HERE 
        let totalNumber=(arr.length+1)*(arr[0]+arr[arr.length-1])/2
        console.log(totalNumber)
        let arrSum3=0;
        for (let index = 0; index <arr.length; index++) {
            arrSum3 =arrSum3+arr[index];
        }
        console.log(arrSum3);
        missingNumber1=totalNumber-arrSum3;
        res.send(  { data: missingNumber1  }  );
});

module.exports = router;