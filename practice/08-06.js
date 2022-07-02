// // Promises:

// function testFunction(name) {
//     return function () {
//         console.log(name);
//     };
// }

// // console.log(testFunction("Vishwanath"));


// setTimeout(testFunction("Vishwanath"), 1000);
// console.log("Raviraj");

// -> PRomise is used for async programming
// -> Promise takes a function in its constructor the function takes 2 parameters: resolve and reject
// -> 'resolve' : is used to resolve the promise
// -> 'reject' : is used to reject the promise

// if a promise is resolved, then we use .then()
//  if a promise is rejected, then we use .catch()
// .then() and .csatch() are used to handle the promise
// .finally() is used to execute code after the promise is resolved or rejected
/*
let myPromise = new Promise((fullfilled, notfullfilled)=> {
    let a = 5;
    let b = 10;
    let sum = 0;

    setTimeout(() => {
        sum = a + b;
        fullfilled(sum);
    }, 1000)
});

myPromise.then((sum) => {
    console.log(`Then sum is: ${sum}`);
});
*/
/*
let testFunction = (a, b) => {
    let myPromise = new Promise((resolve, reject) => {
        let sum = a + b; 

        if (sum > 15)
            setTimeout(resolve(sum), 5000);
        else
            setTimeout(reject("The sum is less than 15"), 5000);
    })
    // let sum = a + b;
    return myPromise;

}

testFunction(1, 9)
    .then((sum) => { console.log(sum) })
    .catch((ans) => { console.log(ans) })
    .finally(() => console.log("The promise has be executed."));
*/

// exercise 1:
// input : an array of integer which may have a repeating element use promise to check if there is a repeating element in the array if there is a repeating element, return the element and fail the promise. If there is no repleating element, return the array and succeed the promise A promise must wait for 5 seconds:

let repetingElement = (...arr) => {
    let myPromise = new Promise((resolve, reject) => {
        let set = new Set();
        let check = true;

        for (let i in arr)
            if (set.has(arr[i]))
            {
                check = false;
                break;
            }
            else
                set.add(arr[i]);
        
        if (check == true)
            setTimeout(()=> resolve("It does not have any repeating element."),5000);
        else
            setTimeout(()=> reject("It has the repeating element."),5000);
    })
    return myPromise;
}

repetingElement(1, 3, 4, 5, 2, 1)
    .then((message) => console.log(message))
    .catch((err) => console.error(err))
    .finally(() => console.info("The Array is checked succesfully."));

