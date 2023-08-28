let input = ["1, 2, 3, 2, 5, 2", "2"];
//let input = ["1, 2, 3", "2"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(', ').map(Number);

let aloneNumber = Number(gets());

for (let i = 1; i < numbers.length - 1; i++) {
    if ((numbers[i] === aloneNumber) &&
        (numbers[i] !== numbers[i - 1]) &&
        (numbers[i] !== numbers[i + 1])) {

        if (numbers[i - 1] > numbers[i + 1]) {
            numbers[i] = numbers[i - 1];
        } else {
            numbers[i] = numbers[i + 1];
        }
    }
}


console.log(`[${numbers.join(', ')}]`);