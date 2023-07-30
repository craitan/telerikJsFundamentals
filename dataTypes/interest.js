let input = [
    "100",
    
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let deposit = Number(gets())

let bankInterest = 0.05

let interest = deposit * bankInterest

let firstYear = deposit + interest

let secondYear = firstYear + (firstYear * bankInterest)

let thirdYear = secondYear + (secondYear * bankInterest)

console.log(firstYear.toFixed(2))
console.log(secondYear.toFixed(2))
console.log(thirdYear.toFixed(2))