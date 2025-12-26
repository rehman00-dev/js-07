
// // --------------Chapter no 26 to 30 --------------

// // Question no 1

// var num = parseInt(prompt("Enter a positive number:"));

// document.write("Number: " + num + "<br>");
// document.write("Round off: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num));

// // Question no 2

// var num = parseFloat(prompt("Enter a negative floating number:"));

// document.write("Number: " + num + "<br>");
// document.write("Round off: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num));

// // Question no 3

// var num = parseFloat(prompt("Enter a number:"));
// document.write("Absolute value: " + Math.abs(num));

// // Question no 4

// var dice = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + dice);

// // Question no 5

// var toss = Math.floor(Math.random() * 2) + 1;

// if (toss === 1) {
//   document.write("Random coin value: Heads");
// } else {
//   document.write("Random coin value: Tails");
// }

// // Question no 6

// var rand = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + rand);

// // Question no 7

// var weightInput = prompt("Enter your weight:");
// var weight = parseFloat(weightInput);

// document.write("Your weight is: " + weight + " kgs");

// // Question no 8

// var secret = Math.floor(Math.random() * 10) + 1;
// var userNum = parseInt(prompt("Guess a number between 1 and 10:"));

// if (userNum === secret) {
//   document.write("Congratulations! You guessed the secret number.");
// } else {
//   document.write("Sorry! The secret number was: " + secret);
// }
