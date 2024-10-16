// chapter : 9 if statements

// question : 1

// Prompt and If Statement: Write a script that asks the user "What is the capital of France?" If the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try again!"

const answer = prompt("What is the capital of France?");
if (answer === "Paris") {
    alert("Correct!");
} else {
    alert("Try again!");
}

// question : 2

// If-Else Statement: Modify the previous script to use an else statement. If the user's answer is correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."

const Answer = prompt("What is the capital of France?");
if (Answer === "Paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris.");
}


// question : 3

// Multiple Correct Answers: Write a program that asks the user, "What is the capital of the United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an if-else condition to check both possible answers.

let capitalOfUK = prompt("What is the capital of the United Kingdom?");
if (capitalOfUK === "London" || capitalOfUK === "The United Kingdom") {
  alert("Correct!");
} else {
  alert("Incorrect, the correct answer is London or The United Kingdom.");
}

// question : 4

// Incrementing a Score: Modify a script to keep track of a score. Start with a score of 0. Every time the user answers a question correctly, increment the score by 1 and display the updated score

let score = 0;
let CapitalOfFrance = prompt("What is the capital of France?");
if (CapitalOfFrance === "Paris") {
  alert("Correct!");
  score++;
} else {
  alert("Try again!");
}
alert("Your score is: " + score);

// question : 5

// Testing Multiple Variables: Write a script that asks the user two questions: "What is the capital of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You got both right!". If only one answer is correct, display "You got one correct!".

let capitalOfGermany = prompt("What is the capital of Germany?");
let mathQuestion = prompt("What is 10 + 10?");
let correctAnswers = 0;
if (capitalOfGermany === "Berlin") {
  correctAnswers++;
}
if (mathQuestion === "20") {
  correctAnswers++;
}
if (correctAnswers === 2) {
  alert("You got both right!");
} else if (correctAnswers === 1) {
  alert("You got one correct!");
} else {
  alert("You got none correct!");
}

// question : 6

// Odd or Even Checker:Write a program that checks if a given number is odd or even using an if-else statement.

const number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    alert("Even");
} else {
    alert("Odd");
}

// question : 7

// Grade Calculator:Create a program that takes a score as input and assigns a grade (A, B, C, D, or F) based on the score using if-else if conditions.

const Score = parseInt(prompt("Enter your score:"));

let grade;

if (Score >= 90) {
    grade = "A";
} else if (Score >= 80) {
    grade = "B";
} else if (Score >= 70) {
    grade = "C";
} else if (Score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

alert("Your grade is: " + grade);

// question : 8

// Leap Year Checker:Write a function to determine if a given year is a leap year or not. Use if-else logic to handle the different conditions for leap years.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
}

// Example usage:
const year = parseInt(prompt("Enter a year:"));
if (isLeapYear(year)) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}

// question : 9

// Number Comparison:Create a program that takes three numbers as input and prints the largest number using if-else if statements.

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));

let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

alert("The largest number is: " + largest);

// question : 10

// Discount Calculator:Write a program that calculates the final price of an item based on the original price and a discount rate. Apply different discount rates based on the amount (e.g., no discount if less than $50, 10% if between $50-$100, and 20% if greater than $100).

const originalPrice = parseFloat(prompt("Enter the original price of the item:"));

let discountRate;
let finalPrice;

if (originalPrice < 50) {
    discountRate = 0; // No discount
} else if (originalPrice >= 50 && originalPrice <= 100) {
    discountRate = 0.10; // 10% discount
} else {
    discountRate = 0.20; // 20% discount
}

finalPrice = originalPrice * (1 - discountRate);
alert("The final price after discount is: $" + finalPrice.toFixed(2));

// chapter : 10 functions

// Question : 1

// Write a function that takes two numbers as arguments and returns their sum.

function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5)); // Output is 8

// Question : 2

// Create a function that converts a temperature from Celsius to Fahrenheit using the formula F = C * 9/5 + 32.

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(0)); // Output is 32


// Question : 3

// Write a function that takes a number as input and returns true if the number is prime, and false otherwise.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true

// Question : 4

// Create a function that takes a string as input and returns the string reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

// Question : 5

// Write a function that calculates the factorial of a given number (e.g., factorial(5) should return 120).

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Question : 6

// Write a function that prints a generic greeting message like "Hello, welcome!" without taking any parameters.

function greetUser() {
    console.log("Hello, welcome!");
}
greetUser(); // Output: "Hello, welcome!"


// Question : 7

// Create a function that takes a name as a parameter and prints a personalized greeting, e.g., "Hello, [name]!".

function greetByName(name) {
    console.log(`Hello, ${name}!`);
}
greetByName("Sadaf"); // Output: "Hello, Fatima!"


// Question : 8

// Write a function that accepts two numbers as parameters and returns their sum.

function sumWithParams(num1, num2) {
    return num1 + num2;
}
console.log(sumWithParams(10, 20)); // Output is 30

// Question : 9

// Create a function that generates and returns a random number between 0 and 100. This function does not require any parameters.

function getRandomNumber() {
    return Math.floor(Math.random() * 101); // Between 0 and 100
}
console.log(getRandomNumber()); // Output: Random number between 0-100

