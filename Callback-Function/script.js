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
function askQuestion(question, choices, correctAnswer, callback) {
    let userAnswer = prompt(`${question}\nChoices: ${choices.join(", ")}`);
    let isCorrect = userAnswer.trim() === correctAnswer;
    callback(isCorrect);
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

// Call the function when the script runs
document.getElementById("quizButton").addEventListener("click", function() {
    askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
});
/* Solution:
- In this task, there are multiple ways to handle user input. Instead of using the Node.js Readline module, we use the built-in `prompt()` function in the browser.
- The `askQuestion` function takes a question, an array of choices, the correct answer, and a callback function. It displays the question and choices using `prompt()`, allowing the user to input their answer.
- The user's input is trimmed to remove extra spaces and then compared with the correct answer. If the answers match, the variable `isCorrect` is set to `true`; otherwise, it’s `false`.
- The `checkAnswer` function receives `isCorrect` and displays an alert message indicating whether the answer is correct or incorrect.
- Instead of running the function immediately, we attach it to a button click event using `document.getElementById("quizButton").addEventListener("click", ...)`. This ensures that the quiz starts only when the user clicks the button.
*/
