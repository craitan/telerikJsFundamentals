let input = [
    "10",
    "10"
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let bottleOne = Number(gets())
let bottleTwo = Number(gets())

const halfLitterPrice = 0.1
const litterPrice = 0.25

let answer = (bottleOne * halfLitterPrice) + (bottleTwo * litterPrice)

console.log(answer.toFixed(2))