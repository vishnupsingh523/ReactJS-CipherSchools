// 1. default function parameters:
// function testFunction(first, second, name="Vishwanath"){
//     console.log("This function is called by : "+name);
//     return first + second;
// }

const { SIGPWR } = require("constants");

// console.log(testFunction(1,3,"Vishwanath"));
// console.log(testFunction(24, 23,));

// 2: Array Methods:
// -> map(): is a function which can be used with the Arrays. it always returns a new *array*
// - it takes a callback function function as an argument and the mapping is created on the basis of return value of the callback function

/*
// example of using callback function:
function one(){
    return " Hii THere ";
}

function two( xyz){
    return xyz;
}

console.log( two( one() ));


// using loop and calculating
arr  = [1,2,3,4,5];
brr = [];

for(let i of arr){
    brr.push( i* i);
}

console.log(brr);
*/

// let arr  = [1,2,3,4,5];

// let brr = arr.map( function (currentValue, index){
//     console.log(index)
//     return currentValue * currentValue;
// });

// console.log( brr );

// **********************************************exercise questions**************************************:

// let str = ["Hello World", "Machine Learning", "Data Science", "Web Dev", "Hello NOrth America"];
// //  here you can use *split(' ') * function to split the tings here:
// let newStr = str.map( function( currStr, index){
//     // console.log(index, currStr);
//     let a = "";
//     let b = "";
//     let check = 1;
//     for( i = 0;i<currStr.length;i++)
//     {
//         if(check==1 && currStr[i]!=' ')
//         a += currStr[i];

//         else if(check ==0 && currStr[i]!=' ')
//         b+= currStr[i];

//         if(currStr[i]==' ')
//     check = 0;
//     }
//     return [a,b];
// });

// console.log(newStr);

//  --> forEach() function:
// - It takes a call back function asa n argument and the argument of this callback function represtents the currentElement of the array
// IT does not return anything.
// we cannot use break here

/*
let arr = [1,2,3,4,5];
arr.forEach( (currentValue, index)=>{
    console.log(`The index is : ${index} and the value is ${currentValue}`);
})

console.log(arr)

*/

// --> filter() lsis a function which can be used with Arrays.
// - it aways returns a new array.
// - it takes a callback function as an argument and the filtering is created on teh basis of teh return value of the call back function:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let brr = arr.filter((currentValue) => {
  return currentValue % 2 === 0;
});

console.log("done");

console.log(brr);

// --> reduce() function:
// first parameter is for 'sumSofar'or whatever we put in return function it will come here
// and second parameter is for the 'initial value or current value'
