let input = ['3,-12,0,0,13,5,1,0,-2'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(',').map(Number);

let negativeNumbers = [];
let zeros = [];
let positiveNumbers = [];

for (let num of numbers) {
    if (num < 0) {
        negativeNumbers.push(num);
    } else if (num === 0) {
        zeros.push(num);
    } else {
        positiveNumbers.push(num);
    }
}

let sortedNumbers = [...negativeNumbers, ...zeros, ...positiveNumbers];

console.log(sortedNumbers.join(','));
