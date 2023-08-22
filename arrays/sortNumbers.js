let input = ['2, 3, 1, 5, 6'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(', ').map(Number);

let sortedNumbers = numbers.sort((a, b) => b - a)

console.log(sortedNumbers.join(", "))