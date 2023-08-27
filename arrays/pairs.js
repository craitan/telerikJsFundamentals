//let input = ['6', '1 2 3 4 3 6 5 8 3 9'];
let input = ['8', '2 4 6 2 4 1 2 3 5 9'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets());

let arryaOfNumbers = gets().split(' ').map(Number);

let foundPairs = false;
for (let i = 0; i < arryaOfNumbers.length; i++) {
    for (let j = i + 1; j < arryaOfNumbers.length; j++) {
        if (arryaOfNumbers[i] + arryaOfNumbers[j] === number) {
            console.log(`${arryaOfNumbers[i]},${arryaOfNumbers[j]}`);
            foundPairs = true;
        }
    }
}

if (!foundPairs) {
    console.log("no pairs");
}
