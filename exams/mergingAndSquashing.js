//let input = ['4', '12', '23', '34', '45'];
let input = ['11', '44', '69', '46', '63', '83', '13', '62', '14', '31', '68', '87'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let arrayOfNumbers = []
let mergingOne = []
let mergingTwo = []
for (let i = 0; i < n; i++) {
    arrayOfNumbers.push(gets())
}

for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    let currentNumber = arrayOfNumbers[i];
    let currentNum1 = currentNumber[0];
    let currentNum2 = currentNumber[1];

    let nextNumber = arrayOfNumbers[i + 1];
    let secondNum1 = nextNumber[0];
    let secondNum2 = nextNumber[1];


    let sum = parseInt(currentNum2) + parseInt(secondNum1);
    let mergOne = currentNum2 + secondNum1;
    if (sum > 9){
        let mergTwo = `${currentNum1}${sum.toString()[1]}${secondNum2}`;
        mergingTwo.push(mergTwo);
    }else{
        let mergTwo = `${currentNum1}${sum}${secondNum2}`;
        mergingTwo.push(mergTwo);
    }
    
    mergingOne.push(mergOne)
    
}

console.log(mergingOne.join(' '))
console.log(mergingTwo.join(' '))