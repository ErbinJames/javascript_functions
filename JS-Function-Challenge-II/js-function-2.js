/*Challenge 1: */
function generatePattern() {  
    let result = "";  
    for (let i = 1; i <= 3; i++) {  
      for (let j = 1; j <= i; j++) {  
        result += j + " ";  
      }  
      result += "\n";  
    }  
    return result;  
  }  
  
  console.log(generatePattern());
  /*predicted output: 
    1
    2 2
    3 3 3
  */
 /* actual output:
    1 
    1 2 
    1 2 3 
*/
/* I realized that, it repeats i instead of counting from 1 to i, and i somehow realized 
that the inner loop (for (let j = 1; j <= i; j++)) should appends the current value of j to the result which is
1 
1 2
1 2 3.*/

/*Challenge #2:*/
function swapFirstLast(arr) {  
    let first = arr.shift();  
    let last = arr.pop();  
    arr.unshift(last);  
    arr.push(first);  
    return arr;  
  }  
  
  let numbers = [10, 20, 30, 40];  
  console.log(swapFirstLast(numbers));  
  console.log(numbers);
  /*predicted output: 
    let first = arr.shift(); -> removes 10, and stores it in first
    let last = arr.pop(); -> removes 40, and stores it in last
    arr.unshift(last); -> place last[40] on the beginning of the array
    arr.push(first); -> push first[10] to the end of the array
    
    [40,20,30,10] -> answer
    [40,20,30,10] -> printing the modified array.
  */
/* actual output: 
[ 40, 20, 30, 10 ]
[ 40, 20, 30, 10 ]
*/
/* my predicted output, and the actual output are the same.*/

/*Challenge #3:*/
function filterPassingGrades(grades) {  
    let passing = [];  
    for (let grade of grades) {  
      if (grade >= 70) {  
        passing.push(grade);  
      } else {  
        passing.unshift(grade);  
      }  
    }  
    return passing;  
  }  
  
  let scores = [85, 45, 90, 60];  
  console.log(filterPassingGrades(scores));  
  /*predicted output:
    [60,45,85,90]
  */
 /* actual output:
    [ 60, 45, 85, 90 ]
 */
/* i used the T-Diagram on answering the challenge.
    let's do the step by step process:
    score = 85, it's greater than 70 -> push to grade
    score = 45, it's less than 70 -> push to the beginning of grade
    score = 90, it's greater than 70 -> push to grade
    score = 60, it's less than 70 -> push to the beginning of grade
    return = [60, 45, 85, 90] */

/*Challenge # 4:*/
function updateStatus(tasks) {  
    for (let task of tasks) {  
      task.completed = !task.completed;  
    }  
    return tasks;  
  }  
  
  let taskList = [  
    { id: 1, completed: false },  
    { id: 2, completed: true }  
  ];  
  
  console.log(updateStatus(taskList));  
  console.log(taskList);  
/*predicted output: 
  [{id:1,completed: true}];
  [ { id: 1, completed: false },{ id: 2, completed: true }];  
*/

/*actual output:
[ { id: 1, completed: true }, { id: 2, completed: false } ]
[ { id: 1, completed: true }, { id: 2, completed: false } ]
*/
/* i only expect the first object to be modified, but the function loops through all tasks and toggles their completed status. 
This means both { id: 1, completed: false } and { id: 2, completed: true } should be affected.*/

/*Challenge #5: */
function findValue(arr, target) {  
    for (let i = 0; i < arr.length; i++) {  
      if (arr[i] === target) {  
        return `Found at index ${i}`;  
      }  
    }  
    return "Not found";  
  }  
  
  let data = [5, 12, 8, 130, 44];  
  console.log(findValue(data, 12));  
  console.log(findValue(data, 100));
  /* Predicted output:
    Found at index 1
    Not found
  */
 /* Actual output:
    Found at index 1
    Not found
 */
/*As the function iterates through the data array, it checks each element against the target value. 
  The first target, 12, is found at index 1, so the function immediately returns "Found at index 1". 
  For the second target, 100, the function loops through the entire array but does not find a match. 
  Since no return was triggered inside the loop, it reaches the final return statement and returns 
  "Not found"..*/ 

    