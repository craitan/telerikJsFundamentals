let input = [
    "3",
    "1"
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets())
let b = Number(gets())

let sum = a + b
let difference = a - b
let product = a * b
let divided = a % b
let powered = a ** b

console.log(sum)
console.log(difference)
console.log(product)
console.log(divided)
console.log(powered)