/*Task 1: Custom Array Filter */
function customFilter(arr, callback) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) { 
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]
/*Solution:
- First, we initialize an empty array (let result) to store the filtered values.
- Next, we use a for loop to iterate through each element in the arr array and apply the callback function to it.
- If callback(arr[i]) returns true, the element is added to the result array.
- Finally, the function returns the result array containing the filtered elements. */

/* Task 2: Countdown Timer */
function countdown(start, callback) {
    for (let i = start; i >= 0; i--) {
        setTimeout(() => {
            callback(i);
        },(start - i) * 1000);
    }
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)
/*Solution: 
- on the function countdown, inside it, we need to add for loop for us to loop through the numbers in reverse.
- The for loop starts from start and decrements i until it reaches 0, ensuring each number in the countdown is processed sequentially.
- setTimeout introduces a delay using (start - i) * 1000 as per instruction, ensuring each number appears 1 second apart, 
creating the countdown effect.
- lastly by calling the countdown function to print the output.
*/

/* Task 3: Simple Event Listener */
function createButton(buttonText, callback) {
    let button = document.createElement("button");
    button.textContent = buttonText;
    button.addEventListener("click", callback);
    document.body.appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);  
/*Solution:
- the let button = document.createElement("button"); dynamically creates a new <button> element in the DOM, 
allowing us to manipulate it before adding it to the webpage.
- button.textContent = buttonText; assigns the provided text (buttonText) to the button, 
ensuring that it displays the correct label when rendered on the page.
- button.addEventListener("click", callback); attaches a click event listener to the button, so whenever the user clicks it, 
the specified callback function is triggered, executing the desired behavior.
- lastly, the document.body.appendChild(button); appends the button to the webpage, making it visible and interactive for the user.
*/

/* Task 4: Task Runner */
function runTasks(tasks) {
    tasks.forEach((task, index) => {
        setTimeout(() => {
            task();
        }, index * 1000);
    });
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  
/* Solution: 
- first, i used .forEach() on the runTasks function for me to take an array of function which is the task and loop through each tasks.
- Inside the loop, setTimeout is used to delay each task execution by 1 second per index (index * 1000). This ensures that the first task runs immediately, the second task runs after 1 second, 
the third after 2 seconds,until it ends.
- task() is executed when the delay is reached (1sec/1000). so each function is called in order to display the messages in the console at 1-second intervals.
*/

/* Task 5: Interactive Quiz Game (Extra Miles) */
const readline = require("readline"); 

const user = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question, choices, correctAnswer, callback) {
    console.log(`${question}\nChoices: ${choices.join(", ")}`); 
    user.question("Your answer: ", (userAnswer) => {
        let isCorrect = userAnswer.trim() === correctAnswer; 
        callback(isCorrect);
        user.close(); 
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
/*Solution: 
- in this task, there are lots of approach to use, but in my case i used Readline module for me to fetch the user input.

- First, we import the readline module in Node.js, which allows us to read user input from the terminal, just like i said in the first line.
We create an interface (user) using readline.createInterface(), specifying that it will take input 
from process.stdin (the keyboard) and output to process.stdout (the console).

- Inside the askQuestion function, we use console.log() to print the question and available choices in a readable format. 
The choices.join(", ") ensures that all options are displayed as a comma-separated list.

- We use user.question() to prompt the user for an answer. When the user enters a response, it remove any extra spaces and compare it with the correctAnswer. 
If the answers match, the variable isCorrect is set to true; otherwise, it’s false.

- Once the user inputs their answer, we pass isCorrect to the callback function (which is checkAnswer). 

- After processing the user’s response, we call user.close() to terminate the input session. 
This ensures that the program does not keep waiting for further input after the answer has been checked. */