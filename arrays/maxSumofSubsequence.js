let input = ["10", "2", "3", "-6", "-1", "2", "-1", "6", "4", "-8", "8"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = Number(gets());
let maxSum = Number(gets());
let currentSum = maxSum;

for (let i = 1; i < n; i++) {
    let currentNum = Number(gets());
    currentSum = Math.max(currentNum, currentSum + currentNum);
    maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);