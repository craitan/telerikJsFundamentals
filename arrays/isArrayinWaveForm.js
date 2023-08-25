let input = ['7 3 5 2 8 4'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(' ').map(Number);

let waveDirection = ''

let answer = ''
let high = 0
let low = 0

if (numbers[0] > numbers[1]) {
    waveDirection = "down"
} else if (numbers[0] < numbers[1]) {
    waveDirection = "up"
}

for (let i = 0; i < numbers.length; i++) {

    if (i % 2 === 0) {
        high += numbers[i]
    } else {
        low += numbers[i]
    }
    
}

if (high > low && waveDirection === "down") {
    console.log("yes")
} else if ( low > high && waveDirection === 'up'){
    console.log('yes')
} else{
    console.log('no')
}

// const text = gets(); // Read input line from the console
// const line = text.split(" "); // Split the input line into an array of numbers
// const numbers = line.map(Number); // Convert the array of strings to an array of numbers
 
// let result = "yes"; // Initialize the result variable as "yes"
 
// let firstNumber = 0; // Initialize the first index to 0
// let secondNumber = 1; // Initialize the second index to 1
// let thirdNumber = 2; // Initialize the third index to 2
 
// // Loop until the third index reaches the end of the array
// while (thirdNumber < numbers.length) {
//   // Check if the three current consecutive numbers are in one of the two possible non-wave forms
//   if (
//     (numbers[firstNumber] <= numbers[secondNumber] &&
//       numbers[secondNumber] <= numbers[thirdNumber]) ||
//     (numbers[firstNumber] >= numbers[secondNumber] &&
//       numbers[secondNumber] >= numbers[thirdNumber])
//   ) {
//     result = "no"; // If the condition is met, update the result to "no"
//   }
 
//   // Move indices to the next three consecutive numbers
//   firstNumber++;
//   secondNumber++;
//   thirdNumber++;
// }
 
// // Output the result
// console.log(result);