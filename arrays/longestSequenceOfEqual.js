let input = ['10', "2", "1", "1", "2", "3", "3", "2", "2", "2", "1",];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());


let arrayToFill = [];

for (let i = 0; i < n; i++) {
    let currentNumber = Number(gets());
    arrayToFill.push(currentNumber);
}

let maxSequenceLength = 1;
let currentSequenceLength = 1;

for (let i = 0; i < n; i++) {
    if (arrayToFill[i] === arrayToFill[i + 1]) {
        currentSequenceLength += 1;
        if (currentSequenceLength > maxSequenceLength) {
            maxSequenceLength = currentSequenceLength;
        }
    } else { 
        currentSequenceLength = 1; 
    }
}

console.log(maxSequenceLength);
