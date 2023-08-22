let input = ['7 2 -2 1 -5 4 5 -3 1'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let splitInput = gets().split(' ');

let positiveNumbers = ""
let negativeNumbers = ""

for (let i = 0; i < splitInput.length; i++) {
    let currentNumber = Number(splitInput[i]);
    if (currentNumber > 0){
        positiveNumbers += currentNumber.toString() + " "
    } else{ negativeNumbers += currentNumber.toString() + " "}
}

console.log(negativeNumbers + positiveNumbers)