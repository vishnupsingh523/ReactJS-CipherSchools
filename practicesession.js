// Arrow Functions:
let add = (a, b) => a + b;
let test = (name) => `My name is : ${name}`;
console.log(test("Vishwanath PRatap Singh"));

let isPrime = (num) => { 
    return (num2) => {
        let sum = num + num2;
        
        for (let i = 2; i < num / 2; i++)
            if (num % 2 == 0)
                return false;
    };
    return true;
};

console.log(isPrime(2)(3));


    