/*1. Custom Map Function */
function customMap(arr, callback) { 
    let result = []; // we created empty array result to store the elements after applying callback function.
    for (let i = 0; i < arr.length; i++) { // for loop for iteration through each element of the given array (arr)
        result.push(callback(arr[i], i, arr)); // we push the transformed value into the result array we've created earlier.
    }
    return result; // return the values inside the result array
}

let numbers = [1, 2, 3]; 
let doubled = customMap(numbers, function(num) { return num * 2; }); // we pass these numbers and a callback function (num*2) to customMap
console.log(doubled); // Should output: [2,4,6], and we stored in doubled, and it will prints [2, 4, 6] to the console. */

/*2.Filter Function */
function filter(arr, callback) {
    let result = []; // we created empty array result to store the elements after the condition 
    for (let i = 0; i < arr.length; i++) { // for loop runs on each element of the array arr, it increments until it reaches the arr length.
        if(callback(arr[i], i, arr)) {
            result.push(arr[i]); // we use callback function to return true or false. If the callback condition returns true, we add (push) arr[i] to the result array, otherwise, it is ignored.
        }
    }
    return result; // after pushing the result, we return result, it only contains the element that satisfied the condition.
}
let result = filter([1,2,3,4,15], function(val) { return val<10; }); // this part checks if each value is less than the declared value which is 10.
console.log(result); // Should output: [1,2,3,4] */

/*3.Some Function */
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) { // if the callback function returns true for any element, we return true and stop checking other element.
            return true; // a match is found, so return true. 
        }
    }
    return false; // if there's no element satisfies the condition, will return false.
}
let result = some([1,2,3,4], function(val) { return val>5; }); // example of elements less than 5
console.log(result); // Should output: true, corrected output is false,because there is no value or element that is greather than 5.

// but ill add one more example for true.
let result2 = some([1, 2, 3, 9], function(val) { return val > 5; }); // example where at least one element is greather than 5
console.log(result2); // output: true 

/* 4. Every Function */
function every(arr, callback) {
    for(let i = 0; i < arr.length; i++) {  // for loop through each element of the array (arr)
        if(!callback(arr[i], i, arr)) { // it calls the callback function with three arguments, and it checks if the condition is true or false.
            return false; // if any element fails the condition, we return false immediately and it stops the function.
        }
    }
    return true; // it returns true if all elements passed/met the condition.
}
let result = every([1,2,3], function(val) { return val>0; }); // it checks if each element is greater than 0.
console.log(result); // Should output: true, confirming that all elements in [1,2,3] are greather than 0.

/* 5. Reduce Function */
function reduce(arr, callback) {
    let acc = arr[0]; // we set the first element of the array as the initial accumulator, also the starting value.

    for (let i = 1; i < arr.length; i++){ // loop starts at index 1 since we set arr index [0] in accumulator already
        acc = callback(acc, arr[i]); // call the call back function and update acc with the result or the returned value
    }
    return acc; // after the loop completes, it will return the final accumulated value after looping through all elements
} 

let sum = reduce([1,2,3], function(acc, num) { return acc + num; }); // then the callback function adds acc and num together.
console.log(sum); // Should output: 6 

/* 6. Includes Check */
function includes(arr, callback) { 
    for(let i = 0; i < arr.length; i++) { // it will iteratw over the array elements
        if(callback(arr[i], i, arr)) { // check if the callback function returns true
            return true; // it returns true immediately
        }
    }
    return false; // and if there's no match, return false after the loop
}

let result = includes([1,2,3], function(val) { return val===2; }); // it checks if the given array has the value 2 by applying the callback function to each element.
console.log(result); // Should output: true, because there is value 2 inside the array [1, 2, 3]

// include example for false output
let result2= includes([5, 8, 9], function(val) { return val===10; }); // it checks if the given array has the value 10 by applying the callback function to each element.
console.log(result2); // output is false, since there's no value 10 inside the array [5, 8, 9], so it will return false.
