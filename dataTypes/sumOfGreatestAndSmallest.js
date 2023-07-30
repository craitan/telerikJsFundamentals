let input = [
    "1",
    "2",
    "3",
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOne = Number(gets())
let numberTwo = Number(gets())
let numberThree = Number(gets())

let maxNumber = Math.max(numberOne, numberTwo, numberThree)
let minNumber = Math.min(numberOne, numberTwo, numberThree)

let answer = maxNumber + minNumber

console.log(answer)