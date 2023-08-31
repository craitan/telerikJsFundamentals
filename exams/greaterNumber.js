//let input = ["4,1,2", "1,3,4,2"];
let input = ["2,4", "1,2,3,4"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstArray = gets().split(",").map(Number);
let secondArray = gets().split(",").map(Number);

let array = []

for (let i = 0; i < firstArray.length; i++) {
    let currentNumber = firstArray[i];

    // for (let j = 0; j < secondArray.length - 1; j++) {
    //     if (secondArray[j] === currentNumber) {
    //         secondArray[j + 1]
    //     }
    // }
    let indexInSecondArray = secondArray.indexOf(currentNumber);

    let newArray = secondArray.slice(indexInSecondArray + 1)

    if (indexInSecondArray === secondArray.length - 1) {
        array.push(-1);
    }
    for (num of newArray) {
        if (num > currentNumber) {
            array.push(num);
            break;
        } else {
            array.push(-1);
        }
    }
}

console.log(array.join(','))