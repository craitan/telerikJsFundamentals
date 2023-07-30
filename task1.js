let input = [
    "20",
    "5"
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
//Write a program that reads two integer numbers from the console and prints the greater of them. Try to implement this without if statements.

let inputOne = gets();
let inputTwo = gets();

let greaterNumber = Math.max(inputOne, inputTwo);

console.log(greaterNumber);