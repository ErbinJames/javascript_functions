## Challenge # 1

### Code:
```javascript
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4];
console.log("Sum:", calculateSum(numbers));
```

### Output:
```
Sum: 10
```

### Explanation:
- `calculateSum` function takes an array as input and calculates the sum of its elements.
- A variable `sum` is initialized to 0, and a `for` loop iterates through each element of the array, adding its value to `sum`.
- Once the loop completes, the total sum is returned. The function is then called with the array `[1, 2, 3, 4]`, and the result is printed to the console.
- The summation process works by adding each element: `1 + 2 = 3`, `3 + 3 = 6`, and `6 + 4 = 10`, resulting in `Sum: 10`.

---

## Challenge # 2

### Code:
```javascript
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
```

### Output:
```
true
false
true
```

### Explanation:
- `isEven` function checks if the given number is even.
- If `num % 2 === 0`, it returns `true`, otherwise, it returns `false`.
- The function is tested with `4`, `7`, and `0`, returning `true`, `false`, and `true`, respectively.

---

## Challenge # 3

### Code:
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

function personalizedGreeting(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
  }
}

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);
```

### Output:
```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

### Explanation:
- `greet` function takes a name as input and returns a greeting message.
- The `personalizedGreeting` function loops through an array of names, calling `greet` for each one and printing the message.
- When given `["Alice", "Bob", "Charlie"]`, it prints: `Hello, Alice!`, `Hello, Bob!`, `Hello, Charlie!`.

---

## Challenge # 4

### Code:
```javascript
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray));
console.log(originalArray);
```

### Output:
```
[ 30, 20, 10 ]
[ 10, 20, 30 ]
```

### Explanation:
- `reverseArray` function takes an array as input and creates a new reversed version of it.
- It initializes an empty array `reversed` and loops through the input array from the last element to the first, adding each element to `reversed` using `push()`.
- When the array `[10, 20, 30]` is reversed, it returns `[30, 20, 10]`.
- The original array remains unchanged because a new array is created instead of modifying the existing one.

---

## Challenge # 5

### Code:
```javascript
function multiplyMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] *= 2;
    }
  }
  return matrix;
}

let matrix = [
  [1, 2],
  [3, 4],
];
console.log(multiplyMatrix(matrix));
```

### Output:
```
[ [ 2, 4 ], [ 6, 8 ] ]
```

### Explanation:
- `multiplyMatrix` function takes a 2D array (matrix) and multiplies each element by 2.
- It uses two nested `for` loops: the outer loop iterates through each row, and the inner loop iterates through each column, updating each value by multiplying it by 2.
