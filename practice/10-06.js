// Given a string, find the number of palindroms in it:
// A palindrome is a string that is the same forwards and backwards, for exaple , 'racecar' is a palindrom , 'raceca' is not.

let palindrom = (str) => {
    let str1 = str.split("").reverse().join("");
    let count = str.length;
    if (str1 === str)
    {
        count = count + 1 + (str.length / 2);
        for (let i = 0; i < str.length; i++)
            
    }
    else {
        
    }
        return count;
}

console.log( palindrom("aabbaa"))