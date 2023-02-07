'use strict';

const log = text => {
  console.log(text);
}

// For problems 1-2 use the following lines of code:
var arr = [10, 20, 30, 40, 50, 60]

////////// PROBLEM 1 //////////
/*
  Create a variable named 'firstItem' and set it equal to the first value of the 'arr' array.
*/

//Code Here
log('PROBLEM 1')
let firstItem = arr[0];
log(firstItem);


////////// PROBLEM 2 //////////
/*
  Remove the last item from the 'arr' array and store it in a variable named 'lastItemRemoved'. Console.log the array to verify you no longer have the last item.
*/

//Code Here
log('\nPROBLEM 2')
let lastItemRemoved = arr.pop();
log(lastItemRemoved);

////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];
// Do not edit the code above.

/*
  Loop through the 'family' array and console.log every item.
*/

//Code Here
log('\nPROBLEM 3')
for (const name of family) {
  log(name);
}



////////// PROBLEM 4 //////////

// Do not edit the code below.
var nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
let evensArr = []
// Do not edit the code above.

/*
  Use a for-loop to iterate through each number in the 'nums' array, if the number is even, append it to the 'evensArr'.
*/

//Code Here
log('\nPROBLEM 4')
for (const num of nums) {
  if (num % 2 == 0) {
    evensArr.push(num)
  }
}
log(evensArr)



////////// PROBLEM 5 //////////

// Do not edit the code below.
var score = 74
// Do not edit the code above.

/*
  Determine if the letter grade of the given variable 'score'. If the variable is a 90 or above, console log an 'A', between 80 and 89, console log a 'B', between 70 and 79, 'C', between 60 and 69, 'D', and anything below 60 should console log an 'F'.
*/

//Code Here
log('\nPROBLEM 5')
let grades = [[90, 80, 70, 60, 0], ['A', 'B', 'C', 'D', 'F']];
for (const grade in grades[0]) {
  if (score >= grades[0][grade]) {
    log(grades[1][grade]);
    break;
  }
}


////////// Intermediate Problems //////////

////////// PROBLEM 6 //////////

// Do not edit the code below.
var myFavoriteNumbers = [4, 8, 12, 16, 20, 24];
// Do not edit the code above.

/*
  Create a variable named 'someNum' and set it equal to the fifth value of the 'myFavoriteNumbers' array.
*/

//Code Here
log('\nPROBLEM 6')
let someNum = myFavoriteNumbers[4]
log(someNum);


////////// PROBLEM 7 //////////

// Subscripting (accessing values using their index) an array can fail. What happens if you subscript to the 7th element, but there are not 7 elements in the array? Let's write some code to check for that. 
// Use an if statement to check the length of the 'myFavoriteNumbers' array. If it's less than 7, log 'There are not enough elements in this array' to the console. If the length is more than 7, reassign the value of 'someNum' to the value of the 7th element in the array. (Hint: how can you make sure that your code works for exactly 7 elements? What index do you use to get the 7th element?)

//Code Here
log('\nPROBLEM 7')
if (myFavoriteNumbers.length < 7) {
  log('There are not enough elements in this array');
} else {
  someNum = myFavoriteNumbers[6];
}
log(someNum);

////////// PROBLEM 8 //////////

// Do not edit the code below.
var listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Do not edit the code above.

// Use a for-loop to iterate through 'listOfNumbers', checking to see if each number is divisible by 3. If it is, console.log '{number} is divisible by 3.'

//Code Here
log('\nPROBLEM 8')
for (const num of listOfNumbers) {
  if (num % 3 == 0) {
    log(`${num} is divisible by 3`);
  }
}


////////// PROBLEM 9 //////////
// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Loop backwards, starting at the end of the 'letters' array. Console log every item in the array.
*/

//Code Here
log('\nPROBLEM 9')
for (const letter in letters) {
  log(letters[letters.length - 1 - letter]);
}


////////// Advanced Problems //////////

////////// PROBLEM 10 //////////
// Switch statements can be excellent alternatives to if blocks. Look up switch statements (I recommend W3 Schools) and try to implement one for the following.

// Do not edit the code below.
let letterGrade = 'B'
// Do not edit the code above.

/* Use a switch statement on 'letterGrade' and console.log the appropriate response.

If A: "The student is doing excellently."
If B: "The student is doing well."
If C: "The student is doing alright."
If D: "The student is not doing very well."
If F: "The student is failing."
If the letter grade is not one of the above letters, console.log 'Not an eligible grade.'
*/

//Code Here
log('\nPROBLEM 10')
switch (letterGrade) {
  case 'A':
    log('The student is doing excellently.');
    break;
  case 'B':
    log('The student is doing well.');
    break;
  case 'C':
    log('The student is doing alright.');
    break;
  case 'D':
    log('The student is not doing very well.');
    break;
  case 'F':
    log('The student is failing.');
    break;
  default:
    log('Not an eligible grade.');
}


////////// PROBLEM 11 //////////
/* The famous FizzBuzz, Devmountain style!
  Create a for loop that iterates from 1 to 100. In this for loop, using some conditional logic, if the number your for loop is currently on is divisible by 3, console.log 'Dev'. If the number is divisible by 5, console.log 'mountain'. If the number is divisible by 5 & 3, console.log 'Devmountain'. If the number is not divisible by 5 or 3, console.log the number itself. Hint: Look up the modulo operator.

  Your output should look like:
  1
  2
  Dev
  4
  Mountain
  Dev
  7
  8
  Dev
  mountain
  11
  Dev
  13
  14
  Devmountain
  16
  ...
*/

//Code Here
log('\nPROBLEM 11')
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    log('Devmountain');
  } else if (i % 3 == 0) {
    log('Dev');
  } else if (i % 5 == 0) {
    log('Mountain');
  } else {
    log(i);
  }
}