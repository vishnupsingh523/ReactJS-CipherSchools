// let a = 5;
// let testVar = a <= 5 && "Hi";
// console.log(testVar);

// let a = 0;
// console.log(a ? "true" : "false"); // will return false because its a falsy value

/*

let obj = {
    name: "Vishwnath",
    age : 20,
    isMarride: false,
    address: {
        city: "Phagwara",
        country: "INDIA",
        zip: "144402",
        oldCityInfo: {
            district: "Banda",
            tehshil: "Naraini",
            famous: ["Bajrangbali", "Kalinjar"]
        }
    }
}

console.log(obj.address.zip)

// optional chaining
console.log(obj?.address?.oldCityInfo?.famous)

*/
// ********8 EXERCISE *********************
// Given two objects and they contain an array in them, Calculate the sum of the array elements and return the array with max sum; If an object does not contain an array, return the object that does contain array;
// if both objects do not contain an array, return undefined

// -> Solution

let obj1 = {
    name: "Vishwanath",
    subject: {
        marks: [100, 200, 300, 400, 500]
    }
}

let obj2 = {
    name: "Krishna",
    subject: {
        marks: [200, 2, 40, 200, 30]
    }
}

let obj3 = {
    name: "Ravi",
    subject: {
        marks: 10
    }
}

let containArray = (ob1, ob2) => {
    let sum1 = 0, sum2 = 0;
    if (Array.isArray(ob1?.subject?.marks)&& Array.isArray(ob2?.subject?.marks)) {
        for (let i of ob1.subject.marks)
            sum1 += i;
        
        for (let i of ob2.subject.marks)
            sum2 += i;
        
        if (sum1 > sum2)
            return ob1.subject.marks;
        else
            return ob2.subject.marks;
    }
    else if (Array.isArray(ob1?.subject?.marks)) {
        return ob1.subject.marks;
    }
    else if (Array.isArray(ob2?.subject?.marks))
        return ob2.subject.marks;
    else
        return undefined;
    
}

// console.log(containArray(obj1, obj2));
console.log(containArray(obj1, obj2));