let input = [
    "3",
    "2",
    "5",
    "1",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let cycles = Number(gets());
let sumOfNumbers = 0
let minNum = Number.POSITIVE_INFINITY
let maxNum = Number.NEGATIVE_INFINITY


for (let i = 1; i <= cycles; i++){
    let currentNumber = Number(gets());
    sumOfNumbers += currentNumber;
    maxNum = Math.max(maxNum, currentNumber);
    minNum = Math.min(minNum, currentNumber);
}

let avgNumber = sumOfNumbers / cycles

console.log(`min=${minNum.toFixed(2)}`)
console.log(`max=${maxNum.toFixed(2)}`)
console.log(`sum=${sumOfNumbers.toFixed(2)}`)
console.log(`avg=${avgNumber.toFixed(2)}`)