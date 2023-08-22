let input = ['5,3,2,1', '2'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let splitInput = gets().split(',').map(Number);
let n = Number(gets());

for (let i = 0; i < n; i++) {
    let firstNumber = splitInput.shift();
    splitInput.push(firstNumber)
}

console.log(splitInput.join(","))