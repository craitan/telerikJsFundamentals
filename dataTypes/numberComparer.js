let input = [
    "5",
    "10"
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let numberOne = Number(gets())
let numberTwo = Number(gets())

let greaterNumber = Math.max(numberOne, numberTwo)

console.log(greaterNumber)