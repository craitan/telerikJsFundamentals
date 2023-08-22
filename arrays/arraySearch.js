let input = ['1,1,1,1,1,1,1,1'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(',').map(Number);

let missingNumbers = []

for (let i = 0; i < numbers.length; i++) {
    let elementToCheck = i + 1

    if (numbers.includes(elementToCheck)) {

    } else { missingNumbers.push(elementToCheck)}
}

console.log(missingNumbers.join(','))