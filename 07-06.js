/*
//  The map Interface

let map = new Map();
map.set(1, 15); // is used to map a value or insert it its in the form of 'key' => 'value' pair

console.log(map);
map.delete(1); // it is used to delete a particular key value pair element:
console.log(map);

map.set("key1", "value1");
map.set("key2", "value2");

console.log(map.entries());// it is used to display all the entries present in the map.

let values = map.values();
//only to get all the values present in the map with respect to the keys
console.log(values);
values = [...values];
console.log(typeof values)
*/

//  excercise:
// check if two strings are anagrams without using Map();

let str1 = "vishwanath";
let str2 = "htanawshiv";

function areAnagrams(str1, str2) {
    
    if (str1.length !== str2.length)
        return false;
    
    let map1 = new Map();

    for (let i = 0; i < str1.length; i++) {
        if (map1.has(str1[i]))
            map1.set(str1[i], map1.get(str1[i] + 1));
        else
            map1.set(str1[i], 1);
    }

    let map2 = new Map();

    for (let i = 0; i < str2.length; i++) {
        if (map2.has(str2[i]))
            map2.set(str2[i], map2.get(str2[i] + 1));
        else
            map2.set(str2[i], 1);
    }

    // checking both the maps:
    for (let [key, value] of map1) {
        if (map2.has(key) && map2.get(key) === value) {
            continue;
        }
        else
            return false;
    }
    return true;
}

// console.log(areAnagrams("Vishwanath", "htanawhsiV"));


// // 2. Sets in JS
// let set = new Set();
// set.add("value1");
// set.add("value2");
// set.add("value3");

// console.log(set);
// set.delete("value2");
// console.log(set.has("value1"));
// set.clear();
// console.log(set);

// Exercise:

function repeating(...arr) {
    let set = new Set();
    let newArr = [];
    
    for (i in arr) {
        if (set.has(arr[i]))
            newArr.push(arr[i]);
        else
            set.add(arr[i]);
    }
    return newArr;
}

console.log( repeating(1, 2, 3, 4, 4, 5, 5) );

