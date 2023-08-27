//let input = ['132', '123'];
let input = ['275', '693', '110', '742', '123'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let condition = true
let sumOfNumbers = 0

while (condition) {
    let numbers = gets().split('').map(Number)
    let num1 = numbers[0];
    let num2 = numbers[1];
    let num3 = numbers[2];

    if (num1 + num3 === num2) {
        sumOfNumbers += Number(numbers.join(''));
    } else {
        condition = false;
        break;
    }
}

console.log(sumOfNumbers)