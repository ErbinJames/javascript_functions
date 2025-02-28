/*Challenge 1:*/
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; /* first index to the last index (1+2+3+4 = 10)->predicted output */
    }
    return sum;
  }
  
  let numbers = [1, 2, 3, 4];  
  console.log("Sum:", calculateSum(numbers));  /*actual output: Sum: 10*/

/* Challenge #2:*/
function isEven(num) {
    if (num % 2 === 0) { /* this section uses modulo operator to check if it's divisible by 2 or not */
      return true; 
    } else {
      return false;
    }
  }
  
  console.log(isEven(4));  /*true*/
  console.log(isEven(7));  /*false*/
  console.log(isEven(0));  /*my first answer is false, but when i run the code it turns out it's true*/
  /*Actual output: 
    true
    false
    true */

/* Challenge 3: */
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  function personalizedGreeting(names) {
    for (let i = 0; i < names.length; i++) { /* name length = 3, it will start from index 0 and end with index 2*/
      console.log(greet(names[i]));
    }
  }
  
  let friends = ["Alice", "Bob", "Charlie"];
  personalizedGreeting(friends); 
  /* predicted output
    Hello, Alice!
    Hello, Bob!
    Hello, Charlie!
  */
 /* my predicted output is same as the actual output*/

/* Challenge 4: */
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  let originalArray = [10, 20, 30];  
  console.log(reverseArray(originalArray)); /*predicted answer: [30, 20, 10]*/
  console.log(originalArray); /*just prints the original array arrangement*/
  /*actual output: 
    [ 30, 20, 10 ]
    [ 10, 20, 30 ] */

/*Challenge #5: */
function multiplyMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] *= 2; /*the value of i and j will multiply to 2*/
      }
    }
    return matrix;
  }
  
  let matrix = [
    [1, 2],  /*predicted answer: 1*2 = 2, 2*2 = 4, then on lower matrix, 3*2=6, 4*2= 8 */
    [3, 4],
  ];
  console.log(multiplyMatrix(matrix)); 
  /*actual output: 
  [[2,4],[6,8]] */

