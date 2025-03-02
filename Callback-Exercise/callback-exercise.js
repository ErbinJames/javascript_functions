/*Exercise 1: Writing Your First Callback Function*/
/*task: Modify the calculate function to also support subtraction and division.*/

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log(calculate(5, 3, add));      // Output: 8
console.log(calculate(4, 2, multiply)); // Output: 8
console.log(calculate(10, 5, subtract)); // Output: 5
console.log(calculate(10, 0, divide)); // Output: Cannot divide by zero
console.log(calculate(10, 5, divide)); // Output: 2

/*Exercise 2: Using Callbacks with setTimeout
- Write a function delayedMessage that takes a message and a delay time (in milliseconds) 
and uses setTimeout to print the message after the delay.

task: Modify delayedMessage to accept a second callback that runs before the delay starts.*/


function delayedMessage(message, delay, beforeDelay, afterDelay) {
    beforeDelay();
    setTimeout(() => {
        afterDelay(message);
    }, delay);
}

delayedMessage("Hello, world!", 2000, function() {
    console.log("Preparing your message...");
},
function(msg){
    console.log(msg);
    }
);

/*Exercise 3: Looping with Callbacks
- Write a function repeatTask that takes a number and a callback function, then runs the callback function that many times.

task: Modify repeatTask to stop early if the callback returns false. */

function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if(callback(i) === false) {
            break;
        }
    }   
}
repeatTask(20, function(index) {
    console.log("Iteration:", index);
    if (index === 16) return false; /* i set it to 16, so after 16 it will return false, and it will automatically break the loop*/
});

