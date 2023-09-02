let input = ["4,1,2", "1,3,4,2"];
//let input = ["2,4", "1,2,3,4"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstArray = gets().split(",").map(Number);
let secondArray = gets().split(",").map(Number);

let array = []

for (let i = 0; i < firstArray.length; i++) {
    let currentNumber = firstArray[i];

   
    let indexInSecondArray = secondArray.indexOf(currentNumber);

    let newArray = secondArray.slice(indexInSecondArray + 1)

    let foundGreater = false;

    for (num of newArray) {
        if (num > currentNumber) {
            array.push(num);
            foundGreater = true
            break;
        }
    }

    if(!foundGreater){
        array.push(-1)
    }
}

console.log(array.join(','))