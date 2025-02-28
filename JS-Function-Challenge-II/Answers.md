## Challenge #1

### Code
```javascript
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
```

### Output
```
1 
1 2 
1 2 3
```

### Explanation
- `generatePattern` function creates a number pattern using nested loops.
- The outer loop runs from 1 to 3, controlling the number of rows, while the inner loop runs from 1 to `i`, adding numbers up to the current row and appending them with spaces.
- After each row is completed, `\n` moves to the next line, forming a pattern where each row contains numbers from 1 to its row number.

---

## Challenge #2

### Code
```javascript
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
```

### Output
```
[ 40, 20, 30, 10 ]
[ 40, 20, 30, 10 ]
```

### Explanation
- `swapFirstLast(arr)` function modifies the original array by swapping its first and last elements. It first removes the first element using `shift()` and stores it in the variable `first`.
- Then, it removes the last element with `pop()` and moves it to the beginning using `unshift()`, while the first element is added back at the end with `push()`.
- Since arrays in JavaScript are passed by reference, these changes directly modify the original array.
- This is why when `console.log(swapFirstLast(numbers))` is executed, it outputs `[40, 20, 30, 10]`, and when `console.log(numbers)` is printed right after, it also displays `[40, 20, 30, 10]`.

---

## Challenge #3

### Code
```javascript
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
```

### Output
```
[ 60, 45, 85, 90 ]
```

### Explanation
- `filterPassingGrades` function separates passing and failing grades from an array. It initializes an empty `passing` array and iterates through `grades` using a `for...of` loop.
- If a grade is 70 or higher, it is added to the end of `passing` using `push()`. Otherwise, it is added to the beginning using `unshift()`, ensuring failing grades appear first in the final array.
- Given the input `[85, 45, 90, 60]`, the function first places 45 and 60 at the front, then appends 85 and 90, resulting in `[60, 45, 85, 90]`.

---

## Challenge #4

### Code
```javascript
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
```

### Output
```
[ { id: 1, completed: true }, { id: 2, completed: false } ]
[ { id: 1, completed: true }, { id: 2, completed: false } ]
```

### Explanation
- `updateStatus` function toggles the `completed` status of each task in the given array. It uses a `for...of` loop to iterate through `tasks` and flips the `completed` property using `!task.completed`, changing `true` to `false` and vice versa.
- When the function is called with `taskList`, the first task's `completed` status changes from `false` to `true`, and the second task changes from `true` to `false`.

---

## Challenge #5

### Code
```javascript
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
```

### Output
```
Found at index 1
Not found
```

### Explanation
- `findValue` function searches for a target value in an array. It uses a `for` loop to iterate through `arr`, checking if each element matches `target`.
- If a match is found, it returns the index as "Found at index X". If the loop completes without finding the value, it returns "Not found".
- Given the array `[5, 12, 8, 130, 44]`, searching for `12` returns "Found at index 1", while searching for `100` returns "Not found" since it is not in the array.
