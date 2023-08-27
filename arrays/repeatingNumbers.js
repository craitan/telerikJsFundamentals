//let input = ["4", "1", "3", "3", "7"];
let input = ["5", "1", "2", "3", "1", "2"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = Number(gets());

let array = [];

for (let i = 0; i < n; i++) {
    let currentNumber = Number(gets());
    array.push(currentNumber);
}

let countNumber = {};
for (let num of array) {
    if (countNumber[num]) {
        countNumber[num]++;
    } else 
    {countNumber[num] = 1;
    }
}

let mostCommonNumber = '';
let maxCount = 0;

for (let num in countNumber){
    let count = countNumber[num];
    if (count > maxCount || (count === maxCount && num < mostCommonNumber)) {
        mostCommonNumber = num;
        maxCount = count;
    }
}

console.log(mostCommonNumber)
