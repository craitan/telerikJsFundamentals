let input = [
    "4",
    "1",
    "1",
    "1",
    "1",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let cycles = Number(gets());
let sumOfNumbers = 0

for (let i = 1; i <= cycles; i++){
    let currentNumber = Number(gets());
    sumOfNumbers += currentNumber;
}

console.log((sumOfNumbers / cycles).toFixed(2))