let input = ['0 7  14 7 11 5 8 10'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(' ').map(Number);

let sortedNumbers = numbers.sort((a, b) => b - a)

let biggestNumber = sortedNumbers[0]
let secondBiggestNumber = sortedNumbers[1]

console.log(biggestNumber, secondBiggestNumber)