// Question : 10

// Write a function that takes age as a parameter and checks if the person is eligible to vote (18 years or older). It should return true or false.

function isEligibleToVote(age) {
    return age >= 18;
}
console.log(isEligibleToVote(20)); // Output: true
console.log(isEligibleToVote(15)); // Output: false

//  Chapter : 11 

// Question : 1

// Write an arrow function that takes a number as input and returns its square.

const square = (num) => num * num;
console.log(square(5)); // Output: 25

// Question : 2

// Create an arrow function that takes an array of numbers and returns a new array containing only the even numbers.

const evenNumbers = (arr) => arr.filter(num => num % 2 === 0);
console.log(evenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// Question : 3

// Write an arrow function that takes two strings as arguments and returns them concatenated.

const concatenateStrings = (str1, str2) => str1 + str2;
console.log(concatenateStrings("Hello, ", "World!")); // Output: "Hello, World!"

// Question : 4

// Create an arrow function that accepts an array of numbers and returns the maximum value in the array.

const maxNumber = (arr) => Math.max(...arr);
console.log(maxNumber([1, 2, 3, 4, 5])); // Output: 5

// Question : 5

// Write an arrow function that takes an array of numbers as input and returns the sum of all the numbers.

const sumOfNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);
console.log(sumOfNumbers([1, 2, 3, 4, 5])); // Output: 15

// Question : 6

// Write an arrow function that takes no parameters and simply prints "Hello World" to the console.

const printHelloWorld = () => console.log("Hello World");
printHelloWorld(); // Output: "Hello World"

// Question : 7

// Create an arrow function that takes a number as a parameter and returns its square.

const calculateSquare = (num) => num * num;
console.log(calculateSquare(4)); // Output: 16

// Question : 8

// Write an arrow function that accepts a number as a parameter and returns true if the number is positive, and false if it is negative or zero.

const isPositive = (num) => num > 0;
console.log(isPositive(3)); // Output: true
console.log(isPositive(-1)); // Output: false

// Question : 9

// Create an arrow function that takes no parameters and returns a random number between 1 and 50.

const generateRandomNumber = () => Math.floor(Math.random() * 50) + 1;
console.log(generateRandomNumber()); // Output: Random number between 1 and 50

// Question : 10

// Write an arrow function that takes minutes as a parameter and returns the equivalent time in seconds.

const convertMinutesToSeconds = (minutes) => minutes * 60;
console.log(convertMinutesToSeconds(5)); // Output: 300

// chapter : 12 Annoynumus Function

// Question : 1

// Create an anonymous function that prints "Hello" to the console. Immediately invoke the function.
(function() {
    console.log("Hello");
})();

// Question : 2

// Write an anonymous function that takes two numbers as arguments and returns their sum. Assign it to a variable and call the function.

const sum = function(a, b) {
    return a + b;
};
console.log(sum(5, 10)); // Output: 15

// Question : 3

// Use an anonymous function as a callback in Array.sort() to sort an array of numbers in ascending order.

const numbers = [5, 3, 8, 1, 2];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers); // Output: [1, 2, 3, 5, 8]

// Question : 4

// Create an anonymous function that takes a name as a parameter and logs a greeting message like "Hello, [name]!". Immediately invoke the function.

(function(name) {
    console.log(`Hello, ${name}!`);
})("Sadaf"); // Output: "Hello, Alice!"

// Question : 5

// Write an anonymous function that takes a number as a parameter and logs whether the number is even or odd. Store it in a variable and then invoke it.

const checkEvenOrOdd = function(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
};
checkEvenOrOdd(4); // Output: "4 is even."
checkEvenOrOdd(7); // Output: "7 is odd."

// Question : 6

// Use an anonymous function as a callback in Array.filter() to return only the odd numbers from an array of integers.

const integers = [1, 2, 3, 4, 5, 6];
const oddNumbers = integers.filter(function(num) {
    return num % 2 !== 0;
});
console.log(oddNumbers); // Output: [1, 3, 5]

// Question : 7

// Create an anonymous function that takes a number as input and returns its factorial. Assign the function to a variable and call it with different inputs.

const factorial = function(n) {
    if (n < 0) return undefined; // Factorial for negative numbers doesn't exist
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1

// Question : 8

// Use an anonymous function inside setTimeout() to print a message like "Time's up!" after 2 seconds.

setTimeout(function() {
    console.log("Time's up!");
}, 2000); // Will output "Time's up!" after 2 seconds

// Question : 9

// Write an anonymous function as a callback in Array.reduce() to sum all the elements in an array.

const arrayToSum = [1, 2, 3, 4, 5];
const totalSum = arrayToSum.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log(totalSum); // Output: 15

// Question : 10

// Create an anonymous function that takes an age as input and logs whether the person is eligible to vote (age >= 18). Immediately invoke the function with different ages.
                      
(function(age) {
    console.log(age >= 18 ? "Eligible to vote." : "Not eligible to vote.");
})(20); // Output: "Eligible to vote."
(function(age) {
    console.log(age >= 18 ? "Eligible to vote." : "Not eligible to vote.");
})(16); // Output: "Not eligible to vote."
